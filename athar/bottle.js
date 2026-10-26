/* Renders studio-style perfume packshots as inline SVG, so every product carries the store's own brand. */
(() => {
  let uid = 0;

  const SHAPES = {
    square: { body: "M115 215h170a18 18 0 0 1 18 18v190a18 18 0 0 1-18 18H115a18 18 0 0 1-18-18V233a18 18 0 0 1 18-18z", top: 215, left: 97, right: 303, label: [138, 292, 124, 92], cap: "block" },
    tall:   { body: "M150 175h100a14 14 0 0 1 14 14v238a14 14 0 0 1-14 14H150a14 14 0 0 1-14-14V189a14 14 0 0 1 14-14z", top: 175, left: 136, right: 264, label: [148, 270, 104, 116], cap: "cyl" },
    round:  { body: "M200 220c70 0 110 45 110 110s-45 111-110 111S90 395 90 330s40-110 110-110z", top: 220, left: 90, right: 310, label: [143, 300, 114, 70], cap: "ball" },
    flacon: { body: "M128 225h144l32 36v160l-22 20H118l-22-20V261z", top: 225, left: 96, right: 304, label: [138, 292, 124, 92], cap: "facet" },
    attar:  { body: "M175 300h50c18 0 28 14 28 32v94c0 9-6 15-15 15h-76c-9 0-15-6-15-15v-94c0-18 10-32 28-32z", top: 300, left: 147, right: 253, label: [163, 348, 74, 58], cap: "spire" },
  };

  const CAPS = {
    gold:   ["#8a6424", "#f6e4ad", "#c9a24f", "#7a561c"],
    black:  ["#050505", "#5a5a5a", "#1c1c1c", "#000"],
    wood:   ["#4b2f1a", "#c49468", "#7b5233", "#3e2614"],
    silver: ["#7d7d7d", "#ffffff", "#c4c4c4", "#6f6f6f"],
    rose:   ["#a8665a", "#fbe0d6", "#d79a8a", "#91554a"],
    white:  ["#cfc6bb", "#ffffff", "#efe9e2", "#bdb3a7"],
  };

  const shade = (hex, amt) => {
    const n = parseInt(hex.slice(1), 16);
    const f = (c) => Math.max(0, Math.min(255, Math.round(c + (amt > 0 ? (255 - c) * amt : c * amt))));
    return "#" + [n >> 16, (n >> 8) & 255, n & 255].map((c) => f(c).toString(16).padStart(2, "0")).join("");
  };

  function capPath(type, cb) {
    switch (type) {
      case "block": return `<rect x="145" y="${cb - 78}" width="110" height="78" rx="10"/>`;
      case "cyl":   return `<rect x="160" y="${cb - 96}" width="80" height="96" rx="8"/>`;
      case "ball":  return `<circle cx="200" cy="${cb - 42}" r="44"/>`;
      case "facet": return `<path d="M150 ${cb}h100l14-32-24-50h-80l-24 50z"/>`;
      case "spire": return `<path d="M184 ${cb}v-34q0-10 8-16l8-75 8 75q8 6 8 16v34z"/>`;
    }
  }

  function one(c, o) {
    const s = SHAPES[c.shape] || SHAPES.square;
    const id = "b" + ++uid;
    const cap = CAPS[c.cap] || CAPS.gold;
    const neck = c.shape === "attar" ? [190, 20] : [180, 40];
    const cb = s.top - 20;
    const level = s.top + (441 - s.top) * (c.fill ?? 0.16);
    const [lx, ly, lw, lh] = s.label;
    const cx = lx + lw / 2;
    const small = c.shape === "attar";
    const ls = c.labelStyle || o.labelStyle || "light";
    const labelFill = ls === "dark" ? "#17110d" : ls === "gold" ? "#d8b96f" : "rgba(255,255,255,.9)";
    const ink = ls === "dark" ? (o.gold || "#d8b96f") : "#2a1a14";
    return `
      <defs>
        <clipPath id="${id}c"><path d="${s.body}"/></clipPath>
        <linearGradient id="${id}l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(c.liquid, 0.35)}"/><stop offset="1" stop-color="${shade(c.liquid, -0.25)}"/></linearGradient>
        <linearGradient id="${id}k" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${cap[0]}"/><stop offset=".32" stop-color="${cap[1]}"/><stop offset=".6" stop-color="${cap[2]}"/><stop offset="1" stop-color="${cap[3]}"/></linearGradient>
        <linearGradient id="${id}n" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9c9c9c"/><stop offset=".4" stop-color="#f2f2f2"/><stop offset="1" stop-color="#8a8a8a"/></linearGradient>
      </defs>
      <ellipse cx="200" cy="446" rx="${(s.right - s.left) / 2 + 14}" ry="11" fill="rgba(40,20,10,.22)" filter="url(#${o.fid}b)"/>
      <ellipse cx="200" cy="456" rx="${(s.right - s.left) / 2 - 10}" ry="9" fill="${c.liquid}" opacity=".28" filter="url(#${o.fid}b)"/>
      <rect x="${neck[0]}" y="${cb}" width="${neck[1]}" height="22" fill="url(#${id}n)"/>
      <g fill="url(#${id}k)">${capPath(s.cap, cb)}</g>
      <g clip-path="url(#${id}c)">
        <rect x="0" y="0" width="400" height="500" fill="rgba(255,255,255,.28)"/>
        <rect x="0" y="${level}" width="400" height="${441 - level}" fill="url(#${id}l)" opacity=".92"/>
        <ellipse cx="200" cy="${level}" rx="140" ry="4" fill="#fff" opacity=".35"/>
        <rect x="${s.left + 10}" y="0" width="${small ? 6 : 12}" height="500" fill="#fff" opacity=".5"/>
        <rect x="${s.left + (small ? 20 : 28)}" y="0" width="3" height="500" fill="#fff" opacity=".35"/>
        <rect x="${s.right - (small ? 14 : 22)}" y="0" width="${small ? 4 : 7}" height="500" fill="#fff" opacity=".22"/>
      </g>
      <path d="${s.body}" fill="none" stroke="rgba(255,255,255,.75)" stroke-width="2"/>
      <path d="${s.body}" fill="none" stroke="rgba(0,0,0,.08)" stroke-width="5" transform="translate(0 0)" opacity=".6"/>
      <rect x="${lx}" y="${ly}" width="${lw}" height="${lh}" rx="3" fill="${labelFill}"/>
      ${ls !== "light" ? `<rect x="${lx + 4}" y="${ly + 4}" width="${lw - 8}" height="${lh - 8}" rx="2" fill="none" stroke="${ink}" stroke-width=".8" opacity=".7"/>` : ""}
      <text x="${cx}" y="${ly + lh * (small ? 0.42 : 0.4)}" text-anchor="middle" font-family="${o.font}" font-size="${small ? 11 : 17}" letter-spacing="${small ? 2 : 4}" fill="${ink}" font-weight="500">${o.brand}</text>
      <text x="${cx}" y="${ly + lh * (small ? 0.66 : 0.62)}" text-anchor="middle" font-family="${o.font}" font-size="${Math.min(small ? 5.5 : 8, (lw - 14) / ((c.name || "x").length * 0.82))}" letter-spacing="1.2" fill="${ink}" opacity=".85">${(c.name || "").toUpperCase()}</text>
      ${small ? "" : `<text x="${cx}" y="${ly + lh * 0.8}" text-anchor="middle" font-family="sans-serif" font-size="5.5" letter-spacing="1.6" fill="${ink}" opacity=".6">EAU DE PARFUM</text>`}`;
  }

  // set: array of bottle configs; bg: background colour; opts: { brand, font, labelStyle, dark }
  window.Bottle = function (set, bg, opts) {
    const list = Array.isArray(set) ? set : [set];
    const fid = "f" + ++uid;
    const o = { ...opts, fid };
    const layouts = {
      1: [[0, 1]],
      2: [[-72, 0.8], [72, 0.8]],
      3: [[-108, 0.7], [108, 0.7], [0, 0.84]],
      5: [[-140, 0.48], [140, 0.48], [-72, 0.56], [72, 0.56], [0, 0.64]],
    };
    const lay = layouts[list.length] || layouts[1];
    const order = list.length === 3 ? [0, 2, 1] : list.length === 5 ? [0, 4, 1, 3, 2] : list.map((_, i) => i);
    const floor = opts.dark ? "rgba(0,0,0,.25)" : "rgba(80,40,20,.05)";
    return `<svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${(list[0].name || "")}">
      <defs>
        <radialGradient id="${fid}g" cx=".5" cy=".3" r=".75"><stop offset="0" stop-color="#fff" stop-opacity="${opts.dark ? 0.14 : 0.55}"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        <filter id="${fid}b" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="7"/></filter>
      </defs>
      <rect width="400" height="500" fill="${bg}"/>
      <rect width="400" height="500" fill="url(#${fid}g)"/>
      <rect y="441" width="400" height="59" fill="${floor}"/>
      ${order.map((i) => { const [dx, sc] = lay[i]; return `<g transform="translate(${200 + dx} 441) scale(${sc}) translate(-200 -441)">${one(list[i], o)}</g>`; }).join("")}
    </svg>`;
  };
})();
