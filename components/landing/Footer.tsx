'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Ribbons from '@/components/Ribbons';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'AI Integration', href: '#services' },
    { label: 'Cloud Solutions', href: '#services' },
  ],
  socials: ['Instagram', 'Twitter', 'LinkedIn', 'Dribbble', 'GitHub'],
};

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-black text-zinc-500 border-t border-white/5 relative overflow-hidden"
    >
       {/* Ribbons Background */}
       <div className="absolute inset-0 opacity-20 pointer-events-none">
         <Ribbons 
           colors={['#D4F600', '#ffffff', '#D4F600']}
           baseThickness={15}
           baseSpring={0.02}
           baseFriction={0.95}
         />
       </div>
       
       <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
             {/* Brand */}
             <div>
                <h3 className="font-cinzel text-5xl text-white mb-4">HULO.</h3>
                <p className="font-outfit text-sm text-zinc-500 mb-6">
                  Crafting digital experiences with soul since 2026. We transform visions into pixel-perfect reality.
                </p>
                <div className="flex gap-4">
                  {footerLinks.socials.slice(0, 4).map(social => (
                     <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all">
                       <span className="sr-only">{social}</span>
                       <span className="font-syne text-xs">{social[0]}</span>
                     </a>
                  ))}
                </div>
             </div>
             
             {/* Navigation */}
             <div>
               <h4 className="font-syne text-white font-bold mb-6 uppercase text-sm tracking-widest">Navigation</h4>
               <ul className="space-y-3">
                 {footerLinks.navigation.map(link => (
                   <li key={link.label}>
                     <Link href={link.href} className="font-outfit text-sm hover:text-white transition-colors">{link.label}</Link>
                   </li>
                 ))}
               </ul>
             </div>
             
             {/* Services */}
             <div>
               <h4 className="font-syne text-white font-bold mb-6 uppercase text-sm tracking-widest">Services</h4>
               <ul className="space-y-3">
                 {footerLinks.services.map(link => (
                   <li key={link.label}>
                     <Link href={link.href} className="font-outfit text-sm hover:text-white transition-colors">{link.label}</Link>
                   </li>
                 ))}
               </ul>
             </div>
             
             {/* Contact */}
             <div>
               <h4 className="font-syne text-white font-bold mb-6 uppercase text-sm tracking-widest">Get In Touch</h4>
               <ul className="space-y-3 font-outfit text-sm">
                 <li>
                   <span className="text-zinc-600">Email</span><br />
                   <a href="mailto:hello@hulo.studio" className="text-white hover:text-secondary transition-colors">hello@hulo.studio</a>
                 </li>
                 <li>
                   <span className="text-zinc-600">Phone</span><br />
                   <a href="tel:+1234567890" className="text-white hover:text-secondary transition-colors">+1 (234) 567-890</a>
                 </li>
                 <li>
                   <span className="text-zinc-600">Location</span><br />
                   <span className="text-white">San Francisco, CA</span>
                 </li>
               </ul>
             </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="font-outfit text-sm">© 2026 HULO. All Rights Reserved.</p>
             <div className="flex gap-6 font-outfit text-sm">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-white transition-colors">Cookies</a>
             </div>
          </div>
       </div>
    </motion.footer>
  );
}

