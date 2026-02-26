# All Liquor — Online Catalogue

A clean, searchable liquor store catalogue website for All Liquor in Phake Ratlagana.

## 🎯 Overview

**Location:** Next to Elephant Resort, Phake Ratlagana, 0432  
**Phone:** +27 84 324 6293  
**Sister Business:** Elephant Resort (elephantresort.co.za)

**Features:**
- 2 pages (Home with specials, Full catalogue)
- Search functionality
- Category filters (Beer, Cider, Wine, Spirits, Liqueur)
- Daily & weekly specials SEO optimized
- WhatsApp integration
- Link to Elephant Resort

---

## 📁 File Structure

```
all-liquor/
│
├── index.html           # Home with daily & weekly specials
├── catalogue.html       # Full searchable catalogue
│
├── css/
│   └── style.css        # All styling (no inline CSS)
│
├── js/
│   └── main.js          # Search, filters, mobile nav (no inline JS)
│
├── images/              # Add product photos here
│   ├── products/
│   ├── specials/
│   └── banners/
│
├── favicon.ico
└── robots.txt
```

---

## ✨ Key Features

### Home Page (index.html)
- **Daily Specials** — SEO optimized for "liquor specials", "daily specials"
- **Weekly Specials** — Current week's best deals
- Store info (hours, location, contact)
- Link to Elephant Resort in navigation

### Catalogue Page (catalogue.html)
- **Live Search** — Search by product name or brand
- **Category Filters:**
  - 🍺 Beer
  - 🍎 Cider
  - 🍷 Wine
  - 🥃 Spirits
  - 🍸 Liqueur
- **All filter** to show everything
- **No results message** when search yields nothing

### Technical
- ✅ **No inline CSS or JS** — All external files
- ✅ **Fully responsive** — Mobile, tablet, desktop
- ✅ **SEO optimized** — Keywords for Google searches
- ✅ **WhatsApp integration** — Floating button + CTA links
- ✅ **Resort link** — Navigation button to elephantresort.co.za

---

## 🚀 Quick Start

1. **Extract files**
2. **Add product images** to `/images/products/`
3. **Update specials** in `index.html`
4. **Add/edit products** in `catalogue.html`
5. **Upload to hosting**

---

## 📝 How to Add Products

Open `catalogue.html` and add product cards:

```html
<article class="product-card" data-category="beer" data-name="Product Name" data-brand="Brand">
  <div class="product-image">
    <img src="images/products/your-image.jpg" alt="Product Name" loading="lazy" />
  </div>
  <div class="product-body">
    <p class="product-category">Beer</p>
    <h3 class="product-name">Product Name</h3>
    <p class="product-size">6 x 340ml</p>
    <p class="product-price">R79.99</p>
  </div>
</article>
```

**Categories:** `beer`, `cider`, `wine`, `spirits`, `liqueur`

---

## 🔍 SEO Keywords

Home page is optimized for:
- liquor specials
- daily liquor deals
- weekly liquor specials
- beer specials
- wine specials
- spirits specials
- Phake Ratlagana liquor store
- cheap alcohol

When people Google "liquor specials near me" or "daily liquor deals", your homepage will appear.

---

## 📱 WhatsApp Integration

All WhatsApp links: `https://wa.me/27843246293?text=...`

To change number: Find/replace `27843246293` globally.

---

## 🏊 Elephant Resort Link

Navigation bar includes: **🏊 Visit Resort** button linking to `https://elephantresort.co.za`

Update this link if the resort domain changes.

---

## 🎨 Design

- **White background** — Clean, modern
- **Red accent** (#dc3545) — Liquor store energy
- **Yellow resort button** — Ties to Elephant Resort branding
- **Typography:** Bebas Neue (headlines), Barlow (body)

---

## 📸 Images

Add your product photos to `/images/products/` folder.

**Recommended:**
- Format: JPG
- Size: 600x800px (portrait)
- Quality: 70-80% compression

---

## 📞 Contact

**All Liquor:**  
📞 084 324 6293  
💬 WhatsApp: wa.me/27843246293  
📍 Next to Elephant Resort, Phake Ratlagana, 0432

**Sister Business:**  
🏊 Elephant Resort — elephantresort.co.za

**Website by:** OnneTech Solutions — onnetech.site

---

## ✅ Before Launch

- [ ] Add product images
- [ ] Update specials pricing
- [ ] Verify WhatsApp number
- [ ] Test search function
- [ ] Test category filters
- [ ] Check Elephant Resort link
- [ ] Test on mobile
- [ ] Upload to hosting

**Ready to launch!** 🚀
