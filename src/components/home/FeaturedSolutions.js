import { icons } from '../common/Icons.js';

/**
 * Featured Solutions Section
 * Shows real project cards with actual product visuals and status labels.
 */
export function renderFeaturedSolutions() {
  return `
    <section class="section bg-soft" aria-labelledby="solutions-heading" style="border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading">
          <span class="section-heading__label">Featured Work</span>
          <h2 id="solutions-heading" class="section-heading__title">Solutions Built for Real-World Problems</h2>
          <p class="section-heading__subtitle text-balance">
            Explore selected software systems designed to address real operational challenges across business, education, transport, and healthcare.
          </p>
        </div>

        <div class="grid grid--2 gap-6">
          
          <!-- 1. SMARTBIZ -->
          <div class="card card--project flex flex-col" style="overflow: hidden; border: 1px solid var(--color-border); box-shadow: 0 10px 25px rgba(6, 36, 92, 0.05); transition: transform 0.2s, box-shadow 0.2s; border-radius: var(--radius-xl);">
            <div style="background: var(--color-bg-soft); padding: var(--space-4); border-bottom: 1px solid var(--color-border-subtle);">
              <img src="${import.meta.env.BASE_URL}images/project-smartbiz.svg" alt="SmartBiz Suite dashboard showing sales, inventory, and revenue metrics" width="800" height="500" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            </div>
            <div style="padding: var(--space-6); flex: 1; display: flex; flex-direction: column;">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge badge--blue">BUSINESS</span>
                <span class="badge badge--outline text-xs">Active</span>
              </div>
              <h3 class="card__title text-navy font-bold" style="font-size: 1.35rem; margin-bottom: var(--space-2);">SmartBiz Suite</h3>
              <p class="card__description text-secondary mb-5" style="font-size: 1rem; line-height: 1.6; flex: 1;">
                A business management platform for sales, inventory, customers, credit tracking, and daily operations — designed for growing businesses.
              </p>
              <a href="/portfolio/smartbiz" data-link class="card__link btn btn--outline btn--sm" style="align-self: flex-start;">
                <span>View Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- 2. TRANSPORT MANAGEMENT -->
          <div class="card card--project flex flex-col" style="overflow: hidden; border: 1px solid var(--color-border); box-shadow: 0 10px 25px rgba(6, 36, 92, 0.05); transition: transform 0.2s, box-shadow 0.2s; border-radius: var(--radius-xl);">
            <div style="background: var(--color-bg-soft); padding: var(--space-4); border-bottom: 1px solid var(--color-border-subtle);">
              <img src="${import.meta.env.BASE_URL}images/project-transport.svg" alt="Transport Management System dashboard showing fleet status and dispatch tracking" width="800" height="500" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            </div>
            <div style="padding: var(--space-6); flex: 1; display: flex; flex-direction: column;">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge badge--blue">TRANSPORT</span>
                <span class="badge badge--outline text-xs">Active</span>
              </div>
              <h3 class="card__title text-navy font-bold" style="font-size: 1.35rem; margin-bottom: var(--space-2);">Transport Management</h3>
              <p class="card__description text-secondary mb-5" style="font-size: 1rem; line-height: 1.6; flex: 1;">
                A centralized platform for managing transport requests, vehicles, drivers, dispatch operations, and administrative reporting.
              </p>
              <a href="/portfolio/transport" data-link class="card__link btn btn--outline btn--sm" style="align-self: flex-start;">
                <span>View Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- 3. EDUFLOW -->
          <div class="card card--project flex flex-col" style="overflow: hidden; border: 1px solid var(--color-border); box-shadow: 0 10px 25px rgba(6, 36, 92, 0.05); transition: transform 0.2s, box-shadow 0.2s; border-radius: var(--radius-xl);">
            <div style="background: var(--color-bg-soft); padding: var(--space-4); border-bottom: 1px solid var(--color-border-subtle);">
              <img src="${import.meta.env.BASE_URL}images/project-eduflow.svg" alt="EduFlow school management dashboard showing student enrollment and attendance rates" width="800" height="500" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            </div>
            <div style="padding: var(--space-6); flex: 1; display: flex; flex-direction: column;">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge badge--blue">EDUCATION</span>
                <span class="badge badge--outline text-xs">MVP</span>
              </div>
              <h3 class="card__title text-navy font-bold" style="font-size: 1.35rem; margin-bottom: var(--space-2);">EduFlow</h3>
              <p class="card__description text-secondary mb-5" style="font-size: 1rem; line-height: 1.6; flex: 1;">
                A school management solution for organizing students, teachers, attendance, grades, timetables, and administration.
              </p>
              <a href="/portfolio/eduflow" data-link class="card__link btn btn--outline btn--sm" style="align-self: flex-start;">
                <span>View Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
            </div>
          </div>

          <!-- 4. SHEGERHEALTH -->
          <div class="card card--project flex flex-col" style="overflow: hidden; border: 1px solid var(--color-border); box-shadow: 0 10px 25px rgba(6, 36, 92, 0.05); transition: transform 0.2s, box-shadow 0.2s; border-radius: var(--radius-xl);">
            <div style="background: var(--color-bg-soft); padding: var(--space-4); border-bottom: 1px solid var(--color-border-subtle);">
              <img src="${import.meta.env.BASE_URL}images/project-shegerhealth.svg" alt="ShegerHealth healthcare platform showing patient records and clinical workflow modules" width="800" height="500" loading="lazy" style="width: 100%; height: auto; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            </div>
            <div style="padding: var(--space-6); flex: 1; display: flex; flex-direction: column;">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge badge--blue">HEALTHCARE</span>
                <span class="badge badge--outline text-xs">Demo</span>
              </div>
              <h3 class="card__title text-navy font-bold" style="font-size: 1.35rem; margin-bottom: var(--space-2);">ShegerHealth</h3>
              <p class="card__description text-secondary mb-5" style="font-size: 1rem; line-height: 1.6; flex: 1;">
                A healthcare platform concept for structured workflows, patient records, and clinical management tools.
              </p>
              <a href="/portfolio/shegerhealth" data-link class="card__link btn btn--outline btn--sm" style="align-self: flex-start;">
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
