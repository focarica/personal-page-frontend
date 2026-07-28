import { writeFileSync } from 'fs';

const API_URL = process.env.API_URL || 'https://api.artvniss.com';
const SITE_URL = 'https://artvniss.com';

const staticRoutes = [
  { loc: '/' },
  { loc: '/about' },
  { loc: '/curriculum' },
  { loc: '/find-me' },
];

async function main() {
  let posts = [];
  try {
    const res = await fetch(`${API_URL}/posts?sort_by=date`);
    if (res.ok) {
      posts = await res.json();
    } else {
      console.warn(`Backend returned ${res.status}, skipping dynamic routes.`);
    }
  } catch (e) {
    console.warn('Could not reach backend, sitemap will only include static routes.');
  }

  const urls = [
    ...staticRoutes.map((r) => `  <url><loc>${SITE_URL}${r.loc}</loc></url>`),
    ...posts.map(
      (p) => `  <url><loc>${SITE_URL}/posts/${p.id}</loc><lastmod>${p.date}T00:00:00+00:00</lastmod></url>`
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  writeFileSync('public/sitemap.xml', xml);
  console.log(`✓ sitemap.xml generated with ${urls.length} URLs`);
}

main();
