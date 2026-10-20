// Mobile menu (Figma 118:18487 / 119:18491): on phones and tablets the nav links and
// "Get in touch" button are replaced by one menu button. Tapping it slides a full-screen
// menu down from the top while the button's lines turn into a cross; tapping again reverses both.
(function () {
  var button = document.querySelector(".site-header .menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (!button || !menu) return;
  var header = document.querySelector(".site-header");
  var mobile = window.matchMedia("(max-width: 900px)");

  function isOpen() {
    return menu.classList.contains("is-open");
  }

  function open() {
    // The links start just below the header row, which stays on top of the menu
    menu.style.setProperty("--menu-top", Math.max(0, header.getBoundingClientRect().bottom) + "px");
    menu.classList.add("is-open");
    document.documentElement.classList.add("menu-open");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Close menu");
  }

  function close() {
    if (!isOpen()) return;
    menu.classList.remove("is-open");
    document.documentElement.classList.remove("menu-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
  }

  button.addEventListener("click", function () {
    if (isOpen()) close();
    else open();
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", close);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      close();
      button.focus();
    }
  });
  mobile.addEventListener("change", function (e) {
    if (!e.matches) close();
  });
})();
