import { icons } from "../common/Icons.js";

/**
 * Portfolio Hero Section
 * Clean, premium hero communicating URJIKO's project portfolio.
 */
export function renderPortfolioHero() {
  return `
    <section class="section" aria-labelledby="portfolio-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-14); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-10);">

          <!-- Left: Copy -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              PORTFOLIO
            </div>

            <h1 id="portfolio-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.5rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Software Built to Solve Real&nbsp;Problems.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.125rem); max-width: 36rem; line-height: 1.65;">
              Explore selected software, business systems, and digital experiences developed by URJIKO Labs for organizations across business, education, transport, and healthcare.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Project</span>
                ${icons.arrowRight("w-4 h-4")}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>View Our Solutions</span>
              </a>
            </div>
          </div>

          <!-- Right: Project Summary Visual -->
          <div aria-hidden="true" style="width: 100%; display: flex; justify-content: center;">
            <div style="width: 100%; max-width: 460px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-5); box-shadow: var(--shadow-lg);">

              <div class="flex items-center justify-between pb-3 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
                <span class="text-xs font-semibold text-navy">PROJECT PORTFOLIO</span>
                <span class="badge badge--blue text-xs">4 Core Projects</span>
              </div>

              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between p-3" style="background: var(--color-navy); border-radius: var(--radius-sm); color: #FFF;">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue-light);"></span>
                    <span class="text-sm font-semibold">SmartBiz ERP</span>
                  </div>
                  <span class="text-xs" style="color: rgba(255,255,255,0.7);">Business</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">Transport Management</span>
                  </div>
                  <span class="text-xs text-muted">Operations</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">EduFlow</span>
                  </div>
                  <span class="text-xs text-muted">Education</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">ShegerHealth</span>
                  </div>
                  <span class="text-xs text-muted">Healthcare</span>
                </div>
              </div>

              <div class="flex items-center justify-between mt-4 pt-3" style="border-top: 1px solid var(--color-border-subtle);">
                <span class="text-xs text-muted">+ 3 additional projects</span>
                <span class="text-xs font-semibold" style="color: var(--color-blue);">5 Industries</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="portfolio-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
    </style>
  `;
}
