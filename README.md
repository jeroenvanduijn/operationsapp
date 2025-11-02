# GymOps Website

Marketing website for GymOps - the operations management Progressive Web App designed for CrossFit boxes and boutique gyms.

## Overview

This is a Next.js 15 website built with TypeScript and Tailwind CSS, featuring:

- **Homepage** with hero section, USP highlights, features, testimonials, and setup information
- **Contact Page** with lead generation form
- **FAQ Page** with comprehensive questions and answers
- **Mobile-first responsive design** optimized for all devices
- **PWA configuration** for app-like experience
- **Brand colors** from CrossFit Leiden palette (Cinnabar, Jonquil, Verdigris, Violet)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
operationsapp/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── page.tsx           # Homepage
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   └── home/              # Homepage sections
│       ├── HeroSection.tsx
│       ├── USPSection.tsx
│       ├── FeaturesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── SetupSection.tsx
│       └── CTASection.tsx
├── public/                # Static assets
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO robots file
└── tailwind.config.ts     # Tailwind configuration with brand colors
```

## Features

### Homepage Sections

1. **Hero Section**: Strong headline, CTA buttons, and quick stats
2. **USP Section**: 5 key selling points highlighting GymOps benefits
3. **Features Section**: Detailed features (Consistency, Communication, Feedback, Insights)
4. **Testimonials**: Real-world use cases from gym owners
5. **Setup Section**: 4-step guide showing how easy it is to get started
6. **CTA Section**: Final conversion section with multiple CTAs

### Contact Page

- Lead generation form with validation
- Multiple contact options
- FAQ snippet
- Trust badges

### FAQ Page

- Accordion-style questions organized by category:
  - Getting Started
  - Technical
  - Features & Usage
  - Pricing & Support

## Brand Colors

The website uses the CrossFit Leiden color palette:

- **Cinnabar** (#E2442F): Primary CTA buttons, accents
- **Jonquil** (#F4D03F): Highlights, icons
- **Verdigris** (#45B7C0): Trust elements, secondary accents
- **Violet** (#8E44AD): Gradients, accents

## PWA Configuration

The site includes PWA configuration (`manifest.json`) making it installable on mobile devices and providing an app-like experience.

## Content Strategy

All content is written in simple English targeting Dutch CrossFit and boutique gym owners, emphasizing:

- **Operational excellence** over simple checklists
- **Time savings** and efficiency
- **Team empowerment** and communication
- **Real-time insights** for management
- **Quick setup** (30 minutes) with no app store hassle

## SEO & Performance

- Semantic HTML structure
- Meta tags for social sharing
- Mobile-first responsive design
- Fast loading with Next.js optimizations
- Accessible navigation and forms

## Deployment

The site can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any hosting supporting Node.js**

```bash
# Build for production
npm run build

# The output will be in .next/ folder
```

## Future Enhancements

- Add blog section for SEO and content marketing
- Implement analytics (Google Analytics, Plausible, etc.)
- A/B testing for CTAs and headlines
- Customer success stories with video testimonials
- Integration demos and screenshots

## License

Proprietary - All rights reserved

## Contact

For questions or support: hello@gymops.app
