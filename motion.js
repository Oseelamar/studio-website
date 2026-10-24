// Scroll-in motion for the studio site.
// - Big headings rise into view line by line from behind a mask.
// - Photos and videos open out from slightly inset edges while the image settles from a zoom.
// - Smaller text blocks fade up softly.
// Everything plays once, when it first scrolls into view. Case studies are rendered later
// by case-study.js, which calls siteMotion.scan() on the new content.
(function () {
  var root = document.documentElement;
  if (!root.classList.contains("motion")) return; // reduced motion, or the head script didn't run

  var HEADINGS = ".hero__title, .page-title, .statement__text > p, .contact__text, .case-title, .case-statement, .case-quote > p, .case-next__title";
  var MEDIA = ".work-card__media, .video-section__placeholder, .service__media, .case-media, .case-banner__frame";
  var FADES = ".hero__link, .section-label, .works__intro, .work-card__meta, .service, .case-header .tags, .case-intro, .case-meta, .case-chapter, .case-stats, .case-palette, .cta--wide";

  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      seen.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });

  // Wrap every word of a heading in a mask so it can rise up into place
  function splitWords(el) {
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        var parts = node.textContent.split(/(\s+)/);
        var frag = document.createDocumentFragment();
        parts.forEach(function (p) {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          var w = document.createElement("span");
          w.className = "rv-w";
          var i = document.createElement("span");
          i.className = "rv-i";
          i.textContent = p;
          w.appendChild(i);
          frag.appendChild(w);
        });
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === 1 && node.tagName !== "BR" && node.tagName !== "IMG") {
        splitWords(node);
      }
    });
  }

  // Number the lines so each line rises a beat after the one above it
  function numberLines(el) {
    var tops = [];
    el.querySelectorAll(".rv-w").forEach(function (w) {
      var t = Math.round(w.offsetTop);
      var line = tops.indexOf(t);
      if (line === -1) { tops.push(t); line = tops.length - 1; }
      w.firstChild.style.setProperty("--l", line);
    });
  }

  var headings = [];
  function scan(scope) {
    scope = scope || document;
    scope.querySelectorAll(HEADINGS).forEach(function (el) {
      if (el.hasAttribute("data-rv")) return;
      splitWords(el);
      el.setAttribute("data-rv", "");
      el.classList.add("rv-text");
      numberLines(el);
      headings.push(el);
      seen.observe(el);
    });
    scope.querySelectorAll(MEDIA).forEach(function (el, i) {
      if (el.classList.contains("rv-media")) return;
      el.classList.add("rv-media");
      seen.observe(el);
    });
    scope.querySelectorAll(FADES).forEach(function (el) {
      if (el.classList.contains("rv-fade")) return;
      el.classList.add("rv-fade");
      seen.observe(el);
    });
    // Cards side by side arrive one after the other
    scope.querySelectorAll(".works__grid > .work-card, .case-pair > *").forEach(function (el, i) {
      el.style.setProperty("--d", (i % 2) * 120 + "ms");
    });
  }

  function renumber() {
    headings = headings.filter(function (el) { return el.isConnected; });
    headings.forEach(numberLines);
  }

  scan(document);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(renumber);
  var t;
  window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(renumber, 150); });

  window.siteMotion = { scan: scan };
})();
