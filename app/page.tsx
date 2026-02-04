'use client';

import React from 'react';

import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { Process } from '@/components/landing/Process';
import { Portfolio } from '@/components/landing/Portfolio';
import { Team } from '@/components/landing/Team';
import { Testimonials } from '@/components/landing/Testimonials';
import { Clients } from '@/components/landing/Clients';
import { FAQ } from '@/components/landing/FAQ';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] text-black selection:bg-[#D4F600] selection:text-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Team />
        <Testimonials />
        <Clients />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}