export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document
    .querySelectorAll(
      ".section-heading, .hero-image-wrapper, .cta-section, .portfolio-hero-mockup, .smartbiz-visual-wrapper",
    )
    .forEach((el) => {
      el.classList.add("fade-up");
      observer.observe(el);
    });
}

