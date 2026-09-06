import { icons } from '../common/Icons.js';

/**
 * Cross-Navigation Component
 * Links to Services, Solutions, and Portfolio.
 */
export function renderCrossNavigation() {
  const navColumns = [
    {
      category: 'SERVICES',
      heading: 'Need a specific service?',
      links: [
        { label: 'Website Development', path: '/services#web-dev' },
        { label: 'Business Systems', path: '/services#business-systems' },
        { label: 'Custom Software', path: '/services#business-systems' },
        { label: 'AI Solutions', path: '/services#ai-solutions' },
        { label: 'Maintenance & Support', path: '/services#custom-software' },
      ],
      ctaText: 'View All Services',
      ctaPath: '/services',
    },
    {
      category: 'SOLUTIONS',
      heading: 'Looking for industry solutions?',
      links: [
        { label: 'Business Operations', path: '/solutions#business-solutions' },
        { label: 'Transport Management', path: '/solutions#transport-solutions' },
        { label: 'Education Systems', path: '/solutions#education-solutions' },
        { label: 'Healthcare Platforms', path: '/solutions#healthcare-solutions' },
      ],
      ctaText: 'View All Solutions',
      ctaPath: '/solutions',
    },
    {
      category: 'PORTFOLIO',
      heading: 'Want to see our work?',
      links: [
        { label: 'SmartBiz ERP', path: '/portfolio/smartbiz' },
        { label: 'Transport Management', path: '/portfolio/transport' },
        { label: 'EduFlow', path: '/portfolio/eduflow' },
        { label: 'ShegerHealth', path: '/portfolio/shegerhealth' },
      ],
      ctaText: 'View Portfolio',
      ctaPath: '/portfolio',
    },
  ];

  const columnsHtml = navColumns
    .map(
      (col) => `
      <div class="card cross-nav-card flex flex-col" style="background-color: var(--color-white); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: var(--space-5);">
        <div>
          <span class="badge badge--blue font-semibold mb-3" style="font-size: 0.65rem;">${col.category}</span>
          <h3 class="card__title mb-3" style="font-size: var(--font-size-md); color: var(--color-navy); line-height: var(--line-height-snug);">
            ${col.heading}
          </h3>

          <ul class="flex flex-col gap-2 mb-4" role="list" style="list-style: none; padding: 0; margin: 0;">
            ${col.links
              .map(
                (link) => `
              <li>
                <a href="${link.path}" data-link class="cross-nav-link flex items-center gap-2 text-sm text-navy">
                  <span class="cross-nav-icon" aria-hidden="true" style="color: var(--color-blue); display: inline-flex; align-items: center; flex-shrink: 0;">
                    ${icons.arrowRight('w-3.5 h-3.5')}
                  </span>
                  <span>${link.label}</span>
                </a>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>

        <div class="mt-auto pt-3" style="border-top: 1px solid var(--color-border-subtle);">
          <a href="${col.ctaPath}" data-link class="btn btn--secondary btn--sm flex items-center justify-center gap-2" style="width: 100%;">
            <span>${col.ctaText}</span>
            ${icons.arrowRight('w-3.5 h-3.5')}
          </a>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="section" aria-labelledby="cross-nav-heading" style="border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-8); padding-bottom: var(--space-8);">
      <div class="container">
        
        <div class="section-heading section-heading--center" style="margin-bottom: var(--space-5);">
          <span class="section-heading__label">Find What You Need</span>
          <h2 id="cross-nav-heading" class="section-heading__title">Navigate Our Capabilities</h2>
        </div>

        <div class="grid grid--3 gap-5">
          ${columnsHtml}
        </div>

      </div>
    </section>

    <style>
      .cross-nav-card {
        box-shadow: var(--shadow-xs);
        transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
      }
      .cross-nav-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-card);
        border-color: var(--color-border-blue) !important;
      }
      a.cross-nav-link {
        color: var(--color-navy);
        text-decoration: none;
        font-weight: var(--font-weight-medium);
        transition: color var(--transition-fast);
      }
      a.cross-nav-link:hover {
        color: var(--color-blue);
      }
      a.cross-nav-link:hover .cross-nav-icon {
        transform: translateX(3px);
      }
      .cross-nav-icon {
        transition: transform var(--transition-fast);
      }
      @media (max-width: 768px) {
        [aria-labelledby="cross-nav-heading"] .grid--3 {
          grid-template-columns: 1fr !important;
        }
      }
    </style>
  `;
}
