
(async () => {
  const html = await fetch('./dist/index.html');
  const text = await html.text();
  const css = await fetch('./dist/css/app.css');
  const cssText = await css.text();
  const js = await fetch('./dist/js/app.js');
  const jsText = js.text();

  self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    if (url.pathname === '/') {
      event.respondWith(
        new Response(text, {
          headers: {
            'Content - Type': 'text/html',
            'Cache - Control': 'no - cache'
          }
        })
      );
    } else if (url.pathname.match(/\.css$/)) {
      event.respondWith(
        new Response(cssText, {
          headers: {
            'Content - Type': 'text/css',
            'Cache - Control': 'no - cache'
          }
        })
      );
    } else if (url.pathname.match(/\.js$/)) {
      event.respondWith(
        new Response(jsText, {
          headers: {
            'Content - Type': 'text/javascript',
            'Cache - Control': 'no - cache'
          }
        })
      );
    }
  });

})();
