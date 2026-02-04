'use client';

import React from 'react';
import { motion } from 'framer-motion';

const portfolio = [
  { 
    title: "FinTech Dashboard", 
    category: "Web App", 
    image: "https://images.unsplash.com/photo-1642132652859-3ef5a92906a3?q=80&w=800&auto=format&fit=crop",
    description: "Real-time analytics for crypto markets.",
    color: "#D4F600"
  },
  { 
    title: "E-Commerce", 
    category: "Mobile App", 
    image: "https://images.unsplash.com/photo-1607677686474-922dbc3df5f5?q=80&w=800&auto=format&fit=crop",
    description: "Seamless shopping experience.",
    color: "#FF6B9D"
  },
  { 
    title: "HealthTech", 
    category: "Platform", 
    image: "https://images.unsplash.com/photo-1576091160550-217358c7e618?q=80&w=800&auto=format&fit=crop",
    description: "Connecting patients and doctors.",
    color: "#4ECDC4"
  },
  { 
    title: "Creative Studio", 
    category: "Website", 
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    description: "Showcasing world-class art.",
    color: "#FF8A50"
  },
  { 
    title: "SaaS Platform", 
    category: "Web App", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    description: "Enterprise productivity suite.",
    color: "#A855F7"
  },
  { 
    title: "Gaming App", 
    category: "Mobile App", 
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop",
    description: "Immersive mobile gaming experience.",
    color: "#FBBF24"
  },
];

export function Portfolio() {
  return (
    <section id="work" className="py-32 bg-black overflow-hidden relative border-t-3 border-white">
      <div className="container mx-auto px-6">
         <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
         >
            <div>
              <h2 className="font-syne text-5xl md:text-7xl font-black uppercase text-white">
                Selected<br/>
                <span className="bg-[#D4F600] text-black px-4 border-3 border-white shadow-[4px_4px_0_#fff]">Works</span>
              </h2>
            </div>
            <div className="hidden md:block">
               <span className="font-outfit text-sm font-bold border-3 border-white text-white px-6 py-3 bg-transparent">
                 HOVER TO REVEAL
               </span>
            </div>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ x: -6, y: -6 }}
                className="group relative border-3 border-white bg-white shadow-[6px_6px_0_#fff] hover:shadow-[10px_10px_0_#fff] overflow-hidden transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="font-outfit text-xs font-bold uppercase tracking-widest text-black border-2 border-black px-2 py-1 bg-white w-fit mb-3">
                      {item.category}
                    </span>
                    <h3 className="font-cinzel text-2xl md:text-3xl text-black font-black mb-2">{item.title}</h3>
                    <p className="font-outfit text-black/80 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-white border-t-3 border-black">
                  <span className="font-outfit text-xs font-bold uppercase tracking-widest" style={{ color: item.color === '#FBBF24' ? '#000' : item.color }}>
                    {item.category}
                  </span>
                  <h3 className="font-cinzel text-xl text-black font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
