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

## Author

**桑原大将 (Daisuke Kuwahara)** - [@babushkai](https://github.com/babushkai)

---

Built with Next.js and open source

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

* [Create](https://docs.gitlab.com/user/project/repository/web_editor/#create-a-file) or [upload](https://docs.gitlab.com/user/project/repository/web_editor/#upload-a-file) files
* [Add files using the command line](https://docs.gitlab.com/topics/git/add_files/#add-files-to-a-git-repository) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/soft-galaxy/japanesesaasplatform.git
git branch -M main
git push -uf origin main
```

## How to Run

```
npm install
npm start
```

## Integrate with your tools

* [Set up project integrations](https://gitlab.com/soft-galaxy/japanesesaasplatform/-/settings/integrations)

## Collaborate with your team

* [Invite team members and collaborators](https://docs.gitlab.com/user/project/members/)
* [Create a new merge request](https://docs.gitlab.com/user/project/merge_requests/creating_merge_requests/)
* [Automatically close issues from merge requests](https://docs.gitlab.com/user/project/issues/managing_issues/#closing-issues-automatically)
* [Enable merge request approvals](https://docs.gitlab.com/user/project/merge_requests/approvals/)
* [Set auto-merge](https://docs.gitlab.com/user/project/merge_requests/auto_merge/)

## Test and Deploy

Use the built-in continuous integration in GitLab.

* [Get started with GitLab CI/CD](https://docs.gitlab.com/ci/quick_start/)
* [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/user/application_security/sast/)
* [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/topics/autodevops/requirements/)
* [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/user/clusters/agent/)
* [Set up protected environments](https://docs.gitlab.com/ci/environments/protected_environments/)

***