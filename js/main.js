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
