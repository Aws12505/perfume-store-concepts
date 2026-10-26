/* Athar Parfums — front-end demo (no backend). */
(() => {
  const IMG = (id, w = 900) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
  const FREE_SHIP = 300;
  const BRAND = { brand: "ATHAR", font: "'Cormorant Garamond', serif", labelStyle: "dark", gold: "#d8b96f", dark: true };
  const L = (shape, liquid, cap, name, extra) => ({ shape, liquid, cap, name, ...extra });
  const N = (top, heart, base) => ({ top, heart, base });
  const SIZES = [{ ar: "200 مل", en: "200ml", mult: 1 }, { ar: "100 مل", en: "100ml", mult: 0.62 }];

  const PRODUCTS = [
    { id: "cordoba-nights", ar: "ليالي قرطبة", en: "Cordoba Nights", price: 290, tag: "best", bg: "#1d1214", photo: "1640869116016-93c00ba94b28",
      look: [L("flacon", "#7a1f2b", "gold", "Cordoba Nights")], family: ["شرقي زهري", "Floral oriental"],
      notes: N(["زعفران، توت أحمر", "Saffron, red berries"], ["ورد دمشقي", "Damask rose"], ["عود، جلد", "Oud, leather"]),
      desc: ["أمسية أندلسية دافئة: ورد دمشقي يلتقي بالعود والجلد تحت سماء قرطبة.", "A warm Andalusian evening: Damask rose meets oud and leather beneath Cordoba's sky."] },
    { id: "sand-valley", ar: "وادي الرمال", en: "Sand Valley", price: 290, tag: "best", bg: "#1e1710", photo: "1489493585363-d69421e0edd3",
      look: [L("square", "#c98a3a", "gold", "Sand Valley")], family: ["عنبري خشبي", "Amber woody"],
      notes: N(["هيل", "Cardamom"], ["لبان", "Frankincense"], ["عنبر، صندل", "Amber, sandalwood"]),
      desc: ["حرارة الرمال الذهبية عند الغروب، بخور اللبان وعنبر دافئ يدوم.", "The heat of golden dunes at sunset — frankincense smoke and lasting amber."] },
    { id: "legacy", ar: "إرث", en: "Legacy", price: 290, bg: "#16120f", photo: "1738414808975-201966230c59",
      look: [L("tall", "#3d2a1e", "black", "Legacy", { labelStyle: "gold" })], family: ["خشبي جلدي", "Leather woody"],
      notes: N(["برغموت", "Bergamot"], ["تبغ، عسل", "Tobacco, honey"], ["عود هندي", "Indian oud"]),
      desc: ["عطر يُورّث: تبغ وعسل وعود هندي معتّق، بتوقيع كلاسيكي لا يشيخ.", "A scent to pass down: tobacco, honey and aged Indian oud — a timeless signature."] },
    { id: "arabian-sea", ar: "بحر العرب", en: "Arabian Sea", price: 290, tag: "new", bg: "#10161b", photo: "1608721279136-cd41b752fa41",
      look: [L("square", "#2f5d7c", "silver", "Arabian Sea")], family: ["مائي منعش", "Fresh aquatic"],
      notes: N(["ملح البحر، ليمون", "Sea salt, lemon"], ["عنبر رمادي", "Ambergris"], ["مسك، خشب الأرز", "Musk, cedar"]),
      desc: ["ملحٌ ونسيمٌ وعنبر رمادي — ذكرى صيف على ساحل عُمان.", "Salt, breeze and ambergris — a summer memory on the Omani coast."] },
    { id: "first-rain", ar: "المطر الأول", en: "First Rain", price: 290, tag: "new", bg: "#121610", photo: "1605752995124-4a2580df5dff",
      look: [L("tall", "#7c8f3a", "gold", "First Rain")], family: ["أخضر ترابي", "Green earthy"],
      notes: N(["برغموت أخضر", "Green bergamot"], ["فيتيفر", "Vetiver"], ["طحلب البلوط", "Oakmoss"]),
      desc: ["رائحة الأرض بعد المطر الأول: أخضر، ترابي، ومنعش للروح.", "The smell of earth after the first rain — green, earthy and restorative."] },
    { id: "kadi-blossom", ar: "زهر الكادي", en: "Kadi Blossom", price: 290, bg: "#1c1916", photo: "1535683577427-740aaac4ec25",
      look: [L("round", "#e8c8a0", "gold", "Kadi Blossom")], family: ["زهري أبيض", "White floral"],
      notes: N(["نيرولي", "Neroli"], ["زهر الكادي، ياسمين", "Kadi flower, jasmine"], ["مسك أبيض", "White musk"]),
      desc: ["زهرة الكادي الحجازية بعطرها الشهير، مع ياسمين ومسك أبيض ناعم.", "The famed Hejazi kadi blossom with jasmine and soft white musk."] },
    { id: "old-muscat", ar: "مسقط القديمة", en: "Old Muscat", price: 290, bg: "#1d1410", photo: "1605752995124-4a2580df5dff",
      look: [L("flacon", "#b04a1f", "wood", "Old Muscat")], family: ["توابل شرقية", "Spicy oriental"],
      notes: N(["قرفة، فلفل وردي", "Cinnamon, pink pepper"], ["لبان ظفاري", "Dhofari frankincense"], ["عود، فانيلا", "Oud, vanilla"]),
      desc: ["أسواق مسقط القديمة: توابل ولبان ظفاري ودخان العود.", "The old souqs of Muscat: spices, Dhofari frankincense and oud smoke."] },
    { id: "pure-musk", ar: "مسك الطهارة", en: "Pure Musk", price: 250, bg: "#1b1916", photo: "1705899853374-d91c048b81d2",
      look: [L("round", "#efe4d6", "white", "Pure Musk")], family: ["مسكي", "Musky"],
      notes: N(["زنبق", "Lily"], ["مسك أبيض", "White musk"], ["صندل", "Sandalwood"]),
      desc: ["مسك نقي ناعم كالحرير، مثالي كطبقة أولى تحت أي عطر.", "Pure, silk-soft musk — the perfect first layer beneath any scent."] },
    { id: "black-oud", ar: "العود الأسود", en: "Black Oud", price: 420, tag: "limited", bg: "#120f0c", photo: "1549944850-84e00be4203b",
      look: [L("tall", "#1f1410", "gold", "Black Oud", { labelStyle: "gold" })], family: ["عود", "Oud"],
      notes: N(["زعفران", "Saffron"], ["عود كمبودي", "Cambodian oud"], ["باتشولي، جلد", "Patchouli, leather"]),
      desc: ["أندر ما في خزائننا: عود كمبودي معتّق 20 عاماً، بإصدار مرقّم.", "The rarest in our vaults: Cambodian oud aged 20 years, in a numbered edition."] },
  ];

  const EXTRAS = [
    { id: "valley-set", ar: "طقم الوادي", en: "The Valley Set", price: 590, compare: 870, tag: "limited", bg: "#1a140f", photo: "1489493585363-d69421e0edd3",
      look: [L("flacon", "#7a1f2b", "gold", "Cordoba Nights"), L("tall", "#3d2a1e", "black", "Legacy", { labelStyle: "gold" }), L("square", "#c98a3a", "gold", "Sand Valley")],
      sizes: [{ ar: "3 × 100 مل", en: "3 × 100ml", mult: 1 }], family: ["طقم هدايا", "Gift set"],
      notes: N(["ليالي قرطبة", "Cordoba Nights"], ["إرث", "Legacy"], ["وادي الرمال", "Sand Valley"]),
      desc: ["ثلاثة عطور 100 مل في صندوق خشبي مبطّن بالمخمل، مع بطاقة إهداء مكتوبة بخط اليد.", "Three 100ml perfumes in a velvet-lined wooden case with a hand-written card."] },
    { id: "musk-trio", ar: "ثلاثية المسك", en: "The Musk Trio", price: 450, compare: 600, bg: "#1b1916", photo: "1705899853374-d91c048b81d2",
      look: [L("round", "#efe4d6", "white", "Pure Musk"), L("round", "#e9c9b8", "rose", "Rose Musk"), L("round", "#d9c08f", "gold", "Amber Musk")],
      sizes: [{ ar: "3 × 50 مل", en: "3 × 50ml", mult: 1 }], family: ["مسكي", "Musky"],
      notes: N(["مسك أبيض", "White musk"], ["مسك الورد", "Rose musk"], ["مسك العنبر", "Amber musk"]),
      desc: ["ثلاثة أوجه للمسك — نقي، وردي، وعنبري — للاستخدام اليومي والطبقات.", "Three faces of musk — pure, rose and amber — for every day and for layering."] },
    { id: "hair-amber", ar: "عطر الشعر — عنبر", en: "Amber Hair Mist", price: 160, bg: "#1d1711", photo: "1640869116016-93c00ba94b28",
      look: [L("tall", "#d6a35a", "gold", "Amber Hair Mist")], sizes: [{ ar: "50 مل", en: "50ml", mult: 1 }], family: ["الشعر والجسم", "Hair & body"],
      notes: N(["برتقال", "Orange"], ["عنبر", "Amber"], ["فانيلا", "Vanilla"]),
      desc: ["رذاذ خفيف للشعر بزيت الأرغان، خالٍ من الكحول.", "A light, alcohol-free hair mist enriched with argan oil."] },
    { id: "home-bakhoor", ar: "معطر المنزل — بخور", en: "Bakhoor Room Spray", price: 220, bg: "#18120e", photo: "1535683577427-740aaac4ec25",
      look: [L("square", "#5a3a24", "wood", "Bakhoor Room")], sizes: [{ ar: "250 مل", en: "250ml", mult: 1 }], family: ["المنزل", "Home"],
      notes: N(["هيل", "Cardamom"], ["بخور", "Bakhoor"], ["عود", "Oud"]),
      desc: ["دفء البخور في رشة واحدة — لمجلسك وغرفتك دون دخان.", "The warmth of bakhoor in one spray — for your majlis, without the smoke."] },
  ];

  const ALL = [...PRODUCTS, ...EXTRAS];
  const byId = (id) => ALL.find((p) => p.id === id);
  const sizesOf = (p) => p.sizes || SIZES;
  const shot = (p) => Bottle(p.look, p.bg, BRAND);

  const TILES = [
    { ar: "المجموعة المحدودة", en: "Limited collection", open: "black-oud", shot: "black-oud" },
    { ar: "المجموعة الفاخرة", en: "Luxury collection", open: "cordoba-nights", photo: "1640869116016-93c00ba94b28" },
    { ar: "الشعر والجسم", en: "Hair & body", open: "hair-amber", shot: "hair-amber" },
    { ar: "أطقم العطور", en: "Perfume sets", open: "valley-set", shot: "valley-set" },
    { ar: "مجموعة المسك", en: "Musk collection", open: "musk-trio", shot: "musk-trio" },
    { ar: "معطرات المنزل", en: "Home fragrance", open: "home-bakhoor", photo: "1535683577427-740aaac4ec25" },
  ];
  const MARQUEE = [["عود", "Oud"], ["عنبر", "Amber"], ["مسك أبيض", "White musk"], ["ورد طائفي", "Taif rose"], ["زعفران", "Saffron"], ["لبان ظفاري", "Frankincense"], ["صندل", "Sandalwood"], ["زهر الكادي", "Kadi blossom"]];

  /* ---------- i18n ---------- */
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  let lang = store.get("athar-lang") || "ar";
  const t = (ar, en) => (lang === "ar" ? ar : en);
  const tx = (pair) => pair[lang === "ar" ? 0 : 1];
  const money = (n) => { const v = Math.round(n).toLocaleString("en-US"); return lang === "ar" ? `${v} د.إ` : `AED ${v}`; };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    $$("[data-ar]").forEach((el) => (el.textContent = el.dataset[lang]));
    $$("[data-ph-ar]").forEach((el) => (el.placeholder = lang === "ar" ? el.dataset.phAr : el.dataset.phEn));
    renderAll();
  }

  /* ---------- Render ---------- */
  const tagLabel = (tag) => ({ best: t("الأكثر طلباً", "Best seller"), new: t("جديد", "New"), limited: t("إصدار محدود", "Limited") }[tag] || "");

  function cardHtml(p) {
    return `
      <article class="pcard">
        <div class="pcard__media" data-quick-open="${p.id}">
          ${p.tag ? `<span class="pcard__tag">${tagLabel(p.tag)}</span>` : ""}
          <div class="shot">${shot(p)}</div>
          <img src="${IMG(p.photo, 700)}" alt="" loading="lazy">
          <button class="pcard__add" data-add="${p.id}">${t("أضف إلى الحقيبة", "Add to bag")}</button>
        </div>
        <div class="pcard__info">
          <div>
            <h3 class="pcard__name" data-quick-open="${p.id}">${t(p.ar, p.en)}</h3>
            <span class="pcard__meta">${tx(p.family)} · ${sizesOf(p)[0][lang]}</span>
          </div>
          <span class="pcard__price">${money(p.price)}${p.compare ? `<s>${money(p.compare)}</s>` : ""}</span>
        </div>
      </article>`;
  }

  function renderAll() {
    $("[data-rail]").innerHTML = PRODUCTS.map(cardHtml).join("");
    $("[data-tiles]").innerHTML = TILES.map((tl) => `
      <a href="#" class="tile reveal is-in" data-quick-open="${tl.open}">
        ${tl.shot ? `<div class="shot">${shot(byId(tl.shot))}</div>` : `<img src="${IMG(tl.photo, 900)}" alt="" loading="lazy">`}
        <div class="tile__label"><h3>${t(tl.ar, tl.en)}</h3><span class="link-line">${t("اكتشف", "Discover")}</span></div>
      </a>`).join("");
    const items = MARQUEE.map((m) => `<span>${tx(m)}</span>`).join("");
    $("[data-marquee]").innerHTML = items + items;
    const set = byId("valley-set");
    $("[data-spot-shot]").innerHTML = `<div class="shot">${shot(set)}</div>`;
    $("[data-spot-price]").innerHTML = `${money(set.price)}<s>${money(set.compare)}</s>`;
    renderCart();
    if (quickId) openQuick(quickId, true);
    updateSearch();
  }

  /* ---------- Cart ---------- */
  let cart = [];
  try { cart = JSON.parse(store.get("athar-cart")) || []; } catch (e) {}
  const save = () => store.set("athar-cart", JSON.stringify(cart));
  const unit = (l) => byId(l.id).price * sizesOf(byId(l.id))[l.size].mult;

  function addToCart(id, size = 0, qty = 1) {
    const ex = cart.find((l) => l.id === id && l.size === size);
    if (ex) ex.qty += qty; else cart.push({ id, size, qty });
    save(); renderCart();
    $$("[data-cart-count]").forEach((el) => { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); });
    open("cart");
  }

  function renderCart() {
    const count = cart.reduce((s, l) => s + l.qty, 0);
    const total = cart.reduce((s, l) => s + unit(l) * l.qty, 0);
    $$("[data-cart-count]").forEach((el) => (el.textContent = count));
    $("[data-cart-total]").textContent = money(total);
    const left = FREE_SHIP - total;
    $("[data-ship-text]").innerHTML = left > 0
      ? t(`أنت على بُعد <b>${money(left)}</b> من الشحن المجاني`, `You're <b>${money(left)}</b> away from complimentary shipping`)
      : t("✦ طلبك مؤهل <b>للشحن المجاني</b>", "✦ Your order ships <b>complimentary</b>");
    $("[data-ship-fill]").style.width = Math.min(100, (total / FREE_SHIP) * 100) + "%";
    $("[data-checkout]").disabled = !count;
    const box = $("[data-cart-items]");
    if (!cart.length) {
      box.innerHTML = `<div class="cart-empty"><svg viewBox="0 0 24 24"><path d="M6 8h12l1 13H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><p>${t("حقيبتك فارغة", "Your bag is empty")}</p><a href="#recommended" class="btn btn--ghost" data-close>${t("اكتشف العطور", "Discover perfumes")}</a></div>`;
      return;
    }
    box.innerHTML = cart.map((l, i) => {
      const p = byId(l.id);
      return `<div class="line">
        <div class="shot line__shot">${shot(p)}</div>
        <div><div class="line__title">${t(p.ar, p.en)}</div><div class="line__meta">${sizesOf(p)[l.size][lang]}</div>
          <div class="qty"><button data-qty="${i}" data-d="-1">−</button><span>${l.qty}</span><button data-qty="${i}" data-d="1">+</button></div></div>
        <div class="line__end"><span>${money(unit(l) * l.qty)}</span><button class="line__remove" data-remove="${i}">${t("إزالة", "Remove")}</button></div>
      </div>`;
    }).join("");
  }

  /* ---------- Drawers ---------- */
  const overlay = $("[data-overlay]");
  function open(name) {
    closeAll(true);
    const el = $(`[data-drawer="${name}"]`);
    el.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("lock");
    if (name === "search") setTimeout(() => $("[data-search-input]").focus(), 350);
  }
  function closeAll(keepQuick) {
    $$("[data-drawer].is-open").forEach((d) => d.classList.remove("is-open"));
    overlay.classList.remove("is-open");
    document.body.classList.remove("lock");
    if (!keepQuick) quickId = null;
  }

  /* ---------- Quick view ---------- */
  let quickId = null, qvSize = 0, qvQty = 1;
  function openQuick(id, rerender) {
    const p = byId(id);
    if (!rerender) { qvSize = 0; qvQty = 1; }
    quickId = id;
    const sizes = sizesOf(p);
    const price = p.price * sizes[qvSize].mult;
    $("[data-quick]").innerHTML = `
      <button class="icon-btn qv__close" data-close aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
      <div class="qv__gallery">
        <div class="qv__main shot">${shot(p)}</div>
        <div class="qv__thumbs"><button class="shot is-active" data-thumb="shot">${shot(p)}</button><button data-thumb="${p.photo}"><img src="${IMG(p.photo, 160)}" alt=""></button></div>
      </div>
      <div class="qv__info">
        <span class="eyebrow">${tx(p.family)}${p.tag ? " · " + tagLabel(p.tag) : ""}</span>
        <h3>${t(p.ar, p.en)}</h3>
        <div class="qv__price">${money(price)}${p.compare ? `<s>${money(p.compare)}</s>` : ""}</div>
        <p class="qv__desc">${tx(p.desc)}</p>
        <span class="opt-label">${t("الحجم", "Size")}</span>
        <div class="sizes">${sizes.map((s, i) => `<button class="size ${i === qvSize ? "is-active" : ""}" data-size="${i}">${s[lang]}</button>`).join("")}</div>
        <div class="notes-list">
          <div><span>${t("المقدمة", "Top")}</span>${tx(p.notes.top)}</div>
          <div><span>${t("القلب", "Heart")}</span>${tx(p.notes.heart)}</div>
          <div><span>${t("القاعدة", "Base")}</span>${tx(p.notes.base)}</div>
        </div>
        <div class="qv__actions">
          <div class="qty"><button data-qv-qty="-1">−</button><span>${qvQty}</span><button data-qv-qty="1">+</button></div>
          <button class="btn btn--gold" data-qv-add>${t("أضف إلى الحقيبة", "Add to bag")} · ${money(price * qvQty)}</button>
        </div>
        <p class="muted">${t("أو 4 دفعات بدون فوائد مع tabby · عيّنتان مجاناً مع كل طلب", "Or 4 interest-free payments with tabby · Two free samples with every order")}</p>
      </div>`;
    if (!rerender) open("quick");
  }

  /* ---------- Search ---------- */
  function updateSearch() {
    const q = $("[data-search-input]").value.trim().toLowerCase();
    const hits = ALL.filter((p) => !q || [p.ar, p.en, ...p.family, ...Object.values(p.notes).flat()].join(" ").toLowerCase().includes(q));
    $("[data-search-results]").innerHTML = hits.length
      ? hits.map((p) => `<div class="search-hit" data-quick-open="${p.id}"><div class="shot search-hit__shot">${shot(p)}</div><div><b>${t(p.ar, p.en)}</b><span>${tx(p.family)} · ${money(p.price)}</span></div></div>`).join("")
      : `<p class="muted">${t("لا توجد نتائج", "No results")}</p>`;
  }

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    const el = $("[data-toast]");
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-show"), 2600);
  }

  /* ---------- Events ---------- */
  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, a, [data-quick-open]");
    if (!el) { if (e.target === overlay || e.target.matches(".modal")) closeAll(); return; }
    const d = el.dataset;
    if (d.add) { e.preventDefault(); e.stopPropagation(); addToCart(d.add); toast(t("✦ أضيف إلى حقيبتك", "✦ Added to your bag")); return; }
    if (d.quickOpen) { e.preventDefault(); closeAll(true); openQuick(d.quickOpen); return; }
    if (d.open) { open(d.open); return; }
    if ("close" in d) { closeAll(); return; }
    if ("langToggle" in d) { lang = lang === "ar" ? "en" : "ar"; store.set("athar-lang", lang); applyLang(); return; }
    if (d.gateLang) { $$(".gate__opt").forEach((b) => b.classList.toggle("is-active", b === el)); return; }
    if ("gateEnter" in d) {
      lang = $(".gate__opt.is-active").dataset.gateLang;
      store.set("athar-lang", lang);
      $("[data-gate]").classList.add("is-hidden");
      applyLang();
      return;
    }
    if (d.scroll) { const rail = $("[data-rail]"); const w = rail.firstElementChild.offsetWidth + 20; rail.scrollBy({ left: +d.scroll * w * (lang === "ar" ? -1 : 1), behavior: "smooth" }); return; }
    if (d.qty) { const l = cart[+d.qty]; l.qty += +d.d; if (l.qty < 1) cart.splice(+d.qty, 1); save(); renderCart(); return; }
    if (d.remove) { cart.splice(+d.remove, 1); save(); renderCart(); return; }
    if (d.size) { qvSize = +d.size; openQuick(quickId, true); return; }
    if (d.qvQty) { qvQty = Math.max(1, qvQty + +d.qvQty); openQuick(quickId, true); return; }
    if ("qvAdd" in d) { const id = quickId; closeAll(); addToCart(id, qvSize, qvQty); return; }
    if (d.thumb) {
      $(".qv__main").innerHTML = d.thumb === "shot" ? shot(byId(quickId)) : `<img src="${IMG(d.thumb, 1000)}" alt="">`;
      $$(".qv__thumbs button").forEach((b) => b.classList.toggle("is-active", b === el));
      return;
    }
    if ("checkout" in d) { toast(t("هذا متجر تجريبي — الدفع غير مفعّل", "Demo store — checkout is disabled")); return; }
    if (d.toastAr) { e.preventDefault(); toast(lang === "ar" ? d.toastAr : d.toastEn); return; }
    if (el.matches('a[href^="#"]') && $(".drawer.is-open, .search.is-open")) closeAll();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
  $("[data-search-input]").addEventListener("input", updateSearch);
  $("[data-fake-form]").addEventListener("submit", (e) => { e.preventDefault(); e.target.reset(); toast(t("✦ أهلاً بك في دائرة أثر", "✦ Welcome to the Athar circle")); });

  /* ---------- Hero ---------- */
  const slides = $$(".hero__slide");
  const bars = $$(".hero__bars button");
  let cur = 0, timer;
  function go(n) {
    cur = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === cur));
    bars.forEach((b, i) => { b.classList.remove("is-active"); if (i === cur) { void b.offsetWidth; b.classList.add("is-active"); } });
    $("[data-hero-n]").textContent = String(cur + 1).padStart(2, "0");
    clearTimeout(timer);
    timer = setTimeout(() => go(cur + 1), 7000);
  }
  bars.forEach((b, i) => b.addEventListener("click", () => go(i)));

  /* ---------- Scroll effects ---------- */
  const header = $("#header");
  const pbg = $(".parallax__bg");
  function onScroll() {
    header.classList.toggle("is-solid", scrollY > 40);
    const r = pbg.parentElement.getBoundingClientRect();
    if (r.bottom > 0 && r.top < innerHeight) pbg.style.transform = `translateY(${(r.top - innerHeight / 2) * -0.12}px)`;
  }
  addEventListener("scroll", onScroll, { passive: true });
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { threshold: 0.15 });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- Language gate ---------- */
  if (store.get("athar-lang")) $("[data-gate]").classList.add("is-hidden");

  applyLang();
  go(0);
  onScroll();
})();
