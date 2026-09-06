import { icons } from '../common/Icons.js';

/**
 * Portfolio Hero Section
 * Uses real product SVG visuals instead of fake metrics.
 */
export function renderPortfolioHero() {
  return `
    <section class="section" aria-labelledby="portfolio-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-8); background: var(--color-white); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container text-center" style="max-width: 48rem; margin: 0 auto;">
        
        <h1 id="portfolio-hero-title" class="text-balance mb-4" style="font-size: clamp(2.25rem, 5vw, 3.25rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
          Selected Work
        </h1>

        <p class="text-secondary mb-8 text-balance mx-auto" style="font-size: clamp(1rem, 2vw, 1.15rem); max-width: 38rem; line-height: 1.65;">
          Practical software and digital products built around real workflows for business operations, education, transport, and customer-facing websites.
        </p>

        <div class="flex flex-wrap gap-4 items-center justify-center mb-10">
          <a href="/contact" data-link class="btn btn--primary btn--lg">
            <span>Discuss a similar project</span>
            ${icons.arrowRight('w-4 h-4')}
          </a>
          <a href="/services" data-link class="btn btn--secondary btn--lg">
            <span>View services</span>
          </a>
        </div>

        <!-- Project Collage -->
        <div class="portfolio-collage" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-4); align-items: center; justify-content: center; position: relative;">
          
          <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); transform: translateY(10px) rotate(-2deg); background: var(--color-bg-soft);">
            <img src="${import.meta.env.BASE_URL}images/project-transport.svg" alt="Transport Preview" style="width: 100%; height: auto; display: block; opacity: 0.9;">
          </div>
          
          <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border); box-shadow: var(--shadow-md); transform: scale(1.05); z-index: 2; background: var(--color-white);">
            <img src="${import.meta.env.BASE_URL}images/project-smartbiz.svg" alt="SmartBiz Preview" style="width: 100%; height: auto; display: block;">
          </div>
          
          <div style="border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); transform: translateY(10px) rotate(2deg); background: var(--color-bg-soft);">
            <img src="${import.meta.env.BASE_URL}images/project-eduflow.svg" alt="EduFlow Preview" style="width: 100%; height: auto; display: block; opacity: 0.9;">
          </div>

        </div>

      </div>
    </section>
  `;
}
