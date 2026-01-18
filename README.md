# SaaSマーケット

日本のSaaS・サービスを見つけよう | Japanese SaaS Marketplace

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

SaaSマーケットは、日本発のSaaS製品・サービスを探せるオープンソースのマーケットプレイスです。500以上のSaaSツールから、ビジネスに最適なツールを見つけることができます。

SaaS Market is an open-source marketplace for discovering Japanese SaaS products and services. Find the perfect tools for your business from 500+ SaaS solutions.

## Features

- **Product Discovery** - Browse and search SaaS products by category
- **Seller Profiles** - Dedicated pages for SaaS vendors
- **User Dashboard** - Manage products, inquiries, and analytics
- **Blog** - Articles about SaaS trends and comparisons
- **SEO Optimized** - Dynamic OG images, sitemap, structured data
- **Bilingual** - Japanese UI with Clerk localization

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: [Supabase](https://supabase.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) + Google Analytics
- **Deployment**: [Vercel](https://vercel.com/)
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Clerk account
- Supabase account

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript checks |

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── api/              # API routes
│   ├── blog/             # Blog pages
│   ├── dashboard/        # User dashboard
│   ├── products/         # Product listings
│   └── ...
├── components/           # React components
│   ├── analytics/        # Analytics components
│   ├── layout/           # Header, Footer
│   ├── seo/              # JSON-LD, meta components
│   └── ui/               # UI components
├── lib/                  # Utilities and helpers
└── public/               # Static assets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## How to Run

```
npm install
npm start
```