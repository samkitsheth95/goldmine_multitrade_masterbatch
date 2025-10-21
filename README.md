# Goldmine Masterbatch Website

A modern, clean website for Goldmine Masterbatch built with Astro and DaisyUI.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Type Safety**: TypeScript

## 🎨 Features

- Modern, responsive design
- Custom gold-themed color palette
- Smooth animations and transitions
- SEO-friendly structure
- Fast page loads with Astro
- Component-based architecture

## 📦 Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   └── Hero.astro
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Route pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── products.astro
│   │   ├── products/
│   │   │   └── white.astro
│   │   ├── applications.astro
│   │   ├── innovation.astro
│   │   ├── career.astro
│   │   └── contact.astro
│   └── styles/         # Global styles
│       └── global.css
├── tailwind.config.js
├── astro.config.mjs
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start the dev server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

## 🎨 Customization

### Colors

The color theme can be customized in `tailwind.config.js`:

```js
daisyui: {
  themes: [
    {
      goldmine: {
        "primary": "#D4AF37",    // Gold
        "secondary": "#1e293b",  // Dark slate
        // ... other colors
      },
    },
  ],
}
```

### Content

Page content can be edited directly in the `.astro` files within the `src/pages/` directory.

## 📄 Pages

- **Home** (`/`) - Main landing page with hero sections, features, and contact form
- **About** (`/about`) - Company information, vision, mission, and values
- **Products** (`/products`) - Product catalog with detailed pages
- **Applications** (`/applications`) - Industry applications and use cases
- **Innovation & Quality** (`/innovation`) - Quality standards and R&D capabilities
- **Career** (`/career`) - Job openings and application form
- **Contact** (`/contact`) - Contact information and inquiry form

## 🚀 Deployment

This site can be deployed to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)

## 📝 License

© 2025 Goldmine Multitrade Pvt Ltd. All Rights Reserved.
