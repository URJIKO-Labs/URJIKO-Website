export function renderWhyUrjiko() {
  const principles = [
    {
      number: '01',
      title: 'Understand the Problem',
      description: 'We focus on the underlying business challenge and operational workflow before choosing the technology stack.',
    },
    {
      number: '02',
      title: 'Practical Technology',
      description: 'We prioritize useful features, high usability, and measurable value over unnecessary complexity.',
    },
    {
      number: '03',
      title: 'Modern Engineering',
      description: 'Solutions are built with clean code, standard conventions, and maintainable software architecture.',
    },
    {
      number: '04',
      title: 'Designed to Grow',
      description: 'Systems are structured modularly so they can expand seamlessly as your organization scales.',
    },
    {
      number: '05',
      title: 'Continued Support',
      description: 'We partner for the long term, helping you maintain, upgrade, and monitor your solution after launch.',
    },
  ];

  const principlesHtml = principles
    .map(
      (p) => `
      <div class="flex items-start gap-4 pb-6" style="border-bottom: 1px solid var(--color-border-subtle);">
        <span class="font-bold" style="color: var(--color-blue); font-size: var(--font-size-xl); font-family: monospace; min-width: 2.5rem;">
          ${p.number}
        </span>
        <div>
          <h3 style="font-size: var(--font-size-lg); color: var(--color-navy); margin-bottom: 0.25rem; font-weight: 600;">
            ${p.title}
          </h3>
          <p class="text-secondary text-sm" style="margin-bottom: 0; line-height: 1.55;">
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
        <div class="grid items-start" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column: Context -->
          <div class="flex flex-col items-start">
            <div class="section-heading mb-6" style="margin-bottom: var(--space-6);">
              <span class="section-heading__label">Our Engineering Philosophy</span>
              <h2 id="why-heading" class="section-heading__title">Why Work With URJIKO Labs?</h2>
              <p class="section-heading__subtitle text-balance">
                We start with the problem, understand the workflow, and build technology around what your organization actually needs.
              </p>
            </div>

            <div class="card bg-soft" style="border-left: 3px solid var(--color-blue); padding: var(--space-6);">
              <h4 class="text-navy font-semibold mb-2">No Over-Engineering</h4>
              <p class="text-sm text-secondary mb-0">
                You get dependable, performant software engineered to solve real business pain points without bloat or vendor lock-in.
              </p>
            </div>
          </div>

          <!-- Right Column: 5 Numbered Principles -->
          <div class="flex flex-col gap-6">
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
    </style>
  `;
}
