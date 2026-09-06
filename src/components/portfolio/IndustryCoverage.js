import { icons } from '../common/Icons.js';
import { industryAreas } from '../../config/projects.js';

/**
 * Portfolio — Industry Coverage Component
 * Shows industries where URJIKO's capabilities are applicable.
 */
export function renderIndustryCoverage() {
  const cardsHtml = industryAreas
    .map(
      (industry) => `
        <div class="industry-card">
          <div>
            <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-md);">${industry.name}</h3>
            <p class="text-secondary text-sm mb-3" style="line-height: 1.5;">${industry.description}</p>
          </div>
          <div class="industry-card__featured flex items-center gap-2 text-xs text-muted">
            <span class="industry-card__dot" aria-hidden="true"></span>
            <span>Example: ${industry.project}</span>
          </div>
        </div>
      `
    )
    .join('');

  return `
    <section class="section bg-soft" aria-labelledby="industry-coverage-heading" style="border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-8); padding-bottom: var(--space-8);">
      <div class="container">
        <!-- Section Heading -->
        <div class="section-heading section-heading--center" style="margin-bottom: var(--space-5);">
          <span class="section-heading__label">Industries</span>
          <h2 id="industry-coverage-heading" class="section-heading__title">Software for Your Industry</h2>
          <p class="section-heading__subtitle text-balance">
            Capabilities applicable to organizations across multiple sectors.
          </p>
        </div>

        <!-- Industry Grid -->
        <div class="industry-grid">
          ${cardsHtml}
        </div>

        <!-- CTA -->
        <div class="flex flex-wrap items-center justify-center gap-4" style="margin-top: var(--space-8);">
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
        gap: var(--space-4);
      }
      @media (min-width: 1024px) {
        .industry-grid {
          grid-template-columns: repeat(4, 1fr);
        }
      }
      @media (max-width: 768px) {
        .industry-grid {
          grid-template-columns: 1fr !important;
        }
      }
      .industry-card {
        background-color: var(--color-white);
        border: 1px solid var(--color-border);
        border-left: 3px solid var(--color-blue);
        border-radius: var(--radius-md);
        padding: var(--space-4);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform var(--transition-base), box-shadow var(--transition-base);
      }
      .industry-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-sm);
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
