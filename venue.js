/* Центральная: подсветка строки суток по барнаульскому времени (UTC+7) */
(function () {
  var rows = document.querySelectorAll('.rows li'); if (!rows.length) return;
  function tick() {
    var h = new Date(Date.now() + 7 * 3600e3).getUTCHours(), cur = null;
    rows.forEach(function (r) { if (h >= +r.dataset.from) cur = r; });
    rows.forEach(function (r) { r.classList.toggle('now', r === cur && h >= 7); });
  }
  tick(); setInterval(tick, 60000);
})();
