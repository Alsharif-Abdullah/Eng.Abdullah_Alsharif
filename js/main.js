// Language toggle: switches html[lang] + html[dir] between "en" and "ar".
// CSS handles hiding/showing .lang-en / .lang-ar based on html[lang].
(function () {
  var STORAGE_KEY = "profile-lang";
  var html = document.documentElement;
  var toggleBtn = document.getElementById("lang-toggle");

  function applyLang(lang) {
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  function getSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — ignore, toggle still works for this session */
    }
  }

  // On load: use saved preference, else browser language, else default "en".
  var initialLang = getSavedLang();
  if (!initialLang) {
    var browserLang = (navigator.language || "en").toLowerCase();
    initialLang = browserLang.indexOf("ar") === 0 ? "ar" : "en";
  }
  applyLang(initialLang);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var next = html.getAttribute("lang") === "ar" ? "en" : "ar";
      applyLang(next);
      saveLang(next);
    });
  }
})();

// Theme toggle: light / dark. Initial theme is set by an inline <head> script
// (saved choice only — default is light) to avoid a flash on page load.
(function () {
  var STORAGE_KEY = "profile-theme";
  var html = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function sync() {
    var dark = html.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
  }

  btn.addEventListener("click", function () {
    var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    if (next === "dark") html.setAttribute("data-theme", "dark");
    else html.removeAttribute("data-theme");
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
    sync();
  });
  sync();
})();
