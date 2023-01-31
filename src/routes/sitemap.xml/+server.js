// This is an endpoint that generates a basic sitemap for the index page and all posts.
// It's helpful for SEO but does require you to keep it updated to reflect the routes of your website.
// It is OK to delete this file if you'd rather not bother with it.

export const prerender = true
/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ setHeaders }) {
  setHeaders({
    'Cache-Control': `max-age=0, s-max-age=600`,
    'Content-Type': 'application/xml'
  })

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >      
    
    <url>
      <loc>https://earn.mathformoney.app/what-are-the-factors-of-33</loc>
      <lastmod>2023-01-28</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>

    <url>
      <loc>https://earn.mathformoney.app/what-are-the-factors-of-100</loc>
      <lastmod>2023-01-28</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>

    <url>
      <loc>https://earn.mathformoney.app/what-decimal-is-1/6</loc>
      <lastmod>2023-01-28</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>

    </urlset>`

  return new Response(xml)
}
