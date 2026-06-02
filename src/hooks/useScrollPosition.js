import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 10;
const SCROLLED_CLASS = 'nav--scrolled';

export function useNavScrollEffect(navSelector = 'nav') {
  useEffect(() => {
    const nav = document.querySelector(navSelector);
    if (!nav) return undefined;

    const update = () => {
      const isScrolled = window.scrollY > SCROLL_THRESHOLD;
      nav.classList.toggle(SCROLLED_CLASS, isScrolled);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [navSelector]);
}

export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
