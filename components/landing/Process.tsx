'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "We dive deep into your brand's core to understand your vision.",
    color: "#D4F600"
  },
  {
    id: "02",
    title: "Architecture",
    description: "Structuring the digital experience with precision.",
    color: "#FF6B9D"
  },
  {
    id: "03",
    title: "Creation",
    description: "Where art meets code. Pixel-perfect interfaces.",
    color: "#4ECDC4"
  },
  {
    id: "04",
    title: "Launch",
    description: "Rigorous testing before we flip the switch.",
    color: "#FF8A50"
  },
  {
    id: "05",
    title: "Iteration",
    description: "Continuous refinement based on real user data.",
    color: "#A855F7"
  },
  {
    id: "06",
    title: "Integration",
    description: "Seamlessly connecting with existing systems.",
    color: "#FBBF24"
  },
  {
    id: "07",
    title: "Optimization",
    description: "Performance tuning for peak efficiency.",
    color: "#D4F600"
  },
  {
    id: "08",
    title: "Support",
    description: "Ongoing maintenance to keep you ahead.",
    color: "#4ECDC4"
  }
];

export function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 bg-transparent relative overflow-hidden border-t-3 border-black">
      {/* Decorative Element */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#FF6B9D] border-3 border-black shadow-[4px_4px_0_#000] rotate-12 hidden lg:block"></div>
      
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-cinzel text-black mb-6 font-black">
              The <span className="bg-[#4ECDC4] px-3 border-3 border-black shadow-[4px_4px_0_#000]">Process</span>
            </h2>
            <div className="h-2 w-24 bg-black mx-auto md:mx-0"></div>
          </div>
          <div className="hidden md:block">
            <div className="font-outfit text-sm font-bold uppercase tracking-widest border-3 border-black px-6 py-3 bg-[#D4F600] shadow-[4px_4px_0_#000]">
              Design • Develop • Deploy
            </div>
          </div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
                <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: -4, y: -4 }}
                    className="group relative p-6 border-3 border-black bg-white shadow-[4px_4px_0_#000] hover:shadow-[8px_8px_0_#000] transition-all"
                    style={{ backgroundColor: step.color }}
                >
                    <span className="font-outfit text-6xl font-black text-black/20 absolute top-2 right-4 group-hover:text-black/40 transition-colors">
                        {step.id}
                    </span>
                    <div className="mt-12">
                      <h3 className="font-syne text-2xl text-black font-bold mb-3">{step.title}</h3>
                      <p className="font-outfit text-black/80 text-sm leading-relaxed">
                          {step.description}
                      </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
