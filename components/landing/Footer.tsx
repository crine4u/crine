'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  socials: ['Instagram', 'Twitter', 'LinkedIn', 'GitHub'],
};

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 bg-black text-white border-t-3 border-white relative overflow-hidden"
    >
       <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
             {/* Brand */}
             <div>
                <h3 className="font-cinzel text-4xl text-[#D4F600] font-black mb-4">HULO.</h3>
                <p className="font-outfit text-sm text-gray-400 mb-6">
                  Crafting digital experiences with soul since 2026.
                </p>
                <div className="flex gap-3">
                  {footerLinks.socials.map(social => (
                     <a 
                       key={social} 
                       href="#" 
                       className="w-10 h-10 border-3 border-white flex items-center justify-center hover:bg-[#D4F600] hover:border-[#D4F600] hover:text-black transition-all font-syne text-xs font-bold"
                     >
                       {social[0]}
                     </a>
                  ))}
                </div>
             </div>
             
             {/* Navigation */}
             <div>
               <h4 className="font-syne text-white font-bold mb-6 uppercase text-sm tracking-widest border-b-2 border-[#D4F600] pb-2 inline-block">Navigation</h4>
               <ul className="space-y-3">
                 {footerLinks.navigation.map(link => (
                   <li key={link.label}>
                     <Link href={link.href} className="font-outfit text-sm text-gray-400 hover:text-[#D4F600] transition-colors">{link.label}</Link>
                   </li>
                 ))}
               </ul>
             </div>
             
             {/* Services */}
             <div>
               <h4 className="font-syne text-white font-bold mb-6 uppercase text-sm tracking-widest border-b-2 border-[#D4F600] pb-2 inline-block">Services</h4>
               <ul className="space-y-3">
                 {footerLinks.services.map(link => (
                   <li key={link.label}>
                     <Link href={link.href} className="font-outfit text-sm text-gray-400 hover:text-[#D4F600] transition-colors">{link.label}</Link>
                   </li>
                 ))}
               </ul>
             </div>
             
             {/* Contact */}
             <div>
               <h4 className="font-syne text-white font-bold mb-6 uppercase text-sm tracking-widest border-b-2 border-[#D4F600] pb-2 inline-block">Get In Touch</h4>
               <ul className="space-y-4 font-outfit text-sm">
                 <li>
                   <span className="text-gray-500 block text-xs uppercase tracking-widest mb-1">Email</span>
                   <a href="mailto:hello@hulo.studio" className="text-[#D4F600] hover:underline font-bold">hello@hulo.studio</a>
                 </li>
                 <li>
                   <span className="text-gray-500 block text-xs uppercase tracking-widest mb-1">Phone</span>
                   <a href="tel:+1234567890" className="text-white hover:text-[#D4F600] transition-colors">+1 (234) 567-890</a>
                 </li>
                 <li>
                   <span className="text-gray-500 block text-xs uppercase tracking-widest mb-1">Location</span>
                   <span className="text-white">San Francisco, CA</span>
                 </li>
               </ul>
             </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t-3 border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="font-outfit text-sm text-gray-500">© 2026 HULO. All Rights Reserved.</p>
             <div className="flex gap-6 font-outfit text-sm">
               <a href="#" className="text-gray-500 hover:text-[#D4F600] transition-colors">Privacy Policy</a>
               <a href="#" className="text-gray-500 hover:text-[#D4F600] transition-colors">Terms of Service</a>
             </div>
          </div>
       </div>
    </motion.footer>
  );
}
