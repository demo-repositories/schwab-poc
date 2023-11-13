This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, ensure you have a .env file with the appropriate values from `.env.EXAMPLE` you'll need to generate a key from sanity.build/manage for `SANITY_API_READ_TOKEN`

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Noteworthy integrations

A few things you'll see pop up throughout this codebase that may be helpful to be familiar with.

### shadcn/ui

[shadcn/ui](https://ui.shadcn.com/) is used for various UI elements. `components/ui`, `lib/utils.ts`, and `components.json` all contribute to making those components work.

### Tailwind CSS

shadcn/ui and the custom built components for this site leverage [Tailwind CSS](https://tailwindcss.com/) for styling.

### unpic-img

[unpic-img](https://unpic.pics/img/learn/) is currenly used for loading imaged performantly across the site

### gsap

[GSAP](https://gsap.com/docs/v3/) was mentioned as a liked package by the Schwab team. At the time of writing (Nov 12, 2023) GSAP is only used subtly in Button.tsx.

## Project structure

```
.
└── next/
    ├── app/
    │   └── ...
    ├── components/
    │   └── ...
    ├── lib/
    │   └── ...
    ├── components.json
    ├── next.config.js
    ├── package.json
    ├── postcss.config.js
    ├── prettier.config.js
    ├── README.md
    ├── tailwind.config.ts
    └── tsconfig.json
```

Things that seemed not self-explanatory are outlined below

### app/

At a high level this is a NextJS app using the [app router](https://nextjs.org/docs/getting-started/project-structure). The structure of the project is in line with what Next recommends.

```
.
└── app/
    ├── [slug]/
    │   └── page.tsx
    ├── api/
    │   ├── disable-draft/
    │   │   └── route.ts
    │   └── draft/
    │       └── route.ts
    ├── landing-pages/
    │   └── page.tsx
    ├── story/
    │   ├── [slug]/
    │   │   └── page.tsx
    │   └── page.tsx
    ├── global.css
    ├── layout.tsx
    ├── not-found.tsx
    └── page.tsx
```

#### [slug]/page.tsx

Renders each individual 'landingPage' document.

#### api /draft and /disable-draft

Enables and disables NextJS' [draftMode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode) which is used by Sanity's preview.

#### landing-pages/page.tsx

Renders a list of all available 'landingPage' documents.

#### story

##### /[slug]/page.tsx

Renders each individual 'story' document.

##### /page.tsx

Renders a list of all available 'story' documents.

#### global.css

CSS variables for theme + Tailwind

#### layout.tsx

Includes ThemeProvider, Navbar, Footer, and PreviewProvider.

#### not-found.tsx

404 page for entire site. Errors and not-found responses can be [controlled in more detail with the app router](https://nextjs.org/docs/app/building-your-application/routing/error-handling).

#### page.tsx

Homepage

### components/

Each component should have comments outlining how and where its used.

#### components/ui

Where all shadcn/ui components end up when installed using their CLI. Most components in here shouldn't need to be modified but part of shadcn/ui's philosophy is that you have these components in your app instead of a package, so this is where they live.

### lib/

```
.
└── lib/
    ├── sanity/
    │   ├── client.ts
    │   └── fetch.ts
    ├── twColor.ts
    └── utils.ts
```

#### sanity/client.ts

Sanity client instance re-used throughout front-end

#### sanity/fetch.ts

Basic logic for fetching from Content Lake using GROQ

#### twColor.ts

Helper function for turning hex codes from Sanity's image palette info into the nearest matching Tailwind class.

#### utils.ts

Helper functions for `shadcn/ui`. "utils" is not very descriptive but I dare not rename it.

### components.json

Schema for `shadcn/ui` to know about general configuration information (Tailwind, theme info).

### tailwind.config.ts

As you might expect, but includes theme information + variables.
