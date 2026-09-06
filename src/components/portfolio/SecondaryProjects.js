import { secondaryProjects } from "../../config/projects.js";

/**
 * URJIKO Labs — Secondary Projects Component
 * Renders additional projects with clean, compact cards.
 */
export function renderSecondaryProjects() {
  return `
    <section class="section bg-white" aria-labelledby="secondary-projects-heading" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        
        <!-- Section Heading -->
        <div class="section-heading">
          <span class="section-heading__label">ADDITIONAL WORK</span>
          <h2 id="secondary-projects-heading" class="section-heading__title">More Projects & Digital Experiences</h2>
          <p class="section-heading__subtitle text-balance">
            Additional websites and digital solutions developed by URJIKO Labs.
          </p>
        </div>

        <!-- Secondary Projects Grid -->
        <div class="grid grid--3 gap-5">
          ${secondaryProjects
            .map(
              (project) => `
            <article class="card flex flex-col" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-5);">
              
              <!-- Clean Preview Header -->
              <div class="mb-4" style="height: 100px; background-color: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); padding: 0.75rem; display: flex; flex-direction: column; justify-content: space-between;">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-navy">${project.name}</span>
                  <span class="badge badge--outline text-xs" style="font-size: 0.6rem; padding: 0.1rem 0.35rem;">Preview</span>
                </div>
                <div class="flex items-center justify-between" style="font-size: 0.7rem;">
                  <span class="text-muted">${project.category}</span>
                  <span class="text-xs font-semibold" style="color: var(--color-blue);">Website</span>
                </div>
              </div>

              <!-- Category Badge -->
              <div class="mb-2">
                <span class="badge badge--outline text-xs">${project.category}</span>
              </div>

              <!-- Project Title -->
              <h3 class="text-navy font-bold mb-2" style="font-size: var(--font-size-md); line-height: 1.3;">
                ${project.name}
              </h3>

              <!-- Project Description -->
              <p class="text-secondary text-sm mb-4 flex-1" style="line-height: 1.5;">
                ${project.description}
              </p>

              <!-- Capabilities -->
              <div class="flex flex-wrap gap-1.5 mt-auto">
                ${project.capabilities
                  .slice(0, 4)
                  .map(
                    (capability) => `
                  <span class="badge badge--outline text-xs">${capability}</span>
                `,
                  )
                  .join("")}
              </div>

            </article>
          `,
            )
            .join("")}
        </div>

      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        [aria-labelledby="secondary-projects-heading"] .grid--3 {
          grid-template-columns: 1fr !important;
          gap: var(--space-4) !important;
        }
        [aria-labelledby="secondary-projects-heading"] .card {
          padding: var(--space-4) !important;
        }
      }
    </style>
  `;
}
