addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  return await handleRequest(event.request)
}

async function handleRequest(request) {
  return new Response('"Hello cloudflare worker!" - Wrangler', { status: 200 })
}
