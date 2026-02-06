'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "CRINE transformed our digital identity. The attention to detail is unmatched.",
    author: "Elena V.",
    role: "CEO, Artisan & Co.",
    color: "#D4F600"
  },
  {
    quote: "Technical mastery met visual poetry. Our engagement skyrocketed.",
    author: "Marcus J.",
    role: "CTO, FinFlow",
    color: "#FF6B9D"
  },
  {
    quote: "They crafted a digital experience that perfectly captures our brand's soul.",
    author: "Sarah L.",
    role: "Marketing Director",
    color: "#4ECDC4"
  },
  {
    quote: "From concept to launch, CRINE exceeded every expectation.",
    author: "David K.",
    role: "Founder, TechStart",
    color: "#FF8A50"
  },
  {
    quote: "The AI integration they built has revolutionized our operations.",
    author: "Jennifer M.",
    role: "VP Engineering",
    color: "#A855F7"
  },
  {
    quote: "Working with CRINE felt like having an extension of our own team.",
    author: "Michael R.",
    role: "Creative Director",
    color: "#FBBF24"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-transparent border-y-3 border-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
             <h2 className="text-5xl md:text-7xl font-syne text-black mb-8 font-black">
               Client <span className="bg-[#D4F600] text-black px-4 border-3 border-black shadow-[4px_4px_0_#000]">Stories</span>
             </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ x: -4, y: -4 }}
                  className="group border-3 border-black bg-white shadow-[4px_4px_0_#000] hover:shadow-[8px_8px_0_#fff] transition-all"
                >
                  <div 
                    className="p-4 border-b-3 border-black flex items-center gap-3"
                    style={{ backgroundColor: t.color }}
                  >
                    <Quote className="w-8 h-8 text-black" />
                    <span className="font-outfit text-xs font-bold uppercase tracking-widest text-black">Testimonial</span>
                  </div>
                  <div className="p-6">
                    <p className="font-outfit text-lg leading-relaxed text-black mb-6">
                        &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="border-t-2 border-black pt-4">
                      <h4 className="font-syne text-lg text-black font-bold">{t.author}</h4>
                      <span className="font-outfit text-sm text-gray-600">{t.role}</span>
                    </div>
                  </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
