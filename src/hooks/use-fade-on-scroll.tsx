import { useEffect, useRef } from 'react';

export function useFadeOnScroll(position: 'center' | 'bottom') {
  const ref = useRef(null);

  useEffect(() => {
    let ticking = false;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateOpacity = () => {
      if (!ref.current) return;

      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let elementPosition = 0;
      let screenPosition = 0;
      let maxDistance = 0;

      if (position === 'center') {
        elementPosition = rect.top + rect.height / 2;
        screenPosition = windowHeight / 2;

        maxDistance = windowHeight / 2;
      } else if (position === 'bottom') {
        elementPosition = rect.top + rect.height;
        screenPosition = windowHeight;

        maxDistance = windowHeight - 200;
      }

      const distance = elementPosition - screenPosition;

      let opacity = 1 - Math.abs(distance / maxDistance);
      opacity = Math.max(0, Math.min(1, opacity));

      let scale = Math.max(0.6, opacity);

      scale = lerp(1, scale, 0.1);

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
