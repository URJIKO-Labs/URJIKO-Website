/**
 * Trust / Value Strip Section
 * Compact strip showing concrete value propositions.
 */
export function renderValueStrip() {
  const values = [
    {
      title: 'Problem-First Approach',
      description: 'We start by understanding your business challenge, not by selling technology.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    },
    {
      title: 'Business-Focused Solutions',
      description: 'Software built around your actual workflows and operational needs.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    },
    {
      title: 'Responsive & Mobile-Friendly',
      description: 'Every system works smoothly on desktop, tablet, and mobile.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    },
    {
      title: 'Built for Real Workflows',
      description: 'Practical features that solve actual problems, not impressive demos.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    },
  ];

  const itemsHtml = values
    .map(
      (item) => `
      <div class="flex items-start gap-3" style="padding: var(--space-3) 0;">
        <div class="flex-shrink-0 flex items-center justify-center" style="width: 2rem; height: 2rem; border-radius: var(--radius-sm); background: var(--color-bg-light-blue); color: var(--color-blue);">
          ${item.icon}
        </div>
        <div>
          <h3 style="font-size: var(--font-size-sm); font-weight: 600; color: var(--color-navy); margin-bottom: 0.15rem; line-height: 1.3;">
            ${item.title}
          </h3>
          <p class="text-secondary" style="font-size: var(--font-size-xs); margin-bottom: 0; line-height: 1.5;">
            ${item.description}
          </p>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="section--sm" aria-label="Why organizations trust URJIKO Labs" style="background: var(--color-white); border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container">
        <div class="grid grid--4 gap-4">
          ${itemsHtml}
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        .grid--4 {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: var(--space-3) !important;
        }
      }
      @media (max-width: 480px) {
        .grid--4 {
          grid-template-columns: 1fr !important;
        }
      }
    </style>
  `;
}
