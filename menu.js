// Mobile menu (Figma 118:18487 / 119:18491): on phones and tablets the nav links and
// "Get in touch" button are replaced by one menu button that opens a full-screen menu.
(function () {
  var openBtn = document.querySelector(".site-header .menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (!openBtn || !menu) return;
  var closeBtn = menu.querySelector(".menu-toggle");
  var header = document.querySelector(".site-header");
  var mobile = window.matchMedia("(max-width: 900px)");

  function open() {
    // Line the menu's top row up exactly with the header row behind it
    menu.style.setProperty("--menu-top", Math.max(0, header.getBoundingClientRect().top) + "px");
    menu.hidden = false;
    document.documentElement.classList.add("menu-open");
    openBtn.setAttribute("aria-expanded", "true");
    // Read the layout once after un-hiding so the fade and the icon turning into a cross animate
    void menu.offsetWidth;
    menu.classList.add("is-open");
    closeBtn.focus();
  }

  function close(returnFocus) {
    if (menu.hidden) return;
    menu.classList.remove("is-open");
    document.documentElement.classList.remove("menu-open");
    openBtn.setAttribute("aria-expanded", "false");
    setTimeout(function () { if (!menu.classList.contains("is-open")) menu.hidden = true; }, 300);
    if (returnFocus) openBtn.focus();
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", function () { close(true); });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { close(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close(true);
  });
  mobile.addEventListener("change", function (e) { if (!e.matches) close(false); });
})();
