# Prospera Finance — Next.js Site

This is a ready-to-deploy Next.js (App Router) project using Tailwind CSS and lightweight UI components.
Your uploaded component is mounted as the homepage.

## Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy (Vercel)

1. Create a GitHub repo and push this folder.
2. Go to https://vercel.com → New Project → Import from GitHub → Deploy.
3. In Vercel → Project → Settings → Domains → add your domain (e.g., example.com).
4. Follow Vercel’s DNS instructions (CNAME/A records) at your domain registrar.
5. Wait for DNS to propagate (usually minutes). Your site will be live on HTTPS.

## Notes
- `src/components/ui/button.jsx` and `card.jsx` are simple stand-ins for shadcn components.
- You can replace them later with shadcn/ui if desired.
