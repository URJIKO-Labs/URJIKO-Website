import { icons } from '../common/Icons.js';

/**
 * Solutions Hero Section
 * Problem-first positioning.
 */
export function renderSolutionsHero() {
  return `
    <section class="section section--lg" aria-labelledby="solutions-hero-title" style="padding-top: var(--space-10); padding-bottom: var(--space-12); background: var(--color-white);">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-10);">
          
          <!-- Left Column: Copy & Actions -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue); font-size: 0.7rem;">
              SOLUTIONS
            </div>

            <h1 id="solutions-hero-title" class="text-balance mb-4" style="font-size: clamp(2rem, 4.5vw, 3.25rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight); margin-bottom: var(--space-4);">
              Software Built Around Real Workflows
            </h1>

            <p class="text-secondary mb-6 text-balance" style="font-size: clamp(0.95rem, 1.5vw, 1.1rem); max-width: 36rem; line-height: 1.65;">
              URJIKO designs practical software for business operations, education, and transport. We turn disconnected tools into a single connected system.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss your workflow</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
              <a href="/portfolio" data-link class="btn btn--secondary btn--lg">
                <span>See our work</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Problem-to-Solution Visual -->
          <div class="flex justify-center items-center" style="width: 100%;">
            <div class="problem-solution-visual" style="width: 100%; max-width: 480px; display: flex; flex-direction: column; gap: var(--space-4); background: var(--color-bg-soft); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); box-shadow: var(--shadow-sm);">
              
              <!-- Problem State -->
              <div class="flex items-center gap-3" style="opacity: 0.7;">
                <div style="display: flex; gap: var(--space-2);">
                  <div style="width: 40px; height: 40px; border-radius: var(--radius-sm); border: 1px dashed var(--color-text-secondary); display: flex; align-items: center; justify-content: center; color: var(--color-text-secondary);">
                    ${icons.database('w-5 h-5')}
                  </div>
                  <div style="width: 40px; height: 40px; border-radius: var(--radius-sm); border: 1px dashed var(--color-text-secondary); display: flex; align-items: center; justify-content: center; color: var(--color-text-secondary);">
                    ${icons.barChart('w-5 h-5')}
                  </div>
                </div>
                <div class="text-xs text-secondary font-semibold" style="letter-spacing: 0.05em; text-transform: uppercase;">Disconnected Data</div>
              </div>

              <!-- Arrow -->
              <div style="padding-left: 12px; color: var(--color-blue);">
                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V22M8 22L2 16M8 22L14 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>

              <!-- Solution State -->
              <div class="flex items-center gap-4" style="background: var(--color-white); border: 1px solid var(--color-border-blue); border-radius: var(--radius-lg); padding: var(--space-4); box-shadow: 0 10px 25px rgba(23, 105, 224, 0.1);">
                <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
                  ${icons.layers('w-6 h-6')}
                </div>
                <div>
                  <h4 style="font-size: 1.05rem; font-weight: 600; color: var(--color-navy); margin-bottom: 0.15rem;">One Connected System</h4>
                  <p style="font-size: 0.8rem; color: var(--color-text-secondary); margin: 0;">Sales, inventory, and reporting synced in real-time.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="solutions-hero-title"] .container > .grid {
          grid-template-columns: 1.1fr 0.9fr !important;
        }
      }
      @media (max-width: 768px) {
        section[aria-labelledby="solutions-hero-title"] .container > .grid {
          gap: var(--space-6) !important;
        }
        section[aria-labelledby="solutions-hero-title"] h1 {
          font-size: clamp(1.5rem, 6vw, 2rem) !important;
        }
      }
    </style>
  `;
}
