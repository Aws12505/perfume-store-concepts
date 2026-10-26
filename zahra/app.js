/* Zahra Perfumes — front-end demo (no backend). */
(() => {
  const IMG = (id, w = 900) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
  const FREE_SHIP = 349;

  // Packshot look (drawn by bottle.js) + lifestyle photo shown on hover.
  const L = (shape, liquid, cap, name) => ({ shape, liquid, cap, name });
  const LOOKS = {
    "rose-oud":        { bg: "#f7dcd6", photo: "1739190940453-20900e9d18fb", set: [L("flacon", "#c2414f", "gold", "Rose Oud Elixir")] },
    "amber-musk":      { bg: "#f6e6cf", photo: "1705899844877-81bb0a0665c1", set: [L("square", "#e0a24a", "wood", "Amber Musk")] },
    "vanilla-cloud":   { bg: "#f5ece0", photo: "1615108395437-df128ad79e80", set: [L("round", "#ecd29b", "white", "Vanilla Cloud")] },
    "citrus-breeze":   { bg: "#f3f0cf", photo: "1583545889266-55be2d76c6c5", set: [L("tall", "#f2d14b", "silver", "Citrus Breeze")] },
    "white-musk":      { bg: "#ece7e2", photo: "1705899853374-d91c048b81d2", set: [L("square", "#efe6dc", "white", "White Musk")] },
    "saffron-nights":  { bg: "#ecd2bd", photo: "1635796332668-78830169097d", set: [L("square", "#b8561f", "black", "Saffron Nights")] },
    "jasmine-garden":  { bg: "#fbe3e6", photo: "1598121496628-9d8b7578e290", set: [L("round", "#f3b9c6", "rose", "Jasmine Garden")] },
    "leather-tobacco": { bg: "#e4d6c8", photo: "1711359022098-0652aba5c009", set: [L("tall", "#7a3f1d", "black", "Leather & Tobacco")] },
    "oud-oil":         { bg: "#efdcc3", photo: "1738414808975-201966230c59", set: [{ ...L("attar", "#6b2410", "gold", "Royal Oud"), fill: 0.05 }] },
    "blue-iris":       { bg: "#e2e9f4", photo: "1650686037139-f6a8afec44fc", set: [L("flacon", "#8fb4e3", "silver", "Blue Iris")] },
    "rose-mist":       { bg: "#fde7e3", photo: "1572566202186-611ceb4042f0", set: [L("tall", "#f6c6cd", "rose", "Rose Hair Mist")] },
    "golden-amber":    { bg: "#f4dfbd", photo: "1622618991746-fe6004db3a47", set: [L("flacon", "#d9902a", "gold", "Golden Amber")] },
    "discovery":       { bg: "#f6e3d3", photo: "1615634260167-c8cdede054de", set: [L("tall", "#c2414f", "gold", "Rose Oud"), L("tall", "#b8561f", "black", "Saffron"), L("tall", "#e0a24a", "wood", "Amber"), L("tall", "#ecd29b", "white", "Vanilla"), L("tall", "#f3b9c6", "rose", "Jasmine")] },
    "gift-trio":       { bg: "#fbe6dc", photo: "1615108395437-df128ad79e80", set: [L("round", "#f3b9c6", "rose", "Jasmine"), L("round", "#ecd29b", "white", "Vanilla"), L("flacon", "#c2414f", "gold", "Rose Oud")] },
    "oud-bundle":      { bg: "#ead6bf", photo: "1535683577427-740aaac4ec25", set: [{ ...L("attar", "#6b2410", "gold", "Royal Oud"), fill: 0.05 }, L("flacon", "#d9902a", "gold", "Golden Amber"), L("flacon", "#c2414f", "gold", "Rose Oud")] },
    "his-hers":        { bg: "#f1e0d6", photo: "1608721279136-cd41b752fa41", set: [L("square", "#b8561f", "black", "Saffron Nights"), L("round", "#f3b9c6", "rose", "Jasmine Garden")] },
  };
  const BRAND = { brand: "ZAHRA", font: "Fraunces, serif" };
  const shot = (p) => Bottle(LOOKS[p.id].set, LOOKS[p.id].bg, BRAND);

  const NOTES = {
    oud:     { ar: "عود",     en: "Oud",     bg: "#f3e2cf", fg: "#7a4a22", icon: '<path d="M8 21c-1-6 0-12 4-18 4 6 5 12 4 18"/><path d="M12 7v14M9 13l3 2 3-2"/>' },
    musk:    { ar: "مسك",     en: "Musk",    bg: "#f4eee8", fg: "#8a776c", icon: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>' },
    rose:    { ar: "ورد",     en: "Rose",    bg: "#fde0e0", fg: "#c43d5a", icon: '<path d="M12 21v-7"/><path d="M12 14c-4 0-6-3-6-6 2 0 4 1 6 3 2-2 4-3 6-3 0 3-2 6-6 6z"/><path d="M12 11c-1.5-2-1.5-5 0-7 1.5 2 1.5 5 0 7zM9 18c-2 0-3-1-4-2M15 18c2 0 3-1 4-2"/>' },
    amber:   { ar: "عنبر",    en: "Amber",   bg: "#fde8c8", fg: "#b9741c", icon: '<path d="M12 3 5 10l7 11 7-11z"/><path d="M5 10h14M12 3v18"/>' },
    citrus:  { ar: "حمضيات",  en: "Citrus",  bg: "#fbf1c4", fg: "#b98a00", icon: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10M8.5 8.5l7 7M15.5 8.5l-7 7"/>' },
    vanilla: { ar: "فانيلا",  en: "Vanilla", bg: "#f7ecd9", fg: "#8e6a37", icon: '<path d="M6 20c3-5 6-10 12-16"/><path d="M8 12c-2-1-3-3-3-5 2 0 4 1 5 3M14 6c1-2 3-3 5-3 0 2-1 4-3 5"/>' },
    woody:   { ar: "أخشاب",   en: "Woody",   bg: "#e8e0d2", fg: "#5e4a33", icon: '<path d="M12 2 6 10h3l-4 6h5v6h4v-6h5l-4-6h3z"/>' },
    floral:  { ar: "زهري",    en: "Floral",  bg: "#efe3f4", fg: "#8b4ca3", icon: '<circle cx="12" cy="12" r="2.5"/><path d="M12 9.5C10 6 10 3 12 3s2 3 0 6.5zM12 14.5c2 3.5 2 6.5 0 6.5s-2-3 0-6.5zM9.5 12C6 14 3 14 3 12s3-2 6.5 0zM14.5 12c3.5-2 6.5-2 6.5 0s-3 2-6.5 0z"/>' },
  };

  const PRODUCTS = [
    { id: "rose-oud", ar: "إكسير الورد والعود", en: "Rose Oud Elixir", price: 189, compare: 249, rating: 4.9, reviews: 2184, notes: ["rose", "oud", "amber"], tags: ["best", "women", "men"], badge: "best",
      desc: { ar: "توازن ساحر بين الورد الطائفي ودهن العود الكمبودي، مع لمسة زعفران دافئة.", en: "A captivating balance of Taif rose and Cambodian oud, warmed by a touch of saffron." },
      pyramid: { top: ["زعفران", "Saffron"], heart: ["ورد طائفي", "Taif rose"], base: ["عود، عنبر", "Oud, amber"] } },
    { id: "amber-musk", ar: "مسك العنبر", en: "Amber Musk", price: 145, rating: 4.8, reviews: 1320, notes: ["amber", "musk"], tags: ["best", "women", "new"],
      desc: { ar: "مسك ناعم يلتف حول عنبر ذهبي — دفء يدوم حتى نهاية اليوم.", en: "Soft musk wrapped around golden amber — warmth that lasts until nightfall." },
      pyramid: { top: ["برغموت", "Bergamot"], heart: ["عنبر", "Amber"], base: ["مسك أبيض", "White musk"] } },
    { id: "vanilla-cloud", ar: "سحابة الفانيلا", en: "Vanilla Cloud", price: 129, rating: 4.9, reviews: 986, notes: ["vanilla", "musk"], tags: ["best", "new", "women"], badge: "new",
      desc: { ar: "فانيلا مدغشقر مع سكر بني وحليب اللوز — عطر حلو ومريح.", en: "Madagascar vanilla with brown sugar and almond milk — sweet and comforting." },
      pyramid: { top: ["كمثرى", "Pear"], heart: ["حليب اللوز", "Almond milk"], base: ["فانيلا", "Vanilla"] } },
    { id: "citrus-breeze", ar: "نسيم الحمضيات", en: "Citrus Breeze", price: 119, rating: 4.7, reviews: 642, notes: ["citrus", "woody"], tags: ["new", "men"], badge: "new",
      desc: { ar: "انتعاش الليمون الصقلي والنعناع على قاعدة خشب الأرز.", en: "Sicilian lemon and mint over a base of cedarwood." },
      pyramid: { top: ["ليمون", "Lemon"], heart: ["نعناع", "Mint"], base: ["أرز", "Cedar"] } },
    { id: "white-musk", ar: "المسك الأبيض", en: "White Musk", price: 99, compare: 139, rating: 4.8, reviews: 3410, notes: ["musk", "floral"], tags: ["best", "women", "men"], badge: "sale",
      desc: { ar: "المسك الأبيض النظيف الذي يحبه الجميع — مثالي للاستخدام اليومي.", en: "The clean white musk everyone loves — perfect for every day." },
      pyramid: { top: ["زنبق", "Lily"], heart: ["مسك", "Musk"], base: ["خشب الصندل", "Sandalwood"] } },
    { id: "saffron-nights", ar: "ليالي الزعفران", en: "Saffron Nights", price: 210, rating: 4.9, reviews: 1104, notes: ["amber", "oud", "woody"], tags: ["best", "men"], badge: "best",
      desc: { ar: "زعفران فاخر وجلد ناعم وعود — حضور قوي للأمسيات الخاصة.", en: "Precious saffron, soft leather and oud — a bold presence for special evenings." },
      pyramid: { top: ["زعفران", "Saffron"], heart: ["جلد", "Leather"], base: ["عود", "Oud"] } },
    { id: "jasmine-garden", ar: "حديقة الياسمين", en: "Jasmine Garden", price: 159, rating: 4.8, reviews: 758, notes: ["floral", "rose"], tags: ["new", "women"],
      desc: { ar: "ياسمين سامباك وفاوانيا وزهر البرتقال — باقة زهور في زجاجة.", en: "Sambac jasmine, peony and orange blossom — a bouquet in a bottle." },
      pyramid: { top: ["زهر البرتقال", "Neroli"], heart: ["ياسمين", "Jasmine"], base: ["مسك", "Musk"] } },
    { id: "leather-tobacco", ar: "جلد وتبغ", en: "Leather & Tobacco", price: 175, rating: 4.7, reviews: 530, notes: ["woody", "amber"], tags: ["best", "men"],
      desc: { ar: "أوراق التبغ والعسل والجلد المدبوغ — عطر رجالي كلاسيكي بلمسة عصرية.", en: "Tobacco leaf, honey and tanned leather — a modern take on a classic." },
      pyramid: { top: ["عسل", "Honey"], heart: ["تبغ", "Tobacco"], base: ["جلد", "Leather"] } },
    { id: "oud-oil", ar: "دهن العود الملكي", en: "Royal Oud Oil", price: 320, rating: 5.0, reviews: 412, notes: ["oud", "woody"], tags: ["best", "new", "men", "women"], badge: "limited", sizes: [{ ar: "12 مل", en: "12ml", mult: 1 }, { ar: "24 مل", en: "24ml", mult: 1.8 }],
      desc: { ar: "دهن عود هندي معتّق لمدة 12 عاماً — تركيز عالٍ وثبات استثنائي.", en: "Indian oud oil aged for 12 years — rich concentration, exceptional longevity." },
      pyramid: { top: ["عود هندي", "Indian oud"], heart: ["ورد", "Rose"], base: ["عنبر", "Amber"] } },
    { id: "blue-iris", ar: "السوسن الأزرق", en: "Blue Iris", price: 139, rating: 4.6, reviews: 318, notes: ["floral", "musk"], tags: ["new", "women", "men"],
      desc: { ar: "سوسن بودري مع لمسات بحرية منعشة — أنيق وهادئ.", en: "Powdery iris with fresh marine accents — elegant and calm." },
      pyramid: { top: ["ملح البحر", "Sea salt"], heart: ["سوسن", "Iris"], base: ["مسك", "Musk"] } },
    { id: "rose-mist", ar: "معطر الشعر — ورد", en: "Rose Hair Mist", price: 79, rating: 4.8, reviews: 1290, notes: ["rose", "floral"], tags: ["new", "women"], sizes: [{ ar: "100 مل", en: "100ml", mult: 1 }],
      desc: { ar: "رذاذ خفيف للشعر بزيت الأرغان وماء الورد، لا يحتوي على كحول.", en: "A light, alcohol-free hair mist with argan oil and rose water." },
      pyramid: { top: ["ماء الورد", "Rose water"], heart: ["فاوانيا", "Peony"], base: ["مسك", "Musk"] } },
    { id: "golden-amber", ar: "العنبر الذهبي", en: "Golden Amber", price: 230, compare: 290, rating: 4.9, reviews: 870, notes: ["amber", "vanilla"], tags: ["best", "new", "men"], badge: "sale",
      desc: { ar: "عنبر غني مع البخور والفانيلا — دفء الشرق في كل رشة.", en: "Rich amber with frankincense and vanilla — the warmth of the East in every spray." },
      pyramid: { top: ["بخور", "Frankincense"], heart: ["عنبر", "Amber"], base: ["فانيلا", "Vanilla"] } },
  ];

  const BUNDLES = [
    { id: "discovery", ar: "طقم الاكتشاف — 5 عطور", en: "Discovery Set — 5 scents", price: 249, compare: 420, rating: 4.9, reviews: 1650, notes: ["oud", "rose", "musk"], badge: "sale", sizes: [{ ar: "5 × 10 مل", en: "5 × 10ml", mult: 1 }],
      desc: { ar: "خمسة من أشهر عطورنا بحجم السفر — الطريقة المثالية للعثور على عطرك.", en: "Five of our most-loved scents in travel size — the perfect way to find yours." },
      pyramid: { top: ["متنوع", "Assorted"], heart: ["متنوع", "Assorted"], base: ["متنوع", "Assorted"] } },
    { id: "gift-trio", ar: "صندوق الهدايا الثلاثي", en: "The Gift Trio Box", price: 299, compare: 510, rating: 4.8, reviews: 940, notes: ["floral", "vanilla"], badge: "sale", sizes: [{ ar: "3 × 50 مل", en: "3 × 50ml", mult: 1 }],
      desc: { ar: "ثلاثة عطور 50 مل في صندوق هدايا فاخر مع بطاقة إهداء.", en: "Three 50ml perfumes in a luxury gift box with a message card." },
      pyramid: { top: ["ورد", "Rose"], heart: ["ياسمين", "Jasmine"], base: ["فانيلا", "Vanilla"] } },
    { id: "oud-bundle", ar: "باقة عشّاق العود", en: "Oud Lovers Bundle", price: 399, compare: 620, rating: 5.0, reviews: 520, notes: ["oud", "amber"], badge: "limited", sizes: [{ ar: "باقة", en: "Bundle", mult: 1 }],
      desc: { ar: "دهن العود الملكي + إكسير الورد والعود + بخور العود الفاخر.", en: "Royal Oud Oil + Rose Oud Elixir + premium oud bakhoor." },
      pyramid: { top: ["عود", "Oud"], heart: ["ورد", "Rose"], base: ["عنبر", "Amber"] } },
    { id: "his-hers", ar: "باقة هو وهي", en: "His & Hers Set", price: 349, compare: 480, rating: 4.8, reviews: 610, notes: ["woody", "floral"], badge: "sale", sizes: [{ ar: "2 × 100 مل", en: "2 × 100ml", mult: 1 }],
      desc: { ar: "ليالي الزعفران وحديقة الياسمين — ثنائي مثالي للإهداء.", en: "Saffron Nights and Jasmine Garden — the perfect pair to gift." },
      pyramid: { top: ["زعفران", "Saffron"], heart: ["ياسمين", "Jasmine"], base: ["عود", "Oud"] } },
  ];

  const REVIEWS = [
    { name: { ar: "نورة أ.", en: "Noura A." }, text: { ar: "إكسير الورد والعود صار عطري اليومي. الثبات خرافي وكل من حولي يسألني عنه!", en: "Rose Oud Elixir is now my daily scent. Incredible longevity — everyone asks what I'm wearing!" } },
    { name: { ar: "خالد م.", en: "Khalid M." }, text: { ar: "طلبت الساعة 2 الظهر ووصل قبل المغرب. التغليف فخم جداً ويصلح كهدية.", en: "Ordered at 2pm and it arrived before sunset. Gorgeous packaging — gift-ready." } },
    { name: { ar: "ريم س.", en: "Reem S." }, text: { ar: "طقم الاكتشاف فكرة رائعة، جربت كل العطور واخترت المسك الأبيض والفانيلا.", en: "The discovery set is genius — tried them all and picked White Musk and Vanilla." } },
    { name: { ar: "عبدالله ف.", en: "Abdullah F." }, text: { ar: "عرض 1+2 ما له مثيل. جودة العطور تنافس الماركات العالمية بسعر أقل بكثير.", en: "The 1+2 offer is unbeatable. Quality rivals the big designer brands at a fraction of the price." } },
  ];

  const ALL = [...PRODUCTS, ...BUNDLES];
  const byId = (id) => ALL.find((p) => p.id === id);
  const DEFAULT_SIZES = [{ ar: "50 مل", en: "50ml", mult: 1 }, { ar: "100 مل", en: "100ml", mult: 1.6 }];
  const sizesOf = (p) => p.sizes || DEFAULT_SIZES;

  /* ---------- i18n ---------- */
  let lang = "ar";
  try { lang = localStorage.getItem("zahra-lang") || "ar"; } catch (e) {}
  const t = (ar, en) => (lang === "ar" ? ar : en);
  const money = (n) => {
    const v = Math.round(n).toLocaleString("en-US");
    return lang === "ar" ? `${v} د.إ` : `AED ${v}`;
  };

  function applyLang() {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-ar]").forEach((el) => { el.textContent = el.dataset[lang]; });
    document.querySelectorAll("[data-ph-ar]").forEach((el) => { el.placeholder = lang === "ar" ? el.dataset.phAr : el.dataset.phEn; });
    renderAll();
  }

  /* ---------- Rendering ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const badgeHtml = (b) => {
    if (!b) return "";
    const map = {
      best: ["badge badge--dark", t("الأكثر مبيعاً", "Best seller")],
      new: ["badge badge--light", t("جديد", "New")],
      sale: ["badge", t("تخفيض", "Sale")],
      limited: ["badge badge--dark", t("إصدار محدود", "Limited")],
    };
    return `<span class="${map[b][0]}">${map[b][1]}</span>`;
  };
  const stars = (r) => "★★★★★".slice(0, Math.round(r));
  const pct = (p) => Math.round((1 - p.price / p.compare) * 100);

  let wish = new Set();

  function cardHtml(p, i) {
    return `
      <article class="card" style="animation-delay:${i * 60}ms">
        <div class="card__media" data-quick-open="${p.id}">
          <div class="badges">${badgeHtml(p.badge)}${p.compare ? `<span class="badge">-${pct(p)}%</span>` : ""}</div>
          <div class="shot">${shot(p)}</div>
          <img src="${IMG(LOOKS[p.id].photo, 700)}" alt="" loading="lazy">
          <button class="card__quick" data-add="${p.id}" aria-label="${t("أضف إلى السلة", "Add to cart")}">
            <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2M12 12v5M9.5 14.5h5"/></svg>
            <span>${t("أضف إلى السلة", "Add to cart")}</span>
          </button>
        </div>
        <button class="wish ${wish.has(p.id) ? "is-on" : ""}" data-wish="${p.id}" aria-label="Wishlist"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>
        <div class="card__body">
          <span class="card__notes">${p.notes.map((n) => NOTES[n][lang]).join(" · ")}</span>
          <h3 class="card__title" data-quick-open="${p.id}">${t(p.ar, p.en)}</h3>
          <span class="card__rating"><span class="stars">${stars(p.rating)}</span>(${p.reviews.toLocaleString("en-US")})</span>
          <div class="price">${p.compare ? `<span class="sale">${money(p.price)}</span><s>${money(p.compare)}</s>` : `<span>${money(p.price)}</span>`}</div>
        </div>
      </article>`;
  }

  let currentFilter = "best";
  function renderGrid() {
    const list = PRODUCTS.filter((p) => p.tags.includes(currentFilter)).slice(0, 8);
    $('[data-grid="main"]').innerHTML = list.map(cardHtml).join("");
    $('[data-grid="bundle"]').innerHTML = BUNDLES.map(cardHtml).join("");
  }

  function renderNotes() {
    $("[data-notes]").innerHTML = Object.entries(NOTES).map(([k, n]) => `
      <button class="note" data-note="${k}">
        <span class="note__circle" style="background:${n.bg};color:${n.fg}"><svg viewBox="0 0 24 24">${n.icon}</svg></span>
        <span>${n[lang]}</span>
      </button>`).join("");
  }

  function renderReviews() {
    $("[data-reviews]").innerHTML = REVIEWS.map((r) => `
      <figure class="review reveal is-in">
        <span class="stars">★★★★★</span>
        <p>“${r.text[lang]}”</p>
        <div class="review__who"><span class="review__avatar">${r.name[lang][0]}</span><div><b>${r.name[lang]}</b><small>✓ ${t("مشتري موثّق", "Verified buyer")}</small></div></div>
      </figure>`).join("");
  }

  function renderAll() {
    $("[data-promo-shot]").innerHTML = Bottle([L("square", "#c2414f", "gold", "Rose Oud Elixir"), L("round", "#ecd29b", "white", "Vanilla Cloud"), L("flacon", "#e0a24a", "wood", "Amber Musk")], "#f9dccd", BRAND);
    renderGrid();
    renderNotes();
    renderReviews();
    renderCart();
    if (quickId) openQuick(quickId, true);
    updateSearch();
  }

  /* ---------- Cart ---------- */
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("zahra-cart")) || []; } catch (e) {}
  const save = () => { try { localStorage.setItem("zahra-cart", JSON.stringify(cart)); } catch (e) {} };
  const linePrice = (l) => byId(l.id).price * sizesOf(byId(l.id))[l.size].mult;

  function addToCart(id, size = 0, qty = 1) {
    const ex = cart.find((l) => l.id === id && l.size === size);
    if (ex) ex.qty += qty; else cart.push({ id, size, qty });
    save();
    renderCart();
    $$("[data-cart-count]").forEach((el) => { el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump"); });
    open("cart");
  }

  function renderCart() {
    const count = cart.reduce((s, l) => s + l.qty, 0);
    const total = cart.reduce((s, l) => s + linePrice(l) * l.qty, 0);
    $$("[data-cart-count]").forEach((el) => (el.textContent = count));
    $("[data-cart-total]").textContent = money(total);
    const left = FREE_SHIP - total;
    $("[data-ship-text]").innerHTML = left > 0
      ? t(`أضف <b>${money(left)}</b> للحصول على شحن مجاني 🚚`, `Add <b>${money(left)}</b> more for free shipping 🚚`)
      : t("🎉 رائع! حصلت على <b>شحن مجاني</b>", "🎉 Nice! You've unlocked <b>free shipping</b>");
    $("[data-ship-fill]").style.width = Math.min(100, (total / FREE_SHIP) * 100) + "%";
    $("[data-checkout]").disabled = !count;

    const box = $("[data-cart-items]");
    if (!cart.length) {
      box.innerHTML = `<div class="cart-empty"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><p>${t("سلتك فارغة", "Your cart is empty")}</p><a href="#bestsellers" class="btn" data-close>${t("ابدأ التسوق", "Start shopping")}</a></div>`;
      return;
    }
    box.innerHTML = cart.map((l, i) => {
      const p = byId(l.id);
      return `
        <div class="line">
          <div class="shot line__shot">${shot(p)}</div>
          <div>
            <div class="line__title">${t(p.ar, p.en)}</div>
            <div class="line__meta">${sizesOf(p)[l.size][lang]}</div>
            <div class="qty"><button data-qty="${i}" data-d="-1">−</button><span>${l.qty}</span><button data-qty="${i}" data-d="1">+</button></div>
          </div>
          <div class="line__end"><b>${money(linePrice(l) * l.qty)}</b><button class="line__remove" data-remove="${i}">${t("إزالة", "Remove")}</button></div>
        </div>`;
    }).join("");
  }

  /* ---------- Drawers ---------- */
  const overlay = $("[data-overlay]");
  let openName = null;
  function open(name) {
    closeAll(true);
    const el = $(`[data-drawer="${name}"]`);
    if (!el) return;
    el.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.classList.add("lock");
    openName = name;
    if (name === "search") setTimeout(() => $("[data-search-input]").focus(), 300);
  }
  function closeAll(silent) {
    $$("[data-drawer].is-open").forEach((d) => d.classList.remove("is-open"));
    overlay.classList.remove("is-open");
    document.body.classList.remove("lock");
    openName = null;
    if (!silent) quickId = null;
  }

  /* ---------- Quick view ---------- */
  let quickId = null, qvSize = 0, qvQty = 1;
  function openQuick(id, rerender) {
    const p = byId(id);
    if (!rerender) { qvSize = 0; qvQty = 1; }
    quickId = id;
    const sizes = sizesOf(p);
    const price = p.price * sizes[qvSize].mult;
    const cmp = p.compare ? p.compare * sizes[qvSize].mult : 0;
    $("[data-quick]").innerHTML = `
      <button class="icon-btn qv__close" data-close aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
      <div class="qv__gallery">
        <div class="qv__main shot">${shot(p)}</div>
        <div class="qv__thumbs">
          <button class="shot is-active" data-thumb="shot">${shot(p)}</button>
          <button data-thumb="${LOOKS[p.id].photo}"><img src="${IMG(LOOKS[p.id].photo, 160)}" alt=""></button>
        </div>
      </div>
      <div class="qv__info">
        <div class="badges" style="position:static">${badgeHtml(p.badge)}</div>
        <h3>${t(p.ar, p.en)}</h3>
        <span class="card__rating"><span class="stars">${stars(p.rating)}</span> ${p.rating} · ${p.reviews.toLocaleString("en-US")} ${t("تقييم", "reviews")}</span>
        <div class="price">${cmp ? `<span class="sale">${money(price)}</span><s>${money(cmp)}</s>` : money(price)}</div>
        <p class="qv__installments">${t(`أو 4 دفعات بقيمة <b>${money(price / 4)}</b> بدون فوائد مع tabby`, `Or 4 interest-free payments of <b>${money(price / 4)}</b> with tabby`)}</p>
        <p class="qv__desc">${p.desc[lang]}</p>
        <span class="option-label">${t("الحجم", "Size")}</span>
        <div class="sizes">${sizes.map((s, i) => `<button class="size ${i === qvSize ? "is-active" : ""}" data-size="${i}">${s[lang]}</button>`).join("")}</div>
        <span class="option-label">${t("الهرم العطري", "Fragrance notes")}</span>
        <div class="pyramid">
          <div><small>${t("القمة", "Top")}</small>${p.pyramid.top[lang === "ar" ? 0 : 1]}</div>
          <div><small>${t("القلب", "Heart")}</small>${p.pyramid.heart[lang === "ar" ? 0 : 1]}</div>
          <div><small>${t("القاعدة", "Base")}</small>${p.pyramid.base[lang === "ar" ? 0 : 1]}</div>
        </div>
        <div class="qv__actions">
          <div class="qty"><button data-qv-qty="-1">−</button><span>${qvQty}</span><button data-qv-qty="1">+</button></div>
          <button class="btn" data-qv-add>${t("أضف إلى السلة", "Add to cart")} — ${money(price * qvQty)}</button>
        </div>
        <p class="muted">${t("✓ متوفر · يُشحن اليوم إذا طلبت قبل 4 مساءً", "✓ In stock · Ships today if ordered before 4pm")}</p>
      </div>`;
    if (!rerender) open("quick");
  }

  /* ---------- Search ---------- */
  function updateSearch() {
    const input = $("[data-search-input]");
    const q = input.value.trim().toLowerCase();
    const hits = ALL.filter((p) => !q || [p.ar, p.en, ...p.notes.flatMap((n) => [NOTES[n].ar, NOTES[n].en, n])].join(" ").toLowerCase().includes(q));
    $("[data-search-results]").innerHTML = hits.length
      ? hits.map((p) => `<div class="search-hit" data-quick-open="${p.id}"><div class="shot search-hit__shot">${shot(p)}</div><div><b>${t(p.ar, p.en)}</b><span>${money(p.price)}</span></div></div>`).join("")
      : `<p class="muted">${t("لا توجد نتائج", "No results found")}</p>`;
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
    const el = e.target.closest("button, a, [data-quick-open], [data-note]");
    if (!el) { if (e.target === overlay || e.target.matches(".modal")) closeAll(); return; }
    const d = el.dataset;

    if (d.add) { e.stopPropagation(); addToCart(d.add); toast(t("✓ تمت الإضافة إلى السلة", "✓ Added to cart")); return; }
    if (d.wish) {
      wish.has(d.wish) ? wish.delete(d.wish) : wish.add(d.wish);
      el.classList.toggle("is-on");
      toast(wish.has(d.wish) ? t("♥ أضيف إلى قائمة الأمنيات", "♥ Added to wishlist") : t("أزيل من قائمة الأمنيات", "Removed from wishlist"));
      return;
    }
    if (d.quickOpen) { closeAll(true); openQuick(d.quickOpen); return; }
    if (d.note) { open("search"); $("[data-search-input]").value = NOTES[d.note][lang]; updateSearch(); return; }
    if (d.open) { open(d.open); return; }
    if ("close" in d) { closeAll(); return; }
    if ("langToggle" in d) { lang = lang === "ar" ? "en" : "ar"; try { localStorage.setItem("zahra-lang", lang); } catch (e) {} applyLang(); return; }
    if (d.filter) { currentFilter = d.filter; $$(".tab").forEach((b) => b.classList.toggle("is-active", b === el)); renderGrid(); return; }
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
    if ("checkout" in d) { toast(t("هذه نسخة تجريبية — الدفع غير مفعّل", "Demo store — checkout is disabled")); return; }
    if (d.toastAr) { e.preventDefault(); toast(lang === "ar" ? d.toastAr : d.toastEn); return; }
    if (el.matches('a[href^="#"]') && openName) closeAll();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAll(); });
  $("[data-search-input]").addEventListener("input", updateSearch);
  $("[data-fake-form]").addEventListener("submit", (e) => { e.preventDefault(); e.target.reset(); toast(t("🎉 شكراً! كود الخصم: ZAHRA15", "🎉 Thanks! Your code: ZAHRA15")); });

  /* ---------- Announcement rotator ---------- */
  const ann = $$(".announce__rotator p");
  let annI = 0;
  setInterval(() => {
    const cur = ann[annI];
    cur.classList.remove("is-active"); cur.classList.add("is-leaving");
    setTimeout(() => cur.classList.remove("is-leaving"), 600);
    annI = (annI + 1) % ann.length;
    ann[annI].classList.add("is-active");
  }, 4000);

  /* ---------- Hero slider ---------- */
  const slides = $$(".hero__slide");
  const dots = $(".hero__dots");
  dots.innerHTML = slides.map((_, i) => `<button aria-label="Slide ${i + 1}" class="${i ? "" : "is-active"}"></button>`).join("");
  let slide = 0, slideTimer;
  function go(n) {
    slide = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === slide));
    $$("button", dots).forEach((d, i) => d.classList.toggle("is-active", i === slide));
    clearInterval(slideTimer);
    slideTimer = setInterval(() => go(slide + 1), 6000);
  }
  $$("button", dots).forEach((d, i) => d.addEventListener("click", () => go(i)));
  $(".hero__arrow--next").addEventListener("click", () => go(slide + 1));
  $(".hero__arrow--prev").addEventListener("click", () => go(slide - 1));
  go(0);

  /* ---------- Countdown ---------- */
  let end;
  try { end = +localStorage.getItem("zahra-deal-end"); } catch (e) {}
  if (!end || end < Date.now()) {
    end = Date.now() + ((1 * 24 + 10) * 3600 + 32 * 60 + 22) * 1000;
    try { localStorage.setItem("zahra-deal-end", end); } catch (e) {}
  }
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    let s = Math.max(0, Math.floor((end - Date.now()) / 1000));
    const v = { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
    Object.entries(v).forEach(([k, n]) => ($(`[data-cd="${k}"]`).textContent = pad(n)));
  }
  tick(); setInterval(tick, 1000);

  /* ---------- Live "sold" counter ---------- */
  let sold = 14624;
  setInterval(() => { sold += Math.floor(Math.random() * 3) + 1; $("[data-sold]").textContent = sold.toLocaleString("en-US"); }, 2500);

  /* ---------- Header + reveal ---------- */
  const header = $("#header");
  addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 10), { passive: true });
  const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { threshold: 0.12 });
  $$(".reveal").forEach((el) => io.observe(el));

  applyLang();
})();
