export function renderWhyUrjiko() {
  const principles = [
    {
      number: '01',
      title: 'Understand the Problem',
      description: 'We focus on the business challenge before choosing technology.',
    },
    {
      number: '02',
      title: 'Practical Technology',
      description: 'Useful features and measurable value over complexity.',
    },
    {
      number: '03',
      title: 'Modern Engineering',
      description: 'Clean code, standard conventions, maintainable architecture.',
    },
    {
      number: '04',
      title: 'Designed to Grow',
      description: 'Modular systems that expand as your organization scales.',
    },
    {
      number: '05',
      title: 'Continued Support',
      description: 'Long-term partnership for maintenance and upgrades.',
    },
  ];

  const principlesHtml = principles
    .map(
      (p) => `
      <div class="flex items-start gap-3 pb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
        <span class="font-bold" style="color: var(--color-blue); font-size: var(--font-size-lg); font-family: monospace; min-width: 2rem;">
          ${p.number}
        </span>
        <div>
          <h3 style="font-size: var(--font-size-base); color: var(--color-navy); margin-bottom: 0.15rem; font-weight: 600;">
            ${p.title}
          </h3>
          <p class="text-secondary" style="font-size: var(--font-size-sm); margin-bottom: 0; line-height: 1.45;">
            ${p.description}
          </p>
        </div>
      </div>
    `
    )
    .join('');

  return `
    <section class="section" aria-labelledby="why-heading">
      <div class="container">
        <div class="grid items-start" style="grid-template-columns: 1fr; gap: var(--space-8);">
          
          <!-- Left Column: Context -->
          <div class="flex flex-col items-start">
            <div class="section-heading mb-4" style="margin-bottom: var(--space-4);">
              <span class="section-heading__label">Our Engineering Philosophy</span>
              <h2 id="why-heading" class="section-heading__title">Why Work With URJIKO Labs?</h2>
              <p class="section-heading__subtitle text-balance">
                We start with the problem, understand the workflow, and build technology around what your organization actually needs.
              </p>
            </div>

            <div class="card bg-soft" style="border-left: 3px solid var(--color-blue); padding: var(--space-4);">
              <h4 class="text-navy font-semibold mb-1" style="font-size: var(--font-size-sm);">No Over-Engineering</h4>
              <p class="text-secondary mb-0" style="font-size: var(--font-size-xs); line-height: 1.45;">
                Dependable software without bloat or vendor lock-in.
              </p>
            </div>
          </div>

          <!-- Right Column: 5 Numbered Principles -->
          <div class="flex flex-col gap-4">
            ${principlesHtml}
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="why-heading"] .container > .grid {
          grid-template-columns: 0.9fr 1.1fr !important;
        }
      }
      @media (max-width: 768px) {
        section[aria-labelledby="why-heading"] .container > .grid {
          gap: var(--space-6) !important;
        }
        section[aria-labelledby="why-heading"] .flex.flex-col.gap-4 {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: var(--space-3) !important;
        }
        section[aria-labelledby="why-heading"] .flex.flex-col.gap-4 > div:nth-child(5) {
          grid-column: span 2;
        }
      }
    </style>
  `;
}
