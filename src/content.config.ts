import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projets : un fichier Markdown par projet dans src/content/projets/.
 * Le frontmatter alimente la liste de l'accueil et l'en-tête de l'étude de cas,
 * le corps du fichier devient la page /projets/<nom-du-fichier>.
 */
const projets = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/projets' }),
    schema: ({ image }) =>
        z.object({
            titre: z.string(),
            resume: z.string().max(220),
            annee: z.string(),
            contexte: z.string(),
            role: z.string(),
            stack: z.array(z.string()).min(1),
            ordre: z.number().int(),
            enAvant: z.boolean().default(false),
            depot: z.url(),
            demo: z.url().optional(),
            couverture: image().optional(),
            couvertureAlt: z.string().optional(),
            couvertureFormat: z.enum(['paysage', 'telephone']).default('paysage'),
            captures: z
                .array(z.object({ src: image(), alt: z.string(), legende: z.string() }))
                .default([]),
        }),
});

export const collections = { projets };
