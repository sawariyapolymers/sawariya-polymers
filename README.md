# Sawariya Polymers — Website

A modern, responsive company website for **Sawariya Polymers**, a manufacturer of premium PET preforms, bottles, jars, caps, handles, and HDPE jerricans. Built with React + Vite, designed to be hosted for free on GitHub Pages.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Pages & Features](#pages--features)
6. [Colour Palette](#colour-palette)
7. [Setting Up the Contact Form (Email Forwarding)](#setting-up-the-contact-form-email-forwarding)
8. [Deploying to GitHub Pages](#deploying-to-github-pages)
9. [Connecting a Custom Domain (Namecheap)](#connecting-a-custom-domain-namecheap)
10. [Updating Content](#updating-content)
11. [WhatsApp Button](#whatsapp-button)
12. [Troubleshooting](#troubleshooting)

---

## Overview

This is a **fully static, frontend-only** React website. There is no backend, no database, and no server required. The only external service used is an email forwarding service (EmailJS or Formspree) for the contact/enquiry form.

**Key characteristics:**
- No hosting costs (GitHub Pages is free)
- No backend or server to maintain
- No online transactions or payment processing
- Enquiry form sends emails via a third-party service
- Fully responsive (mobile, tablet, desktop)
- Fast loading with Vite build optimisation

---

## Tech Stack

| Technology        | Purpose                          |
|-------------------|----------------------------------|
| React 18          | UI framework                     |
| Vite              | Build tool & dev server          |
| React Router DOM  | Client-side routing              |
| CSS (vanilla)     | Styling (no Tailwind/Bootstrap)  |
| EmailJS / Formspree | Contact form email forwarding |
| GitHub Pages      | Free static hosting              |
| Namecheap         | Domain & private email           |

---

## Project Structure

```
sawariya-polymers/
├── public/                   # Static assets (favicon, etc.)
├── src/
│   ├── assets/
│   │   └── logo.jpeg         # Company logo (SP shield)
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar (responsive, with dropdown)
│   │   ├── Navbar.css
│   │   ├── Footer.jsx         # Site footer with links & contact info
│   │   ├── Footer.css
│   │   ├── WhatsAppButton.jsx # Floating WhatsApp chat button
│   │   ├── WhatsAppButton.css
│   │   └── ScrollToTop.jsx    # Scrolls to top on route change
│   ├── pages/
│   │   ├── Home.jsx           # Homepage
│   │   ├── Home.css
│   │   ├── About.jsx          # About / Company page
│   │   ├── About.css
│   │   ├── PetPreforms.jsx    # PET Preforms product page
│   │   ├── BottlesJars.jsx    # Bottles & Jars product page
│   │   ├── CapsHandles.jsx    # Caps & Handles product page
│   │   ├── HdpeJerricans.jsx  # HDPE Jerricans product page
│   │   ├── ProductPage.css    # Shared CSS for all product pages
│   │   ├── Industries.jsx     # Industries page
│   │   ├── Industries.css
│   │   ├── Contact.jsx        # Contact / Enquiry page
│   │   └── Contact.css
│   ├── styles/
│   │   └── global.css         # Global styles, CSS variables, reset
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md                  # This file
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher) — download from https://nodejs.org
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

### Install & Run Locally

```bash
# 1. Navigate to the project folder
cd sawariya-polymers

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173` (Vite's default port).

### Build for Production

```bash
npm run build
```

This creates an optimised production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Pages & Features

### 1. Home (`/`)
- **Hero section** with tagline, CTA buttons, and animated statistics
- **Product grid** — 4 cards linking to each product category
- **About preview** — short company overview with feature checklist
- **Why Choose Us** — 6 cards highlighting company strengths
- **Industries served** — tag-style list of 12+ industries
- **CTA banner** — encouraging visitors to send an enquiry

### 2. About / Company (`/about`)
- Page header with breadcrumb navigation
- Company overview section
- Vision, Mission & Values — 3 detailed cards
- Quality Policy with certification badges
- Stat cards (100+ Products, 10+ Industries, etc.)
- Company timeline/milestones

### 3. PET Preforms (`/products/pet-preforms`)
- **Tabbed interface** switching between 6 preform types:
  - Alaska (TST) — for packaged drinking water
  - ROPP — for liquor & pharmaceutical
  - PCO 1810 — for carbonated drinks, juices, oil
  - PCO 1881 — for CSD, beer, hot/cold fill juices
  - CTC — for edible oil
  - Customized — bespoke solutions
- Full **specification tables** (size, weight, neck diameter)
- Application, colour, and market info for each type

### 4. Bottles & Jars (`/products/bottles-jars`)
- 6 categories: Oil, Confectionery, Mineral Water, Pharmaceutical, Beverage, Household/Industrial
- Each with description, applications, available sizes, and key features

### 5. Caps & Handles (`/products/caps-handles`)
- 6 product cards: Standard Screw Caps, CTC/Flip-Top, ROPP Caps, Jar Caps, Handles, Bubble Top Caps
- Each with description and feature list

### 6. HDPE Jerricans (`/products/hdpe-jerricans`)
- HDPE material overview
- Available sizes, colours, and applications
- 6 feature cards (strength, leak-proof, chemical resistance, etc.)
- Industries served grid

### 7. Industries (`/industries`)
- PET benefits section (BPA Free, Recyclable, Durable, Lightweight, Leak-Proof)
- 12 industry cards with descriptions and relevant product tags

### 8. Contact (`/contact`)
- Contact information sidebar (address, phone, email, working hours)
- **Enquiry form** with fields:
  - Full Name (required)
  - Email (required)
  - Phone
  - Company Name
  - Product Interest — dropdown (required)
  - Message (required)
- Form validation and success/error status messages

### Shared Components
- **Navbar** — Fixed/transparent, turns opaque on scroll. Includes Products dropdown. Mobile hamburger menu.
- **Footer** — Company info, quick links, product links, contact details.
- **WhatsApp Button** — Floating green button (bottom-right) linking to WhatsApp chat.
- **ScrollToTop** — Automatically scrolls to top when navigating between pages.

---

## Colour Palette

The site uses the **"Ocean Mist"** palette:

| Name        | Hex       | Usage                                   |
|-------------|-----------|-----------------------------------------|
| Dark Teal   | `#0E2233` | Navbar, footer, hero backgrounds        |
| Teal Navy   | `#1B4D5C` | Sections, cards, overlays               |
| Ocean       | `#3A8FA0` | Headings, borders, accents              |
| Aqua        | `#5BC0BE` | CTAs, buttons, highlights, hover states |
| Sand        | `#E8D5B7` | Warm neutral backgrounds, dividers      |
| Off-white   | `#F4F1EC` | Page background, light sections         |

All colours are defined as CSS variables in `src/styles/global.css` under `:root`. Change the hex values there and they will update across the entire site.

---

## Setting Up the Contact Form (Email Forwarding)

The contact form is currently set up with a simulated submission. To make it actually send emails, you have two options:

### Option A: EmailJS (Recommended — Free tier: 200 emails/month)

1. Go to https://www.emailjs.com and create a free account.
2. Add an **Email Service** (connect your Namecheap private email).
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{phone}}` — phone number
   - `{{company}}` — company name
   - `{{product}}` — product interest
   - `{{message}}` — their message
4. Install EmailJS in your project:
   ```bash
   npm install @emailjs/browser
   ```
5. Update `src/pages/Contact.jsx`:
   ```jsx
   import emailjs from '@emailjs/browser';

   // Inside handleSubmit, replace the simulated section with:
   await emailjs.sendForm(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     e.target,
     'YOUR_PUBLIC_KEY'
   );
   ```
6. Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your actual EmailJS credentials.

### Option B: Formspree (Free tier: 50 submissions/month)

1. Go to https://formspree.io and create a free account.
2. Create a new form and get your form endpoint URL.
3. Update the form's `onSubmit` in `Contact.jsx`:
   ```jsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

---

## Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to https://github.com and create a new repository (e.g., `sawariya-polymers`).
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sawariya-polymers.git
   git push -u origin main
   ```

### Step 2: Configure Vite for GitHub Pages

Update `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sawariya-polymers/',  // your repo name
})
```

**Important:** If you are using a **custom domain** (e.g., sawariyapolymers.com), set `base: '/'` instead.

### Step 3: Handle React Router on GitHub Pages

GitHub Pages does not support client-side routing natively. Create a file `public/404.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Sawariya Polymers</title>
  <script>
    var path = window.location.pathname;
    window.location.replace('/' + '?p=' + encodeURIComponent(path));
  </script>
</head>
<body></body>
</html>
```

And add this script to `index.html` inside `<head>`:

```html
<script>
  (function(){
    var redirect = new URLSearchParams(window.location.search).get('p');
    if (redirect) {
      window.history.replaceState(null, '', redirect);
    }
  })();
</script>
```

### Step 4: Install gh-pages and Deploy

```bash
npm install gh-pages --save-dev
```

Add these scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then deploy:

```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/sawariya-polymers/`

---

## Connecting a Custom Domain (Namecheap)

### Step 1: Buy a Domain on Namecheap

Go to https://namecheap.com and purchase your domain (e.g., `sawariyapolymers.com`).

### Step 2: Configure DNS on Namecheap

In Namecheap dashboard, go to Domain List, click Manage next to your domain, then go to Advanced DNS. Add these records:

| Type    | Host | Value                          |
|---------|------|--------------------------------|
| A       | @    | 185.199.108.153                |
| A       | @    | 185.199.109.153                |
| A       | @    | 185.199.110.153                |
| A       | @    | 185.199.111.153                |
| CNAME   | www  | YOUR_USERNAME.github.io        |

Delete any existing A records or CNAME records for @ and www that conflict.

### Step 3: Configure GitHub Pages

1. In your GitHub repo, go to Settings then Pages.
2. Under "Custom domain", enter `sawariyapolymers.com`.
3. Check "Enforce HTTPS" (may take a few minutes to become available).

### Step 4: Add CNAME File

Create a file `public/CNAME` with just your domain name:

```
sawariyapolymers.com
```

This ensures the CNAME file is included in every deployment.

### Step 5: Update Vite Config

Set `base: '/'` in `vite.config.js` since you are using a custom domain.

### Step 6: Set Up Private Email on Namecheap

1. In Namecheap dashboard, go to Email, then Private Email.
2. Purchase a plan (starts at around 1 USD/month).
3. Create your email address (e.g., `info@sawariyapolymers.com`).
4. Use this email in the EmailJS or Formspree setup.

DNS propagation can take up to 24-48 hours, though it is usually much faster.

---

## Updating Content

### Change Company Details

- **Phone, email, address:** Update in `Footer.jsx`, `Contact.jsx`, and `WhatsAppButton.jsx`
- **WhatsApp number:** In `WhatsAppButton.jsx`, change the number in the `href`

### Change Product Specifications

- **PET Preforms:** Edit the `preformTypes` array in `src/pages/PetPreforms.jsx`
- **Bottles & Jars:** Edit the `categories` array in `src/pages/BottlesJars.jsx`
- **Caps & Handles:** Edit the `products` array in `src/pages/CapsHandles.jsx`
- **HDPE Jerricans:** Edit directly in `src/pages/HdpeJerricans.jsx`

### Change Colours

All colour variables are in `src/styles/global.css` under `:root`. Change the hex values and they will update everywhere.

### Change Logo

Replace `src/assets/logo.jpeg` with your new logo file. If the format changes (e.g., to PNG), update the import path in `Navbar.jsx` and `Footer.jsx`.

### Add New Pages

1. Create a new `.jsx` file in `src/pages/`
2. Add the route in `src/App.jsx` inside the `<Routes>` block
3. Add navigation links in `Navbar.jsx` and `Footer.jsx`

---

## WhatsApp Button

The floating WhatsApp button links to: `https://wa.me/919999999999`

To change the number, edit `src/components/WhatsAppButton.jsx` and replace `919999999999` with the actual WhatsApp number (include country code without the + sign).

---

## Troubleshooting

### Pages show 404 on GitHub Pages after refresh
GitHub Pages does not support client-side routing. Make sure you have added the `404.html` redirect as described in the deployment section.

### Form submissions not working
Make sure you have set up EmailJS or Formspree correctly and replaced the placeholder credentials in `Contact.jsx`. Check the browser console for errors.

### Fonts not loading
The site uses Google Fonts (DM Sans and Playfair Display). They are loaded via CSS `@import` in `global.css`. Make sure your network allows Google Fonts.

### Build fails
Run `npm install` again to ensure all dependencies are installed. Make sure you are using Node.js v18 or higher. Check the terminal output for specific error messages.

### Images not showing
Check that the logo file exists at `src/assets/logo.jpeg` and the import paths in components are correct.

### Site looks different locally vs deployed
Make sure `base` in `vite.config.js` is set correctly. Use `/` for custom domains and `/repo-name/` for GitHub Pages subpath hosting.

---

## License

This project is built for Sawariya Polymers. All rights reserved.
