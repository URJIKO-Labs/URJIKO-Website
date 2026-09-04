import { icons } from '../common/Icons.js';
import { featuredProjects } from '../../config/projects.js';

/**
 * Featured Projects Section Component
 * Renders real project cards with description, features, and link to dedicated page.
 */
export function renderFeaturedProjects() {
  const projectsHtml = featuredProjects
    .map((project, index) => {
      const accentColors = ['var(--color-blue)', 'var(--color-navy)', 'var(--color-blue)', 'var(--color-navy)'];
      const accent = accentColors[index % 4];

      return `
        <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden;">
          <div class="grid" style="grid-template-columns: 1fr; min-height: 320px;">
            <!-- Content Side -->
            <div class="flex flex-col justify-between p-6 md:p-8">
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="badge badge--navy">${project.badge}</span>
                  <span class="badge badge--blue">${project.statusBadge}</span>
                </div>
                <h3 class="text-navy font-bold mb-2" style="font-size: var(--font-size-xl); line-height: var(--line-height-snug);">
                  ${project.name}
                </h3>
                <p class="text-secondary text-sm mb-4" style="line-height: 1.6; max-width: 40rem;">
                  ${project.description}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  ${project.features.slice(0, 4).map(f => `<span class="badge badge--outline text-xs">${f}</span>`).join('')}
                  ${project.features.length > 4 ? `<span class="badge badge--outline text-xs">+${project.features.length - 4} more</span>` : ''}
                </div>
              </div>
              <div class="flex items-center gap-4">
                <a href="/portfolio/${project.id}" data-link class="btn btn--primary btn--sm">
                  <span>View Project</span>
                  ${icons.arrowRight('w-4 h-4')}
                </a>
                <div class="flex gap-2">
                  ${project.technologies.slice(0, 3).map(t => `<span class="text-xs text-muted">${t}</span>`).join('')}
                </div>
              </div>
            </div>
            <!-- Visual Accent Side -->
            <div style="background: ${accent}; display: flex; align-items: center; justify-content: center; min-height: 160px; position: relative; overflow: hidden;">
              <div style="position: absolute; inset: 0; opacity: 0.1;">
                <div style="position: absolute; top: -20%; right: -20%; width: 60%; height: 60%; border-radius: 50%; background: var(--color-white);"></div>
                <div style="position: absolute; bottom: -30%; left: -10%; width: 50%; height: 50%; border-radius: 50%; background: var(--color-white);"></div>
              </div>
              <div style="position: relative; z-index: 1; text-align: center; padding: var(--space-6);">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--color-white); opacity: 0.9; font-family: monospace; line-height: 1;">${project.number}</div>
                <div style="font-size: var(--font-size-xs); color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.1em; margin-top: var(--space-1);">${project.category}</div>
              </div>
            </div>
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

        <div class="flex flex-col gap-6">
          ${projectsHtml}
        </div>
      </div>
    </section>
  `;
}
