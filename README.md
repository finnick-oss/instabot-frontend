# InstaBot Frontend

React admin dashboard for managing Instagram comment automation, DM sequences, and viewing interaction stats.

## Tech Stack

- **Framework** — React + Vite
- **HTTP Client** — Axios
- **Deployment** — Vercel

---

## Environment Variables

Set these in **Vercel → Project → Settings → Environment Variables**.
Select **Production**, **Preview**, and **Development** for each.

### Required

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Full URL of your deployed backend | `https://your-backend.netlify.app` |

> Without this, the frontend falls back to `http://localhost:3001` and will not work in production.

---

## Local Development

```bash
# Install dependencies
npm install

# Create local env file
echo "VITE_API_URL=https://your-backend.netlify.app" > .env

# Start dev server
npm run dev
```

> You can also point `VITE_API_URL` to `http://localhost:3001` if running the backend locally.

---

## Deployment

Push to `main` — Vercel auto-deploys.

```bash
git push origin main
```

After adding or changing env variables on Vercel, trigger a **Redeploy** (uncheck "Use existing build cache") for changes to take effect.

---

## Connecting to Backend

The entire API connection lives in `src/lib/api.js`:

```js
const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001'
```

Set `VITE_API_URL` on Vercel and the frontend will automatically call the correct backend URL.
