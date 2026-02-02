<div align="center">
  
# ✨ HULO

### Digital Future Agency

**A premium, production-ready landing page built with cutting-edge web technologies**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-r167-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)

<br />

[Live Demo](#) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started) · [Components](#-component-library)

<br />

---

</div>

<br />

## 🎯 Overview

Hulo is a **stunning, high-performance landing page** designed for digital agencies and creative studios. Built with the latest Next.js 16 and React 19, it showcases modern web development practices with an emphasis on **visual excellence**, **smooth animations**, and **immersive user experiences**.

This isn't just a template—it's a complete, production-ready foundation for your digital presence, featuring:

- 🚀 **Hyperspeed 3D backgrounds** using Three.js
- ✨ **Interactive bento grid layouts** with particle effects
- 🎭 **3D model viewer** for showcasing products
- 🌊 **Smooth scroll animations** powered by GSAP & Framer Motion
- 🎨 **Premium typography** with 6+ Google Fonts
- 📱 **Fully responsive** across all devices

<br />

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎆 Visual Effects
- **Hyperspeed Background** — Immersive WebGL highway animation
- **Particle Systems** — GPU-accelerated particle effects on cards
- **Spotlight & Glow Effects** — Dynamic cursor-following lighting
- **3D Tilt Cards** — Interactive depth on hover
- **Magnetic Elements** — Cursor-attracting micro-interactions

</td>
<td width="50%">

### 🏗️ Architecture
- **Next.js 16 App Router** — Latest server & client components
- **React 19** — Cutting-edge React features
- **TypeScript** — Full type safety
- **Tailwind CSS 4** — Next-gen utility styling
- **Radix UI** — Accessible, unstyled primitives

</td>
</tr>
<tr>
<td width="50%">

### 🎬 Animations
- **GSAP ScrollTrigger** — Scroll-based animations
- **Framer Motion** — Declarative React animations
- **Lenis** — Butter-smooth scrolling
- **Typewriter Effects** — Dynamic text reveals
- **Rotating Text** — Animated word cycling

</td>
<td width="50%">

### 📦 Components
- **MagicBento** — Interactive grid with 12+ effects
- **3D Model Viewer** — GLB/GLTF model showcase
- **SplashCursor** — Fluid-simulation cursor
- **StarBorder** — Animated gradient borders
- **ScrollStack** — Stacking card animations

</td>
</tr>
</table>

<br />

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4, CSS Variables |
| **3D Graphics** | Three.js, React Three Fiber, React Three Drei |
| **Animations** | GSAP, Framer Motion, Lenis |
| **Post-Processing** | Postprocessing (Bloom, SMAA) |
| **UI Components** | Radix UI, Lucide React Icons |
| **Forms** | React Hook Form, Zod Validation |
| **Typography** | Cinzel, Playfair Display, Outfit, Abril Fatface, Syne, DM Serif |

<br />

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hul0/hulo-landing.git
cd hulo-landing

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build optimized production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint for code quality |

<br />

## 📁 Project Structure

```
hulo-landing/
├── app/
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Main landing page
│   └── favicon.ico
├── components/
│   ├── landing/           # Page sections
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero with Hyperspeed BG
│   │   ├── Services.tsx   # Services bento grid
│   │   ├── Process.tsx    # Work process showcase
│   │   ├── Portfolio.tsx  # Project gallery
│   │   ├── Team.tsx       # Team members
│   │   ├── Testimonials.tsx
│   │   ├── Clients.tsx    # Client logos
│   │   ├── FAQ.tsx        # Accordion FAQ
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx
│   ├── ui/                # Reusable UI components
│   └── *.tsx              # Specialized effect components
├── public/
│   ├── models/            # 3D GLB models
│   └── team/              # Team member images
└── lib/
    └── utils.ts           # Utility functions
```

<br />

## 🧩 Component Library

### Hyperspeed Background

An immersive WebGL highway animation using Three.js with customizable distortion effects.

```tsx
import Hyperspeed from '@/components/Hyperspeed';

<Hyperspeed 
  effectOptions={{
    distortion: 'xyDistortion',
    length: 400,
    roadWidth: 9,
    colors: {
      leftCars: [0xD4F600, 0xa90519, 0xff1010],
      rightCars: [0xf1f1f1, 0xe6e6e6, 0xdfdfe0],
    }
  }}
/>
```

### MagicBento Grid

Interactive bento-style grid with particle effects, spotlights, and magnetic interactions.

```tsx
import MagicBento from '@/components/MagicBento';

<MagicBento 
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  spotlightRadius={300}
  glowColor="rgba(212, 246, 0, 0.5)"
/>
```

### 3D Model Viewer

Display GLB/GLTF 3D models with interactive controls and parallax effects.

```tsx
import ModelViewer from '@/components/ModelViewer';

<ModelViewer
  url="/models/laptop.glb"
  enableMouseParallax
  enableHoverRotation
  environmentPreset="sunset"
  autoRotate
/>
```

### Other Notable Components

| Component | Description |
|-----------|-------------|
| `AnimatedContent` | Scroll-triggered reveal animations |
| `BlurText` | Text with blur-in reveal effect |
| `CircularText` | Rotating circular text display |
| `GlareHover` | Apple-style glare effect on hover |
| `LaserFlow` | Animated laser beam effects |
| `LogoLoop` | Infinite scrolling logo carousel |
| `RotatingText` | Cycling animated text |
| `ScrollStack` | Stacking cards on scroll |
| `ScrollVelocity` | Velocity-based scroll animations |
| `SplashCursor` | Fluid simulation cursor effect |
| `SplitText` | Character-by-character animation |
| `StarBorder` | Animated star border effect |
| `TextType` | Typewriter text effect |
| `TiltedCard` | 3D perspective tilt on hover |

<br />

## 🎨 Design System

### Color Palette

The design uses a sophisticated dark theme with a vibrant accent:

| Color | Value | Usage |
|-------|-------|-------|
| **Background** | `#0a0a0c` | Deep charcoal base |
| **Primary** | `#FFFFFF` | White text & elements |
| **Secondary** | `#D4F600` | Lime accent (CTAs, highlights) |
| **Muted** | `#71717a` | Subtle text |

### Typography

Premium font pairing for a refined, editorial aesthetic:

- **Abril Fatface** — Hero headlines
- **Cinzel** — Section titles
- **Playfair Display** — Accent text
- **Outfit** — Body text & UI
- **Syne** — Labels & captions
- **DM Serif Display** — Decorative elements

<br />

## 📄 Page Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen hero with Hyperspeed 3D background, rotating tagline, and CTA |
| **Services** | Interactive bento grid showcasing 6 service offerings with 3D laptop model |
| **Process** | Visual workflow/process steps with animations |
| **Portfolio** | Project showcase gallery with hover effects |
| **Team** | Team member cards with profile information |
| **Testimonials** | Client testimonial carousel |
| **Clients** | Trusted client logo loop |
| **FAQ** | Expandable FAQ accordion |
| **Contact** | Contact form with validation |
| **Footer** | Site footer with links and branding |

<br />

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `app/globals.css`:

```css
.dark {
  --primary: #FFFFFF;
  --secondary: #D4F600;
  --background: oklch(0.08 0.02 265);
}
```

### Adding New Sections

1. Create a component in `components/landing/`
2. Import and add it to `app/page.tsx`

### Modifying 3D Effects

The Hyperspeed component accepts extensive customization via `effectOptions`. See `components/HyperSpeedPresets.ts` for preset configurations.

<br />

## 📱 Responsive Design

The landing page is fully responsive with optimized layouts for:

- 📱 **Mobile** — Stacked layouts, touch-optimized
- 📋 **Tablet** — Adaptive grids, adjusted animations
- 💻 **Desktop** — Full effects, multi-column layouts
- 🖥️ **Large screens** — Maximum visual impact

<br />

## ⚡ Performance

- **Server Components** — Leverages Next.js RSC for optimal loading
- **Image Optimization** — Next.js Image with AVIF/WebP support
- **Font Optimization** — Subset Google Fonts with display swap
- **Code Splitting** — Automatic component-level splitting
- **Animation Optimization** — GPU-accelerated transforms

---

<div align="center">

**Built by Hulo for the digital future**

⭐ Star this repo if you found it helpful!

</div>
