import { icons } from '../common/Icons.js';

/**
 * What We Build / Services Preview Section
 * 6 official services matching the Services page.
 * Hierarchy: Core (1-3), Supporting (4-5), Ongoing (6)
 */
export function renderServicesPreview() {
  const services = [
    {
      number: '01',
      title: 'Website Development',
      description: 'Modern, responsive websites and digital platforms built around organizational goals.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    },
    {
      number: '02',
      title: 'Business Systems & Custom Software',
      description: 'ERP, POS, inventory, booking, dashboards and workflow systems designed around real operations.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    },
    {
      number: '03',
      title: 'AI & Intelligent Solutions',
      description: 'Practical AI, automation, data analysis and intelligent features for real business workflows.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    },
    {
      number: '04',
      title: 'Mobile App Development',
      description: 'Mobile applications that extend business systems and services to mobile users.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    },
    {
      number: '05',
      title: 'UI/UX Design',
      description: 'User-centered interfaces, prototypes and design systems that make software easier to use.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
    },
    {
      number: '06',
      title: 'Maintenance & Technical Support',
      description: 'Ongoing improvements, bug fixes, updates, security and technical support after launch.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    },
  ];

  const cardsHtml = services
    .map(
      (s) => `
      <div class="card card--service flex flex-col" style="padding: var(--space-4);">
        <div class="flex items-center gap-3 mb-2">
          <div class="flex items-center justify-center" style="width: 2rem; height: 2rem; border-radius: var(--radius-sm); background: var(--color-bg-light-blue); color: var(--color-blue); flex-shrink: 0;">
            ${s.icon}
          </div>
          <div>
            <span class="text-xs font-bold" style="color: var(--color-blue); font-family: monospace;">${s.number}</span>
            <h3 class="card__title" style="margin-bottom: 0; font-size: var(--font-size-sm); margin-left: 0.25rem;">${s.title}</h3>
          </div>
        </div>
        <p class="text-secondary mb-0" style="font-size: var(--font-size-xs); line-height: 1.5;">${s.description}</p>
      </div>
    `
    )
    .join('');

  return `
    <section class="section" aria-labelledby="services-heading">
      <div class="container">
        <!-- Section Header -->
        <div class="section-heading">
          <span class="section-heading__label">Core Capabilities</span>
          <h2 id="services-heading" class="section-heading__title">What We Build</h2>
          <p class="section-heading__subtitle text-balance">
            From websites to intelligent software, we build practical digital solutions designed around the way organizations actually work.
          </p>
        </div>

        <!-- 6 Services Cards Grid -->
        <div class="grid grid--3 gap-4">
          ${cardsHtml}
        </div>

        <!-- Section Link to Services -->
        <div class="flex justify-center" style="margin-top: var(--space-5);">
          <a href="/services" data-link class="btn btn--secondary flex items-center gap-2">
            <span>Explore All Services</span>
            ${icons.arrowRight('w-4 h-4')}
          </a>
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        [aria-labelledby="services-heading"] .grid--3 {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: var(--space-3) !important;
        }
      }
      @media (max-width: 480px) {
        [aria-labelledby="services-heading"] .grid--3 {
          grid-template-columns: 1fr !important;
        }
      }
    </style>
  `;
}
