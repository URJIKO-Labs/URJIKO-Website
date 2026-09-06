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
      <div class="flex items-start gap-4 principle-item" style="border-bottom: 1px solid var(--color-border-subtle); padding-bottom: var(--space-5);">
        <span class="font-bold principle-number" style="color: var(--color-blue); font-size: var(--font-size-lg); font-family: monospace; min-width: 3rem; text-align: right; flex-shrink: 0; padding-top: 0.1rem;">
          ${p.number}
        </span>
        <div>
          <h3 class="principle-title" style="font-size: var(--font-size-md); color: var(--color-navy); margin-bottom: 0.35rem; font-weight: 600;">
            ${p.title}
          </h3>
          <p class="text-secondary principle-desc" style="font-size: var(--font-size-base); margin-bottom: 0; line-height: 1.6;">
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

            <div class="card bg-soft" style="border-left: 3px solid var(--color-blue); padding: var(--space-5); margin-top: var(--space-6);">
              <h3 class="text-navy font-semibold mb-1" style="font-size: var(--font-size-sm);">No Over-Engineering</h3>
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
          display: flex !important;
          flex-direction: column !important;
          gap: 0 !important;
        }
        section[aria-labelledby="why-heading"] .principle-item {
          gap: var(--space-3) !important;
          padding-bottom: var(--space-5) !important;
        }
        section[aria-labelledby="why-heading"] .principle-item:last-child {
          border-bottom: none !important;
          padding-bottom: 0 !important;
        }
        section[aria-labelledby="why-heading"] .principle-number {
          font-size: var(--font-size-sm) !important;
          min-width: 2rem !important;
          text-align: center !important;
          background: var(--color-bg-light-blue) !important;
          padding: 0.15rem 0.4rem !important;
          border-radius: var(--radius-sm) !important;
        }
        section[aria-labelledby="why-heading"] .principle-title {
          font-size: var(--font-size-sm) !important;
          margin-bottom: 0.15rem !important;
        }
        section[aria-labelledby="why-heading"] .principle-desc {
          font-size: var(--font-size-xs) !important;
          line-height: 1.5 !important;
        }
      }
    </style>
  `;
}
