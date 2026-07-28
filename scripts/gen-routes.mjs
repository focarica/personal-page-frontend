import { writeFileSync } from 'fs';

const API_URL = process.env.API_URL || 'https://api.artvniss.com';

const staticRoutes = ['/', '/about', '/curriculum', '/find-me', '/not-found', '/error'];

async function main() {
  const routes = [...staticRoutes];
  try {
    const res = await fetch(`${API_URL}/posts`);
    if (res.ok) {
      const posts = await res.json();
      posts.forEach((p) => routes.push(`/posts/${p.id}`));
    } else {
      console.warn(`⚠ Backend returned ${res.status}, only pre-rendering static routes.`);
    }
  } catch (e) {
    console.warn('⚠ Could not reach backend, only pre-rendering static routes.');
  }

  writeFileSync('routes.txt', routes.join('\n'));
  console.log(`✓ routes.txt generated with ${routes.length} routes`);
}

main();
