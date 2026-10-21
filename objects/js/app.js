/* Objects — front-end prototype. No backend: the bag lives in localStorage and
   checkout is intentionally not implemented. */
(() => {
  const P = window.OBJECTS_PRODUCTS;
  const CATS = window.OBJECTS_CATEGORIES;
  const byId = Object.fromEntries(P.map(p => [p.id, p]));
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const money = n => '$' + n.toLocaleString('en-US');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FREE_SHIP = 150;
  let io; // reveal-on-scroll observer, created lazily
  const icon = id => `<svg aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const img = (name, size = 'sm') => `img/${name}${size === 'sm' ? '-sm' : ''}.webp`;
  const srcset = name => `img/${name}-sm.webp 480w, img/${name}.webp 900w`;
  const altSrcset = name => `img/${name}-sm.webp 512w, img/${name}.webp 1024w`;

  /* ---------- bag state ------------------------------------------------ */
  const store = {
    get() { try { return JSON.parse(localStorage.getItem('objects-bag')) || []; } catch { return []; } },
    set(v) { try { localStorage.setItem('objects-bag', JSON.stringify(v)); } catch { /* private mode */ } }
  };
  let bag = store.get().filter(l => byId[l.id]);

  const bagQty = () => bag.reduce((n, l) => n + l.qty, 0);
  const bagTotal = () => bag.reduce((n, l) => n + l.qty * byId[l.id].price, 0);

  function addToBag(id, colorIdx = 0, qty = 1, { silent = false } = {}) {
    const line = bag.find(l => l.id === id && l.c === colorIdx);
    if (line) line.qty += qty; else bag.push({ id, c: colorIdx, qty });
    store.set(bag);
    renderBag();
    const count = $('[data-bag-count]');
    if (count) { count.classList.remove('bump'); void count.offsetWidth; count.classList.add('bump'); }
    if (!silent) toast(`${byId[id].name} added to your bag`, true);
  }

  function setQty(i, qty) {
    if (qty <= 0) bag.splice(i, 1); else bag[i].qty = Math.min(qty, 9);
    store.set(bag);
    renderBag();
  }

  function renderBag() {
    const qty = bagQty();
    $$('[data-bag-count]').forEach(el => { el.textContent = qty; el.classList.toggle('has-items', qty > 0); });
    const btn = $('#bag-button');
    if (btn) btn.setAttribute('aria-label', `Shopping bag, ${qty} item${qty === 1 ? '' : 's'}`);
    const label = $('[data-bag-label]');
    if (label) label.textContent = qty ? `(${qty})` : '';

    const items = $('[data-bag-items]');
    const foot = $('[data-bag-foot]');
    const ship = $('[data-ship]');
    if (!items) return;
    const total = bagTotal();
    const left = FREE_SHIP - total;
    ship.innerHTML = `${left > 0 ? `You’re <strong>${money(left)}</strong> away from free delivery` : 'Your order ships free'}
      <div class="ship-bar__track"><div class="ship-bar__fill" style="--p:${Math.min(100, total / FREE_SHIP * 100)}%"></div></div>`;
    ship.hidden = qty === 0;

    if (!qty) {
      const picks = ['stem-cup', 'wink-ball', 'confetti-strap'].map(id => byId[id]);
      items.innerHTML = `<div class="empty">
        <p class="empty__title">Nothing in here yet.</p>
        <p class="muted">A few small things to start with:</p>
        <div class="empty__picks">${picks.map(p => `
          <button type="button" data-qv="${p.id}"><img src="${img(p.img)}" alt="" width="480" height="480"><span>${p.name}<br><span class="muted">${money(p.price)}</span></span></button>`).join('')}
        </div></div>`;
      foot.innerHTML = `<a class="btn btn--ghost btn--block" href="shop.html">Browse the shop</a>`;
      return;
    }
    items.innerHTML = `<ul>${bag.map((l, i) => {
      const p = byId[l.id], c = p.colors[l.c] || p.colors[0];
      return `<li class="line-item">
        <span class="line-item__img"><img src="${img(p.img)}" alt="" style="filter:${c.filter}" width="480" height="480"></span>
        <div>
          <p class="line-item__name">${p.name}</p>
          <p class="line-item__var">${c.name}</p>
          <div class="line-item__controls">
            <div class="qty" role="group" aria-label="Quantity for ${p.name}">
              <button type="button" data-qty="${i}" data-d="-1" aria-label="Decrease quantity">${icon('minus')}</button>
              <output aria-live="polite">${l.qty}</output>
              <button type="button" data-qty="${i}" data-d="1" aria-label="Increase quantity">${icon('plus')}</button>
            </div>
            <button class="remove" type="button" data-remove="${i}">Remove</button>
          </div>
        </div>
        <p class="line-item__price">${money(p.price * l.qty)}</p>
      </li>`;
    }).join('')}</ul>`;
    foot.innerHTML = `
      <div class="subtotal"><span>Subtotal</span><span>${money(total)}</span></div>
      <p class="drawer__note">Taxes and delivery are calculated at checkout.</p>
      <button class="btn btn--block" type="button" data-checkout>Checkout ${icon('arrow')}</button>
      <p class="proto-note" data-checkout-note hidden>This is a design prototype. Checkout and payments aren’t connected, so no order has been placed.</p>`;
  }

  document.addEventListener('click', e => {
    const q = e.target.closest('[data-qty]');
    if (q) return setQty(+q.dataset.qty, bag[+q.dataset.qty].qty + +q.dataset.d);
    const r = e.target.closest('[data-remove]');
    if (r) { const name = byId[bag[+r.dataset.remove].id].name; setQty(+r.dataset.remove, 0); toast(`${name} removed`); return; }
    if (e.target.closest('[data-checkout]')) { const n = $('[data-checkout-note]'); n.hidden = false; n.focus?.(); }
  });

  /* ---------- toast ---------------------------------------------------- */
  let toastTimer;
  function toast(msg, withBag = false) {
    const t = $('[data-toast]');
    if (!t) return;
    t.innerHTML = msg + (withBag ? ` · <button type="button" data-open="bag" style="text-decoration:underline;text-underline-offset:3px">View bag</button>` : '');
    t.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('is-on'), 3200);
  }

  /* ---------- dialogs -------------------------------------------------- */
  const dialogs = { bag: $('#bag'), qv: $('#qv'), search: $('#search'), menu: $('#menu') };
  let lastFocus = null;
  function openDialog(name) {
    const d = dialogs[name];
    if (!d) return;
    Object.values(dialogs).forEach(o => o !== d && o?.open && o.close());
    if (!d.open) { lastFocus = document.activeElement; d.showModal(); }
    document.body.style.overflow = 'hidden';
    if (name === 'search') { const i = $('[data-search-input]'); i.value = ''; runSearch(''); i.focus(); }
  }
  Object.values(dialogs).forEach(d => {
    if (!d) return;
    d.addEventListener('close', () => {
      if (!Object.values(dialogs).some(o => o?.open)) document.body.style.overflow = '';
      if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    });
    // click on the backdrop closes
    d.addEventListener('click', e => {
      if (e.target === d) {
        const r = d.getBoundingClientRect();
        const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if (!inside || d.classList.contains('search')) d.close();
      }
    });
  });
  document.addEventListener('click', e => {
    const o = e.target.closest('[data-open]');
    if (o) { e.preventDefault(); openDialog(o.dataset.open); return; }
    const c = e.target.closest('[data-close]');
    if (c) { c.closest('dialog')?.close(); return; }
    if (e.target.closest('[data-close-nav]')) dialogs.menu?.close();
    const qv = e.target.closest('[data-qv]');
    if (qv) { e.preventDefault(); openQuickView(qv.dataset.qv); return; }
    const info = e.target.closest('[data-info]');
    if (info) { e.preventDefault(); toast('That page isn’t part of this concept'); }
  });

  /* ---------- quick view (product detail) ------------------------------ */
  function openQuickView(id, colorIdx = 0) {
    const p = byId[id];
    if (!p || !dialogs.qv) return;
    let c = colorIdx, qty = 1;
    const im = $('[data-qv-img]');
    im.src = img(p.img, 'lg');
    im.alt = `${p.name}, studio photograph`;
    const body = $('[data-qv-body]');
    const paint = () => {
      im.style.filter = p.colors[c].filter;
      body.innerHTML = `
        <span class="label muted">${CATS[p.category].name}</span>
        <h2 class="qv__name" id="qv-name">${p.name}</h2>
        <p class="qv__price">${money(p.price)}</p>
        <p class="qv__desc">${p.description}</p>
        ${p.colors.length > 1 ? `<div>
          <p style="font-size:.875rem;margin-bottom:8px">Colour: <strong>${p.colors[c].name}</strong></p>
          <div class="swatches" role="group" aria-label="Colour">${p.colors.map((col, i) => `
            <button class="swatch" type="button" style="--c:${col.hex};width:36px;height:36px" aria-pressed="${i === c}" aria-label="${col.name}" data-qv-c="${i}"></button>`).join('')}
          </div></div>` : `<p style="font-size:.875rem">Colour: <strong>${p.colors[0].name}</strong></p>`}
        <dl class="qv__specs"><dt>Material</dt><dd>${p.material}</dd><dt>Size</dt><dd>${p.size}</dd><dt>Delivery</dt><dd>2–4 working days · free over ${money(FREE_SHIP)}</dd></dl>
        <div class="qv__buy">
          <div class="qty" role="group" aria-label="Quantity">
            <button type="button" data-qv-q="-1" aria-label="Decrease quantity">${icon('minus')}</button>
            <output aria-live="polite">${qty}</output>
            <button type="button" data-qv-q="1" aria-label="Increase quantity">${icon('plus')}</button>
          </div>
          <button class="btn" type="button" data-qv-add>Add to bag · ${money(p.price * qty)}</button>
        </div>`;
    };
    body.onclick = e => {
      const s = e.target.closest('[data-qv-c]');
      if (s) { c = +s.dataset.qvC; paint(); $(`[data-qv-c="${c}"]`, body).focus(); return; }
      const q = e.target.closest('[data-qv-q]');
      if (q) { qty = Math.max(1, Math.min(9, qty + +q.dataset.qvQ)); paint(); $(`[data-qv-q="${q.dataset.qvQ}"]`, body).focus(); return; }
      if (e.target.closest('[data-qv-add]')) { addToBag(p.id, c, qty, { silent: true }); dialogs.qv.close(); openDialog('bag'); }
    };
    paint();
    openDialog('qv');
  }

  /* ---------- product card -------------------------------------------- */
  function card(p) {
    const li = document.createElement('li');
    li.className = 'card reveal' + (p.alt ? ' has-alt' : '');
    li.dataset.id = p.id;
    li.dataset.c = 0;
    li.innerHTML = `
      <div class="card__media">
        <a href="#" data-qv="${p.id}" tabindex="-1" aria-hidden="true">
          <img class="card__img" src="${img(p.img)}" srcset="${srcset(p.img)}" sizes="(max-width:1024px) 46vw, 23vw" alt="" loading="lazy" width="480" height="480">
          ${p.alt ? `<img class="card__alt" src="${img(p.alt)}" srcset="${altSrcset(p.alt)}" sizes="(max-width:1024px) 46vw, 23vw" alt="" loading="lazy" width="512" height="768">` : ''}
        </a>
        ${p.badge ? `<span class="label card__badge">${p.badge}</span>` : ''}
        <button class="card__quick" type="button" data-quick="${p.id}" aria-label="Quick add ${p.name}">${icon('plus')}<span>Quick add</span></button>
      </div>
      <div class="card__info">
        <div class="card__row"><h3 class="card__name"><a href="#" data-qv="${p.id}">${p.name}</a></h3><span class="card__price">${money(p.price)}</span></div>
        <p class="card__sub">${p.material.split(',')[0]}</p>
        ${p.colors.length > 1 ? `<div class="swatches" role="group" aria-label="Colour for ${p.name}">
          ${p.colors.map((c, i) => `<button class="swatch" type="button" style="--c:${c.hex}" aria-pressed="${i === 0}" aria-label="${c.name}" data-swatch="${i}"></button>`).join('')}
          <span class="swatch-name" aria-hidden="true">${p.colors[0].name}</span></div>` : `<div class="swatches"><span class="swatch-name" style="margin:0">${p.colors[0].name}</span></div>`}
      </div>`;
    return li;
  }

  function mini(p) {
    const li = document.createElement('li');
    li.className = 'mini reveal';
    li.innerHTML = `
      <div class="mini__media">
        <a href="#" data-qv="${p.id}" tabindex="-1" aria-hidden="true"><img src="${img(p.img)}" srcset="${srcset(p.img)}" sizes="(max-width:640px) 60vw, 16vw" alt="" loading="lazy" width="480" height="480"></a>
        <button class="mini__add" type="button" data-quick="${p.id}" aria-label="Add ${p.name} to bag">${icon('plus')}</button>
      </div>
      <div><h3 class="mini__name"><a href="#" data-qv="${p.id}">${p.name}</a></h3><p class="mini__price">${money(p.price)}</p></div>`;
    return li;
  }

  document.addEventListener('click', e => {
    const s = e.target.closest('[data-swatch]');
    if (s) {
      const el = s.closest('.card'), p = byId[el.dataset.id], i = +s.dataset.swatch;
      el.dataset.c = i;
      $('.card__img', el).style.filter = p.colors[i].filter;
      $$('[data-swatch]', el).forEach(b => b.setAttribute('aria-pressed', b === s));
      $('.swatch-name', el).textContent = p.colors[i].name;
      return;
    }
    const q = e.target.closest('[data-quick]');
    if (q) {
      const holder = q.closest('.card');
      addToBag(q.dataset.quick, holder ? +holder.dataset.c : 0);
      q.classList.add('is-added');
      const span = $('span', q), prev = span?.textContent;
      if (span) span.textContent = 'Added';
      setTimeout(() => { q.classList.remove('is-added'); if (span) span.textContent = prev; }, 1600);
    }
  });

  // Mount product lists
  $$('[data-products]').forEach(ul => ul.dataset.products.split(',').forEach(id => byId[id] && ul.append(card(byId[id]))));
  $$('[data-mini]').forEach(ul => ul.dataset.mini.split(',').forEach(id => byId[id] && ul.append(mini(byId[id]))));
  $$('[data-cat-count]').forEach(el => {
    const n = P.filter(p => p.category === el.dataset.catCount).length;
    el.textContent = `${String(n).padStart(2, '0')} ${n === 1 ? 'object' : 'objects'}`;
  });

  /* ---------- curated edit: list + hotspots ---------------------------- */
  const editList = $('[data-edit-list]');
  if (editList) {
    const ids = editList.dataset.editList.split(',');
    editList.innerHTML = ids.map((id, i) => {
      const p = byId[id];
      return `<li class="edit-item" data-edit-item="${id}">
        <span class="edit-item__no">0${i + 1}</span>
        <img class="edit-item__thumb" src="${img(p.img)}" alt="" loading="lazy" width="480" height="480">
        <div><a class="edit-item__name" href="#" data-qv="${id}">${p.name}</a>
          <div class="edit-item__meta"><span>${money(p.price)}</span><button class="edit-item__add" type="button" data-quick="${id}" aria-label="Add ${p.name} to bag">Add +</button></div></div>
      </li>`;
    }).join('');
    $('[data-add-edit]')?.addEventListener('click', () => {
      ids.forEach(id => addToBag(id, 0, 1, { silent: true }));
      openDialog('bag');
    });
  }

  const fig = $('[data-hotspots]');
  if (fig) {
    let pop = null;
    const closePop = () => {
      pop?.remove(); pop = null;
      $$('.hotspot', fig).forEach(h => h.setAttribute('aria-expanded', 'false'));
      $$('.edit-item').forEach(i => i.classList.remove('is-active'));
    };
    const openPop = h => {
      const id = h.dataset.spot, p = byId[id];
      closePop();
      h.setAttribute('aria-expanded', 'true');
      $(`[data-edit-item="${id}"]`)?.classList.add('is-active');
      // On narrow screens the numbered list below the image is the detail view
      if (matchMedia('(max-width: 1024px)').matches) {
        $(`[data-edit-item="${id}"]`)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
        return;
      }
      pop = document.createElement('div');
      pop.className = 'pop';
      pop.id = 'pop-' + id;
      pop.setAttribute('role', 'group');
      pop.setAttribute('aria-label', p.name);
      pop.style.cssText = h.getAttribute('style');
      const x = parseFloat(h.style.getPropertyValue('--x'));
      if (x > 78) pop.dataset.align = 'right'; else if (x < 22) pop.dataset.align = 'left';
      pop.innerHTML = `<img src="${img(p.img)}" alt="" width="480" height="480">
        <div><p class="pop__name">${p.name}</p><p class="pop__price">${money(p.price)}</p>
        <div class="pop__actions"><button type="button" data-quick="${id}">Add to bag</button><button type="button" data-qv="${id}">Details</button></div></div>`;
      h.setAttribute('aria-controls', pop.id);
      fig.append(pop);
    };
    fig.addEventListener('click', e => {
      const h = e.target.closest('.hotspot');
      if (h) { h.getAttribute('aria-expanded') === 'true' ? closePop() : openPop(h); return; }
      if (!e.target.closest('.pop')) closePop();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && pop) { const h = $('.hotspot[aria-expanded="true"]', fig); closePop(); h?.focus(); } });
    document.addEventListener('click', e => { if (pop && !fig.contains(e.target)) closePop(); });
    // list hover highlights the matching hotspot
    $$('.edit-item').forEach(item => {
      const h = $(`.hotspot[data-spot="${item.dataset.editItem}"] .hotspot__dot`, fig);
      item.addEventListener('mouseenter', () => h && (h.style.transform = 'scale(1.18)', h.style.background = 'var(--ink)', h.style.color = 'var(--bg)'));
      item.addEventListener('mouseleave', () => h && (h.style.cssText = ''));
    });
  }

  /* ---------- new arrivals scroller ----------------------------------- */
  const scroller = $('.row-scroller');
  if (scroller) {
    const [prev, next] = $$('[data-scroll]');
    const update = () => {
      prev.disabled = scroller.scrollLeft < 4;
      next.disabled = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4;
    };
    $$('[data-scroll]').forEach(b => b.addEventListener('click', () => {
      scroller.scrollBy({ left: +b.dataset.scroll * scroller.clientWidth * .8, behavior: reduced ? 'auto' : 'smooth' });
    }));
    scroller.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
  }

  /* ---------- search --------------------------------------------------- */
  function runSearch(q) {
    const res = $('[data-search-results]'), hint = $('[data-search-hint]');
    if (!res) return;
    q = q.trim().toLowerCase();
    const list = q ? P.filter(p => [p.name, CATS[p.category].name, p.material, p.description, ...p.colors.map(c => c.name)].join(' ').toLowerCase().includes(q)) : P.filter(p => p.badge === 'Bestseller' || p.badge === 'New').slice(0, 6);
    hint.innerHTML = q
      ? `${list.length} result${list.length === 1 ? '' : 's'} for “${q.replace(/[<>&"]/g, '')}”`
      : `Try: ${['lamp', 'ceramic', 'cobalt', 'bag'].map(t => `<button type="button" data-term="${t}">${t}</button>`).join('')}`;
    res.innerHTML = list.length ? list.map(p => `<button type="button" data-qv="${p.id}"><img src="${img(p.img)}" alt="" width="480" height="480"><span><strong>${p.name}</strong><span class="muted">${money(p.price)}</span></span></button>`).join('')
      : `<p class="muted" style="grid-column:1/-1">Nothing matches that yet. We add new objects every week.</p>`;
  }
  $('[data-search-input]')?.addEventListener('input', e => runSearch(e.target.value));
  $('[data-search-hint]')?.addEventListener('click', e => {
    const t = e.target.closest('[data-term]');
    if (t) { const i = $('[data-search-input]'); i.value = t.dataset.term; runSearch(t.dataset.term); i.focus(); }
  });

  /* ---------- newsletter ---------------------------------------------- */
  $('[data-signup]')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = $('input', e.target), msg = $('#signup-msg');
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
    msg.className = 'signup-msg ' + (ok ? 'is-ok' : 'is-error');
    input.setAttribute('aria-invalid', String(!ok));
    if (!ok) { msg.textContent = 'Please enter a valid email address.'; input.focus(); return; }
    msg.textContent = 'Thank you, you’re on the list. (This is a prototype, so no address was stored or sent.)';
    e.target.reset();
  });

  /* ---------- shop page ------------------------------------------------ */
  const shopGrid = $('[data-shop-grid]');
  if (shopGrid) {
    const chips = $('[data-chips]'), sortSel = $('[data-sort]'), count = $('[data-result-count]'), title = $('[data-shop-title]');
    const params = new URLSearchParams(location.search);
    let cat = CATS[params.get('c')] ? params.get('c') : 'all';
    chips.innerHTML = [['all', 'Everything', P.length], ...Object.entries(CATS).map(([k, v]) => [k, v.name, P.filter(p => p.category === k).length])]
      .map(([k, n, c]) => `<button class="chip" type="button" data-cat="${k}" aria-pressed="${k === cat}">${n}<sup>${c}</sup></button>`).join('');
    const render = () => {
      let list = P.filter(p => cat === 'all' || p.category === cat);
      const s = sortSel.value;
      if (s === 'low') list = [...list].sort((a, b) => a.price - b.price);
      if (s === 'high') list = [...list].sort((a, b) => b.price - a.price);
      if (s === 'new') list = [...list].sort((a, b) => (b.badge === 'New') - (a.badge === 'New'));
      shopGrid.replaceChildren(...list.map(card));
      count.textContent = `${list.length} object${list.length === 1 ? '' : 's'}`;
      title.textContent = cat === 'all' ? 'Everything' : CATS[cat].name;
      $$('.chip', chips).forEach(b => b.setAttribute('aria-pressed', b.dataset.cat === cat));
      observeReveals();
    };
    chips.addEventListener('click', e => {
      const b = e.target.closest('[data-cat]');
      if (!b) return;
      cat = b.dataset.cat;
      history.replaceState(null, '', cat === 'all' ? 'shop.html' : `shop.html?c=${cat}`);
      render();
    });
    sortSel.addEventListener('change', render);
    render();
  }

  /* ---------- motion --------------------------------------------------- */
  const header = $('.site-header');
  const onScroll = () => header?.classList.toggle('is-scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function observeReveals() {
    if (!('IntersectionObserver' in window) || reduced) { $$('.reveal').forEach(el => el.classList.add('is-in')); return; }
    io ||= new IntersectionObserver(entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    $$('.reveal:not(.is-in)').forEach((el, i) => {
      if (!el.style.getPropertyValue('--d') && el.parentElement.children.length > 1) el.style.setProperty('--d', `${(i % 4) * 70}ms`);
      io.observe(el);
    });
  }
  observeReveals();

  // Campaign image drifts slightly slower than the page
  const par = $('[data-parallax]');
  if (par && !reduced && matchMedia('(min-width: 761px)').matches) {
    let ticking = false;
    const move = () => {
      const r = par.parentElement.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) {
        const t = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        par.style.transform = `translate3d(0, ${(-7 + t * 7).toFixed(2)}%, 0)`;
      }
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(move); } }, { passive: true });
    move();
  }

  renderBag();
  const ready = () => document.documentElement.classList.add('is-ready');
  requestAnimationFrame(() => requestAnimationFrame(ready));
  setTimeout(ready, 400); // background tabs may never paint a frame
})();
