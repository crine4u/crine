'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by scope, but a standard bespoke corporate site typically takes 4-6 weeks from discovery to launch. Complex web apps may take 8-12 weeks."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We offer tailored maintenance packages to ensure your digital asset remains secure, fast, and up-to-date with the latest web standards."
  },
  {
    question: "Do you work with startups?",
    answer: "We love visionaries. We offer special partnership models for high-potential startups looking to make a massive impact from day one."
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in the React ecosystem (Next.js), typically paired with Tailwind CSS for styling and Framer Motion for interactions."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've delivered exceptional results across FinTech, HealthTech, E-commerce, SaaS, and Creative industries."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer both fixed-price projects and retainer models. After our discovery phase, we provide transparent quotes. No hidden costs, ever."
  }
];

const colors = ["#D4F600", "#FF6B9D", "#4ECDC4", "#FF8A50", "#A855F7", "#FBBF24"];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-32 bg-transparent border-t-3 border-black">
       <div className="container mx-auto px-6 max-w-4xl">
           <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="font-syne text-4xl md:text-6xl text-black mb-16 text-center font-black"
           >
             Frequently <span className="bg-[#4ECDC4] px-3 border-3 border-black shadow-[4px_4px_0_#000]">Asked</span>
           </motion.h2>
           
           <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-3 border-black shadow-[4px_4px_0_#000] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left font-syne text-lg md:text-xl text-black font-bold flex items-center justify-between transition-colors"
                    style={{ backgroundColor: openIndex === index ? colors[index % colors.length] : 'white' }}
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-outfit text-sm font-bold px-2 py-1 bg-black text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      className="border-t-3 border-black bg-white"
                    >
                      <p className="p-6 font-outfit text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
           </div>
       </div>
    </section>
  );
}
