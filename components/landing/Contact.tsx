'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-[#D4F600] overflow-hidden border-t-3 border-black">
       {/* Decorative Elements */}
       <div className="absolute top-20 right-20 w-24 h-24 bg-[#FF6B9D] border-3 border-black shadow-[4px_4px_0_#000] rotate-12 hidden lg:block"></div>
       <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#4ECDC4] border-3 border-black shadow-[4px_4px_0_#000] hidden lg:block"></div>
       
       <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
             <h2 className="font-cinzel text-5xl md:text-7xl mb-6 text-black font-black">
               Ready to <span className="bg-black text-[#D4F600] px-4 border-3 border-black">Create?</span>
             </h2>
             <p className="font-outfit text-lg md:text-xl text-black/80">
                Let&apos;s discuss your next breakthrough project.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-3 border-black text-black p-8 md:p-12 max-w-4xl mx-auto shadow-[8px_8px_0_#000]"
          >
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-outfit text-sm uppercase tracking-widest font-bold text-black">Your Name</label>
                     <Input placeholder="John Doe" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                     <label className="font-outfit text-sm uppercase tracking-widest font-bold text-black">Email Address</label>
                     <Input type="email" placeholder="john@example.com" className="bg-white" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="font-outfit text-sm uppercase tracking-widest font-bold text-black">The Vision</label>
                   <Textarea placeholder="Tell us about the project..." className="min-h-[180px] bg-white" />
                </div>
                <div className="flex justify-end pt-4">
                   <Button className="bg-black text-white hover:bg-[#D4F600] hover:text-black px-12 py-6 text-lg font-bold">
                     Send Proposal
                   </Button>
                </div>
             </form>
          </motion.div>
       </div>
    </section>
  );
}
