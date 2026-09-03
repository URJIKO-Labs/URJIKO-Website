import { icons } from '../common/Icons.js';

export function renderFeaturedSolutions() {
  return `
    <section class="section bg-soft" aria-labelledby="solutions-heading" style="border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading">
          <span class="section-heading__label">Case Studies & Systems</span>
          <h2 id="solutions-heading" class="section-heading__title">Solutions Built for Real-World Problems</h2>
          <p class="section-heading__subtitle text-balance">
            Explore selected digital solutions designed to address real operational challenges across business, education, transport, and healthcare.
          </p>
        </div>

        <div class="flex flex-col gap-8 mb-12">
          
          <!-- 1. SMARTBIZ (Prominent Hero Card) -->
          <div class="card card--lg" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);">
            <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-8);">
              
              <!-- Content -->
              <div class="flex flex-col items-start">
                <div class="flex items-center gap-2 mb-3">
                  <span class="badge badge--blue font-semibold">BUSINESS MANAGEMENT</span>
                  <span class="badge badge--navy font-semibold">Core Product</span>
                </div>
                <h3 style="font-size: clamp(1.5rem, 3vw, 2rem); color: var(--color-navy); margin-bottom: var(--space-3); font-weight: 700;">
                  SmartBiz Suite
                </h3>
                <p class="text-secondary mb-6 text-balance" style="font-size: var(--font-size-md); line-height: 1.6;">
                  A business management solution designed to help businesses manage sales, inventory, customers, credit, reporting, and daily operations from one unified platform.
                </p>
                
                <div class="flex flex-wrap gap-3 mb-6">
                  <span class="badge badge--outline text-xs">Point of Sale (POS)</span>
                  <span class="badge badge--outline text-xs">Inventory Sync</span>
                  <span class="badge badge--outline text-xs">Credit & Ledger</span>
                  <span class="badge badge--outline text-xs">Real-Time Reports</span>
                </div>

                <a href="/portfolio" data-link class="btn btn--primary flex items-center gap-2">
                  <span>View Solution Overview</span>
                  ${icons.arrowRight('w-4 h-4')}
                </a>
              </div>

              <!-- Product Preview Visual -->
              <div class="smartbiz-visual" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-lg); padding: var(--space-5); box-shadow: var(--shadow-sm);">
                <div class="flex justify-between items-center pb-3 mb-3" style="border-bottom: 1px solid rgba(7, 87, 184, 0.15);">
                  <div class="flex items-center gap-2">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-xs font-bold text-navy">SmartBiz Control Terminal</span>
                  </div>
                  <span class="badge badge--blue text-xs">Live System</span>
                </div>

                <div class="grid grid--2 gap-3 mb-3">
                  <div style="background: var(--color-white); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">
                    <div class="text-xs text-muted">Today's Transactions</div>
                    <div class="font-bold text-navy" style="font-size: var(--font-size-lg);">342 Orders</div>
                  </div>
                  <div style="background: var(--color-white); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">
                    <div class="text-xs text-muted">Inventory Alerts</div>
                    <div class="font-bold text-navy" style="font-size: var(--font-size-lg); color: var(--color-blue);">All Stocked</div>
                  </div>
                </div>

                <div style="background: var(--color-white); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">
                  <div class="text-xs font-semibold text-navy mb-2">Automated Ledger & Credit Tracking</div>
                  <div style="width: 100%; height: 6px; background: var(--color-bg-muted); border-radius: 3px; overflow: hidden;">
                    <div style="width: 84%; height: 100%; background: var(--color-blue); border-radius: 3px;"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- 3 Supporting Cards Grid -->
          <div class="grid grid--3 gap-6">
            
            <!-- 2. TRANSPORT MANAGEMENT -->
            <div class="card flex flex-col justify-between">
              <div>
                <span class="badge badge--navy mb-3">TRANSPORT & OPERATIONS</span>
                <h3 class="card__title">Transport Management</h3>
                <p class="card__description mb-4">
                  A digital platform for managing transport requests, vehicles, drivers, operations, workflows, and automated reporting.
                </p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="badge badge--outline text-xs">Fleet Tracking</span>
                  <span class="badge badge--outline text-xs">Driver Schedules</span>
                </div>
                <a href="/portfolio" data-link class="card__link">
                  <span>View Solution</span>
                  ${icons.arrowRight('w-4 h-4')}
                </a>
              </div>
            </div>

            <!-- 3. EDUFLOW -->
            <div class="card flex flex-col justify-between">
              <div>
                <span class="badge badge--blue mb-3">EDUCATION</span>
                <h3 class="card__title">EduFlow</h3>
                <p class="card__description mb-4">
                  A school management solution designed to organize students, teachers, classes, attendance, grades, timetables, and administration.
                </p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="badge badge--outline text-xs">Student Records</span>
                  <span class="badge badge--outline text-xs">Attendance & Grades</span>
                </div>
                <a href="/portfolio" data-link class="card__link">
                  <span>View Solution</span>
                  ${icons.arrowRight('w-4 h-4')}
                </a>
              </div>
            </div>

            <!-- 4. SHEGERHEALTH -->
            <div class="card flex flex-col justify-between">
              <div>
                <span class="badge badge--navy mb-3">HEALTHCARE</span>
                <h3 class="card__title">ShegerHealth</h3>
                <p class="card__description mb-4">
                  A digital healthcare platform concept focused on improving healthcare workflows, appointment records, and clinical management.
                </p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="badge badge--outline text-xs">Patient Queue</span>
                  <span class="badge badge--outline text-xs">Project Concept</span>
                </div>
                <a href="/portfolio" data-link class="card__link">
                  <span>View Solution</span>
                  ${icons.arrowRight('w-4 h-4')}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- Desktop Grid Overrides & Mobile Fixes -->
    <style>
      @media (min-width: 1024px) {
        .card--lg > .grid {
          grid-template-columns: 1.2fr 0.8fr !important;
        }
      }
      @media (max-width: 768px) {
        .card--lg {
          padding: var(--space-5) !important;
        }
        .card--lg > .grid {
          gap: var(--space-6) !important;
        }
        .smartbiz-visual {
          display: none !important;
        }
        [aria-labelledby="solutions-heading"] .grid--3 > .card:nth-child(n+3) {
          display: none !important;
        }
      }
    </style>
  `;
}
