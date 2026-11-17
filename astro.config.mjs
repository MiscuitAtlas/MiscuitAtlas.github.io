// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site statique publié sur GitHub Pages (dépôt MiscuitAtlas.github.io → racine du domaine).
export default defineConfig({
    site: 'https://miscuitatlas.github.io',
    trailingSlash: 'ignore',
    integrations: [sitemap()],
    build: {
        // Feuilles de style dans des fichiers séparés plutôt qu'en ligne.
        inlineStylesheets: 'never',
    },
    security: {
        // Astro génère une Content Security Policy par page, avec les empreintes
        // de ses propres scripts et styles : aucun 'unsafe-inline'.
        csp: {
            directives: [
                "default-src 'self'",
                "img-src 'self' data:",
                "font-src 'self'",
                // Le formulaire de contact envoie le message à Formspree sans quitter la page.
                "connect-src 'self' https://formspree.io",
                "form-action https://formspree.io",
                "base-uri 'self'",
                "object-src 'none'",
                "frame-src 'none'",
                'upgrade-insecure-requests',
            ],
        },
    },
});
