import { portfolioCapabilities } from '../../config/projects.js';

/**
 * Portfolio Capabilities Section
 * Compact, restrained grid showcasing technical capabilities and system features
 * demonstrated across the URJIKO Labs project portfolio.
 */
export function renderPortfolioCapabilities(capabilities = portfolioCapabilities) {
  const itemsHtml = capabilities
    .map(
      (capability) => `
        <div class="portfolio-capability-item">
          <span class="portfolio-capability-dot" aria-hidden="true"></span>
          <span class="text-sm font-medium text-navy">${capability}</span>
        </div>
      `
    )
    .join('');

  return `
    <section class="section bg-soft" aria-labelledby="portfolio-capabilities-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">WHAT WE DELIVER</span>
          <h2 id="portfolio-capabilities-heading" class="section-heading__title">Capabilities Demonstrated</h2>
          <p class="section-heading__subtitle text-balance">
            Technical capabilities and system features demonstrated across our project portfolio.
          </p>
        </div>

        <!-- Capabilities Grid -->
        <div class="portfolio-capabilities-grid">
          ${itemsHtml}
        </div>
      </div>
    </section>

    <style>
      .portfolio-capabilities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--space-3);
      }

      .portfolio-capability-item {
        background-color: var(--color-white);
        border: 1px solid var(--color-border-subtle);
        border-radius: var(--radius-sm);
        padding: var(--space-3);
        display: flex;
        align-items: center;
        gap: var(--space-2);
        transition: box-shadow var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
      }

      .portfolio-capability-item:hover {
        box-shadow: var(--shadow-sm);
        border-color: var(--color-border);
        transform: translateY(-1px);
      }

      .portfolio-capability-dot {
        width: 6px;
        height: 6px;
        min-width: 6px;
        border-radius: var(--radius-full);
        background-color: var(--color-blue);
        flex-shrink: 0;
      }
    </style>
  `;
}
