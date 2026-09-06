/**
 * Capabilities Section — Business Outcome Focused
 * Organized by business value, not technical features.
 */
export function renderCapabilityGrid() {
  const categories = [
    {
      title: 'Operations',
      items: ['Workflow systems', 'Approvals', 'Role-based access', 'Operational dashboards'],
    },
    {
      title: 'Customer Experience',
      items: ['Web platforms', 'Portals', 'Booking flows', 'Customer-facing interfaces'],
    },
    {
      title: 'Data & Reporting',
      items: ['Dashboards', 'Analytics', 'Reports', 'Decision support'],
    },
    {
      title: 'Automation & Intelligence',
      items: ['Workflow automation', 'AI integrations', 'Intelligent features', 'Data processing'],
    },
    {
      title: 'Integrations',
      items: ['APIs', 'System connections', 'Third-party services', 'Data sync'],
    },
  ];

  const categoriesHtml = categories
    .map(
      (cat) => `
      <div class="card" style="background: var(--color-white); border: 1px solid var(--color-border-subtle); padding: var(--space-4);">
        <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-sm);">${cat.title}</h3>
        <div class="flex flex-wrap gap-1.5">
          ${cat.items.map(item => `<span class="badge badge--outline text-xs">${item}</span>`).join('')}
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="section bg-soft" aria-labelledby="capabilities-heading" style="border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-8); padding-bottom: var(--space-8);">
      <div class="container">
        <div class="section-heading" style="margin-bottom: var(--space-5);">
          <span class="section-heading__label">Capabilities</span>
          <h2 id="capabilities-heading" class="section-heading__title">What Our Solutions Include</h2>
          <p class="section-heading__subtitle text-balance">
            Business capabilities integrated into our digital systems — organized by outcome, not technology.
          </p>
        </div>

        <div class="grid grid--3 gap-4">
          ${categoriesHtml}
        </div>
      </div>
    </section>
  `;
}
