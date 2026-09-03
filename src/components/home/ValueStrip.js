/**
 * Trust / Value Strip Section
 * Highlights 4 pillars: Practical Solutions, Mobile-Friendly, Secure & Reliable, Long-Term Support.
 */
export function renderValueStrip() {
  const values = [
    {
      title: 'Practical Solutions',
      description: 'Technology designed around real business problems and operational bottlenecks.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    },
    {
      title: 'Mobile-Friendly',
      description: 'Responsive, cross-platform experiences engineered for smooth use on any device.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    },
    {
      title: 'Secure & Reliable',
      description: 'Built with security, high availability, and maintainable software architecture in mind.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    },
    {
      title: 'Long-Term Support',
      description: 'Continuous improvements, dependable maintenance, and technical assistance.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>`,
    },
  ];

  const itemsHtml = values
    .map(
      (item) => `
      <div class="flex flex-col items-start gap-2 p-4" style="border-left: 2px solid var(--color-border-subtle); padding-left: var(--space-4);">
        <div class="text-teal mb-1 flex items-center justify-center" style="width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm); background: var(--color-teal-subtle);">
          ${item.icon}
        </div>
        <h3 style="font-size: var(--font-size-md); font-weight: 600; color: var(--color-navy); margin-bottom: 0.25rem;">
          ${item.title}
        </h3>
        <p class="text-sm text-secondary" style="margin-bottom: 0; line-height: 1.5;">
          ${item.description}
        </p>
      </div>
    `
    )
    .join('');

  return `
    <section class="section--sm bg-soft" aria-label="Why organizations trust URJIKO Labs" style="border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container">
        <div class="grid grid--4 gap-6">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}
