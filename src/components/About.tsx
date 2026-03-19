'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Badge } from '@/components/ui/badge';
import { useFadeOnScroll } from '@/hooks/use-fade-on-scroll';
import Image from 'next/image';

export function About() {
  const { t } = useLanguage();

  const sectionRef = useFadeOnScroll('center');

  const skills = [
    'Next.js',
    'React',
    'Angular',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Firebase',
    'SEO',
    'UI/UX Design',
    'Headless CMS',
    'Git',
  ];

  return (
    <section ref={sectionRef} id='about' className='py-24 relative'>
      <div className='absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10' />

      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <h2 className='text-4xl md:text-5xl font-headline font-bold'>
              {t('about.title')}
            </h2>
            <p className='text-xl text-muted-foreground leading-relaxed'>
              {t('about.intro')}
            </p>
            <div className='space-y-4'>
              <h3 className='text-lg font-bold uppercase tracking-widest text-primary'>
                {t('about.skills')}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className='px-4 py-2 glass hover:border-primary/50 transition-colors'
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-square glass rounded-3xl overflow-hidden neon-border'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20' />
              <div className='flex items-center justify-center h-full'>
                <div className='text-center p-12'>
                  <div className='w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center neon-glow'>
                    <Image
                      src='https://avatars.githubusercontent.com/u/28514118?v=4'
                      alt='Developer Photo'
                      width={100}
                      height={100}
                      className='rounded-full'
                    />
                  </div>
                  <p className='text-muted-foreground italic'>
                    {t('about.quote')}
                  </p>
                </div>
              </div>
            </div>
            {/* Floating metrics */}
            <div className='absolute -bottom-6 -right-6 glass p-6 rounded-2xl animate-float'>
              <p className='text-4xl font-headline font-bold text-gradient'>
                12+
              </p>
              <p className='text-xs uppercase tracking-widest font-medium'>
                {t('about.quote.detail')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
