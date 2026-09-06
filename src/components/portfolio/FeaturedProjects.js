import { icons } from "../common/Icons.js";
import { featuredProjects } from "../../config/projects.js";

/**
 * Featured Projects Section Component
 * Renders project cards with real SVG visuals, honest descriptions, and status labels.
 */
export function renderFeaturedProjects() {
  const projectVisuals = {
    smartbiz: `${import.meta.env.BASE_URL}images/project-smartbiz.svg`,
    transport: `${import.meta.env.BASE_URL}images/project-transport.svg`,
    eduflow: `${import.meta.env.BASE_URL}images/project-eduflow.svg`,
    shegerhealth: `${import.meta.env.BASE_URL}images/project-shegerhealth.svg`,
  };

  const projectStatuses = {
    smartbiz: { label: "Product Preview", class: "badge--blue" },
    transport: { label: "Product Preview", class: "badge--navy" },
    eduflow: { label: "MVP", class: "badge--blue" },
    shegerhealth: { label: "Demo", class: "badge--navy" },
  };

  const projectsHtml = featuredProjects
    .map((project, index) => {
      const isEven = index % 2 === 0;
      const visual = projectVisuals[project.id];
      const status = projectStatuses[project.id];

      return `
        <article class="project-card-row" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-xl); box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 2rem;">
          <div class="project-card-row__inner" style="display: grid; grid-template-columns: 1fr;">
            
            <!-- Image Area -->
            <div class="project-card-row__image" style="background: var(--color-bg-soft); display: flex; align-items: center; justify-content: center; padding: var(--space-5); min-height: 260px;">
              ${visual ? `
                <img 
                  src="${visual}" 
                  alt="${project.name} — ${project.tagline}" 
                  width="800" 
                  height="500" 
                  loading="lazy"
                  style="width: 100%; max-width: 480px; height: auto; border-radius: var(--radius-md);"
                >
              ` : `
                <div style="text-align: center; color: var(--color-muted);">
                  <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${icons.code("w-8 h-8 text-blue opacity-30")}</div>
                  <span style="font-size: 0.8rem;">Project Preview</span>
                </div>
              `}
            </div>

            <!-- Text Content -->
            <div class="project-card-row__content" style="padding: var(--space-5); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <!-- Status & Category -->
                <div class="flex items-center gap-2 mb-3">
                  ${status ? `<span class="badge ${status.class} text-xs">${status.label}</span>` : ''}
                  <span class="badge badge--outline text-xs">${project.category}</span>
                </div>

                <!-- Project Name -->
                <h3 class="text-navy font-bold mb-2" style="font-size: clamp(1.15rem, 2.5vw, 1.35rem); line-height: 1.3;">
                  ${project.name}
                </h3>

                <!-- Tagline -->
                <p class="text-secondary mb-3" style="font-size: 0.9rem; line-height: 1.5; font-weight: 500; color: var(--color-navy);">
                  ${project.tagline}
                </p>

                <!-- Description -->
                <p class="text-secondary" style="font-size: 0.85rem; line-height: 1.6; margin-bottom: var(--space-3);">
                  ${project.description}
                </p>

                <!-- Key Features -->
                <div class="flex flex-wrap gap-1.5" style="margin-bottom: var(--space-3);">
                  ${project.features
                    .slice(0, 4)
                    .map(
                      (f) =>
                        `<span class="badge badge--outline text-xs">${f}</span>`,
                    )
                    .join("")}
                </div>
              </div>

              <!-- CTA -->
              <div style="padding-top: var(--space-3); border-top: 1px solid var(--color-border-subtle);">
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
    <section class="section" aria-labelledby="featured-projects-heading" style="background: var(--color-bg-soft); border-top: 1px solid var(--color-border-subtle);">
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
          order: 1;
        }
        .project-card-row:nth-child(even) .project-card-row__image {
          order: 2;
        }
      }
    </style>
  `;
}
