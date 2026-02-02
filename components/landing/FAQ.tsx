'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
    answer: "We specialize in the React ecosystem (Next.js), typically paired with Tailwind CSS for styling and Framer Motion for interactions. For backend, we use robust solutions tailored to your needs."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've delivered exceptional results across FinTech, HealthTech, E-commerce, SaaS, and Creative industries. Our approach adapts to any sector while maintaining design excellence."
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Yes, we're experienced in taking over and improving existing projects. We'll perform a thorough code audit and create a roadmap for enhancement and modernization."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer both fixed-price projects and retainer models. After our discovery phase, we provide transparent quotes with detailed breakdowns. No hidden costs, ever."
  },
  {
    question: "How do you handle communication?",
    answer: "We believe in transparency. You'll have a dedicated project manager, weekly progress calls, and 24/7 access to our project management dashboard with real-time updates."
  }
];

import { motion } from 'framer-motion';

// ... imports ...

export function FAQ() {
  return (
    <section className="py-32 bg-[#0a0a0c]">
       <div className="container mx-auto px-6 max-w-4xl">
           <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="font-cinzel text-4xl md:text-5xl text-white mb-16 text-center"
           >
             Frequently Asked
           </motion.h2>
           
           <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-white/5 rounded-2xl px-6 data-[state=open]:bg-white/[0.03] data-[state=open]:border-secondary/30 transition-all">
                    <AccordionTrigger className="font-syne text-xl text-white hover:text-secondary hover:no-underline py-6 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-outfit text-zinc-400 text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
           </Accordion>
       </div>
    </section>
  );
}
