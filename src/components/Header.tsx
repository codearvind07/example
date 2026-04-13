import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/#home' },
  { name: 'Specialization', href: '/#specialization' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact' },
];

const ctaText = 'Get Started';
const ctaHref = '/#contact';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', latest => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent ${
        scrolled ? 'bg-black/95 shadow-sm backdrop-blur-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="container flex flex-wrap items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        <a
          href="#home"
          className="flex items-center gap-3 transition-all duration-200"
        >
          <img
            src="/logowhite.png"
            alt="Ak Law Chamber Logo"
            className="w-auto h-12 sm:h-14 md:h-16 drop-shadow-lg"
          />
          <span className="text-xl font-semibold tracking-tight text-white transition-colors duration-200 sm:text-2xl hover:text-yellow-300">Ak Law Chamber</span>
        </a>
        <div className="items-center hidden space-x-8 md:flex">
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-base sm:text-lg text-white transition-all duration-200 hover:text-yellow-300 hover:underline hover:underline-offset-4 hover:-translate-y-0.5 hover:scale-105 active:scale-95"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={ctaHref}
            className="hidden px-6 py-2 text-white transition-all duration-200 transform rounded-full cursor-pointer md:inline-flex bg-zinc-900 hover:bg-zinc-800 hover:scale-105 active:scale-95"
          >
            {ctaText}
          </a>

          <motion.button
            className="p-2 transition-all duration-200 rounded-lg cursor-pointer md:hidden hover:bg-white/10 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute left-0 right-0 shadow-lg md:hidden top-full bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 py-4 space-y-4">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-white transition-all duration-200 transform cursor-pointer hover:text-yellow-300 hover:underline hover:underline-offset-4 hover:scale-105 active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <a
                href={ctaHref}
                className="block w-full px-6 py-2 mt-4 text-center text-white transition-all duration-200 transform rounded-lg cursor-pointer bg-zinc-900 hover:scale-105 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                {ctaText}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};