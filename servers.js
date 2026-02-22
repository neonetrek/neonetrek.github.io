/**
 * NeoNetrek - Server Directory (backward compatibility)
 *
 * The canonical server list is now servers.json in this same repo,
 * fetched at runtime by all portals. This file is kept so the main
 * website can still use window.NEONETREK_SERVERS as a synchronous
 * fallback while it migrates to the JSON fetch.
 */
(function () {
  window.NEONETREK_SERVERS = window.NEONETREK_SERVERS || [];

  fetch('/servers.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (Array.isArray(data) && data.length > 0) {
        window.NEONETREK_SERVERS = data;
      }
    })
    .catch(function () {
      // Fallback: keep whatever was already set
    });
})();
