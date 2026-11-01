# Umama Maya — Personal Web Developer Portfolio

An elegant, bold, and luxurious personal portfolio website handcrafted for **Umama Maya**, Web Developer, WordPress Developer, and Front-End Developer based in Sindh, Pakistan.

Designed with a **Full Deep Burgundy Background Theme**, **Soft Peach Typography & Buttons**, **Warm Off-White Project Cards**, and a **Floating Google Translate Language Switcher**.

---

## 🎨 Color Palette & Design Identity

- **Main Website Background:** `#59171B` (Deep Burgundy — Dominant across all sections)
- **Secondary Section Background:** `#70252A` (Alternating Warm Burgundy for section contrast)
- **Primary Text & Headings:** `#FED7B8` (Soft Peach — High contrast, luxurious readability)
- **Accent Color:** `#E9BFA4` (Soft Peach highlight & secondary descriptions)
- **Card Background:** `#FFF9F5` (Warm Off-White — Containers that stand out cleanly against the dark background)
- **Card Text:** `#302526` (Dark Charcoal for high-contrast reading inside cards)
- **Card Secondary Text:** `#806D6A` (Muted Brown inside cards)
- **Borders:** `#87464A` (Deep Burgundy outlines) & `#EBDDD5` (Card borders)
- **Buttons:** Soft Peach (`#FED7B8`) with Deep Burgundy text (`#59171B`)

### Typography Hierarchy
- **Headings:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (400, 600, 700)
- **Body Text:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (400 Regular, 500 Medium)
- **Buttons & Small Labels:** [DM Sans](https://fonts.google.com/specimen/DM+Sans) (600 SemiBold)

---

## 🌐 Floating Google Translate Switcher

A fixed floating language switcher is anchored to the right side of the screen:
- **Sticky & Visible:** Remains fixed on the right edge while visitors scroll.
- **Minimal Design:** Styled in Soft Peach and Deep Burgundy with a clean language globe icon.
- **Multilingual Support:** One-click translation into **Urdu (اردو)**, **Arabic (العربية)**, **Spanish**, **French**, **German**, **Chinese**, **Japanese**, **Hindi**, and more via the Google Translate API.
- **Non-Obtrusive:** Positioned above mobile navigation and content, with an accessible modal dropdown.

---

## 📸 Project Screenshots & Manual Upload System

Each project uses a dedicated **16:10 landscape image container** with `object-fit: cover`:

1. **EduTech Computer Center** — Initialized with uploaded screenshot `assets/projects/edutech.png`.
2. **AURELLE Interiors** — Initialized with uploaded screenshot `assets/projects/aurelle.png`.
3. **Safar-e-Pakistan** — Initialized with `assets/projects/safar-placeholder.svg` (Demonstration available).
4. **Picksy** — Initialized with `assets/projects/picksy-placeholder.svg` (Demonstration available).
5. **History Vault** — Initialized with uploaded screenshot `assets/projects/history-vault.png`.

### Managing Screenshots:
- **In-Browser Upload:** Click the **"Replace Screenshot"** / **"Upload Screenshot"** button directly on any project card to select an image from your computer. The image is rendered immediately with `object-fit: cover` and is **persisted in your browser's local storage**.
- **Permanent Replacement:** To permanently replace an image for git/production deployment, save your screenshot in `assets/projects/` (e.g. `assets/projects/edutech.png`) and update the `src` attribute in `index.html`.

---

## 📂 Project Structure

```
umama-maya-portfolio/
├── index.html                   # Semantic HTML5 with Full Burgundy theme & Google Translate
├── style.css                    # Design tokens for #59171B, #70252A, #FED7B8, #FFF9F5
├── script.js                    # In-browser upload, Google Translate controller, nav spy, form handler
├── README.md                    # Documentation & setup guide
└── assets/
    ├── favicon.svg              # UM Monogram in Deep Burgundy & Soft Peach
    ├── hero-visual.svg          # Burgundy & Soft Peach code editor UI illustration
    └── projects/                # Dedicated project screenshots (16:10 ratio)
        ├── edutech.png          # Actual screenshot for EduTech
        ├── aurelle.png          # Actual screenshot for AURELLE Interiors
        ├── history-vault.png    # Actual screenshot for History Vault
        ├── safar-placeholder.svg
        └── picksy-placeholder.svg
```

---

## 🚀 How to Preview Locally

Open [`index.html`](file:///C:/Users/PMLS/.gemini/antigravity/scratch/umama-maya-portfolio/index.html) in your browser:
```powershell
Start-Process "C:\Users\PMLS\.gemini\antigravity\scratch\umama-maya-portfolio\index.html"
```

---

## 👤 Website Owner
- **Name:** Umama Maya
- **Title:** Web Developer | WordPress Developer | Front-End Developer
- **Email:** [mayaumama12@gmail.com](mailto:mayaumama12@gmail.com)
- **LinkedIn:** [www.linkedin.com/in/maya-khan-770a6a447](https://www.linkedin.com/in/maya-khan-770a6a447)
- **GitHub:** [mayaumama12-afk](https://github.com/mayaumama12-afk)
- **Location:** Nizamani Muhallah Matli, District Badin, Sindh, Pakistan
