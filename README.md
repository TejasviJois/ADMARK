# Growth Architects Digital

Website for Growth Architects Digital (AdMark Digitals) — agency site with portfolio, services, and testimonials.

## Tech Stack

- Vite
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Radix UI components

## Getting Started

```sh
# Install dependencies
npm i

# Start the development server
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```sh
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms access key for the Contact form. Get one at [web3forms.com](https://web3forms.com). |

Without this key, the contact form will not submit successfully.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production (output: `dist/`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## Deploy to Vercel

1. Push the repo to GitHub (or connect your Git provider in Vercel).
2. In [Vercel](https://vercel.com), **Import** the project. Vercel will detect the Vite app and use `vercel.json` settings.
3. Add environment variable in **Project → Settings → Environment Variables**:
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`  
   - **Value:** your Web3Forms access key  
   - **Environment:** Production (and Preview if you want)
4. Deploy. The build runs `npm run build` and serves the `dist` folder. Client-side routes (e.g. `/projects`) work via the configured rewrites.

## Production Checklist

- [x] Build command: `npm run build`
- [x] Output directory: `dist`
- [x] SPA routing: all routes rewrite to `index.html`
- [x] Secrets in env vars (no keys in source)
- [x] `.env` and `.env.local` in `.gitignore`
