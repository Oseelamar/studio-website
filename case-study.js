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
 *   { type: "chapter", label?, title, body: [paragraphs], list?: [items], after?: [paragraphs] }
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

    glint: {
      name: "Glint",
      title: "Meet Glint — Web3, with a smile.",
      tags: ["App design", "Brand identity", "Design system"],
      intro: [
        "Glint is a crypto app built to make powerful blockchain actions feel easy, human, and joyful.",
        "We bridge the gap between complex Web3 technology and everyday user experiences — all wrapped in a fun, modern brand that feels nothing like “finance.”",
      ],
      meta: {
        Client: "Glint",
        Sector: "Crypto / Web3",
        Platform: "Mobile app",
        Scope: "Brand, Design system, Product design",
      },
      sections: [
        {
          type: "chapter",
          label: "The Problem",
          title: "The gap we noticed",
          body: [
            "Existing crypto apps are built for people fluent in tokens, wallets, and Twitter threads.",
          ],
        },
        { type: "statement", text: "Everyone else? Left out." },
        {
          type: "text",
          body: [
            "Glint was built to remove the friction, hide the tech, and speak human.",
            "Most apps still speak in chains, tokens, and tech jargon. They’re built for Twitter-native crypto heads, not real people.",
            "Glint strips away the noise. It abstracts the chain, simplifies the swap, and lets users do what they came to do — without needing to understand what’s under the hood.",
          ],
        },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          label: "The Design Direction",
          title: "A style that actually vibes with you",
          body: [
            "Glint’s design system was built to feel warm, clear, and full of life. From the bold color palette to our playful illustrations and soft custom icons, everything works together to make complex crypto actions feel simple and human.",
            "Our typeface, Open Runde, adds just the right balance of friendliness and clarity — keeping the brand approachable at every touchpoint.",
            "Glint’s color palette is designed to feel bold, modern, and trustworthy. We combine energetic orange with a calming green and grounded neutrals to create a visual experience that’s both playful and clear.",
            "The balance of warmth and structure helps guide users through actions confidently — without overwhelming them.",
          ],
        },
        { type: "media", variant: "pair" },
        { type: "gallery", count: 4 },
        {
          type: "chapter",
          label: "The Product",
          title: "A home screen that doesn’t ask questions",
          body: [
            "The Glint home screen was designed to feel as effortless as a conversation.",
            "Behind the scenes, the app handles complex logic — from chain abstraction to cross-network swaps — but what the user sees is calm, intuitive, and welcoming.",
          ],
        },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          label: "Send Crypto",
          title: "Just pick a name, not a chain",
          body: [
            "Sending crypto on Glint feels more like sending a DM than wiring tokens across fragmented ecosystems.",
            "You select a token, type in a name — like bobuzy.crypto — and that’s it.",
            "No need to ask what network they’re on, no triple-checking contract addresses, no switching chains manually.",
            "Under the hood, Glint quietly verifies what networks the recipient supports, finds the most compatible path, and delivers the token exactly where it needs to go.",
            "If you’re sending USDC and they receive on Solana? Handled.",
            "If they prefer ETH on Base? Still handled.",
            "There’s no friction, no fear — just a flow that feels obvious.",
          ],
        },
        { type: "statement", text: "No chains. No stress. Just send." },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          label: "Request Crypto",
          title: "Send me that bag",
          body: [
            "Everyone gets a default QR code and link — so anyone can pay you, anytime, from anywhere.",
            "But when you need something specific, like 300 USDC right now, you can send a custom request.",
            "Glint takes care of everything in the background — swapping, bridging, verifying — so you always get the exact amount, in the token you want, with zero chain drama.",
          ],
        },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          label: "Off-Ramp",
          title: "Cash out without the chaos",
          body: [
            "Withdraw your crypto in just a few taps. No technical hoops, no long wait times.",
            "Whether it’s USD, NGN, or a domiciliary account, we make off-ramping feel effortless — built for everyday users, not blockchain experts.",
          ],
        },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          label: "The Experience",
          title: "One tap to rule them all",
          body: [
            "Glint abstracts away the complexity that usually comes with interacting across multiple blockchain networks.",
            "Instead of making users understand chains, networks, bridges, and technical infrastructure, the experience puts the action first.",
          ],
        },
        { type: "statement", text: "The technology stays in the background.<br>The user gets a simple, familiar experience." },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          label: "The Result",
          title: "Making crypto feel like magic — not math.",
          body: [
            "Glint turns complex blockchain infrastructure into an experience that feels simple, approachable, and human.",
            "The product handles the complexity behind the scenes while the interface keeps users focused on what they actually came to do.",
            "Buy. Send. Swap. Deposit. Withdraw.",
            "No unnecessary technical decisions.",
          ],
        },
        { type: "statement", text: "Just crypto that feels a little more human." },
      ],
    },

    "sporting-lagos": {
      name: "Sporting Lagos",
      title: "A club app that rewards you for showing up.",
      tags: ["App design", "UI & UX design", "Gamification"],
      intro: [
        "Sporting Lagos is a football club built on community — the pride, the noise, and the sense of belonging that comes with it.",
        "The club wanted an app that captured that energy. It had to feel exciting, gamified, and unmistakably like a sports app — bold and colourful without tipping into chaos — while making the practical things effortless: buying tickets and jerseys, and catching highlights from every match.",
        "The goal was to turn being a fan into something you do every day, not just on match day.",
      ],
      meta: {
        Client: "Sporting Lagos",
        Sector: "Sport / Football",
        Platform: "Mobile app",
        Scope: "App design, UI/UX, Gamification",
      },
      sections: [
        {
          type: "chapter",
          label: "The Brief",
          title: "Something that gets people going",
          body: [
            "Most club apps are noticeboards: fixtures, results, news. Fans check them and leave.",
            "Sporting Lagos wanted more. The app had to make supporters feel closer to the club, reward them for their loyalty, and give them a reason to come back between matches.",
            "It also had to work hard — tickets, jerseys, season passes, live streams, and highlights, all in one place and all effortless.",
          ],
        },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          label: "The Identity",
          title: "Bold, but never loud for the sake of it",
          body: [
            "The visual language takes its cue from the club itself. A deep navy base and Sporting blue carry the brand, while a geometric pattern drawn from the crest runs through headers and cards. Tall, condensed, all-caps headlines give everything the feel of a matchday programme.",
            "Colour is used with intent. Green means action. Orange belongs to rewards. Yellow, pink, and blue mark the moments worth noticing.",
            "The result is vibrant without feeling noisy.",
          ],
        },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          label: "Speaking Like a Fan",
          title: "Copy with a little Lagos in it",
          body: [
            "The app talks like the people who use it. Signing up is “Join the squad.” Logging back in is “Get back in the game.” Forgot your password? “Lost the ball? Let’s recover it.”",
            "Some screens slip into Pidgin — “No wahala,” “Confirm sey na you,” “We don send you 6-digit code. Enter am sharp sharp to lock in.” Try to log out and the app asks, “You wan log out?”",
            "They’re small details, but they’re where the app’s personality lives.",
          ],
        },
        { type: "statement", text: "Small details. Big personality." },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          label: "The Points Hub",
          title: "Support that pays off",
          body: [
            "At the heart of the app is a rewards system. Fans earn points simply for being fans:",
          ],
          list: [
            "Win the daily quiz.",
            "Take part in trivia and polls.",
            "Buy a ticket in the app.",
            "Refer a friend.",
            "Check in at a match.",
          ],
          after: [
            "Points build into a running total, alongside a daily streak and a full history of everything earned and spent. And they aren’t just a score — fans can spend them on real tickets and jerseys.",
          ],
        },
        { type: "statement", text: "Your support has value.<br>Now you can spend it." },
        { type: "gallery", count: 4 },
        {
          type: "chapter",
          label: "Badges & Bragging Rights",
          title: "Collect the season",
          body: [
            "Badges reward the kind of fan behaviour clubs love: First Game, Three in a Row, Five Alive, Trivia Champ, Season Starter, Season Ticket Holder, Tactico — and Sporting OG, for attending every home game of the season.",
            "Locked badges stay visible in grey, so there’s always something to chase.",
            "Refer-a-friend turns fans into recruiters, with points for every successful sign-up.",
          ],
        },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          label: "Match Day, Every Day",
          title: "Before, during, and after the whistle",
          body: [
            "Before kick-off, a live countdown to the next match sits on the home screen, with tickets one tap away. Fixtures are colour-coded and easy to scan.",
            "When a match goes live, the app changes with it. The header becomes “Follow the full action here,” with the live score, scorers, lineups, and a stream.",
            "After full time, the same screen shows match statistics, the confirmed lineup, post-match news, and highlights. Top moments sit right on the home screen, so fans who missed the game can catch up in seconds.",
          ],
        },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          label: "Tickets & Jerseys",
          title: "A checkout that feels like a win",
          body: [
            "Buying a ticket is quick: pick a match, choose standard, premium, group, or box tickets, set the quantity, and pay.",
            "Fans with enough points can flip a single toggle to pay with them instead — all the way to a 100% discount.",
            "Tickets arrive as QR passes with stand, row, and seat details, ready to save or share. Season tickets get their own moment: “You are a premium season ticket holder.” And jerseys can be personalised with a custom name and number before checkout.",
          ],
        },
        { type: "statement", text: "Pick it. Pay for it.<br>Or earn it." },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          label: "The Result",
          title: "Every fan action counts",
          body: [
            "The finished app treats every fan action as part of the game. Reading, watching, predicting, attending, and buying all count towards something.",
            "The practical side — tickets, jerseys, season passes, highlights — is fast and familiar. The fun side keeps fans coming back.",
          ],
        },
        { type: "statement", text: "For all of Lagos." },
      ],
    },

    nookly: {
      name: "Nookly",
      title: "Every child deserves to see themselves in learning.",
      tags: ["Web design", "UI/UX", "Illustration"],
      intro: [
        "Nookly is an AI platform that helps parents, teachers, and therapists create personalised learning content for children — stories, songs, and visuals built around the child.",
        "The challenge wasn’t just to present a powerful AI product. It was to make it feel warm, human, and effortless from the very first interaction.",
      ],
      meta: {
        Client: "Nookly",
        Year: "2026",
        Sector: "EdTech / AI",
        Scope: "Website design, Illustration, Visual system",
      },
      sections: [
        {
          type: "chapter",
          label: "The Need",
          title: "Why personal matters",
          body: [
            "Children learn best when they recognise themselves in what they’re learning. But creating personalised material takes time most parents, teachers, and therapists simply don’t have.",
          ],
        },
        {
          type: "stats",
          items: [
            ["4m+", "Children rely on visual learning as a pathway"],
            ["90–94%", "Of teachers spend their own money on classroom materials"],
            ["7.9m", "Children in the U.S. qualify for special education services"],
          ],
        },
        { type: "media", variant: "full" },
        {
          type: "chapter",
          label: "The Characters",
          title: "Kids at the centre",
          body: [
            "Every child on the site is a character — illustrated in 3D from real children, each with a name, an age, and a personality of their own.",
            "It shows exactly what Nookly does: turn a real child into the hero of their own learning.",
          ],
        },
        { type: "statement", text: "Learning feels different when you’re the hero of the story." },
        { type: "media", variant: "pair" },
        {
          type: "chapter",
          label: "The Visual System",
          title: "Soft, bright, and friendly",
          body: [
            "A warm off-white base, six playful pastels — orange, purple, green, yellow, blue, and pink — hand-drawn loops, and sticker-style icons give the brand its sense of play.",
            "Baloo 2, a rounded typeface, keeps every headline friendly without losing clarity.",
          ],
        },
        { type: "gallery", count: 4 },
        {
          type: "chapter",
          label: "The Website",
          title: "Powerful, but never complicated",
          body: [
            "The site speaks to parents, professionals, and schools without overwhelming any of them.",
            "Benefits are written in plain language — “Spend less time prepping,” “Learning that feels like play.” A tabbed tour walks through the ecosystem: Design Studio, Creative Assistant, AI Imagineer, and Community Library. Pricing is simple and transparent, with a free trial to get started.",
          ],
        },
        { type: "media", variant: "full" },
        { type: "statement", text: "Make every child feel seen." },
      ],
    },
  };

  // "Next project" follows the order of the cards on the homepage.
  var ORDER = [];
  document.querySelectorAll('.work-card[href^="#work/"]').forEach(function (card) {
    var slug = card.getAttribute("href").slice(6);
    if (PROJECTS[slug] && ORDER.indexOf(slug) === -1) ORDER.push(slug);
  });
  Object.keys(PROJECTS).forEach(function (slug) {
    if (ORDER.indexOf(slug) === -1) ORDER.push(slug);
  });
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
          '<p class="case-kicker">' + String(num).padStart(2, "0") + (s.label ? " — " + s.label : "") + "</p>" +
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
