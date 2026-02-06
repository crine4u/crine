'use client';

import React from 'react';
import { motion } from 'framer-motion';

const portfolio = [
  { 
    title: "Threat Intel", 
    category: "Monitoring", 
    image: "/images/cyber_threat.png",
    description: "Real-time global threat tracking and visualization platform.",
    color: "#D4F600"
  },
  { 
    title: "Cloud Fortress", 
    category: "Cloud Security", 
    image: "/images/cyber_cloud.png",
    description: "Hardened infrastructure for multi-cloud enterprise environments.",
    color: "#FF6B9D"
  },
  { 
    title: "Zero-Trust Mesh", 
    category: "Network", 
    image: "/images/cyber_network.png",
    description: "Next-gen micro-segmentation for distributed workforces.",
    color: "#4ecdc4ff"
  },
  { 
    title: "Biometric AI", 
    category: "Identity", 
    image: "/images/cyber_bio.png",
    description: "Multi-modal authentication using advanced neural patterns.",
    color: "#FF8A50"
  }
];

export function Portfolio() {
  return (
    <section id="work" className="py-32 bg-transparent overflow-hidden relative border-t-3 border-black">
      <div className="container mx-auto px-6">
         <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
         >
            <div>
              <h2 className="font-syne text-5xl md:text-7xl font-black uppercase text-black">
                Security<br/>
                <span className="bg-[#D4F600] text-black px-4 border-3 border-black shadow-[4px_4px_0_#000]">Case Studies</span>
              </h2>
            </div>
            <div className="hidden md:block">
               <span className="font-outfit text-sm font-bold border-3 border-black text-black px-6 py-3 bg-transparent">
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
                className="group relative border-3 border-black bg-white shadow-[6px_6px_0_#000] hover:shadow-[10px_10px_0_#000] overflow-hidden transition-all cursor-pointer"
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
                    <h3 className="font-syne text-2xl md:text-3xl text-black font-black mb-2">{item.title}</h3>
                    <p className="font-outfit text-black/80 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-white border-t-3 border-black">
                  <span className="font-outfit text-xs font-bold uppercase tracking-widest" style={{ color: item.color === '#FBBF24' ? '#000' : item.color }}>
                    {item.category}
                  </span>
                  <h3 className="font-syne text-xl text-black font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
