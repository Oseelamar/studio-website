/* still, sunday. — mobile menu: open/close, Escape, focus, and no page scroll behind it. */
(function () {
  'use strict';

  var button = document.querySelector('.menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;

  var label = button.querySelector('.menu-label');
  var behind = document.querySelectorAll('.hero-copy, .hero-art');
  var desktop = window.matchMedia('(min-width: 1024px)');

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'Close' : 'Menu';
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    // keep keyboard and screen-reader focus inside the open menu
    Array.prototype.forEach.call(behind, function (el) { el.inert = open; });
    if (open) {
      var first = menu.querySelector('a');
      if (first) first.focus();
    }
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      button.focus();
    }
  });

  // following a link closes the menu
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // the desktop layout has no menu: close it if the window grows
  desktop.addEventListener('change', function (e) {
    if (e.matches && !menu.hidden) setOpen(false);
  });
})();
