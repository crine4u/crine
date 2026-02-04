'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedContent from '@/components/AnimatedContent';
import RotatingText from '@/components/RotatingText';
import Grainient from '../Grainient';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Grainient Background */}
      
      
      {/* Decorative Shapes */}
      <motion.div 
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-32 right-20 w-32 h-32 bg-[#D4F600] border-3 border-black shadow-[4px_4px_0_#000] hidden lg:block"
      ></motion.div>
      <motion.div 
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-32 left-20 w-24 h-24 bg-[#FF6B9D] border-3 border-black shadow-[4px_4px_0_#000] rounded-full hidden lg:block"
      ></motion.div>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute top-1/2 left-10 w-16 h-16 bg-[#4ECDC4] border-3 border-black shadow-[4px_4px_0_#000] hidden lg:block"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          ease="back.out(1.2)"
          initialOpacity={0}
          animateOpacity={true}
          scale={1}
          threshold={0.1}
        >
          <div className="space-y-10">
            <div className="inline-block px-6 py-3 border-3 border-black bg-[#D4F600] shadow-[4px_4px_0_#000]">
              <span className="font-outfit text-sm uppercase tracking-[0.15em] text-black font-bold">
                Est. 2026 // Future Ready
              </span>
            </div>

            <h1 className="font-cinzel text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] text-black font-black">
              ALL ROADS LEAD TO <br />
              <RotatingText 
                texts={['EXCELLENCE', 'INNOVATION', 'SUCCESS', 'GREATNESS']}
                mainClassName="font-black bg-[#D4F600] px-4 py-2 border-3 border-black shadow-[6px_6px_0_#000] inline-flex overflow-hidden"
                staggerFrom="first"
                staggerDuration={0.03}
                rotationInterval={3000}
                transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              />
            </h1>
            
            <p className="font-outfit text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed">
              We craft digital experiences with soul. 
              <span className="block mt-3 font-bold text-lg tracking-wide bg-black text-[#FFFDF7] px-4 py-2 inline-block border-3 border-black shadow-[4px_4px_0_#D4F600]">
                Web // Mobile // Brand
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 4, y: 4 }}
                className="font-outfit uppercase px-10 py-5 text-base tracking-widest font-bold bg-black text-white border-3 border-black shadow-[6px_6px_0_#D4F600] hover:shadow-[8px_8px_0_#D4F600] active:shadow-none transition-shadow"
              >
                Start A Project
              </motion.button>
              <motion.button
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 4, y: 4 }}
                className="font-outfit uppercase px-10 py-5 text-base tracking-widest font-bold bg-[#FFFDF7] text-black border-3 border-black shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:bg-[#D4F600] active:shadow-none transition-all"
              >
                View Work
              </motion.button>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
