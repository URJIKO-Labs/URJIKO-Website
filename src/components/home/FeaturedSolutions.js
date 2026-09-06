import { icons } from '../common/Icons.js';
import { featuredProjects } from '../../config/projects.js';
import { renderProjectCover } from '../portfolio/ProjectCover.js';

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
          ${featuredProjects
            .map(
              (project) => `
            <div class="card card--project flex flex-col" style="overflow: hidden; border: 1px solid var(--color-border); box-shadow: 0 10px 25px rgba(6, 36, 92, 0.05); transition: transform 0.2s, box-shadow 0.2s; border-radius: var(--radius-xl);">
              <div style="padding: var(--space-4); border-bottom: 1px solid var(--color-border-subtle);">
                ${renderProjectCover(project, { isSmall: true })}
              </div>
              <div style="padding: var(--space-6); flex: 1; display: flex; flex-direction: column;">
                <div class="flex items-center gap-2 mb-3">
                  <span class="badge badge--blue">${project.category.toUpperCase()}</span>
                  <span class="badge badge--outline text-xs">${project.statusBadge || 'Preview'}</span>
                </div>
                <h3 class="card__title text-navy font-bold" style="font-size: 1.35rem; margin-bottom: var(--space-2);">${project.name}</h3>
                <p class="card__description text-secondary mb-5" style="font-size: 1rem; line-height: 1.6; flex: 1;">
                  ${project.tagline}
                </p>
                <a href="/portfolio/${project.id}" data-link class="card__link btn btn--outline btn--sm" style="align-self: flex-start;">
                  <span>View Project</span>
                  ${icons.arrowRight('w-4 h-4')}
                </a>
              </div>
            </div>
          `,
            )
            .join('')}
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
