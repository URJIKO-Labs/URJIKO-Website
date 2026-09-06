import { icons } from '../common/Icons.js';

/**
 * URJIKO Labs — Core Services Cards Component
 */
export function renderServiceCards() {
  const services = [
    {
      id: 'web-dev',
      number: '01',
      title: 'Website Development',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      description:
        'Build modern, responsive websites and digital platforms around organizational goals.',
      bestFor: 'Organizations needing a professional web presence',
      youReceive: 'Sitemap, responsive UI, CMS or static site, SEO setup',
    },
    {
      id: 'business-systems',
      number: '02',
      title: 'Business Management Systems',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      description:
        'Build practical business management systems — ERP, POS, inventory, and workflow tools.',
      bestFor: 'Businesses using spreadsheets or disconnected tools',
      youReceive: 'Workflow map, dashboard, roles, database, reporting',
      featured: {
        label: 'Featured: SmartBiz ERP',
        href: '/portfolio/smartbiz',
      },
    },
    {
      id: 'ui-ux-design',
      number: '03',
      title: 'UI/UX Design',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
      description:
        'Design intuitive, user-centered interfaces — from wireframes to complete design systems.',
      bestFor: 'Teams with a product idea or difficult workflow',
      youReceive: 'User flows, wireframes, prototype, design system',
    },
    {
      id: 'ai-solutions',
      number: '04',
      title: 'AI Solutions',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
      description:
        'Practical AI, automation, data analysis and intelligent features for real workflows.',
      bestFor: 'Organizations with repetitive information work',
      youReceive: 'Automation plan, AI feature, integration, testing',
    },
    {
      id: 'mobile-apps',
      number: '05',
      title: 'Mobile Apps',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
      description:
        'Mobile applications that extend business systems and services to mobile users.',
      bestFor: 'Services requiring mobile access',
      youReceive: 'Mobile flows, app UI, backend integration',
    },
    {
      id: 'maintenance',
      number: '06',
      title: 'Maintenance',
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
      description:
        'Ongoing improvements, bug fixes, updates, security and technical support.',
      bestFor: 'Existing products needing continuous improvement',
      youReceive: 'Monitoring, fixes, updates, security, support',
    },
  ];

  const cardsHtml = services
    .map(
      (service) => `
      <div ${service.id ? `id="${service.id}"` : ''} class="card flex flex-col" style="padding: var(--space-5);">
        <div style="flex: 1;">
          <!-- Top: Number & Icon -->
          <div class="flex items-start justify-between gap-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="font-bold" style="color: var(--color-blue); font-size: var(--font-size-sm); font-family: monospace;">${service.number}</span>
              <div style="width: 2.25rem; height: 2.25rem; border-radius: 50%; background-color: var(--color-bg-light-blue); color: var(--color-blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                ${service.icon}
              </div>
            </div>
            ${
              service.featured
                ? `<a href="${service.featured.href}" data-link class="badge badge--blue text-xs font-semibold" style="text-decoration: none;">${service.featured.label}</a>`
                : ''
            }
          </div>

          <!-- Heading -->
          <h3 class="card__title text-navy mb-3" style="font-size: var(--font-size-md);">${service.title}</h3>

          <!-- Description -->
          <p class="card__description text-secondary mb-5" style="font-size: var(--font-size-sm); line-height: 1.6;">${service.description}</p>
        </div>

        <div style="border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-4);">
          <!-- Best For & You Receive -->
          <div class="mb-2">
            <span class="text-xs font-semibold text-navy uppercase tracking-wide">Best For</span>
            <p class="text-secondary text-sm mt-1 mb-3" style="line-height: 1.5;">${service.bestFor}</p>
          </div>
          <div>
            <span class="text-xs font-semibold text-navy uppercase tracking-wide">You Receive</span>
            <p class="text-secondary text-sm mt-1" style="line-height: 1.5;">${service.youReceive}</p>
          </div>
        </div>
      </div>
    `,
    )
    .join('');

  return `
    <section class="section" aria-labelledby="core-services-heading">
      <div class="container">
        <!-- Section Heading -->
        <div class="section-heading">
          <span class="section-heading__label">CORE SERVICES</span>
          <h2 id="core-services-heading" class="section-heading__title">What We Can Build For You</h2>
          <p class="section-heading__subtitle text-balance">
            From websites to intelligent software, every service is built around solving real business problems.
          </p>
        </div>

        <!-- 6 Service Cards Grid -->
        <div class="grid grid--2 gap-5">
          ${cardsHtml}
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        #core-services-heading ~ .grid {
          gap: var(--space-4) !important;
        }
        #core-services-heading ~ .grid .card {
          padding: var(--space-4) !important;
        }
      }
    </style>
  `;
}
