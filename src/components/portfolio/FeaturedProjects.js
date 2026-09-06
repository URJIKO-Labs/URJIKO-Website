import { icons } from "../common/Icons.js";
import { featuredProjects } from "../../config/projects.js";

/**
 * Featured Projects Section Component
 * Renders project cards with image area, description, and link to dedicated page.
 */
export function renderFeaturedProjects() {
  const projectsHtml = featuredProjects
    .map((project, index) => {
      const isEven = index % 2 === 0;

      return `
        <article class="project-card-row" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-xl); box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 2.5rem;">
          <div class="project-card-row__inner" style="display: grid; grid-template-columns: 1fr; min-height: 400px;">
            
            <!-- Image Area -->
            <div class="project-card-row__image" style="background: var(--color-bg-soft); display: flex; align-items: center; justify-content: center; padding: var(--space-6); min-height: 280px;">
              <div style="text-align: center; color: var(--color-muted);">
                <div style="font-size: 3rem; margin-bottom: 0.5rem;">${icons.code("w-10 h-10 text-blue opacity-30")}</div>
                <span style="font-size: 0.85rem;">Project Image</span>
              </div>
            </div>

            <!-- Text Content -->
            <div class="project-card-row__content" style="padding: var(--space-6); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <!-- Project Number & Badge -->
                <div class="flex items-center gap-3 mb-3">
                  <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-blue); font-family: monospace;">${project.number}</span>
                  <span class="badge badge--blue">${project.category}</span>
                </div>

                <!-- Project Name -->
                <h3 class="text-navy font-bold mb-2" style="font-size: clamp(1.25rem, 2.5vw, 1.5rem); line-height: 1.3;">
                  ${project.name}
                </h3>

                <!-- Description -->
                <p class="text-secondary" style="font-size: 0.95rem; line-height: 1.6; margin-bottom: var(--space-4);">
                  ${project.description}
                </p>

                <!-- Key Features -->
                <div class="flex flex-wrap gap-2" style="margin-bottom: var(--space-4);">
                  ${project.features
                    .slice(0, 3)
                    .map(
                      (f) =>
                        `<span class="badge badge--outline text-xs">${f}</span>`,
                    )
                    .join("")}
                </div>
              </div>

              <!-- CTA -->
              <div style="padding-top: var(--space-4); border-top: 1px solid var(--color-border-subtle);">
                <a href="/portfolio/${project.id}" data-link class="btn btn--primary btn--sm">
                  <span>View Project</span>
                  ${icons.arrowRight("w-4 h-4")}
                </a>
              </div>
            </div>

          </div>
        </article>
      `;
    })
    .join("");

  return `
    <section class="section" aria-labelledby="featured-projects-heading" style="background: var(--color-bg-soft);">
      <div class="container">
        <div class="section-heading">
          <span class="section-heading__label">FEATURED SOFTWARE</span>
          <h2 id="featured-projects-heading" class="section-heading__title">Systems We've Built</h2>
          <p class="section-heading__subtitle text-balance">
            Selected software, business systems, and digital experiences designed and developed by URJIKO Labs.
          </p>
        </div>

        <div class="flex flex-col">
          ${projectsHtml}
        </div>
      </div>
    </section>

    <style>
      @media (min-width: 768px) {
        .project-card-row__inner {
          grid-template-columns: 1fr 1fr !important;
        }
        .project-card-row__image {
          order: ${1};
        }
        .project-card-row:nth-child(even) .project-card-row__image {
          order: ${2};
        }
      }
    </style>
  `;
}
