# Crave — Food Delivery Platform

A responsive food delivery frontend built with React, Vite, Tailwind CSS, React Router, Context API, Framer Motion, and localStorage persistence.

## Features
- Landing page with restaurant discovery, category filtering, search, sorting, and promo banner
- Restaurant pages with category filters and menu item add-to-cart interactions
- Persistent cart, quantity controls, item removal, totals, tax, delivery fee, and `FIRSTBITE` coupon (15% off)
- Checkout form with required-field, email, and card validation; card or cash-on-delivery selection
- Order confirmation with status timeline and delivery estimate
- Order history persisted in localStorage
- Responsive layouts and motion effects

## Run locally
Requires Node.js 18+.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Notes
- This is a frontend demo. Payments are not processed and order status is illustrative; connect a backend/payment provider for production.
- Menu photos use Unsplash image URLs and require an internet connection.
- The sample delivery location is static demo content.
