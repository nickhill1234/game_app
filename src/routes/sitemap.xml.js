export async function get() {
  const body = "Hello sitemap!";
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };
  return {
    body,
    headers,
  };
}