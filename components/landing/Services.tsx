'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cpu, Palette, Cloud, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Penetration Testing',
    label: 'Offense',
    description: 'Advanced simulation of cyber attacks to identify vulnerabilities.',
    icon: Wrench,
    color: '#D4F600',
    size: 'large'
  },
  {
    title: 'Infrastructure Security',
    label: 'Defense',
    description: 'Hardening systems against unauthorized access.',
    icon: Cloud,
    color: '#FF6B9D',
    size: 'small'
  },
  {
    title: 'Incident Response',
    label: 'Reaction',
    description: 'Immediate action to mitigate data breaches.',
    icon: Smartphone,
    color: '#4ECDC4',
    size: 'small'
  },
  {
    title: 'Secure Compliance',
    label: 'Standards',
    description: 'Adherence to ISO and GDPR standards.',
    icon: Globe,
    color: '#FF8A50',
    size: 'medium'
  },
  {
    title: 'Network Enforcement',
    label: 'Control',
    description: 'Monitoring and managing network traffic policies.',
    icon: Cpu,
    color: '#A855F7',
    size: 'medium'
  },
  {
    title: 'Cloud Security',
    label: 'Scability',
    description: 'Securing cloud-native environments.',
    icon: Palette,
    color: '#FBBF24',
    size: 'small'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-transparent border-t-3 border-black relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-16 lg:mb-24 gap-8 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
             <h2 className="font-syne text-5xl md:text-7xl mb-6 text-black tracking-tight font-black">
               Our <span className="bg-[#D4F600] px-3 border-3 border-black shadow-[4px_4px_0_#000]">Craft</span>
             </h2>
             <div className="h-2 w-24 bg-black mb-8 mx-auto lg:mx-0"></div>
             
             <p className="font-outfit text-lg md:text-xl text-gray-700 leading-relaxed">
               We blend artistic vision with technical excellence to create digital experiences that leave a lasting impact.
             </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block w-48 h-48 bg-[#FF6B9D] border-3 border-black shadow-[8px_8px_0_#000] flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-black"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = service.size === 'large';
            const isMedium = service.size === 'medium';
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: -4, y: -4 }}
                className={`
                  group p-6 border-3 border-black bg-white
                  shadow-[4px_4px_0_#000] hover:shadow-[8px_8px_0_#000]
                  transition-all cursor-pointer
                  ${isLarge ? 'lg:col-span-2 lg:row-span-2' : ''}
                  ${isMedium ? 'lg:col-span-2' : ''}
                `}
                style={{ backgroundColor: service.color }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-outfit text-xs font-bold uppercase tracking-widest text-black border-2 border-black px-2 py-1 bg-white">
                      {service.label}
                    </span>
                    <div className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className={`font-syne font-black text-black mb-2 ${isLarge ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
                      {service.title}
                    </h3>
                    <p className={`font-outfit text-black/80 ${isLarge ? 'text-base' : 'text-sm'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
