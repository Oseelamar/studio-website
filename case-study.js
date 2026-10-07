/*
 * Case study overlay.
 *
 * Any link to "#work/<slug>" opens the overlay: the homepage blurs behind a
 * tinted backdrop, the close button drops in and the case study sheet slides
 * up from the bottom. Closing (button, Esc, backdrop click or browser Back)
 * reverses it. The URL hash makes each case study linkable.
 *
 * Each project's page is built from its `sections` list, top to bottom.
 * Section types:
 *   { type: "chapter", title, body: [paragraphs], list?: [items] }
 *   { type: "media", variant: "full" | "pair", caption? }
 *   { type: "gallery", count }
 *   { type: "statement", text }            — large standalone line
 *   { type: "quote", text, by }            — client testimonial
 *   { type: "stats", items: [[value, label], ...] }
 *   { type: "credits", items: [[role, names], ...] }
 * Chapters are numbered automatically. Media blocks are grey placeholders
 * until images are added.
 */
(function () {
  "use strict";

  var PROJECTS = {
    "claremont-amani": {
      name: "Claremont-Amani",
      title: "A quiet digital presence for serious research.",
      tags: ["Website design", "Visual system", "Interaction design"],
      intro: [
        "Claremont-Amani is a nonprofit research organisation working across cancer genomics, precision oncology, and research infrastructure in Africa.",
        "The brief was straightforward: create a website that felt credible, mature, and important without becoming overly designed.",
        "The challenge was finding the balance between institutional credibility and visual restraint.",
      ],
      meta: {
        Client: "Claremont-Amani",
        Year: "2026",
        Sector: "Nonprofit research",
        Scope: "Website design, Visual system, Interaction design",
      },
      sections: [
        {
          type: "chapter",
          title: "The Brief",
          body: [
            "Claremont-Amani needed a digital presence that could communicate the weight of its work without relying on visual excess.",
            "They didn’t want a website filled with flashy interactions, oversized graphics, or unnecessary decoration. They wanted something simple and modest — but still sophisticated enough to represent an organisation doing serious research.",
            "So we treated restraint as a design principle rather than a limitation.",
            "The goal was to make the website feel established, considered, and quietly confident.",
          ],
        },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          title: "Designing With Restraint",
          body: [
            "Research-driven organisations often have a lot of information to communicate.",
            "Our approach was to avoid competing with that information.",
            "We focused on creating a clear visual hierarchy, generous spacing, considered typography, and a restrained visual system that allowed the content to carry the experience.",
          ],
        },
        { type: "statement", text: "Every element had a job.<br>Nothing needed to shout." },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          title: "Typography",
          body: [
            "Typography became one of the primary tools for establishing the site’s character.",
            "The direction called for a serif typeface, so we explored options that could bring an editorial and institutional quality to the experience without making it feel dated.",
            "The final typographic direction was intentionally refined — giving the site a sense of authority while maintaining readability and accessibility.",
            "The type needed to feel like it belonged to an organisation dealing with serious research, not a generic technology company.",
          ],
        },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          title: "Making Assets Feel Present — Without Being Overpowering",
          body: [
            "One of the visual challenges was figuring out how to use supporting assets without allowing them to dominate the interface.",
            "We wanted the assets to be visible, but not constantly visible.",
            "Instead of using conventional filled illustrations or highly detailed graphics, we reduced the assets into stroked forms.",
            "This gave them a quieter presence within the layouts. They could sit alongside the content without competing with it.",
            "But we didn’t want them to feel completely static either.",
          ],
        },
        { type: "gallery", count: 4 },
        {
          type: "chapter",
          title: "A Small Moment of Discovery",
          body: [
            "The stroked assets became interactive.",
            "When a visitor hovers over one, a subtle gradient glint moves through the form.",
            "It is deliberately understated.",
            "The asset doesn’t suddenly transform or demand attention. It simply reveals another layer of the visual system for a moment.",
            "This became a small but important part of the experience:",
          ],
        },
        { type: "statement", text: "The visuals are there when you look for them." },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          title: "The Experience",
          body: [
            "Beyond the visual direction, we approached the website through the fundamentals of a strong digital experience.",
          ],
          list: [
            "Clear information architecture.",
            "Straightforward navigation.",
            "Strong content hierarchy.",
            "Responsive layouts.",
            "Careful spacing.",
            "Accessible typography.",
            "And interactions that support the experience rather than distract from it.",
          ],
          after: [
            "The result is a website designed to feel confident without needing to announce its confidence.",
          ],
        },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          title: "The Outcome",
          body: [
            "The final experience gives Claremont-Amani a digital presence that reflects the nature of its work — serious, considered, and forward-looking.",
            "Rather than trying to make the organisation feel bigger through visual spectacle, the design creates authority through clarity, restraint, and attention to detail.",
          ],
        },
        { type: "statement", text: "The website doesn’t need to tell visitors that the work is important.<br>It behaves like it is." },
      ],
    },

    // DUMMY content — replace when the real case study is ready.
    "sporting-lagos": {
      name: "Sporting Lagos",
      title: "Creating a gamified experience for Sporting Lagos",
      tags: ["App design", "UI & UX design", "Design system"],
      intro: [
        "Sporting Lagos wanted fans to feel part of the club between match days. We designed a mobile experience that turns support into play, with predictions, streaks and rewards that bring supporters back every week. This paragraph is placeholder copy and should be replaced with the real project summary.",
      ],
      meta: {
        Client: "Sporting Lagos FC",
        Year: "2025",
        Sector: "Sport",
        Scope: "App design, UI/UX, Design system",
      },
      sections: [
        {
          type: "chapter",
          title: "Where Sporting Lagos was starting from",
          body: [
            "Placeholder: describe the situation before the project. What was the business trying to do, what was getting in the way, and why did it matter now?",
            "Keep it to two short paragraphs. The goal is for a visitor to understand the problem in under a minute.",
          ],
        },
        { type: "media", variant: "full", caption: "Placeholder caption — what this image shows and why it matters." },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          title: "How we got there",
          body: [
            "Placeholder: explain the idea behind the work and the key decisions. Mention research, the concept, and the system that came out of it.",
            "This is a good place to reference process work: sketches, early explorations or the design system.",
          ],
        },
        { type: "gallery", count: 4 },
        { type: "quote", text: "“Placeholder: a short quote from the client about what changed after working with us.”", by: "Name Surname, Role at Sporting Lagos" },
        {
          type: "chapter",
          title: "What changed for Sporting Lagos",
          body: [
            "Placeholder: describe the result. Launch details, how the work is being used, and what the client can now do that they couldn’t before.",
          ],
        },
        { type: "stats", items: [["00%", "Placeholder metric"], ["00k", "Placeholder metric"], ["0×", "Placeholder metric"]] },
        { type: "media", variant: "full" },
        {
          type: "credits",
          items: [
            ["Creative direction", "Name Surname"],
            ["Design", "Name Surname<br>Name Surname"],
            ["Development", "Name Surname"],
            ["Motion", "Name Surname"],
          ],
        },
      ],
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

  function paras(list) {
    return (list || []).map(function (t) { return "<p>" + t + "</p>"; }).join("");
  }

  function figure(modifier, caption) {
    return (
      '<figure class="case-figure ' + (modifier || "") + '">' +
      '<div class="case-media"></div>' +
      (caption ? '<figcaption class="case-caption">' + caption + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function gallery(count) {
    var total = String(count).padStart(2, "0");
    var slides = "";
    for (var i = 1; i <= count; i++) {
      slides += '<li class="case-carousel__slide" aria-label="' + i + " of " + count + '"><div class="case-media"></div></li>';
    }
    return (
      '<section class="case-carousel" aria-label="Project gallery">' +
      '<div class="case-carousel__bar">' +
      '<p class="case-kicker">Gallery</p>' +
      '<div class="case-carousel__controls">' +
      '<span class="case-carousel__count"><span data-current>01</span>/' + total + "</span>" +
      '<button class="case-carousel__btn" type="button" data-dir="-1" aria-label="Previous image">←</button>' +
      '<button class="case-carousel__btn" type="button" data-dir="1" aria-label="Next image">→</button>' +
      "</div></div>" +
      '<ul class="case-carousel__track">' + slides + "</ul>" +
      "</section>"
    );
  }

  function section(s, num) {
    switch (s.type) {
      case "chapter":
        return (
          '<section class="case-chapter">' +
          '<div class="case-chapter__head">' +
          '<p class="case-kicker">' + String(num).padStart(2, "0") + "</p>" +
          '<h3 class="case-chapter__title">' + s.title + "</h3>" +
          "</div>" +
          '<div class="case-chapter__body">' +
          paras(s.body) +
          (s.list ? '<ul class="case-list">' + s.list.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>" : "") +
          paras(s.after) +
          "</div>" +
          "</section>"
        );
      case "media":
        return s.variant === "pair"
          ? '<div class="case-pair">' + figure() + figure() + "</div>"
          : figure("case-figure--full", s.caption);
      case "gallery":
        return gallery(s.count || 4);
      case "statement":
        return '<p class="case-statement">' + s.text + "</p>";
      case "quote":
        return '<blockquote class="case-quote"><p>' + s.text + "</p><footer>" + s.by + "</footer></blockquote>";
      case "stats":
        return '<ul class="case-stats">' + s.items.map(function (i) {
          return "<li><strong>" + i[0] + "</strong><span>" + i[1] + "</span></li>";
        }).join("") + "</ul>";
      case "credits":
        return (
          '<section class="case-credits"><p class="case-kicker">Credits</p><dl class="case-credits__list">' +
          s.items.map(function (i) { return "<div><dt>" + i[0] + "</dt><dd>" + i[1] + "</dd></div>"; }).join("") +
          "</dl></section>"
        );
      default:
        return "";
    }
  }

  function render(slug) {
    var p = PROJECTS[slug];
    var nextSlug = ORDER[(ORDER.indexOf(slug) + 1) % ORDER.length];
    var next = PROJECTS[nextSlug];

    var tags = p.tags.map(function (t) { return '<li class="tag">' + t + "</li>"; }).join("");
    var meta = Object.keys(p.meta).map(function (k) {
      return '<div class="case-meta__item"><dt>' + k + "</dt><dd>" + p.meta[k] + "</dd></div>";
    }).join("");
    var chapterNum = 0;
    var body = p.sections.map(function (s) {
      if (s.type === "chapter") chapterNum++;
      return section(s, chapterNum);
    }).join("");

    sheet.innerHTML =
      // Header — from the Figma frame
      '<header class="case-header">' +
      '<div class="case-header__main">' +
      '<ul class="tags">' + tags + "</ul>" +
      '<h2 class="case-title" id="case-title">' + p.title + "</h2>" +
      "</div>" +
      '<div class="case-intro">' + paras(p.intro) + "</div>" +
      "</header>" +
      figure("case-figure--hero") +
      '<dl class="case-meta">' + meta + "</dl>" +
      body +
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
