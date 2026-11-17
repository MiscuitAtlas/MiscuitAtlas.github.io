// Vérifie, après le build, que chaque lien et chaque ressource interne du site existe dans dist/.
// Sans dépendance : lancé par `npm run check:links` et par la CI avant le déploiement.
import { readdir, readFile, access } from 'node:fs/promises';
import { join, dirname, posix } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

async function listHtml(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        entries.map((e) => (e.isDirectory() ? listHtml(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : [])),
    );
    return files.flat();
}

async function exists(path) {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}

const pages = await listHtml(DIST);
const broken = [];
let checked = 0;

for (const page of pages) {
    const html = await readFile(page, 'utf8');
    const pageUrl = '/' + posix.relative(DIST, page).replace(/index\.html$/, '');
    const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g), ...html.matchAll(/\ssrcset="([^"]+)"/g)]
        .flatMap((m) => m[1].split(',').map((part) => part.trim().split(/\s+/)[0]))
        .filter((ref) => ref && !/^(https?:|mailto:|tel:|data:|#)/.test(ref));

    for (const ref of new Set(refs)) {
        const clean = decodeURI(ref.split('#')[0].split('?')[0]);
        const absolute = clean.startsWith('/') ? clean : posix.join(posix.dirname(pageUrl + 'x'), clean);
        const target = join(DIST, absolute);
        checked += 1;
        const ok = (await exists(target)) && !absolute.endsWith('/')
            ? true
            : (await exists(join(target, 'index.html'))) || (await exists(target + '.html'));
        if (!ok) broken.push(`${posix.relative(DIST, page)} → ${ref}`);
    }
}

if (broken.length) {
    console.error(`✗ ${broken.length} lien(s) interne(s) cassé(s) :\n  ${broken.join('\n  ')}`);
    process.exit(1);
}
console.log(`✓ ${pages.length} pages, ${checked} liens et ressources internes vérifiés : aucun lien cassé.`);
