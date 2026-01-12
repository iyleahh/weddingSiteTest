# Wedding Website

A beautiful, modern wedding website built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ Beautiful watercolor-inspired design with Mexican & Indian motifs
- 📱 Fully responsive mobile-first design
- 🎬 Smooth page transitions with Framer Motion
- 🚀 Fast builds with Vite
- 🎨 Easily customizable theme and colors
- 📍 Multi-page routing (Home, Travel, RSVP, Save the Date)

## Project Structure

```
src/
├── components/
│   ├── Background.jsx      # SVG motifs and background elements
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Footer
│   └── UI.jsx              # Reusable UI components
├── pages/
│   ├── HomePage.jsx        # Home page with countdown
│   └── BlankPage.jsx       # Template for other pages
├── config.js               # Theme colors and constants
├── utils.js                # Utility functions and hooks
├── App.jsx                 # Main app with routing
├── App.css                 # Tailwind imports
└── main.jsx                # Entry point
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Customization

Edit the constants in [`src/config.js`](src/config.js):

```javascript
export const WEDDING_DATE_ISO = "2026-10-17T17:30:00-04:00";
export const COUPLE_LINE = "Iyleah & Partner";
export const LOCATION_LINE = "Location TBD";
```

## Deploying to GitHub Pages

1. Update your `package.json` with your repository name (if not using a custom domain):
   ```json
   "homepage": "https://yourusername.github.io/weddingSiteTest"
   ```

2. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

3. In GitHub repository settings, go to **Pages** and ensure the source is set to `gh-pages` branch.

If you have a `CNAME` file pointing to a custom domain (like `iyleah.com`), the deploy will work directly to that domain.

### Using the included template and GitHub Actions

- **Build source location:** This repository includes a Next.js template at `stablo-free` (moved to repo root).
- **Automatic deploy:** A GitHub Actions workflow has been added at `.github/workflows/deploy.yml`. It will:
   - install dependencies with `pnpm` inside the `stablo-free` folder,
   - run `next build` and `next export` to produce a static `out` folder,
   - copy the repository `CNAME` (if present) into the exported site,
   - push the `out` content to the `gh-pages` branch for GitHub Pages.

To use this workflow:

1. Ensure the repository's default branch is `main` (or adjust the workflow triggers).
2. Make sure the `CNAME` file in the repo root contains `iyleah.com` (it already exists in this repo).
3. Push to `main` to trigger the workflow, or run it manually from the Actions tab.
4. In the GitHub repository settings → Pages, set the source to the `gh-pages` branch (root).

Notes and alternatives:
- The template has been moved to the repository root at `stablo-free`.
- GitHub Pages hosts static sites only. If you want full Next.js dynamic features, consider deploying to Vercel.


## Adding Content

- **Travel Page**: Edit [`src/pages/HomePage.jsx`](src/pages/HomePage.jsx) and create a new `TravelPage.jsx` component
- **RSVP Form**: Create a new `RSVPPage.jsx` with your form logic
- **Save the Date**: Customize the `SaveTheDatePage.jsx` with your details

Each page is a separate component, making it easy to manage and update content independently.
