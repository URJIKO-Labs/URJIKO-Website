/**
 * Services Approach Section: 'More Than Development'
 * Explains URJIKO Labs' 4-stage engineering methodology.
 */
export function renderServicesApproach() {
  const principles = [
    {
      title: 'Understand',
      description: 'Understand the business, workflow, users, and problem before building.',
      icon: `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      `,
    },
    {
      title: 'Build',
      description: 'Create practical software using modern engineering practices.',
      icon: `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      `,
    },
    {
      title: 'Improve',
      description: 'Test, refine, deploy, and continuously improve the solution.',
      icon: `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      `,
    },
    {
      title: 'Support',
      description: 'Provide technical support and maintenance after launch when needed.',
      icon: `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      `,
    },
  ];

  const cardsHtml = principles
    .map(
      (principle) => `
        <div class="card" style="background-color: var(--color-white); border: 1px solid var(--color-border); border-top: 3px solid var(--color-blue); display: flex; flex-direction: column; padding: var(--space-5);">
          <div class="approach-icon-circle" style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-full); background-color: var(--color-bg-light-blue); color: var(--color-blue); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-3); flex-shrink: 0;">
            ${principle.icon}
          </div>
          <h3 class="card__title text-navy mb-1" style="font-size: var(--font-size-md); font-weight: 600;">
            ${principle.title}
          </h3>
          <p class="text-secondary mb-0" style="line-height: 1.5; font-size: var(--font-size-sm);">
            ${principle.description}
          </p>
        </div>
      `
    )
    .join('');

  return `
    <section class="section bg-soft" aria-labelledby="services-approach-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">Our Approach</span>
          <h2 id="services-approach-heading" class="section-heading__title">More Than Development</h2>
          <p class="section-heading__subtitle text-balance">
            We start by understanding the problem, then design and build the technology around the way your organization actually works.
          </p>
        </div>

        <!-- 4 Principle Cards -->
        <div class="grid grid--2 gap-4">
          ${cardsHtml}
        </div>

      </div>
    </section>
  `;
}
