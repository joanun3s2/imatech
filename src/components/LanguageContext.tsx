
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'I build modern websites for your business',
    'hero.subtitle': 'Custom websites designed for high conversion, extreme speed, and stunning aesthetics. Let\'s grow your digital presence.',
    'hero.cta.quote': 'Get a Quote',
    'hero.cta.work': 'See My Work',
    'services.title': 'My Services',
    'services.subtitle': 'Tailored digital solutions to help your local business thrive online.',
    'services.web.title': 'Custom Websites',
    'services.web.desc': 'Hand-crafted websites built from scratch to match your brand identity perfectly.',
    'services.landing.title': 'Landing Pages',
    'services.landing.desc': 'High-conversion single pages designed to turn visitors into loyal customers.',
    'services.perf.title': 'Performance Optimization',
    'services.perf.desc': 'Lightning-fast load times and SEO optimization to keep you ahead of competition.',
    'portfolio.title': 'Selected Projects',
    'portfolio.subtitle': 'A showcase of recent work for stores, shops, and local services.',
    'portfolio.view': 'View Project',
    'about.title': 'About Me',
    'about.intro': 'Hi, I\'m a freelance web developer dedicated to helping small businesses succeed in the digital world. I combine technical expertise with creative design.',
    'about.skills': 'Technical Arsenal',
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Reach out via any of the channels below or fill the form.',
    'contact.form.name': 'Name',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message sent successfully!',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'hero.title': 'Eu crio sites modernos para o seu negócio',
    'hero.subtitle': 'Sites personalizados projetados para alta conversão, velocidade extrema e estética impressionante. Vamos expandir sua presença digital.',
    'hero.cta.quote': 'Pedir Orçamento',
    'hero.cta.work': 'Ver Meu Trabalho',
    'services.title': 'Meus Serviços',
    'services.subtitle': 'Soluções digitais sob medida para ajudar seu negócio local a prosperar online.',
    'services.web.title': 'Sites Personalizados',
    'services.web.desc': 'Sites feitos à mão, criados do zero para combinar perfeitamente com a identidade da sua marca.',
    'services.landing.title': 'Landing Pages',
    'services.landing.desc': 'Páginas únicas de alta conversão projetadas para transformar visitantes em clientes fiéis.',
    'services.perf.title': 'Otimização de Performance',
    'services.perf.desc': 'Tempos de carregamento ultra-rápidos e otimização de SEO para manter você à frente da concorrência.',
    'portfolio.title': 'Projetos Selecionados',
    'portfolio.subtitle': 'Uma vitrine de trabalhos recentes para lojas, comércios e serviços locais.',
    'portfolio.view': 'Ver Projeto',
    'about.title': 'Sobre Mim',
    'about.intro': 'Olá, sou um desenvolvedor web freelancer dedicado a ajudar pequenas empresas a terem sucesso no mundo digital. Combinando expertise técnica com design criativo.',
    'about.skills': 'Arsenal Técnico',
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Pronto para começar seu projeto? Entre em contato por qualquer um dos canais abaixo ou preencha o formulário.',
    'contact.form.name': 'Nome',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.success': 'Mensagem enviada com sucesso!',
    'footer.rights': 'Todos os direitos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
