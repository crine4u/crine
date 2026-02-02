'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BlurText from '@/components/BlurText';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';

const testimonials = [
  {
    quote: "Hulo transformed our digital identity. The attention to detail and artistic direction is unmatched in the industry.",
    author: "Elena V.",
    role: "CEO, Artisan & Co.",
    date: "March 2026"
  },
  {
    quote: "Technical mastery met visual poetry. Our bounce rates dropped and engagement skyrocketed after the relaunch.",
    author: "Marcus J.",
    role: "CTO, FinFlow",
    date: "Feb 2026"
  },
  {
    quote: "They didn't just build a website; they crafted a digital experience that perfectly captures our brand's soul.",
    author: "Sarah L.",
    role: "Marketing Director, Horizon",
    date: "Jan 2026"
  },
  {
    quote: "From concept to launch, Hulo exceeded every expectation. Their team moves fast without sacrificing quality.",
    author: "David K.",
    role: "Founder, TechStart",
    date: "Dec 2025"
  },
  {
    quote: "The AI integration they built for us has revolutionized our operations. Truly next-level engineering.",
    author: "Jennifer M.",
    role: "VP Engineering, DataCorp",
    date: "Nov 2025"
  },
  {
    quote: "Working with Hulo felt like having an extension of our own team. Communication was flawless throughout.",
    author: "Michael R.",
    role: "Creative Director, Sparkle Agency",
    date: "Oct 2025"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#08080a] border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
             <h2 className="text-5xl md:text-7xl font-abril text-white mb-8">
                <BlurText text="Client Stories" delay={150} animateBy="words" direction="top" className="inline-block" />
             </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <Card className="bg-zinc-900/30 border-white/5 text-white rounded-[30px] backdrop-blur-sm overflow-hidden hover:border-secondary/30 transition-all h-full group">
                    <CardContent className="p-10 flex flex-col justify-between h-full relative">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote className="w-20 h-20 text-secondary rotate-180" />
                        </div>
                        <div>
                          <Quote className="w-10 h-10 text-secondary mb-6" />
                          <p className="font-playfair text-xl md:text-2xl leading-relaxed text-zinc-200 mb-8 italic">
                              &ldquo;{t.quote}&rdquo;
                          </p>
                        </div>
                        <div>
                          <h4 className="font-syne text-lg text-white font-bold">{t.author}</h4>
                          <span className="font-outfit text-xs text-zinc-500 uppercase tracking-widest group-hover:text-secondary transition-colors">{t.role}</span>
                        </div>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

