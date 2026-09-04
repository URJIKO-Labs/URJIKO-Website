import { icons } from '../common/Icons.js';
import { featuredProjects } from '../../config/projects.js';

/**
 * Featured Projects Section Component
 * Renders compact preview cards for each project with link to dedicated page.
 */
export function renderFeaturedProjects() {
  const projectsHtml = featuredProjects
    .map((project, index) => {
      const bg = index % 2 === 0 ? 'var(--color-white)' : 'var(--color-bg-soft)';

      return `
        <div class="card flex flex-col justify-between" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-6);">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="badge badge--navy">${project.badge}</span>
              <span class="badge badge--blue">${project.statusBadge}</span>
            </div>
            <h3 class="text-navy font-bold mb-2" style="font-size: var(--font-size-lg); line-height: var(--line-height-snug);">
              ${project.name}
            </h3>
            <p class="text-secondary text-sm mb-4" style="line-height: var(--line-height-normal);">
              ${project.tagline}
            </p>
          </div>
          <div>
            <a href="/portfolio/${project.id}" data-link class="card__link">
              <span>View Project</span>
              ${icons.arrowRight('w-4 h-4')}
            </a>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <section class="section" aria-labelledby="featured-projects-heading" style="background: var(--color-bg-soft);">
      <div class="container">
        <div class="section-heading">
          <span class="section-heading__label">PORTFOLIO</span>
          <h2 id="featured-projects-heading" class="section-heading__title">Our Work</h2>
          <p class="section-heading__subtitle text-balance">
            Selected projects showcasing digital solutions built for real-world problems.
          </p>
        </div>

        <div class="grid grid--2 gap-6">
          ${projectsHtml}
        </div>
      </div>
    </section>
  `;
}
