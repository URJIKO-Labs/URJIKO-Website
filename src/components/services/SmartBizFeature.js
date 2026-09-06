import { icons } from '../common/Icons.js';

/**
 * SmartBiz Feature Section
 * Uses genuine SmartBiz SVG visual.
 */
export function renderSmartBizFeature() {
  return `
    <section class="section" aria-labelledby="smartbiz-feature-title" style="background-color: var(--color-white);">
      <div class="container">
        <div class="grid smartbiz-feature-grid items-center" style="gap: var(--space-10);">
          
          <!-- Left Content -->
          <div class="flex flex-col items-start">
            <div class="section-heading mb-4" style="margin-bottom: var(--space-4);">
              <span class="section-heading__label">BUSINESS MANAGEMENT SOLUTION</span>
              <h2 id="smartbiz-feature-title" class="section-heading__title">Turn Daily Operations Into One Connected System.</h2>
              <p class="section-heading__subtitle text-balance">
                Businesses often manage sales, inventory, customers, and reporting across disconnected processes. URJIKO can bring these workflows together into practical software.
              </p>
            </div>

            <!-- Feature Chips -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="badge badge--navy">POS</span>
              <span class="badge badge--navy">Inventory</span>
              <span class="badge badge--navy">Sales</span>
              <span class="badge badge--navy">Customers</span>
              <span class="badge badge--navy">Reports</span>
              <span class="badge badge--navy">Dashboard</span>
            </div>

            <!-- CTA Button -->
            <div>
              <a href="/portfolio/smartbiz" data-link class="btn btn--primary">
                <span>View SmartBiz</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- Right Visual: SmartBiz SVG -->
          <div class="smartbiz-visual-wrapper" style="width: 100%; display: flex; justify-content: center;">
            <div style="width: 100%; max-width: 520px;">
              <img 
                src="${import.meta.env.BASE_URL}images/project-smartbiz.svg" 
                alt="SmartBiz Suite — business management dashboard showing sales, inventory, and customer metrics" 
                width="800" 
                height="500" 
                loading="lazy"
                style="width: 100%; height: auto; border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-lg);"
              >
              <div style="text-align: center; margin-top: var(--space-3);">
                <span class="text-xs text-muted" style="font-size: 0.75rem;">SmartBiz Suite — Product Preview</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>
        .smartbiz-feature-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .smartbiz-feature-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 768px) {
          .smartbiz-visual-wrapper {
            display: none !important;
          }
        }
      </style>
    </section>
  `;
}
