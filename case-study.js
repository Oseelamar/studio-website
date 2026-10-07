/*
 * Case study overlay.
 *
 * Any link to "#work/<slug>" opens the overlay: the homepage blurs behind a
 * tinted backdrop, the close button drops in and the case study sheet slides
 * up from the bottom. Closing (button, Esc, backdrop click or browser Back)
 * reverses it. The URL hash makes each case study linkable.
 *
 * All copy below is DUMMY content — replace it per project.
 */
(function () {
  "use strict";

  var PROJECTS = {
    "sporting-lagos": {
      name: "Sporting Lagos",
      title: "Creating a gamified experience for Sporting Lagos",
      tags: ["App design", "UI & UX design", "Design system"],
      intro:
        "Sporting Lagos wanted fans to feel part of the club between match days. We designed a mobile experience that turns support into play, with predictions, streaks and rewards that bring supporters back every week. This paragraph is placeholder copy and should be replaced with the real project summary.",
      meta: {
        Client: "Sporting Lagos FC",
        Year: "2025",
        Industry: "Sport",
        Scope: "App design, UI/UX, Design system",
      },
    },
    "claremont-amany": {
      name: "Claremont Amany",
      title: "A website that gives Claremont Amany room to breathe",
      tags: ["Brand", "Web design"],
      intro:
        "Claremont Amany needed a home online that matched the care they put into their work. We refined the brand and designed a calm, editorial website that makes their impact easy to understand and easy to support. This paragraph is placeholder copy and should be replaced with the real project summary.",
      meta: {
        Client: "Claremont Amany",
        Year: "2026",
        Industry: "NGO",
        Scope: "Brand, Website design",
      },
    },
  };

  var ORDER = Object.keys(PROJECTS);
  var CLOSE_MS = 600;

  var overlay = document.getElementById("case-study");
  if (!overlay) return;
  var sheet = overlay.querySelector(".case-sheet");
  var closeBtn = overlay.querySelector(".case-close");
  var lastTrigger = null;
  var openedFromPage = false;
  var closeTimer = null;

  function chapter(num, label, heading, body) {
    return (
      '<section class="case-chapter">' +
      '<div class="case-chapter__head">' +
      '<p class="case-kicker">' + num + " — " + label + "</p>" +
      '<h3 class="case-chapter__title">' + heading + "</h3>" +
      "</div>" +
      '<div class="case-chapter__body">' + body + "</div>" +
      "</section>"
    );
  }

  function media(modifier, caption) {
    return (
      '<figure class="case-figure ' + (modifier || "") + '">' +
      '<div class="case-media"></div>' +
      (caption ? '<figcaption class="case-caption">' + caption + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function render(slug) {
    var p = PROJECTS[slug];
    var next = PROJECTS[ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length]];
    var nextSlug = ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length];
    var n = p.name;

    var tags = p.tags.map(function (t) { return '<li class="tag">' + t + "</li>"; }).join("");
    var meta = Object.keys(p.meta).map(function (k) {
      return '<div class="case-meta__item"><dt>' + k + "</dt><dd>" + p.meta[k] + "</dd></div>";
    }).join("");
    var slides = [1, 2, 3, 4].map(function (i) {
      return '<li class="case-carousel__slide" aria-label="' + i + ' of 4"><div class="case-media"></div></li>';
    }).join("");

    sheet.innerHTML =
      // Header — from the Figma frame
      '<header class="case-header">' +
      '<div class="case-header__main">' +
      '<ul class="tags">' + tags + "</ul>" +
      '<h2 class="case-title" id="case-title">' + p.title + "</h2>" +
      "</div>" +
      '<p class="case-intro">' + p.intro + "</p>" +
      "</header>" +
      media("case-figure--hero") +

      // Project facts
      '<dl class="case-meta">' + meta + "</dl>" +

      chapter("01", "Challenge", "Where " + n + " was starting from",
        "<p>Placeholder: describe the situation before the project. What was the business trying to do, what was getting in the way, and why did it matter now?</p>" +
        "<p>Keep it to two short paragraphs. The goal is for a visitor to understand the problem in under a minute.</p>") +

      media("case-figure--full", "Placeholder caption — what this image shows and why it matters.") +

      '<div class="case-pair">' + media() + media() + "</div>" +

      chapter("02", "Approach", "How we got there",
        "<p>Placeholder: explain the idea behind the work and the key decisions. Mention research, the concept, and the system that came out of it.</p>" +
        "<p>This is a good place to reference process work: sketches, early explorations or the design system.</p>") +

      // Gallery with counter
      '<section class="case-carousel" aria-label="Project gallery">' +
      '<div class="case-carousel__bar">' +
      '<p class="case-kicker">Gallery</p>' +
      '<div class="case-carousel__controls">' +
      '<span class="case-carousel__count"><span data-current>01</span>/04</span>' +
      '<button class="case-carousel__btn" type="button" data-dir="-1" aria-label="Previous image">←</button>' +
      '<button class="case-carousel__btn" type="button" data-dir="1" aria-label="Next image">→</button>' +
      "</div></div>" +
      '<ul class="case-carousel__track">' + slides + "</ul>" +
      "</section>" +

      // Big statement / testimonial
      '<blockquote class="case-quote">' +
      "<p>“Placeholder: a short quote from the client about what changed after working with us.”</p>" +
      "<footer>Name Surname, Role at " + n + "</footer>" +
      "</blockquote>" +

      chapter("03", "Outcome", "What changed for " + n,
        "<p>Placeholder: describe the result. Launch details, how the work is being used, and what the client can now do that they couldn't before.</p>") +

      '<ul class="case-stats">' +
      '<li><strong>00%</strong><span>Placeholder metric</span></li>' +
      '<li><strong>00k</strong><span>Placeholder metric</span></li>' +
      '<li><strong>0×</strong><span>Placeholder metric</span></li>' +
      "</ul>" +

      media("case-figure--full") +

      // Credits
      '<section class="case-credits">' +
      '<p class="case-kicker">Credits</p>' +
      '<dl class="case-credits__list">' +
      "<div><dt>Creative direction</dt><dd>Name Surname</dd></div>" +
      "<div><dt>Design</dt><dd>Name Surname<br>Name Surname</dd></div>" +
      "<div><dt>Development</dt><dd>Name Surname</dd></div>" +
      "<div><dt>Motion</dt><dd>Name Surname</dd></div>" +
      "</dl></section>" +

      // Next project
      '<a class="case-next" href="#work/' + nextSlug + '">' +
      '<span class="case-kicker">Next project</span>' +
      '<span class="case-next__title">' + next.name +
      '<img src="assets/arrow-top-right-orange.svg" width="20" height="20" alt=""></span>' +
      "</a>";

    setupCarousel();
  }

  function setupCarousel() {
    var track = sheet.querySelector(".case-carousel__track");
    var current = sheet.querySelector("[data-current]");
    if (!track) return;
    var slides = track.children;

    function index() {
      return Math.round(track.scrollLeft / (slides[0].offsetWidth + 12));
    }
    track.addEventListener("scroll", function () {
      current.textContent = String(Math.min(index() + 1, slides.length)).padStart(2, "0");
    }, { passive: true });
    sheet.querySelectorAll(".case-carousel__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var i = Math.max(0, Math.min(slides.length - 1, index() + Number(btn.dataset.dir)));
        track.scrollTo({ left: slides[i].offsetLeft - track.offsetLeft, behavior: "smooth" });
      });
    });
  }

  function slugFromHash() {
    var m = location.hash.match(/^#work\/([\w-]+)$/);
    return m && PROJECTS[m[1]] ? m[1] : null;
  }

  function lockScroll(lock) {
    var gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = lock ? "hidden" : "";
    document.body.style.paddingRight = lock && gap ? gap + "px" : "";
  }

  function open(slug) {
    clearTimeout(closeTimer);
    var alreadyOpen = !overlay.hidden && overlay.classList.contains("is-open");
    render(slug);
    if (alreadyOpen) {
      overlay.scrollTo({ top: 0 });
      return;
    }
    overlay.hidden = false;
    overlay.scrollTop = 0;
    lockScroll(true);
    // Next frame so the closed state is painted before transitioning in.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add("is-open");
        closeBtn.focus({ preventScroll: true });
      });
    });
  }

  function hide() {
    if (overlay.hidden) return;
    overlay.classList.remove("is-open");
    closeTimer = setTimeout(function () {
      overlay.hidden = true;
      sheet.innerHTML = "";
      lockScroll(false);
      if (lastTrigger) lastTrigger.focus({ preventScroll: true });
    }, CLOSE_MS);
  }

  function requestClose() {
    if (openedFromPage) {
      openedFromPage = false;
      history.back(); // hashchange handles the rest
    } else {
      history.replaceState(null, "", location.pathname + location.search);
      hide();
    }
  }

  function sync() {
    var slug = slugFromHash();
    if (slug) open(slug);
    else hide();
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#work/"]');
    if (!link) return;
    if (overlay.contains(link)) {
      // "Next project": swap content in place without adding history entries,
      // so Close/Back still returns straight to the homepage.
      e.preventDefault();
      history.replaceState(null, "", link.getAttribute("href"));
      sync();
      return;
    }
    lastTrigger = link;
    openedFromPage = true;
  });

  closeBtn.addEventListener("click", requestClose);

  // Clicking the blurred backdrop (anywhere outside the sheet) closes.
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) requestClose();
  });

  document.addEventListener("keydown", function (e) {
    if (overlay.hidden) return;
    if (e.key === "Escape") {
      requestClose();
      return;
    }
    if (e.key === "Tab") {
      var f = overlay.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      var first = f[0];
      var last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  });

  window.addEventListener("hashchange", sync);
  sync();
})();
