import { icons } from '../common/Icons.js';

/**
 * What We Build / Services Preview Section
 * 4 concise cards showing core capabilities.
 */
export function renderServicesPreview() {
  const services = [
    {
      title: 'Business Systems',
      description: 'Software for inventory, sales, operations, customers and reporting.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    },
    {
      title: 'Custom Software',
      description: 'Tailored systems designed around your organization\'s workflow.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    },
    {
      title: 'Websites & Digital Platforms',
      description: 'Professional, responsive websites and web platforms built for real business needs.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    },
    {
      title: 'Data & Dashboards',
      description: 'Clear dashboards and reporting tools that turn operational data into useful insight.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    },
  ];

  const cardsHtml = services
    .map(
      (s) => `
      <div class="card card--service flex flex-col" style="padding: var(--space-5);">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex items-center justify-center" style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-sm); background: var(--color-bg-light-blue); color: var(--color-blue); flex-shrink: 0;">
            ${s.icon}
          </div>
          <h3 class="card__title" style="margin-bottom: 0; font-size: var(--font-size-md);">${s.title}</h3>
        </div>
        <p class="text-secondary mb-0" style="font-size: var(--font-size-sm); line-height: 1.6;">${s.description}</p>
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
            From websites to custom business platforms, we build practical digital solutions designed around the way organizations actually work.
          </p>
        </div>

        <!-- 4 Services Cards Grid -->
        <div class="grid grid--2 gap-5">
          ${cardsHtml}
        </div>

        <!-- Section Link to Services -->
        <div class="flex justify-center" style="margin-top: var(--space-6);">
          <a href="/services" data-link class="btn btn--secondary flex items-center gap-2">
            <span>Explore All Services</span>
            ${icons.arrowRight('w-4 h-4')}
          </a>
        </div>
      </div>
    </section>
  `;
}
