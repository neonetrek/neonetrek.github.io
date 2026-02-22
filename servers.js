/**
 * NeoNetrek - Server Directory
 *
 * Fetches servers.json at runtime. Dispatches a 'neonetrek:servers'
 * event on window when data is ready so main.js can re-render.
 */
(function () {
  window.NEONETREK_SERVERS = window.NEONETREK_SERVERS || [];

  fetch('/servers.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (Array.isArray(data) && data.length > 0) {
        window.NEONETREK_SERVERS = data;
        window.dispatchEvent(new Event('neonetrek:servers'));
      }
    })
    .catch(function () {
      // Fallback: keep whatever was already set
    });
})();
