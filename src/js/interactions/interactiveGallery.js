/**
 * Interactive Gallery logic for Project detail pages.
 * Handles horizontal scroll with dot navigation sync.
 */
export function initInteractiveGallery() {
  const galleries = document.querySelectorAll('.interactive-gallery');

  galleries.forEach((gallery) => {
    const scrollContainer = gallery.querySelector('.gallery-scroll-container');
    const dots = gallery.querySelectorAll('.gallery-dot');
    const items = gallery.querySelectorAll('.gallery-scroll-item');

    if (!scrollContainer || dots.length === 0 || items.length === 0) return;

    // Update dots on scroll
    scrollContainer.addEventListener('scroll', () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const activeIndex = Math.round(scrollLeft / (containerWidth * 0.8 + 32));

      dots.forEach((dot, i) => {
        dot.style.background = i === activeIndex ? 'var(--color-blue)' : 'var(--color-border)';
      });
    });

    // Click dot to scroll
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        const item = items[index];
        if (!item) return;

        const containerWidth = scrollContainer.clientWidth;
        const itemWidth = containerWidth * 0.8;
        const gap = 32;
        const scrollTarget = index * (itemWidth + gap);

        scrollContainer.scrollTo({ left: scrollTarget, behavior: 'smooth' });

        dots.forEach((d) => {
          d.style.background = 'var(--color-border)';
        });
        dot.style.background = 'var(--color-blue)';
      });
    });
  });
}
