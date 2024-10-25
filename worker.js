
(async () => {
  const html = await fetch('./dist/index.html');
  const text = await html.text();
  const css = await fetch('./dist/css/app.css');
  const cssText = await css.text();
  const js = await fetch('./dist/js/app.js');
  const jsText = js.text();

  self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    console.log('--------------------')

    if (pathname === "/api/beverages") {
      if (env.DB) {
        // 使用 env.DB.prepare
      console.log('-------------0');
      } else {
        console.log('env.DB is undefined');
      }
      // If you did not use `DB` as your binding name, change it here
      const { results } = env.DB.prepare(
        "SELECT * FROM Customers WHERE CompanyName = ?"
      )
        .bind("Bs Beverages")
        .all();
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

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
