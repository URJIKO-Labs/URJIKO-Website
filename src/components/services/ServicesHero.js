import { icons } from '../common/Icons.js';

/**
 * Services Hero Section
 * Eyebrow: WHAT WE DO
 * Headline: Technology Built Around Your Business.
 */
export function renderServicesHero() {
  return `
    <section class="section section--lg" aria-labelledby="services-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-16); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              WHAT WE DO
            </div>

            <h1 id="services-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Technology Built Around Your Business.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.1875rem); max-width: 38rem; line-height: 1.65;">
              From modern websites to business systems and intelligent software, URJIKO Labs builds practical digital solutions designed around real organizational needs.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>View Our Solutions</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Abstract Connected Architecture Visual (Navy + Blue + Light Blue) -->
          <div class="hero-visual-wrapper" aria-hidden="true" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center;">
            <div style="width: 100%; max-width: 500px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); box-shadow: var(--shadow-xl);">
              
              <div class="flex items-center justify-between pb-4 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
                <span class="text-xs font-semibold text-navy">SYSTEM CAPABILITIES & ARCHITECTURE</span>
                <span class="badge badge--blue text-xs">5 Core Areas</span>
              </div>

              <!-- Connected Modules Stack -->
              <div class="flex flex-col gap-3">
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">Web & Mobile Platforms</span>
                  </div>
                  <span class="text-xs font-medium" style="color: var(--color-blue);">High Performance</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-navy); color: #FFFFFF; border-radius: var(--radius-sm); box-shadow: var(--shadow-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue-light);"></span>
                    <span class="text-sm font-semibold text-white">Business Management (ERP / POS)</span>
                  </div>
                  <span class="text-xs font-medium" style="color: rgba(255,255,255,0.75);">SmartBiz Ready</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">Custom Workflows & Database Systems</span>
                  </div>
                  <span class="text-xs text-muted">Scalable</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">AI Automation & Data Processing</span>
                  </div>
                  <span class="text-xs font-medium" style="color: var(--color-blue);">Intelligent Tools</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-navy);"></span>
                    <span class="text-sm font-semibold text-navy">Continuous Support & SLA Maintenance</span>
                  </div>
                  <span class="text-xs text-muted">99.9% Upkeep</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
      @media (max-width: 768px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          gap: var(--space-8) !important;
        }
      }
    </style>
  `;
}
