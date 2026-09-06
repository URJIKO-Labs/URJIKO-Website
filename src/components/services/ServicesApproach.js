/**
 * Services Approach Section
 * Compact 4-stage methodology.
 */
export function renderServicesApproach() {
  const stages = [
    {
      title: 'Understand',
      description: 'Learn the organization, workflow, users, and problem.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
    },
    {
      title: 'Design & Build',
      description: 'Design the right experience and develop the software around the requirements.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    },
    {
      title: 'Improve',
      description: 'Test, refine, deploy, and continuously improve the solution.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    },
    {
      title: 'Support',
      description: 'Provide maintenance and technical support after launch when needed.',
      icon: `<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`,
    },
  ];

  const stagesHtml = stages
    .map(
      (stage) => `
      <div class="flex items-start gap-3" style="padding: var(--space-3) 0; border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center justify-center flex-shrink-0" style="width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm); background: var(--color-bg-light-blue); color: var(--color-blue);">
          ${stage.icon}
        </div>
        <div>
          <h3 style="font-size: var(--font-size-sm); font-weight: 600; color: var(--color-navy); margin-bottom: 0.15rem;">${stage.title}</h3>
          <p class="text-secondary" style="font-size: var(--font-size-xs); margin-bottom: 0; line-height: 1.5;">${stage.description}</p>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="section--sm bg-soft" aria-labelledby="services-approach-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading" style="margin-bottom: var(--space-5);">
          <span class="section-heading__label">Our Approach</span>
          <h2 id="services-approach-heading" class="section-heading__title">More Than Development</h2>
          <p class="section-heading__subtitle text-balance">
            We start by understanding the problem, then design and build the technology around the way your organization actually works.
          </p>
        </div>

        <!-- 4 Stages -->
        <div class="grid grid--2 gap-4">
          ${stagesHtml}
        </div>

      </div>
    </section>
  `;
}
