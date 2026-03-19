'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith('pt')) {
      setLanguage('pt');
    }
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass shadow-xl py-3' : 'bg-transparent',
      )}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <a
          href='#home'
          className='text-2xl font-headline font-bold text-gradient'
        >
          {t('common.title')}
        </a>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-sm font-medium hover:text-primary transition-colors'
            >
              {link.name}
            </a>
          ))}

          <div className='flex items-center space-x-2 border-l border-border pl-8'>
            <button
              onClick={() => setLanguage('en')}
              className={cn(
                'text-xs transition-opacity',
                language === 'en'
                  ? 'opacity-100 font-bold text-primary'
                  : 'opacity-50',
              )}
            >
              🇺🇸 EN
            </button>
            <span className='text-border'>|</span>
            <button
              onClick={() => setLanguage('pt')}
              className={cn(
                'text-xs transition-opacity',
                language === 'pt'
                  ? 'opacity-100 font-bold text-primary'
                  : 'opacity-50',
              )}
            >
              🇧🇷 PT
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden flex items-center space-x-4'>
          <button
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className='p-2 hover:bg-white/10 rounded-full'
          >
            <Globe className='w-5 h-5' />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='p-2 hover:bg-white/10 rounded-lg'
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full glass border-t border-border animate-in slide-in-from-top duration-300'>
          <div className='flex flex-col p-6 space-y-4'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-lg font-medium hover:text-primary'
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
