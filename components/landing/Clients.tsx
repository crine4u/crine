'use client';

import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: "React", letter: "R" },
  { name: "Next.js", letter: "N" },
  { name: "TypeScript", letter: "T" },
  { name: "Node.js", letter: "N" },
  { name: "Tailwind", letter: "T" },
  { name: "Firebase", letter: "F" },
  { name: "Docker", letter: "D" },
  { name: "AWS", letter: "A" },
];

const colors = ["#D4F600", "#FF6B9D", "#4ECDC4", "#FF8A50", "#A855F7", "#FBBF24", "#D4F600", "#FF6B9D"];

export function Clients() {
  return (
    <section id="clients" className="py-24 border-y-3 border-black bg-[#FFFDF7]">
       {/* Marquee Text */}
       <div className="overflow-hidden mb-12 border-y-3 border-black py-4 bg-black">
         <motion.div
           animate={{ x: [0, -1000] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="flex whitespace-nowrap gap-8"
         >
           {[...Array(10)].map((_, i) => (
             <span key={i} className="font-cinzel text-4xl md:text-6xl font-black text-[#D4F600]">
               TRUSTED BY INNOVATORS •
             </span>
           ))}
         </motion.div>
       </div>
       
       <div className="container mx-auto px-6 mb-12">
         <p className="font-outfit text-center text-xl text-gray-700 mb-12">
           Powering the world&apos;s most ambitious projects
         </p>
         
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
           {clientLogos.map((logo, index) => (
             <motion.div
               key={logo.name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.05 }}
               whileHover={{ x: -2, y: -2 }}
               className="aspect-square border-3 border-black shadow-[3px_3px_0_#000] hover:shadow-[5px_5px_0_#000] flex items-center justify-center transition-all cursor-pointer"
               style={{ backgroundColor: colors[index] }}
             >
               <span className="font-cinzel text-3xl font-black text-black">{logo.letter}</span>
             </motion.div>
           ))}
         </div>
       </div>
    </section>
  );
}
