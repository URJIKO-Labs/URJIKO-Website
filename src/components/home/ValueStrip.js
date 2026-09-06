/**
 * Trust / Value Strip Section
 * Compact strip showing concrete value propositions.
 */
export function renderValueStrip() {
  const values = [
    {
      title: 'Focus: Practical Systems',
      description: 'We build operational tools, not just marketing websites.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    },
    {
      title: 'Delivery: Full-Cycle',
      description: 'From UX design to backend development and maintenance.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    },
    {
      title: 'Location: Ethiopia',
      description: 'Based in Addis Ababa, serving local and regional clients.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    },
    {
      title: 'Style: Problem-First',
      description: 'We start by understanding the workflow, not the tech.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
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
