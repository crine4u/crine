'use client';

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Alex Rivera",
    title: "Full-stack Developer",
    handle: "@arivera",
    status: "Building the future",
    color: "#D4F600"
  },
  {
    name: "Sarah Chen",
    title: "UI/UX Engineer",
    handle: "@schen_dev",
    status: "Designing experiences",
    color: "#FF6B9D"
  },
  {
    name: "Marcus Johnson",
    title: "Cloud Architect",
    handle: "@mjohnson",
    status: "Scaling systems",
    color: "#4ECDC4"
  },
  {
    name: "Emma Williams",
    title: "Product Lead",
    handle: "@ewilliams",
    status: "Shipping products",
    color: "#FF8A50"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-transparent border-t-3 border-black relative z-10 w-full overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#A855F7] border-3 border-black shadow-[4px_4px_0_#000] hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 lg:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cinzel text-5xl md:text-7xl mb-6 text-black tracking-tight font-black">
              Our <span className="bg-[#FF6B9D] px-3 border-3 border-black shadow-[4px_4px_0_#000]">Team</span>
            </h2>
            <div className="h-2 w-24 bg-black mb-8 mx-auto"></div>
            <p className="max-w-2xl text-black text-lg md:text-xl font-outfit">
              Meet the visionaries behind our most ambitious projects.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: -4, y: -4 }}
              className="group border-3 border-black bg-white shadow-[4px_4px_0_#000] hover:shadow-[8px_8px_0_#000] transition-all overflow-hidden"
            >
              {/* Avatar placeholder with color */}
              <div 
                className="h-48 border-b-3 border-black flex items-center justify-center"
                style={{ backgroundColor: member.color }}
              >
                <div className="w-24 h-24 bg-white border-3 border-black rounded-full flex items-center justify-center">
                  <span className="font-cinzel text-4xl font-black text-black">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-syne text-xl text-black font-bold mb-1">{member.name}</h3>
                <p className="font-outfit text-sm text-gray-600 mb-3">{member.title}</p>
                <div className="flex items-center justify-between">
                  <span className="font-outfit text-xs font-bold text-gray-500">{member.handle}</span>
                  <span 
                    className="font-outfit text-xs font-bold px-2 py-1 border-2 border-black"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
