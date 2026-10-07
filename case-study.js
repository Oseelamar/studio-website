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
 *   { type: "chapter", title, body: [paragraphs], list?: [items], after?: [paragraphs] }
 *   { type: "text", body: [paragraphs] }     — continues a chapter's right column
 *   { type: "press", label, rows: [[[file, name, width, height], ...], ...] }
 *                                          — logo rows; files in assets/press/
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

    monazeni: {
      name: "Monazeni",
      title: "The bags were already famous. The website just hadn’t caught up.",
      tags: ["Website design", "E-commerce", "Visual direction"],
      intro: [
        "Monazeni didn’t need an introduction.",
        "Its bags had already found their way into the places fashion brands want to be seen — featured in Vogue, Elle, BET, and Cosmopolitan, and spotted on Access Hollywood and Love Island.",
        "The brand had the recognition, the customers, and the product. What it didn’t have was a digital experience that felt like it belonged to that world.",
        "The existing website felt dated and unintuitive, creating a disconnect between the confidence of the brand and the experience customers were having online.",
        "We were brought in to close that gap — rethinking the site’s visual language, typography, tone, and shopping experience to create a digital presence that felt as contemporary and culturally relevant as Monazeni itself.",
      ],
      meta: {
        Client: "Monazeni",
        Year: "2026",
        Sector: "Fashion e-commerce",
        Scope: "Visual language, Typography, Tone, Shopping experience",
      },
      sections: [
        {
          type: "chapter",
          title: "The Challenge",
          body: [
            "Monazeni was already generating sales, but the existing website wasn’t giving customers the experience expected from a contemporary fashion brand.",
            "Users found the experience unintuitive, while the visual direction felt dated and lacked the energy and confidence of the products themselves.",
            "For a fashion brand, that gap matters.",
            "A website isn’t simply where someone buys a bag. It’s part of how they perceive the brand before they decide to buy.",
          ],
        },
        { type: "statement", text: "The challenge wasn’t to make Monazeni look successful. The brand was already successful.<br>The challenge was to make the digital experience communicate that." },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          title: "Closing the Gap",
          body: [
            "We started with a simple question:",
            "What should the Monazeni website feel like if its digital presence actually matched its reputation?",
            "The answer wasn’t to add more. It was to make the right things matter more.",
            "We moved away from the stale visual language of the previous experience and introduced a more contemporary, fashion-led direction.",
          ],
          list: [
            "Typography became more expressive.",
            "Imagery became more intentional.",
            "Layouts became cleaner.",
            "Content hierarchy became clearer.",
            "And the overall tone became more confident.",
          ],
        },
        { type: "statement", text: "The goal wasn’t to reinvent Monazeni.<br>It was to make the website feel more like Monazeni." },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          title: "Designing for Fashion, Not Just Commerce",
          body: [
            "Fashion ecommerce has a particular challenge.",
            "The website has to sell a product while still preserving the feeling and desire surrounding the product.",
            "We didn’t want the bags to feel like items sitting inside a catalogue. We wanted them to feel like fashion pieces.",
            "The visual system gives the products room to become the focal point, while typography, spacing, imagery, and composition work together to create a more editorial experience.",
            "The result is a balance between brand expression and usability — a shopping experience that feels considered without getting in the way of the purchase.",
          ],
        },
        { type: "gallery", count: 4 },
        {
          type: "chapter",
          title: "A More Intuitive Way to Shop",
          body: [
            "A stronger visual identity wasn’t enough.",
            "The experience also needed to make it easier for customers to understand the brand, discover products, and move through the shopping journey.",
            "We reworked the hierarchy and structure across the site, making important information easier to find and creating clearer paths through the experience.",
            "The redesign was considered across both desktop and mobile, ensuring that the experience maintained the same clarity and character regardless of how customers accessed it.",
            "The result is a site that feels less like something customers have to figure out and more like something they can simply move through.",
          ],
        },
        { type: "media", variant: "full" },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          title: "Recognition Was Already Part of the Story",
          body: [
            "Monazeni didn’t need us to manufacture credibility.",
            "It already had it.",
          ],
        },
        {
          // Logos from the Figma section "Section 1" (node 17:222)
          type: "press",
          label: "As seen on Access Hollywood and Love Island, and featured in Vogue, Elle and Cosmopolitan",
          rows: [
            [
              ["access-hollywood", "Access Hollywood", 177, 54],
              ["love-island", "Love Island", 161, 42],
            ],
            [
              ["vogue", "Vogue", 127, 32],
              ["elle", "Elle", 90, 32],
              ["cosmopolitan", "Cosmopolitan", 166.747, 29.7779],
            ],
          ],
        },
        {
          type: "text",
          body: [
            "We saw that recognition as more than a list of achievements. It was evidence of the cultural relevance the brand had already built.",
            "So rather than treating these features as footnotes, we made them part of the story the website tells.",
            "The message becomes simple:",
          ],
        },
        { type: "statement", text: "You’ve probably already seen Monazeni." },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          title: "The Digital Experience Catches Up",
          body: [
            "The redesign brings the digital experience closer to the level of recognition the brand had already earned.",
          ],
          list: [
            "A more expressive visual language.",
            "A clearer shopping experience.",
            "A stronger sense of fashion.",
            "A more confident tone.",
            "And an experience that works across both desktop and mobile.",
          ],
        },
        { type: "statement", text: "The work wasn’t about making Monazeni look successful.<br>It was about making the website feel as established as the brand already was." },
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
      case "text":
        return (
          '<section class="case-chapter case-chapter--continued">' +
          '<div class="case-chapter__head" aria-hidden="true"></div>' +
          '<div class="case-chapter__body">' + paras(s.body) + "</div>" +
          "</section>"
        );
      case "press":
        return (
          '<section class="case-press" aria-label="' + s.label + '">' +
          s.rows.map(function (row) {
            return (
              '<ul class="case-press__row">' +
              row.map(function (logo) {
                return (
                  '<li style="--logo-w:' + logo[2] + "px;--logo-h:" + logo[3] + 'px">' +
                  '<img src="assets/press/' + logo[0] + '.svg" width="' + logo[2] + '" height="' + logo[3] + '" alt="' + logo[1] + '">' +
                  "</li>"
                );
              }).join("") +
              "</ul>"
            );
          }).join("") +
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
