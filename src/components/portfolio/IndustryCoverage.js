import { icons } from '../common/Icons.js';
import { industryAreas } from '../../config/projects.js';

/**
 * Portfolio — Industry Coverage Component
 * Displays organizations and industries served by URJIKO Labs.
 */
export function renderIndustryCoverage() {
  const cardsHtml = industryAreas
    .map(
      (industry) => `
        <div class="industry-card">
          <div>
            <h3 class="text-navy font-semibold text-lg mb-2">${industry.name}</h3>
            <p class="text-secondary text-sm mb-4">${industry.description}</p>
          </div>
          <div class="industry-card__featured flex items-center gap-2 text-xs text-muted">
            <span class="industry-card__dot" aria-hidden="true"></span>
            <span>Featured: ${industry.project}</span>
          </div>
        </div>
      `
    )
    .join('');

  return `
    <section class="section bg-white" aria-labelledby="industry-coverage-heading" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        <!-- Section Heading (Centered) -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">INDUSTRIES WE SERVE</span>
          <h2 id="industry-coverage-heading" class="section-heading__title">Software for Your Industry</h2>
          <p class="section-heading__subtitle text-balance">
            We build practical solutions for organizations across multiple sectors.
          </p>
        </div>

        <!-- Industry Grid -->
        <div class="industry-grid">
          ${cardsHtml}
        </div>

        <!-- Centered Actions CTA -->
        <div class="flex flex-wrap items-center justify-center gap-4" style="margin-top: var(--space-12);">
          <a href="/contact" data-link class="btn btn--primary">
            <span>Discuss Your Project</span>
            ${icons.arrowRight('w-4 h-4')}
          </a>
          <a href="/solutions" data-link class="btn btn--secondary">
            <span>View All Solutions</span>
          </a>
        </div>
      </div>
    </section>

    <style>
      .industry-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-5);
      }

      @media (min-width: 1024px) {
        .industry-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      .industry-card {
        background-color: var(--color-white);
        border: 1px solid var(--color-border);
        border-left: 3px solid var(--color-blue);
        border-radius: var(--radius-lg);
        padding: var(--space-5);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
      }

      .industry-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-sm);
        border-color: var(--color-border);
        border-left-color: var(--color-blue);
      }

      .industry-card__dot {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: var(--radius-full);
        background-color: var(--color-blue);
        flex-shrink: 0;
      }
    </style>
  `;
}
