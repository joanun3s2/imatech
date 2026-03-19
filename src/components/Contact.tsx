'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Mail, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const phone = '+5584994680558';

    const text = `Olá, me chamo ${data.name}. Meu email é ${data.email} e eu gostaria de falar com você sobre: ${data.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');

    setIsSubmitting(false);
    toast({
      title: t('contact.form.success'),
      variant: 'default',
    });
    (e.target as HTMLFormElement).reset();
  };

  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: <MessageSquare />,
      color: 'hover:text-green-400',
      link: 'https://wa.me/+5584994680558',
    },
    {
      name: 'Email',
      icon: <Mail />,
      color: 'hover:text-red-400',
      link: 'joanun3s2@gmal.com',
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      color: 'hover:text-pink-400',
      link: 'https://www.instagram.com/otaku_o_dev/',
    },
  ];

  return (
    <section id='contact' className='py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-headline font-bold mb-4'>
            {t('contact.title')}
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Direct Contact */}
          <div className='space-y-8'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              {contactMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.link}
                  target='_blank'
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl glass transition-all ${method.color} hover:scale-105`}
                >
                  <div className='mb-4'>{method.icon}</div>
                  <span className='font-medium'>{method.name}</span>
                </a>
              ))}
            </div>

            <div className='p-8 rounded-2xl glass border border-primary/20 bg-primary/5'>
              <h3 className='text-xl font-headline font-bold mb-4 text-primary'>
                {t('contact.workingHours')}
              </h3>
              <p className='text-muted-foreground text-secondary'>
                {t('contact.workingTime')}
              </p>
              <p className='text-muted-foreground'>
                {t('contact.workingUrgent')}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className='glass p-8 rounded-3xl neon-border'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>
                  {t('contact.form.name')}
                </label>
                <Input
                  name='name'
                  required
                  className='glass border-white/10'
                  placeholder='John Doe'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>Email</label>
                <Input
                  name='email'
                  required
                  type='email'
                  className='glass border-white/10'
                  placeholder='john@example.com'
                />
              </div>
              <div className='space-y-2'>
                <label className='text-sm font-medium'>
                  {t('contact.form.message')}
                </label>
                <Textarea
                  name='message'
                  required
                  className='glass border-white/10 min-h-[150px]'
                  placeholder='How can I help you?'
                />
              </div>
              <Button
                disabled={isSubmitting}
                type='submit'
                className='w-full neon-glow bg-primary hover:bg-primary/90 text-white font-bold h-12'
              >
                {isSubmitting ? 'Sending...' : t('contact.form.send')}
                <Send className='ml-2 w-4 h-4' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
