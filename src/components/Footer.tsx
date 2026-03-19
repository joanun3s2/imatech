'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/socials';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className='py-12 border-t border-border bg-background'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div>
            <a
              href='#home'
              className='text-2xl font-headline font-bold text-gradient'
            >
              {t('common.title')}
            </a>
            <p className='text-muted-foreground mt-2 text-sm'>
              {t('footer.title')}
            </p>
          </div>

          <div className='flex space-x-6'>
            <a
              href={SOCIAL_LINKS.github}
              target='_blank'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target='_blank'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target='_blank'
              className='text-muted-foreground hover:text-primary transition-colors'
            >
              <Instagram className='w-6 h-6' />
            </a>
          </div>
        </div>

        <div className='mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground pt-8 border-t border-white/5'>
          <p>
            &copy; {year} Limatech Portfolio. {t('footer.rights')}
          </p>
          <div className='flex space-x-8 mt-4 md:mt-0'>
            <a href='#' className='hover:text-primary'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-primary'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
