/* Objects — sample catalogue. Prices in USD. Colour variants are rendered with
   a CSS filter on the studio cutout, so every swatch changes the product image. */
window.OBJECTS_CATEGORIES = {
  home: { name: 'Home Objects', tint: '#F4E4D8' },
  accessories: { name: 'Personal Accessories', tint: '#E6E8EC' },
  carry: { name: 'Everyday Carry', tint: '#E2EADC' },
  furniture: { name: 'Small Furniture', tint: '#F6D9DB' }
};

window.OBJECTS_PRODUCTS = [
  {
    id: 'dome-lamp', name: 'Dome Table Lamp', category: 'home', price: 185,
    img: 'lamp', alt: 'life-lamp', badge: 'Bestseller',
    material: 'Glazed ceramic, linen-wrapped cord', size: 'H 32 × Ø 30 cm',
    description: 'A mushroom-shaped lamp in deep, glossy glaze. Throws a warm pool of light downward and looks just as good switched off.',
    colors: [
      { name: 'Vermilion', hex: '#E2452A', filter: 'none' },
      { name: 'Cobalt', hex: '#2448C9', filter: 'hue-rotate(212deg) saturate(1.15)' },
      { name: 'Butter', hex: '#F2C43A', filter: 'hue-rotate(34deg) saturate(1.25) brightness(1.12)' }
    ]
  },
  {
    id: 'songbird-kettle', name: 'Songbird Kettle', category: 'home', price: 120,
    img: 'kettle', alt: 'life-kettle', badge: 'Bestseller',
    material: 'Mirror-polished stainless steel', size: '2 L · all hobs incl. induction',
    description: 'A conical stovetop kettle with a little orange bird on the spout that sings when the water is ready.',
    colors: [{ name: 'Chrome', hex: '#C9CCD1', filter: 'none' }]
  },
  {
    id: 'lido-sunglasses', name: 'Lido Cat-Eye Sunglasses', category: 'accessories', price: 140,
    img: 'sunglasses', alt: 'life-sunglasses',
    material: 'Hand-polished acetate, UV400 lenses', size: 'Lens 52 mm · bridge 20 mm',
    description: 'A heavy, glossy cat-eye frame with smoke lenses. Comes with a cotton pouch.',
    colors: [{ name: 'Gloss Black', hex: '#141414', filter: 'none' }]
  },
  {
    id: 'moon-hobo', name: 'Moon Hobo Bag', category: 'carry', price: 260,
    img: 'bag', alt: 'life-bag',
    material: 'Metallic lambskin, nickel chain', size: 'W 38 × H 30 cm',
    description: 'Soft, slouchy and very reflective. Fits a laptop, a jumper and an afternoon’s worth of shopping.',
    colors: [
      { name: 'Silver', hex: '#C8C9CB', filter: 'none' },
      { name: 'Champagne', hex: '#D7BF8E', filter: 'sepia(.55) saturate(1.5) brightness(1.02)' }
    ]
  },
  {
    id: 'ripple-vase', name: 'Ripple Glass Vase', category: 'home', price: 80,
    img: 'vase', alt: 'life-vase',
    material: 'Mouth-blown glass', size: 'H 28 cm',
    description: 'Thick translucent glass with stacked ripples. Fills a room with coloured light when the sun hits it.',
    colors: [
      { name: 'Cobalt', hex: '#1F47D6', filter: 'none' },
      { name: 'Amber', hex: '#E08A1E', filter: 'hue-rotate(180deg) saturate(1.1)' },
      { name: 'Bottle', hex: '#2E8A4E', filter: 'hue-rotate(-95deg) saturate(.9)' }
    ]
  },
  {
    id: 'pebble-chair', name: 'Pebble Lounge Chair', category: 'furniture', price: 420,
    img: 'chair', alt: 'life-chair', badge: 'Low stock',
    material: 'Rotomoulded lacquered polymer, indoor/outdoor', size: 'W 62 × D 66 × H 58 cm',
    description: 'A one-piece low chair with 1970s curves. Light enough to move, comfortable enough to stay.',
    colors: [
      { name: 'Signal Red', hex: '#D9262B', filter: 'none' },
      { name: 'Cobalt', hex: '#2448C9', filter: 'hue-rotate(230deg) saturate(1.05)' },
      { name: 'Sun', hex: '#F3B921', filter: 'hue-rotate(42deg) saturate(1.2) brightness(1.2)' }
    ]
  },
  {
    id: 'sunday-pitcher', name: 'Sunday Pitcher', category: 'home', price: 68,
    img: 'jug', alt: 'life-jug', badge: 'New',
    material: 'Hand-thrown stoneware', size: '1.2 L',
    description: 'Thrown by hand, so no two drip quite the same. For water, flowers or both.',
    colors: [
      { name: 'Sunflower', hex: '#E2B21C', filter: 'none' },
      { name: 'Moss', hex: '#7E9A3A', filter: 'hue-rotate(38deg) saturate(.9)' }
    ]
  },
  {
    id: 'stem-cup', name: 'Stem Cup', category: 'home', price: 42,
    img: 'goblet', alt: 'life-desk', badge: 'New',
    material: 'Speckled stoneware, glazed stem', size: '250 ml · H 12 cm',
    description: 'Somewhere between an egg cup and a goblet. Coffee, pencils, a single flower.',
    colors: [{ name: 'Cream / Green', hex: '#EDE6D8', filter: 'none' }]
  },
  {
    id: 'harbour-cap', name: 'Harbour Cap', category: 'accessories', price: 65,
    img: 'cap', badge: 'New',
    material: 'Boiled wool felt, cotton lining', size: 'S/M · M/L',
    description: 'A soft fisherman’s cap in dense felt. Holds its shape, folds into a pocket.',
    colors: [
      { name: 'Forest', hex: '#1E4A33', filter: 'none' },
      { name: 'Navy', hex: '#1F2C4D', filter: 'hue-rotate(80deg) saturate(.8)' }
    ]
  },
  {
    id: 'confetti-strap', name: 'Confetti Phone Strap', category: 'accessories', price: 34,
    img: 'strap', badge: 'New',
    material: 'Glass & ceramic beads, nylon cord', size: 'L 24 cm · universal tab',
    description: 'A strap of mismatched beads, strung by hand. Makes your phone easier to find and harder to drop.',
    colors: [{ name: 'Mixed', hex: 'conic-gradient(#E0262B 0 25%, #1F47D6 0 50%, #F5C518 0 75%, #F6C9CF 0)', filter: 'none' }]
  },
  {
    id: 'market-tote', name: 'Market Tote', category: 'carry', price: 55,
    img: 'tote', alt: 'life-tote', badge: 'New',
    material: '18 oz cotton canvas', size: 'W 44 × H 36 × D 16 cm',
    description: 'Heavy canvas, long handles, a flat base. Built for leeks, baguettes and library books.',
    colors: [
      { name: 'Emerald', hex: '#17663D', filter: 'none' },
      { name: 'Cobalt', hex: '#2448C9', filter: 'hue-rotate(78deg) saturate(1.3) brightness(1.05)' }
    ]
  },
  {
    id: 'wink-ball', name: 'Wink Desk Ball', category: 'carry', price: 16,
    img: 'ball', badge: 'New',
    material: 'Soft-touch natural rubber', size: 'Ø 7 cm',
    description: 'A small, squeezable, slightly smug ball for long calls and longer afternoons.',
    colors: [{ name: 'Orange', hex: '#F07A1E', filter: 'none' }]
  },
  /* ---- added: autumn restock ---- */
  {
    id: 'bobbin-table', name: 'Bobbin Side Table', category: 'furniture', price: 280,
    img: 'sidetable', alt: 'life-sidetable', badge: 'Bestseller',
    material: 'Lacquered turned beech', size: 'Ø 40 × H 52 cm',
    description: 'A stack of turned beads holding up a small round top. Just big enough for a cup, a book and a lamp.',
    colors: [
      { name: 'Cobalt', hex: '#2448C9', filter: 'none' },
      { name: 'Signal Red', hex: '#D9262B', filter: 'hue-rotate(138deg) saturate(1.25)' }
    ]
  },
  {
    id: 'loop-stool', name: 'Loop Stool', category: 'furniture', price: 210,
    img: 'stool', badge: 'New',
    material: 'Chrome-plated steel tube, wool bouclé', size: 'Ø 42 × H 45 cm',
    description: 'One continuous loop of polished tube under a soft bouclé cushion. A stool, a side table, a spare seat.',
    colors: [{ name: 'Chrome / Cream', hex: '#E9E3D8', filter: 'none' }]
  },
  {
    id: 'mushroom-pouf', name: 'Mushroom Pouf', category: 'furniture', price: 190,
    img: 'pouf', badge: 'New',
    material: 'Wool-blend upholstery, foam core', size: 'Ø 55 × H 38 cm',
    description: 'A low, button-tufted pouf with a fat cap and a short stem. Feet up, or an extra seat when friends come over.',
    colors: [
      { name: 'Mustard', hex: '#C9A227', filter: 'none' },
      { name: 'Moss', hex: '#6F7F3A', filter: 'hue-rotate(26deg) saturate(.55) brightness(.8)' }
    ]
  },
  {
    id: 'ladder-shelf', name: 'Ladder Shelf', category: 'furniture', price: 340,
    img: 'ladder',
    material: 'Solid ash, green stain', size: 'W 45 × H 160 cm',
    description: 'A narrow leaning shelf with three short rungs. For towels, plants, or the books you are definitely going to read.',
    colors: [{ name: 'Forest', hex: '#1E3D2C', filter: 'none' }]
  },
  {
    id: 'wobble-candles', name: 'Wobble Candle Holders', category: 'home', price: 58,
    img: 'candles', alt: 'life-candles', badge: 'Bestseller',
    material: 'Glazed stoneware, set of three', size: 'H 14, 20 & 11 cm',
    description: 'Three wavy candlesticks in red, yellow and cream. Taper candles not included, wobbles very much included.',
    colors: [{ name: 'Red / Yellow / Cream', hex: 'linear-gradient(90deg, #D9262B 0 33%, #F2C43A 0 66%, #EFE8D8 0)', filter: 'none' }]
  },
  {
    id: 'bubble-mirror', name: 'Chrome Bubble Mirror', category: 'home', price: 135,
    img: 'mirror',
    material: 'Polished chrome-plated zinc, glass', size: 'W 22 × H 30 cm',
    description: 'A small table mirror in a soft, melted chrome frame. Practical in the morning, sculptural the rest of the day.',
    colors: [{ name: 'Chrome', hex: '#C9CCD1', filter: 'none' }]
  },
  {
    id: 'arc-watch', name: 'Arc Watch', category: 'accessories', price: 220,
    img: 'watch', alt: 'life-watch', badge: 'Bestseller',
    material: 'Brushed steel, vegetable-tanned leather', size: 'Case 38 mm · 5 ATM',
    description: 'A plain, well-made watch with a vermilion dial and nothing else to read. Tells the time, quietly.',
    colors: [
      { name: 'Vermilion', hex: '#E2452A', filter: 'none' },
      { name: 'Cobalt', hex: '#2448C9', filter: 'hue-rotate(212deg) saturate(1.1)' }
    ]
  },
  {
    id: 'hoop-earrings', name: 'Melt Hoop Earrings', category: 'accessories', price: 85,
    img: 'earrings', badge: 'New',
    material: '18k gold vermeil on sterling silver', size: 'Ø 26 mm',
    description: 'Chunky hoops that look like they started to melt and thought better of it. Light enough for every day.',
    colors: [{ name: 'Gold', hex: '#D4A73C', filter: 'none' }]
  },
  {
    id: 'stripe-scarf', name: 'Deckchair Scarf', category: 'accessories', price: 95,
    img: 'scarf',
    material: 'Brushed lambswool', size: '180 × 30 cm',
    description: 'Wide red and cream stripes, long fringe, very soft. The one from the campaign photograph.',
    colors: [{ name: 'Red / Cream', hex: 'linear-gradient(90deg, #C8322B 0 50%, #EFE6D6 0)', filter: 'none' }]
  },
  {
    id: 'pebble-card', name: 'Pebble Card Holder', category: 'carry', price: 48,
    img: 'cardholder', alt: 'life-cardholder', badge: 'Bestseller',
    material: 'Full-grain leather', size: '10 × 7 cm · holds 6 cards',
    description: 'A slim card case with two pockets and nothing extra. Lives happily in a front pocket.',
    colors: [
      { name: 'Cobalt', hex: '#2448C9', filter: 'none' },
      { name: 'Signal Red', hex: '#D9262B', filter: 'hue-rotate(138deg) saturate(1.25)' }
    ]
  },
  {
    id: 'canteen-bottle', name: 'Canteen Bottle', category: 'carry', price: 42,
    img: 'bottle', badge: 'New',
    material: 'Double-wall stainless steel', size: '600 ml · 24 h cold, 12 h hot',
    description: 'A brushed steel bottle with a red loop cap you can hook on a finger or a bag.',
    colors: [{ name: 'Steel / Red', hex: '#C4C7CC', filter: 'none' }]
  },
  {
    id: 'gingham-tin', name: 'Gingham Lunch Tin', category: 'carry', price: 38,
    img: 'lunchbox',
    material: 'Enamelled steel, two tiers', size: '18 × 12 × 10 cm',
    description: 'Two stacking enamel tins in green gingham, held together with a red clip. Packed lunches deserve better.',
    colors: [{ name: 'Green Gingham', hex: 'repeating-conic-gradient(#2E6B45 0 25%, #F1EADB 0 50%) 0 0 / 6px 6px', filter: 'none' }]
  }
];
