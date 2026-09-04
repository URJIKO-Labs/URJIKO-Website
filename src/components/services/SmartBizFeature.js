import { icons } from '../common/Icons.js';

/**
 * SmartBiz Feature Section
 * Visually prominent section highlighting Business Management Systems with SmartBiz ERP.
 */
export function renderSmartBizFeature() {
  return `
    <section class="section bg-white" aria-labelledby="smartbiz-feature-title" style="background-color: var(--color-white); position: relative;">
      <div class="container">
        <div class="grid smartbiz-feature-grid items-center">
          
          <!-- Left Content -->
          <div class="flex flex-col items-start">
            <div class="section-heading mb-6" style="margin-bottom: var(--space-6);">
              <span class="section-heading__label">BUSINESS MANAGEMENT SOLUTION</span>
              <h2 id="smartbiz-feature-title" class="section-heading__title">Turn Daily Operations Into One Connected System.</h2>
              <p class="section-heading__subtitle text-balance">
                Businesses often manage sales, inventory, customers, and reporting across disconnected processes. URJIKO can bring these workflows together into practical software.
              </p>
            </div>

            <!-- Feature Chips -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="badge badge--navy">POS</span>
              <span class="badge badge--navy">Inventory</span>
              <span class="badge badge--navy">Sales</span>
              <span class="badge badge--navy">Customers</span>
              <span class="badge badge--navy">Reports</span>
              <span class="badge badge--navy">Dashboard</span>
            </div>

            <!-- CTA Button -->
            <div>
              <a href="/portfolio" data-link class="btn btn--primary">
                <span>View SmartBiz</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- Right Visual: CSS Terminal / Dashboard Mockup -->
          <div class="smartbiz-visual-wrapper" style="width: 100%; display: flex; justify-content: center;">
            <div class="card card--lg shadow-lg" role="region" aria-label="SmartBiz Control Panel Preview" style="width: 100%; max-width: 520px; background-color: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
              
              <!-- Top Bar -->
              <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
                <div class="flex items-center gap-2">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
                  <span class="text-sm font-semibold text-navy">SmartBiz Control Panel</span>
                </div>
                <span class="badge badge--blue text-xs font-semibold">Live</span>
              </div>

              <!-- 2x2 Mini Stat Cards -->
              <div class="grid grid--2 gap-3 mb-5" style="grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
                <!-- Stat Card 1 -->
                <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
                  <div class="text-xs text-muted mb-1 font-medium">Today's Sales</div>
                  <div class="text-lg font-bold text-navy">47 Orders</div>
                </div>

                <!-- Stat Card 2 -->
                <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
                  <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Inventory</div>
                  <div class="text-lg font-bold" style="color: var(--color-blue);">All Stocked</div>
                </div>

                <!-- Stat Card 3 -->
                <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
                  <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Customers</div>
                  <div class="text-lg font-bold text-navy">1,243</div>
                </div>

                <!-- Stat Card 4 -->
                <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
                  <div class="text-xs text-muted mb-1 font-medium">Revenue</div>
                  <div class="text-lg font-bold text-navy">Growing</div>
                </div>
              </div>

              <!-- Bottom: Progress Bar -->
              <div class="p-4" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-navy">Operations Efficiency</span>
                  <span class="text-xs font-bold" style="color: var(--color-blue);">91%</span>
                </div>
                <div style="width: 100%; height: 8px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden;">
                  <div style="width: 91%; height: 100%; background-color: var(--color-blue); border-radius: var(--radius-full);" role="progressbar" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100" aria-label="Operations Efficiency"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>
        .smartbiz-feature-grid {
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }

        .shadow-lg {
          box-shadow: var(--shadow-lg);
        }

        @media (min-width: 1024px) {
          .smartbiz-feature-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: var(--space-12);
          }
        }

        @media (max-width: 768px) {
          .smartbiz-visual-wrapper {
            display: none !important;
          }
          section[aria-labelledby="smartbiz-feature-title"] .btn {
            padding: 0.625rem 1.25rem;
            font-size: var(--font-size-sm);
          }
        }
      </style>
    </section>
  `;
}
