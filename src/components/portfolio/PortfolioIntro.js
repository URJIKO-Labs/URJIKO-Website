/**
 * Portfolio Introduction Section
 * Establishes context before showing projects.
 */
export function renderPortfolioIntro() {
  return `
    <section class="section" aria-labelledby="portfolio-intro-heading" style="padding-top: var(--space-10); padding-bottom: var(--space-10); background: var(--color-bg-soft); border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container" style="max-width: 52rem;">
        <div class="text-center">
          <h2 id="portfolio-intro-heading" style="font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-4);">
            From Business Problems to Practical Software
          </h2>
          <p class="text-secondary text-balance" style="font-size: var(--font-size-md); line-height: 1.7; margin-bottom: var(--space-8);">
            Each project below demonstrates a different set of capabilities — from business management and education to transport operations and healthcare. The common thread is our approach: understand the problem, design a practical solution, and build software that actually works for the organization.
          </p>

          <div class="flex flex-wrap justify-center gap-3">
            <span class="badge badge--navy">Business Management</span>
            <span class="badge badge--navy">Education</span>
            <span class="badge badge--navy">Transport</span>
            <span class="badge badge--navy">Healthcare</span>
            <span class="badge badge--outline">Retail</span>
            <span class="badge badge--outline">Hospitality</span>
            <span class="badge badge--outline">Websites</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
