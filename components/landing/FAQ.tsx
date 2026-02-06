'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How quickly can you respond to a security breach?",
    answer: "Our Incident Response Team (IRT) operates 24/7/365. We typically initiate triage within 15 minutes of a critical event report and can have on-ground or remote specialists deployed immediately."
  },
  {
    question: "Do you provide audit readiness for compliance?",
    answer: "Yes. We guide firms through SOC2 Type II, ISO 27001, HIPAA, and GDPR certification processes, providing both the technical hardening and the documentation required for successful audits."
  },
  {
    question: "What is your approach to Zero-Trust architecture?",
    answer: "We assume every connection is a potential threat. Our implementations focus on granular identity verification, micro-segmentation of networks, and strict least-privilege access controls across your entire ecosystem."
  },
  {
    question: "How comprehensive are your penetration tests?",
    answer: "Our Red Team simulations go beyond surface scanning. We employ multi-vector exploit techniques (web, network, social engineering) to find deep vulnerabilities, followed by a prioritized remediation roadmap."
  },
  {
    question: "Do you handle post-incident forensic analysis?",
    answer: "Absolutely. Post-breach, we conduct deep-dive digital forensics to identify the entry point, movement, and data exfiltration details, while simultaneously hardening your posture to prevent recurrence."
  },
  {
    question: "Are your encryption protocols future-proof?",
    answer: "We specialize in transition strategies for Post-Quantum Cryptography (PQC). By leveraging lattice-based algorithms, we ensure your encrypted assets remain secure against future quantum computing capabilities."
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
             className="font-syne text-4xl md:text-6xl text-black mb-16 text-center font-black uppercase"
           >
             Security <span className="bg-[#D4F600] px-3 border-3 border-black shadow-[4px_4px_0_#000]">FAQ</span>
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
