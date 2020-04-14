addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
});

async function handleEvent(event) {
  return new Response('Hello, Cloudflare Worker!!', { status: 200 })
}
