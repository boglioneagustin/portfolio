# Portfolio

Personal portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run lint
npm run build
```

## Contact Form Setup (SMTP)

1. Copy `.env.example` to `.env.local`.
2. Set valid SMTP credentials.
3. For Gmail, use:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=465`
   - `SMTP_USER=<your_gmail>`
   - `SMTP_PASS=<your_app_password>`

All form submissions are sent through `POST /api/contact` to `CONTACT_TO` (defaults to `boglioneagustin@gmail.com`).
