
"use client";

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-2xl font-headline font-bold text-gradient">
              VibrantDev
            </a>
            <p className="text-muted-foreground mt-2 text-sm">Building the future of local business websites.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground pt-8 border-t border-white/5">
          <p>&copy; {year} VibrantDev Portfolio. {t('footer.rights')}</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
