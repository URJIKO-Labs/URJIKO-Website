/**
 * Why URJIKO Labs Section
 * Problem-first philosophy with clear workflow explanation.
 */
export function renderWhyUrjiko() {
  const principles = [
    {
      number: '01',
      title: 'Understand the Problem',
      description: 'We learn how your organization currently works and identify the biggest operational challenges.',
    },
    {
      number: '02',
      title: 'Design the Right Solution',
      description: 'We focus on the workflows and features that actually matter for your team.',
    },
    {
      number: '03',
      title: 'Build Practical Software',
      description: 'We develop usable, responsive systems around those requirements — not generic templates.',
    },
    {
      number: '04',
      title: 'Improve Over Time',
      description: 'Solutions can evolve as your organization\'s needs grow and change.',
    },
  ];

  const principlesHtml = principles
    .map(
      (p) => `
      <div class="flex items-start gap-4 principle-item" style="border-bottom: 1px solid var(--color-border-subtle); padding-bottom: var(--space-4);">
        <span class="font-bold principle-number" style="color: var(--color-blue); font-size: var(--font-size-lg); font-family: monospace; min-width: 2.5rem; text-align: right; flex-shrink: 0; padding-top: 0.1rem;">
          ${p.number}
        </span>
        <div>
          <h3 class="principle-title" style="font-size: var(--font-size-sm); color: var(--color-navy); margin-bottom: 0.25rem; font-weight: 600;">
            ${p.title}
          </h3>
          <p class="text-secondary principle-desc" style="font-size: var(--font-size-sm); margin-bottom: 0; line-height: 1.55;">
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
              <span class="section-heading__label">Our Approach</span>
              <h2 id="why-heading" class="section-heading__title">Why Work With URJIKO Labs?</h2>
              <p class="section-heading__subtitle text-balance">
                We don't start by asking what technology to sell. We start by understanding your organization's problem.
              </p>
            </div>

            <div class="card bg-soft" style="border-left: 3px solid var(--color-blue); padding: var(--space-4); margin-top: var(--space-4);">
              <h3 class="text-navy font-semibold mb-1" style="font-size: var(--font-size-sm);">No Over-Engineering</h3>
              <p class="text-secondary mb-0" style="font-size: var(--font-size-xs); line-height: 1.45;">
                Dependable software without bloat or vendor lock-in. We build what you need, nothing more.
              </p>
            </div>
          </div>

          <!-- Right Column: 4 Numbered Principles -->
          <div class="flex flex-col gap-3">
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
          padding-bottom: var(--space-4) !important;
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
