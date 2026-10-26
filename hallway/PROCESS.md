# Hero section: how it was made

A record of every step behind the `still, sunday.` hero in this folder, from the first brief to the final art. It includes the dead ends, because they explain the decisions.

**Final files**

| File | What it is |
| --- | --- |
| `index.html` | The hero markup |
| `css/hallway.css` | All styling and the responsive layout |
| `img/hero-rest.jpg` | The hero art (1280×960) |
| `img/logo-still-sunday.svg` | Wordmark, exported from Figma |
| `img/arrow-right.svg` | Button arrow, exported from Figma |
| `js/nav.js` | The mobile menu (open/close, Escape, focus) |

**Figma file:** [Hallway — Hero art](https://www.figma.com/design/9lXugh3UNsGS7hJQWPAUMJ)

| Node | Contents |
| --- | --- |
| `3:6` | The layout (1440×900) |
| `8:2` | The final art |
| `5:2` | The chosen generation, before the skin recolour |
| `1:2` and `4:2` | Earlier and alternative generations |

---

## Phase 1: Brief and direction

**1. The brief.** A creative-direction prompt plus a moodboard ("still, sunday."). It asked for a character-led brand that combines:
- hand-drawn characters with imperfect outlines;
- real, three-dimensional folded-paper objects the character physically uses;
- bold editorial graphic design.

The palette was built around sky blue `#B3D0E8`. The brief asked for no business to be invented without discussion.

**2. Checking for an existing concept.** The repo held only the studio site, so there was no chosen business. Three directions went back for a decision:
- A: everyday wellbeing;
- B: life transitions;
- C: money without shame.

Each came with its promise, audience, why paper belongs in it, and the trade-offs.

**3. Direction B chosen.** A full creative direction was written and published as a page, covering:
- positioning, with "Hallway" as a working name;
- character rules: proportions, line, wardrobe, eight poses and a tone scale;
- paper construction rules, including the idea that objects are folded from the paperwork itself;
- colour roles and contrast rules;
- type roles;
- three sketched hero compositions;
- a nine-section landing-page narrative;
- a production plan.

## Phase 2: First build, SVG placeholders

**4. Hero A, "the route is a staircase", built in code** in `hallway/`. It had:
- a hand-drawn SVG character and SVG paper stairs drawn on a 1000×600 coordinate system;
- live HTML labels pinned to each tread;
- a route picker (moving, bereavement, separation) that relabelled the stairs;
- a line-boil animation;
- desktop, tablet and phone layouts.

It was verified in the browser at three widths.

**5. Feedback: the graphics weren't good enough.** Drawn SVG couldn't reach the quality the brief asked for. The next step was to generate the art with Figma's AI instead.

## Phase 3: Figma AI art, first attempt

**6. Figma file created.** "Hallway — Hero art" in your personal team.

**7. First generation (node `1:2`, GPT image model, 1536×864).**
- **What it showed:** envelope staircase, a drawn woman stepping up, and an empty left side for the copy.
- **How it was wired in:** the backdrop colours were sampled with a canvas, and the tread positions were measured from the pixels. The labels were then pinned to the photo across three crops of the one image.

**8. Feedback.**
- **Pose:** the leg was raised while the head was twisted back, which looked unnatural.
- **Resolution:** the image wasn't sharp enough.
- **New target:**
  - a reference image of the character resting at the top of paper stairs, with a yellow sun and a blue arch;
  - a layout and text set in a Figma frame (node `3:6`);
  - fonts named as Source Serif 4 (headings) and Graphik (body and button).

## Phase 4: Matching the Figma design

**9. Reading the design.** The Figma frame `3:6` was read with Figma's design-context tool, which gives exact sizes, positions, colours, text and fonts:
- **Frame:** 1440×900, background `#9BD0F5`.
- **Logo:** 236×38 at 120,51.
- **Heading:** Source Serif 4, 72px, line-height 1.08, tracking −3.6px, `#2D180E`.
- **Body:** Graphik, 18px, line-height 1.48, `#3C2E21`.
- **Button:** `#43180D`, 62px radius, 16/24/16/32 padding.
- **Art slot:** 1184×858 at 353,99, bleeding off the right and bottom edges.

The logo and arrow were exported as SVGs.

**10. Fonts.**
- **Source Serif 4:** loaded from Google Fonts.
- **Graphik:** a licensed font, found installed on this Mac. The page uses that local copy. A web licence and self-hosted files are needed before the page goes public.

**11. Regenerating the art.** One prompt described the reference closely: the stairs, seat, sun, blue arch and flat `#9BD0F5` backdrop. It asked for a natural sitting pose with head, body and legs facing the same way. It ran on two models:

| Node | Model | Size | Result |
| --- | --- | --- | --- |
| `4:2` | Gemini | 1200×896 | Composition closest to the reference; weaker character |
| `5:2` | GPT image | 1280×960 | Natural, readable pose; finer paper. **Chosen** |

Both models stop at about 1.2 megapixels, so 1280×960 is the sharpest this tool can make.

**12. Building the layout.**
- **Desktop:** the 1440×900 frame is reproduced proportionally, with every position written as a share of the frame. Measured in the browser at 1440×900, it matched Figma to the pixel (logo, heading, body, button and art box).
- **Art fit:** the art slot runs past the frame's right edge, so the image was fitted to the visible part (1087 of 1184px). That keeps the blue arch in view, as in the design.
- **Blending:** the plate's backdrop (about `#98CDF9`) blends into the page through soft mask fades on its left and top edges.
- **Below 1024px:** the layout stacks (logo, copy, button, then the art cropped around the character).
- **Clean-up:** the old Hallway script and images were deleted.

## Phase 5: Final changes

**13. Typos fixed.** "Thoughful … mesy … still figuring it out" became "Thoughtful space for the messy middle, the big feelings, and the life you're still figuring out."

**14. Mobile button.** The text drops from 18px to 17px below 700px wide.

**15. Skin tone made white, nothing else changed.** The aim was a character anyone can see themselves in, like the reference.
- **Why not regenerate:** Figma's image tool can only generate new images, so regenerating would have changed the whole picture. The existing image was recoloured instead.
- **How the skin was isolated:** sampled pixels showed the skin and blush at a hue of about 17–21°, the kraft paper at about 34°, the trousers at about 38° and the yellow at 40° or more. A small Swift script (CoreGraphics, built into macOS) changed only pixels in that skin hue band, inside two small boxes around the face/neck and the hands.
- **How it stays natural:** each pixel kept its brightness relative to the skin, mapped onto a warm white (`#FFFDF9`). So the ink edges, ear shading and paper grain survive, and nothing reads as pasted on. The cheek blush was flattened into the white to match the reference.
- **Checking:** about 8,500 pixels changed. Zoomed crops at 3× confirmed there was no peach fringing. One sliver at the base of the neck was caught and fixed by widening the box.
- **Where it lives:** the result is the site's `img/hero-rest.jpg`, and it was uploaded to Figma as node `8:2`.

**16. Final check.** At 375px the copy, the 17px button and the white-skinned character all render correctly, with no sideways scroll and no console errors.

## Phase 6: Every bit of skin to pure white, and a navbar

**17. Ankles missed.** Feedback: the skin just above her shoes was still brown.
- **Why it was missed:** step 15 covered the face, neck and hands but had no box for the ankles. The ankles are also in the trouser hems' shadow, so they read darker.
- **The brief, clarified:** all skin should be exactly `#FFFFFF`, so the character doesn't belong to any one race.

**18. Recolour rerun on the original generation (node `5:2`) with three changes:**
- **A third box** around the ankles (x 796–888, y 434–490). Samples confirmed the ankle skin sits in the same 18–21° hue band, and the trouser lining next to it is about 34–36°, so it stays untouched.
- **Pure white:** the target changed from warm white to `#FFFFFF`. Brightness is now measured against 78% of the typical skin tone, so shadowed skin reaches full white too. Only the anti-aliased ink edges stay darker, which keeps the outlines crisp.
- **Skin highlights:** the hue band was widened slightly (26–31° falloff) to catch them.

**Checking:**
- 9,623 pixels changed.
- A scan of all three boxes found **0** skin-coloured pixels left.
- Spot checks on the forehead, cheek, neck, both hands and the lit and shadowed ankles all read exactly `#FFFFFF`.
- Shoes, trousers, jumper and paper are unchanged.

**Where it lives:** the site's `img/hero-rest.jpg` was re-exported, and Figma node `8:2` was updated in place.

**19. Navbar content and build.** The links come from the brand's own promise ("thoughtful tools, honest conversations and gentle guidance").
- **Desktop (1024px and up):** logo, then How it works, Tools, Conversations and Journal, then Log in and a "Get started" pill in the hero button's colour.
  - Everything shares the logo's centre line and ends at the frame's 120px right margin.
  - The pill is 39px tall to match the 38px logo, so the logo stays exactly at its Figma position (120, 51).
  - The nav was checked at 1440px and at the tightest width, 1024px.
- **Mobile (below 1024px):** logo and a Menu button. The button opens a full-screen panel in the hero blue with:
  - the same four links in Source Serif 4 at 36px;
  - "Get started" (the hero button style), "Log in", and a quiet "Need urgent support? Find help now" link, a responsible inclusion for a wellbeing brand.
- **Menu behaviour:**
  - Opening changes the button to "Close" with a cross and moves focus to the first link.
  - While it's open, the page behind can't scroll or be reached with the keyboard.
  - Escape closes it and returns focus to the button; following a link or widening the window also closes it.

**20. Final check.** At 1440px, 1024px and 375px: no sideways scroll, no console errors, and the menu opens, traps focus and closes correctly.

**21. Navbar redesigned from Figma (node `15:33`).**
- **The design:** a translucent pill (60% white, 50px radius), 1240×80 at (100, 36) in the frame. It holds:
  - the logo at 185×30;
  - the four links in Graphik 18px, centred between logo and buttons;
  - a white "Log in" pill and a dark "Get Started" pill, each 48px tall.
- **Hero copy:** it moved from x 120 to x 100 to match the updated frame.
- **Match:** measured at 1440px against Figma, the pill, logo, links and buttons match within 1–3px. The only differences come from text widths.
- **Responsive:** the full nav needs about 1,000px, so it shows from 1280px up, where it still fits with 113px gaps. Below that, the same pill holds the logo and a white "Menu" pill that opens the existing full-screen menu. Its button text was updated to "Get Started" to match.
- **Checked:** at 1440px, 1280px, 1100px and 375px, with the menu opening and closing and no console errors.

---

## Open items

- **Sharpness:** for retina-sharp art, run Figma's Upscale image on node `8:2` in the Figma app, then replace `img/hero-rest.jpg`.
- **Graphik:** buy a web licence and self-host it, or other viewers will see Helvetica or Arial.
- **Links:** the button and all nav links (including the support link) point to placeholder anchors such as `#start` and `#support`. The support link should go to a real crisis-help page before launch.
