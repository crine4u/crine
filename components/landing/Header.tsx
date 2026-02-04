'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';

import { motion } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFFDF7] border-b-3 border-black py-4' : 'bg-[#FFFDF7] py-6'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-cinzel text-3xl font-black tracking-tight text-black hover:text-[#D4F600] transition-colors">
          HULO<span className="text-[#D4F600]">.</span>
        </Link>

        <div className="hidden md:block">
           <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {['Services', 'Work', 'Clients', 'Contact'].map((item, i) => (
                <NavigationMenuItem key={item}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  >
                    <Link href={`#${item.toLowerCase()}`} >
                      <NavigationMenuLink className="font-outfit text-sm font-bold uppercase tracking-wide text-black px-4 py-2 border-3 border-transparent hover:border-black hover:bg-[#D4F600] transition-all cursor-pointer">
                        {item}
                      </NavigationMenuLink>
                    </Link>
                  </motion.div>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Button className="font-outfit bg-black text-white hover:bg-[#D4F600] hover:text-black px-8 py-6 text-sm font-bold">
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>

        <div className="md:hidden">
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-black border-3 border-black">
                <span className="sr-only">Menu</span>
                <div className="space-y-1.5 cursor-pointer">
                  <div className="w-6 h-0.5 bg-black"></div>
                  <div className="w-6 h-0.5 bg-black"></div>
                  <div className="w-6 h-0.5 bg-black"></div>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#D4F600] border-l-3 border-black text-black">
              <div className="flex flex-col gap-6 mt-20 font-cinzel text-3xl font-bold">
                {['Services', 'Work', 'Clients', 'Contact'].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} className="border-b-3 border-black pb-4 hover:pl-4 transition-all">
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
