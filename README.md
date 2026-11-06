# The Design Desk

A responsive digital edition of **The Design Desk**, a four-page newspaper from the School of Design. This project translates the November 2026 print issue into a navigable editorial website while preserving its cream paper palette, navy accents, typography, page order, and source artwork.

**Publication:** Volume 01 — Issue 01 · November 2026

**Designed by:** Kopal Sinha

## Features

- Four newspaper pages presented in their original order.
- Sticky section navigation with active-page indication and a mobile menu.
- Responsive editorial columns that reflow for tablet and phone screens.
- Original photographs, banners, puzzle artwork, and QR panels cropped from the supplied `reference.pdf.pdf` and stored locally in `public/images/`.
- A playable Tic-Tac-Toe game beside the original printed puzzle artwork.
- QR panels retain their source codes; the website does not invent or assign destinations.

## Technology

- Next.js 15 App Router
- React 19
- TypeScript
- CSS Grid and Flexbox

## Requirements

- Node.js 20 or later
- npm

## Install and run

Install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
npm run dev    # Start the local development server
npm run build  # Create an optimized production build
npm start      # Serve the production build
```

Run `npm run build` before deployment. After it succeeds, use `npm start` to serve the production build on a Node.js host.

## Deploy

The project can be deployed to [Vercel](https://vercel.com/) by importing its GitHub repository. Vercel detects Next.js automatically; the production build command is `npm run build`. No environment variables or backend services are required. Other Node.js hosting providers can use the same build and start commands above.

## Project structure

```text
app/                 App Router page, layout, and editorial styles
components/          Navigation and Tic-Tac-Toe components
public/images/       Local newspaper artwork and QR panels
reference.pdf.pdf    Four-page print reference
```
