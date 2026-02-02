'use client';

import React from 'react';
import LogoLoop from '@/components/LogoLoop';
import ScrollVelocity from '@/components/ScrollVelocity';

const clientLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", alt: "React" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind" },
  { src: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png", alt: "Next.js" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png", alt: "TypeScript" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", alt: "GitHub" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg", alt: "Vue.js" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg", alt: "Firebase" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", alt: "Docker" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS" },
];

export function Clients() {
  return (
    <section id="clients" className="py-24 border-y border-white/5 bg-[#0a0a0c]">
       <div className="overflow-hidden mb-8">
         <ScrollVelocity 
           texts={['TRUSTED BY INNOVATORS', 'POWERED BY EXCELLENCE']}
           velocity={50}
           className="font-cinzel text-4xl md:text-6xl text-white/10"
         />
       </div>
       
       <div className="container mx-auto px-6 mb-12 flex justify-center">
         <span className="font-playfair italic text-2xl text-zinc-600">Trusted by visionaries</span>
       </div>
       
       <div className="max-w-[100vw] overflow-hidden py-10 opacity-70 hover:opacity-100 transition-opacity">
          <LogoLoop 
            logos={clientLogos} 
            speed={100} 
            direction="left" 
            pauseOnHover={true} 
            gap={150}
            logoHeight={40}
            className="opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
         />
       </div>
    </section>
  );
}

