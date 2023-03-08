addEventListener('fetch',event=>
{
    event.respondWith(handleRequest(event.request));
});
async function handleRequest(request)
{
    const response=await fetch(request);
    // Clone the response so that it's no longer immutable
    const newResponse=new Response(response.body,response);
    // Add a custom header with a value
    // newResponse.headers.append('x-workers-hello','Hello from Cloudflare Workers');
    // Delete headers
    newResponse.headers.delete('Content-Security-Policy');
    newResponse.headers.delete('X-Frame-Options');
    newResponse.headers.delete('Referer')
    newResponse.headers.delete('Sec-Fetch-Dest')
    newResponse.headers.delete('Sec-Fetch-Mode')
    newResponse.headers.delete('Sec-Fetch-Site')
    // Adjust the value for an existing header
    // newResponse.headers.set('x-header-to-change', 'NewValue');
    return newResponse;
}