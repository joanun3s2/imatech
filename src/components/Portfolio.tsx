'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useFadeOnScroll } from '@/hooks/use-fade-on-scroll';

export function Portfolio() {
  const { t } = useLanguage();

  const sectionRef = useFadeOnScroll('center');

  const projects = [
    {
      title: 'Barber shop',
      category: 'Barber',
      img:
        PlaceHolderImages.find((p) => p.id === 'project-restaurant')
          ?.imageUrl ||
        'https://cdn.creativefabrica.com/2021/11/30/Barbershop-Logo-Graphics-20985229-1.jpg',
      hint: 'dashboard for barber shop',
      link: 'https://gestaobarber.netlify.app/',
    },
    {
      title: 'Portfolio page',
      category: 'Tech',
      img:
        PlaceHolderImages.find((p) => p.id === 'project-gym')?.imageUrl ||
        'https://avatars.githubusercontent.com/u/28514118?v=4',
      hint: 'portfolio page',
      link: 'https://studio-1--portfolio-hmwq9.us-central1.hosted.app/',
    },
    {
      title: 'Game demo',
      category: 'education',
      img:
        PlaceHolderImages.find((p) => p.id === 'project-store')?.imageUrl ||
        'https://img.freepik.com/free-vector/open-treasure-chest-grass-platform-wooden-chest-with-gold-coins_172107-1307.jpg?semt=ais_hybrid&w=740&q=80',
      hint: 'game demonstration',
      link: 'https://rainbow-piroshki-75a757.netlify.app/',
    },
  ];

  return (
    <section ref={sectionRef} id='portfolio' className='py-24 bg-background/50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-5xl font-headline font-bold mb-4'>
              {t('portfolio.title')}
            </h2>
            <p className='text-muted-foreground'>{t('portfolio.subtitle')}</p>
          </div>
          <div className='text-primary font-bold text-sm tracking-widest uppercase'>
            {t('common.scroll')}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className='group relative h-[400px] overflow-hidden rounded-2xl glass cursor-pointer'
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-110 opacity-75'
                data-ai-hint={project.hint}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity' />

              <div className='absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                <span className='text-primary text-xs font-bold uppercase tracking-widest mb-2'>
                  {project.category}
                </span>
                <h3 className='text-2xl font-headline font-bold mb-4'>
                  {project.title}
                </h3>

                <a
                  className='flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100'
                  href={project.link}
                  target='_blank'
                >
                  {t('portfolio.view')}
                  <ExternalLink className='ml-2 w-4 h-4' />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
