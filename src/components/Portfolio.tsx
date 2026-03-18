
"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Boutique Store',
      category: 'E-commerce',
      img: PlaceHolderImages.find(p => p.id === 'project-store')?.imageUrl || '',
      hint: 'boutique store'
    },
    {
      title: 'Luxe Dining',
      category: 'Restaurant',
      img: PlaceHolderImages.find(p => p.id === 'project-restaurant')?.imageUrl || '',
      hint: 'restaurant site'
    },
    {
      title: 'Active Life Studio',
      category: 'Fitness',
      img: PlaceHolderImages.find(p => p.id === 'project-gym')?.imageUrl || '',
      hint: 'gym landing'
    },
    {
      title: 'Pro Plumbing',
      category: 'Local Service',
      img: PlaceHolderImages.find(p => p.id === 'project-service')?.imageUrl || '',
      hint: 'service landing'
    },
    {
      title: 'Zen Spa',
      category: 'Wellness',
      img: PlaceHolderImages.find(p => p.id === 'project-spa')?.imageUrl || '',
      hint: 'spa booking'
    },
    {
      title: 'Creative Pulse',
      category: 'Agency',
      img: PlaceHolderImages.find(p => p.id === 'project-agency')?.imageUrl || '',
      hint: 'agency portfolio'
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">{t('portfolio.title')}</h2>
            <p className="text-muted-foreground">{t('portfolio.subtitle')}</p>
          </div>
          <div className="text-primary font-bold text-sm tracking-widest uppercase">
            Scroll to explore
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative h-[400px] overflow-hidden rounded-2xl glass cursor-pointer"
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={project.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-headline font-bold mb-4">{project.title}</h3>
                <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {t('portfolio.view')}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
