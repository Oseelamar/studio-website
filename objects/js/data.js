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
  }
];
