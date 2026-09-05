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

        <div class="grid grid--2 gap-6">
          
          <!-- 1. SMARTBIZ -->
          <div class="card card--project flex flex-col justify-between">
            <div>
              <img src="/images/project-smartbiz.svg" alt="SmartBiz Suite dashboard showing sales, inventory, and revenue metrics" width="800" height="500" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-sm); margin-bottom: var(--space-4); border: 1px solid var(--color-border-subtle);">
              <span class="badge badge--blue mb-3">BUSINESS</span>
              <h3 class="card__title">SmartBiz Suite</h3>
              <p class="card__description mb-4">
                A business management solution for sales, inventory, customers, credit, and daily operations.
              </p>
            </div>
            <div>
              <a href="/portfolio/smartbiz" data-link class="card__link">
                <span>View Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- 2. TRANSPORT MANAGEMENT -->
          <div class="card card--project flex flex-col justify-between">
            <div>
              <img src="/images/project-transport.svg" alt="Transport Management System dashboard showing fleet status and dispatch tracking" width="800" height="500" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-sm); margin-bottom: var(--space-4); border: 1px solid var(--color-border-subtle);">
              <span class="badge badge--navy mb-3">TRANSPORT</span>
              <h3 class="card__title">Transport Management</h3>
              <p class="card__description mb-4">
                A platform for managing transport requests, vehicles, drivers, and reporting.
              </p>
            </div>
            <div>
              <a href="/portfolio/transport" data-link class="card__link">
                <span>View Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- 3. EDUFLOW -->
          <div class="card card--project flex flex-col justify-between">
            <div>
              <img src="/images/project-eduflow.svg" alt="EduFlow school management dashboard showing student enrollment and attendance rates" width="800" height="500" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-sm); margin-bottom: var(--space-4); border: 1px solid var(--color-border-subtle);">
              <span class="badge badge--blue mb-3">EDUCATION</span>
              <h3 class="card__title">EduFlow</h3>
              <p class="card__description mb-4">
                A school management solution for students, teachers, attendance, grades, and administration.
              </p>
            </div>
            <div>
              <a href="/portfolio/eduflow" data-link class="card__link">
                <span>View Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- 4. SHEGERHEALTH -->
          <div class="card card--project flex flex-col justify-between">
            <div>
              <img src="/images/project-shegerhealth.svg" alt="ShegerHealth healthcare platform showing patient records and clinical workflow modules" width="800" height="500" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-sm); margin-bottom: var(--space-4); border: 1px solid var(--color-border-subtle);">
              <span class="badge badge--navy mb-3">HEALTHCARE</span>
              <h3 class="card__title">ShegerHealth</h3>
              <p class="card__description mb-4">
                A healthcare platform concept for workflows, patient records, and clinical management.
              </p>
            </div>
            <div>
              <a href="/portfolio/shegerhealth" data-link class="card__link">
                <span>View Project</span>
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
        [aria-labelledby="solutions-heading"] .grid--2 {
          grid-template-columns: 1fr !important;
          gap: var(--space-4) !important;
        }
      }
    </style>
  `;
}
