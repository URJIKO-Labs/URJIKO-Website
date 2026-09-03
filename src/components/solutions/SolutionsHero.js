import { icons } from '../common/Icons.js';

/**
 * Solutions Hero Section
 * Eyebrow: SOLUTIONS
 * Headline: Practical Software for Real-World Problems.
 * Supporting copy: We design digital systems around the workflows, challenges, and goals of businesses and organizations.
 */
export function renderSolutionsHero() {
  return `
    <section class="section section--lg" aria-labelledby="solutions-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-16); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column: Copy & Actions -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              SOLUTIONS
            </div>

            <h1 id="solutions-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Practical Software for Real-World Problems.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.1875rem); max-width: 38rem; line-height: 1.65;">
              We design digital systems around the workflows, challenges, and goals of businesses and organizations.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Problem</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
              <a href="/portfolio" data-link class="btn btn--secondary btn--lg">
                <span>Explore Our Work</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Connected Industry Architecture Visual -->
          <div class="hero-visual-wrapper" aria-hidden="true" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center;">
            <div style="width: 100%; max-width: 500px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); box-shadow: var(--shadow-xl); position: relative;">
              
              <!-- Card Header -->
              <div class="flex items-center justify-between pb-4 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
                <span class="text-xs font-semibold text-navy" style="letter-spacing: var(--letter-spacing-wide);">SOLUTION ARCHITECTURE</span>
                <span class="badge badge--blue text-xs">4 Industries</span>
              </div>

              <!-- Connected Sector Rows -->
              <div class="flex flex-col gap-3" style="position: relative;">
                
                <!-- Row 1: Business Operations (light-blue bg) -->
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm); transition: all var(--transition-fast);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span>
                    <span class="text-sm font-semibold text-navy">Business Operations</span>
                  </div>
                  <span class="text-xs font-medium" style="color: var(--color-blue);">Enterprise ERP</span>
                </div>

                <!-- Row 2: Education Systems (soft-gray bg) -->
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm); transition: all var(--transition-fast);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span>
                    <span class="text-sm font-semibold text-navy">Education Systems</span>
                  </div>
                  <span class="text-xs font-medium text-secondary">Academic & Admin</span>
                </div>

                <!-- Row 3: Transport Management (light-blue bg) -->
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm); transition: all var(--transition-fast);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span>
                    <span class="text-sm font-semibold text-navy">Transport Management</span>
                  </div>
                  <span class="text-xs font-medium" style="color: var(--color-blue);">Fleet Logistics</span>
                </div>

                <!-- Row 4: Healthcare Platforms (soft-gray bg) -->
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm); transition: all var(--transition-fast);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span>
                    <span class="text-sm font-semibold text-navy">Healthcare Platforms</span>
                  </div>
                  <span class="text-xs font-medium text-secondary">Clinical Workflows</span>
                </div>

              </div>

              <!-- Card Footer Connection Metric -->
              <div class="flex items-center justify-between pt-4 mt-4" style="border-top: 1px solid var(--color-border-subtle);">
                <span class="text-xs text-secondary flex items-center gap-2">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-blue);"></span>
                  Connected Digital Workflows
                </span>
                <span class="text-xs font-semibold text-navy">Unified Modular Core</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="solutions-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
    </style>
  `;
}
