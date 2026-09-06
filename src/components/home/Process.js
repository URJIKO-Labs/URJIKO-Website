/**
 * How We Work Section
 * Compact 6-step process with clean layout.
 */
export function renderProcess() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand goals, workflows, and problems.',
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Define scope, priorities, and MVP.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Create the user experience and system structure.',
    },
    {
      number: '04',
      title: 'Develop',
      description: 'Build and integrate the solution.',
    },
    {
      number: '05',
      title: 'Test',
      description: 'Validate functionality, responsiveness, and reliability.',
    },
    {
      number: '06',
      title: 'Deploy',
      description: 'Launch, train users, and support the system.',
    },
  ];

  const stepsHtml = steps
    .map(
      (s) => `
      <div class="process-step" style="
        display: flex;
        align-items: flex-start;
        gap: var(--space-3);
        padding: var(--space-3) 0;
        border-bottom: 1px solid var(--color-border-subtle);
      ">
        <span class="font-bold" style="
          color: var(--color-blue);
          font-size: var(--font-size-sm);
          font-family: monospace;
          min-width: 1.75rem;
          flex-shrink: 0;
          background: var(--color-bg-light-blue);
          padding: 0.15rem 0.4rem;
          border-radius: var(--radius-sm);
          text-align: center;
        ">${s.number}</span>
        <div>
          <h3 style="font-size: var(--font-size-sm); color: var(--color-navy); margin-bottom: 0.1rem; font-weight: 600;">${s.title}</h3>
          <p class="text-secondary" style="font-size: var(--font-size-xs); margin-bottom: 0; line-height: 1.45;">${s.description}</p>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="section bg-soft" aria-labelledby="process-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">Our Process</span>
          <h2 id="process-heading" class="section-heading__title">How We Work</h2>
          <p class="section-heading__subtitle text-balance">
            A clear, milestone-driven process that keeps projects on schedule, within scope, and aligned with your goals.
          </p>
        </div>

        <div class="grid grid--3 gap-6">
          ${stepsHtml}
        </div>

      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        #process-heading ~ .grid--3 {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: var(--space-3) !important;
        }
        #process-heading ~ .grid--3 > .process-step {
          padding: var(--space-3) 0 !important;
        }
        #process-heading ~ .grid--3 > .process-step h3 {
          font-size: var(--font-size-xs) !important;
        }
        #process-heading ~ .grid--3 > .process-step p {
          font-size: 0.7rem !important;
          line-height: 1.4 !important;
        }
      }
    </style>
  `;
}
