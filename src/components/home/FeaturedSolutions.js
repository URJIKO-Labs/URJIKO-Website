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

        <div class="grid grid--3 gap-6">
          
          <!-- 1. SMARTBIZ -->
          <div class="card flex flex-col justify-between">
            <div>
              <span class="badge badge--blue mb-3">BUSINESS</span>
              <h3 class="card__title">SmartBiz Suite</h3>
              <p class="card__description mb-4">
                A business management solution for sales, inventory, customers, credit, and daily operations.
              </p>
            </div>
            <div>
              <a href="/portfolio" data-link class="card__link">
                <span>View Solution</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- 2. TRANSPORT MANAGEMENT -->
          <div class="card flex flex-col justify-between">
            <div>
              <span class="badge badge--navy mb-3">TRANSPORT</span>
              <h3 class="card__title">Transport Management</h3>
              <p class="card__description mb-4">
                A platform for managing transport requests, vehicles, drivers, and reporting.
              </p>
            </div>
            <div>
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
                A school management solution for students, teachers, attendance, grades, and administration.
              </p>
            </div>
            <div>
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
                A healthcare platform concept for workflows, patient records, and clinical management.
              </p>
            </div>
            <div>
              <a href="/portfolio" data-link class="card__link">
                <span>View Solution</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Mobile Fixes -->
    <style>
      @media (max-width: 768px) {
        [aria-labelledby="solutions-heading"] .grid--3 {
          grid-template-columns: 1fr !important;
          gap: var(--space-4) !important;
        }
      }
    </style>
  `;
}
