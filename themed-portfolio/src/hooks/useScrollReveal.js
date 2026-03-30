import { useEffect, useRef } from 'react';

/**
 * Custom hook that uses IntersectionObserver to add 3D scroll-reveal
 * animations to elements with the `data-scroll-reveal` attribute.
 *
 * Usage: Call useScrollReveal() once in a top-level component.
 * Then add these attributes to any element you want animated:
 *   data-scroll-reveal          — enables the animation
 *   data-scroll-type="fade-up"  — animation type (see CSS)
 *   data-scroll-delay="200"     — delay in ms before reveal
 */
export default function useScrollReveal() {
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-scroll-reveal]');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseInt(el.getAttribute('data-scroll-delay') || '0', 10);
            setTimeout(() => {
              el.classList.add('revealed');
            }, delay);
            // Unobserve after revealing so it doesn't re-trigger
            observerRef.current?.unobserve(el);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
}
