import { secondaryProjects } from "../../config/projects.js";

/**
 * URJIKO Labs — Secondary Projects Component
 * Renders additional projects and digital experiences in a compact, secondary visual hierarchy.
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
        <div class="grid grid--3">
          ${secondaryProjects
            .map(
              (project) => `
            <article class="card flex flex-col" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-5);">
              
              <!-- Clean Product UI Mockup Header -->
              <div class="mb-4 secondary-placeholder" style="height: 120px; background-color: #0F172A; border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-md); padding: 0.65rem; color: #FFFFFF; display: flex; flex-direction: column; justify-between;" aria-hidden="true">
                <div class="flex items-center justify-between pb-1" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                  <span class="text-xs font-semibold" style="color: #60A5FA;">${project.name}</span>
                  <span class="badge badge--blue text-xs" style="font-size: 0.6rem; padding: 0.1rem 0.35rem;">Preview</span>
                </div>
                <div class="flex items-center justify-between" style="font-size: 0.7rem; color: rgba(255,255,255,0.7); margin-top: 0.5rem;">
                  <span>${project.category}</span>
                  <span style="color: #93C5FD; font-weight: 600;">Preview</span>
                </div>
              </div>

              <!-- Category Badge -->
              <div class="mb-3">
                <span class="badge badge--outline">${project.category}</span>
              </div>

              <!-- Project Title -->
              <h3 class="text-navy font-bold mb-2" style="font-size: var(--font-size-lg); line-height: var(--line-height-snug);">
                ${project.name}
              </h3>

              <!-- Project Description -->
              <p class="text-secondary text-sm mb-4 flex-1" style="line-height: var(--line-height-normal);">
                ${project.description}
              </p>

              <!-- Capabilities -->
              <div class="flex flex-wrap gap-2 mt-auto">
                ${project.capabilities
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
        .secondary-placeholder {
          height: 60px !important;
        }
        [aria-labelledby="secondary-projects-heading"] .card {
          padding: var(--space-4) !important;
        }
        [aria-labelledby="secondary-projects-heading"] .card p {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    </style>
  `;
}
