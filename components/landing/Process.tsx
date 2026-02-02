'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SplitText from '@/components/SplitText';
import CircularText from '@/components/CircularText';

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "We dive deep into your brand's core to understand your vision, audience, and market position."
  },
  {
    id: "02",
    title: "Architecture",
    description: "Structuring the digital experience with precision, ensuring scalability and performance from day one."
  },
  {
    id: "03",
    title: "Creation",
    description: "Where art meets code. We build with modern technologies to craft pixel-perfect interfaces."
  },
  {
    id: "04",
    title: "Launch",
    description: "Rigorous testing and optimization before we flip the switch and amplify your digital presence."
  },
  {
    id: "05",
    title: "Iteration",
    description: "Continuous refinement based on real user data and feedback to maximize engagement and conversion."
  },
  {
    id: "06",
    title: "Integration",
    description: "Seamlessly connecting your new digital asset with existing systems, APIs, and third-party services."
  },
  {
    id: "07",
    title: "Optimization",
    description: "Performance tuning, SEO enhancement, and accessibility improvements for peak efficiency."
  },
  {
    id: "08",
    title: "Support",
    description: "Ongoing maintenance, security updates, and feature enhancements to keep you ahead of the curve."
  }
];

export function Process() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 bg-[#0a0a0c] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-cinzel text-white mb-6">
               <SplitText text="The Process" className="" delay={50} />
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto md:mx-0"></div>
          </div>
          <div className="hidden md:block">
            <CircularText 
              text="• DESIGN • DEVELOP • DEPLOY • ITERATE " 
              spinDuration={15}
              onHover="speedUp"
              className="text-secondary opacity-30 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
                <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative p-8 border border-white/5 rounded-[30px] bg-white/[0.02] hover:bg-white/[0.05] transition-colors hover:border-secondary/30"
                >
                    <span className="font-outfit text-6xl text-white/5 font-bold absolute top-4 right-6 group-hover:text-secondary/20 transition-colors">
                        {step.id}
                    </span>
                    <h3 className="font-syne text-2xl text-white mb-4 mt-8 group-hover:text-secondary transition-colors">{step.title}</h3>
                    <p className="font-outfit text-zinc-400 text-sm leading-relaxed">
                        {step.description}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

