
"use client";

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] -z-10" />
      
      {/* Animated Particles Mockup (CSS only) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              animation: `float ${3 + Math.random() * 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass border border-primary/30 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Code className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium tracking-wider uppercase">Available for new projects</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          <span className="block">{t('hero.title').split(' ').slice(0, 3).join(' ')}</span>
          <span className="text-gradient block">{t('hero.title').split(' ').slice(3).join(' ')}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Button size="lg" className="rounded-full px-8 neon-glow bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
            {t('hero.cta.quote')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 glass hover:bg-white/5 w-full sm:w-auto">
            {t('hero.cta.work')}
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
