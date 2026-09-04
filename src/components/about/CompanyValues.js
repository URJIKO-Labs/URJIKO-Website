export function renderCompanyValues() {
  const values = [
    {
      number: "01",
      title: "Practicality",
      description: "Build what solves the problem. No unnecessary complexity.",
    },
    {
      number: "02",
      title: "Clarity",
      description: "Keep systems understandable and usable for everyone.",
    },
    {
      number: "03",
      title: "Quality",
      description: "Care about reliability, security, and user experience.",
    },
    {
      number: "04",
      title: "Responsibility",
      description: "Be honest about capabilities, timelines, and costs.",
    },
  ];

  const itemsHtml = values
    .map(
      (v) => `
      <div class="flex items-start gap-4" style="border-bottom: 1px solid var(--color-border-subtle); padding-bottom: var(--space-4);">
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--color-blue); font-family: monospace; min-width: 2.5rem; text-align: right; flex-shrink: 0; padding-top: 0.1rem;">
          ${v.number}
        </span>
        <div>
          <h3 style="font-size: var(--font-size-md); color: var(--color-navy); margin-bottom: 0.25rem; font-weight: 600;">
            ${v.title}
          </h3>
          <p class="text-secondary" style="font-size: var(--font-size-sm); margin-bottom: 0; line-height: 1.5;">
            ${v.description}
          </p>
        </div>
      </div>
    `
    )
    .join("");

  return `
    <section class="section bg-soft" aria-labelledby="values-heading">
      <div class="container">
        <div class="grid items-start" style="grid-template-columns: 1fr; gap: var(--space-8);">
          
          <!-- Left: Heading -->
          <div>
            <div class="section-heading" style="margin-bottom: var(--space-4);">
              <span class="section-heading__label">PRINCIPLES</span>
              <h2 id="values-heading" class="section-heading__title">What We Believe</h2>
              <p class="section-heading__subtitle text-balance">
                The principles that guide how we build software and work with clients.
              </p>
            </div>
          </div>

          <!-- Right: Values List -->
          <div class="flex flex-col gap-4">
            ${itemsHtml}
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="values-heading"] .container > .grid {
          grid-template-columns: 0.8fr 1.2fr !important;
        }
      }
    </style>
  `;
}
