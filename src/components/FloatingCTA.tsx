
"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export function FloatingCTA() {
  return (
    <a
      href="https://wa.me/yournumber"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform neon-glow group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Talk to me!
      </span>
    </a>
  );
}
