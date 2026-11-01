# madhan.dev

Personal portfolio built with [Astro](https://astro.build).

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
```

## Edit content

All text lives in `src/data/profile.ts`: headline, before/after outcomes, experience and tech stack.
Replace `public/Madhan_Kumar_R_Resume.pdf` whenever the resume changes.

## Deploy (Vercel, free)

1. Push this folder to a new GitHub repo.
2. On vercel.com, choose **Add New → Project**, import the repo. Vercel detects Astro automatically.
3. In the project's **Settings → Domains**, add `madhan.dev` and follow the DNS instructions.
4. Every push to `main` redeploys the site.

## Coming next

- Case study: moving card updates from T+1 batch to real time with Kafka
- Case study: building a multi-network payment gateway
- Showcase project: idempotent payment ledger
