import { useEffect, useRef } from 'react';

export function useFadeOnScroll() {
  const ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateOpacity = () => {
      if (!ref.current) return;

      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementBottom = rect.top + rect.height;
      const screenBottom = windowHeight;

      const distance = screenBottom - elementBottom;
      const maxDistance = windowHeight - 200;

      let opacity = 1 - Math.abs(distance / maxDistance);
      opacity = Math.max(0, Math.min(1, opacity));

      let scale = Math.max(1, opacity * 2);

      (ref.current as HTMLElement).style.opacity = opacity.toString();
      (ref.current as HTMLElement).style.scale = scale.toString();
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateOpacity();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateOpacity();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return ref;
}
