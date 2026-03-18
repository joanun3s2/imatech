
"use client";

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Monitor, Zap, Layout, CheckCircle } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.web.title'),
      desc: t('services.web.desc'),
      icon: <Monitor className="w-10 h-10 text-primary" />,
      features: ['Modern UI', 'Responsive Design', 'Custom Branding']
    },
    {
      title: t('services.landing.title'),
      desc: t('services.landing.desc'),
      icon: <Layout className="w-10 h-10 text-secondary" />,
      features: ['Conversion Focus', 'Fast Loading', 'Clean Layouts']
    },
    {
      title: t('services.perf.title'),
      desc: t('services.perf.desc'),
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      features: ['SEO Ready', 'Page Speed', 'Core Web Vitals']
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl glass neon-border hover:bg-white/5 transition-all duration-500"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
