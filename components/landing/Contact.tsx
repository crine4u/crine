'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-transparent overflow-hidden border-t-3 border-black">
       {/* Decorative Elements */}
       <div className="absolute top-20 right-20 w-24 h-24 bg-[#FF003C] border-3 border-black shadow-[4px_4px_0_#000] rotate-12 hidden lg:block"></div>
       <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#00F0FF] border-3 border-black shadow-[4px_4px_0_#000] hidden lg:block"></div>
       
       <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
             <h2 className="font-syne text-5xl md:text-7xl mb-6 text-black font-black">
               Join the <span className="bg-black text-[#D4F600] px-4 border-3 border-black">Waitlist</span>
             </h2>
             <p className="font-outfit text-lg md:text-xl text-black/80">
                Secure your spot in the next generation of digital defense.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#00F0FF] border-3 border-black text-black p-8 md:p-12 max-w-2xl mx-auto shadow-[8px_8px_0_#000]"
          >
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="font-outfit text-sm uppercase tracking-widest font-bold text-black">Your Name</label>
                     <Input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                        className="bg-[#00F0FF] border-black focus:ring-0 placeholder:text-black/50" 
                        required 
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="font-outfit text-sm uppercase tracking-widest font-bold text-black">Email Address</label>
                     <Input 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="help@crine.in" 
                        className="bg-[#00F0FF] border-black focus:ring-0 placeholder:text-black/50" 
                        required 
                     />
                  </div>
                </div>
                
                {status === 'success' && (
                  <div className="p-4 bg-[#D4F600] border-3 border-black text-black font-bold text-center">
                    Success! Check your email for confirmation.
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="p-4 bg-[#FF003C] border-3 border-black text-white font-bold text-center">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <div className="flex justify-end pt-4">
                   <Button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="w-full bg-black text-white hover:bg-[#D4F600] hover:text-black px-12 py-6 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                   >
                     {status === 'loading' ? 'Processing...' : 'Request Access'}
                   </Button>
                </div>
             </form>
          </motion.div>
       </div>
    </section>
  );
}
