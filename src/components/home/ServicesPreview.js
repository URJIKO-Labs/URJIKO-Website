import { icons } from '../common/Icons.js';

export function renderServicesPreview() {
  const services = [
    {
      title: 'Web Development',
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    },
    {
      title: 'Business Management Systems',
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    },
    {
      title: 'Custom Software',
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    },
    {
      title: 'AI & Intelligent Solutions',
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    },
  ];

  const cardsHtml = services
    .map(
      (s) => `
      <div class="card card--service flex flex-col justify-between">
        <div>
          <div class="card__icon">
            ${s.icon}
          </div>
          <h3 class="card__title">${s.title}</h3>
        </div>
        
        <div>
          <a href="/services" data-link class="card__link">
            <span>Learn More</span>
            ${icons.arrowRight('w-4 h-4')}
          </a>
        </div>
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
          <h2 id="services-heading" class="section-heading__title">Our Core Services</h2>
          <p class="section-heading__subtitle text-balance">
            From websites to custom business platforms, we build practical digital solutions designed around the way organizations actually work.
          </p>
        </div>

        <!-- 4 Services Cards Grid -->
        <div class="grid grid--2 gap-6 mb-8">
          ${cardsHtml}
        </div>

        <!-- Section Link to Services -->
        <div class="flex justify-center mt-8">
          <a href="/services" data-link class="btn btn--secondary flex items-center gap-2">
            <span>Explore All Services</span>
            ${icons.arrowRight('w-4 h-4')}
          </a>
        </div>
      </div>
    </section>
  `;
}
