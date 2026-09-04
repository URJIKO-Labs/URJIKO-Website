import { icons } from "../common/Icons.js";
import { featuredProjects } from "../../config/projects.js";

/**
 * Featured Projects Section Component
 * Renders real project cards with description, features, and link to dedicated page.
 */
export function renderFeaturedProjects() {
  const projectsHtml = featuredProjects
    .map((project, index) => {
      const isEven = index % 2 === 0;

      // Custom Dashboard Mockup rendering per project type
      let mockupContent = "";
      if (project.id === "smartbiz") {
        mockupContent = `
          <div style="background: #0F172A; border-radius: var(--radius-lg); padding: var(--space-4); color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1); width: 100%; box-shadow: var(--shadow-lg);">
            <div class="flex items-center justify-between pb-2 mb-3" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <span class="text-xs font-semibold" style="color: #60A5FA;">SmartBiz ERP — POS & Inventory</span>
              <span class="badge badge--blue text-xs">Active POS</span>
            </div>
            <div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 0.75rem;">
              <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Today's Revenue</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: #34D399;">$42,850.00</div>
              </div>
              <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Stock Health</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: #60A5FA;">94% Optimal</div>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); padding: 0.5rem; font-size: 0.75rem;">
              <div class="flex justify-between py-1" style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span>Product A (Retail)</span>
                <span class="font-bold text-white">124 pcs</span>
              </div>
              <div class="flex justify-between py-1">
                <span>Product B (Wholesale)</span>
                <span class="font-bold text-white">98 pcs</span>
              </div>
            </div>
          </div>
        `;
      } else if (project.id === "transport") {
        mockupContent = `
          <div style="background: #0F172A; border-radius: var(--radius-lg); padding: var(--space-4); color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1); width: 100%; box-shadow: var(--shadow-lg);">
            <div class="flex items-center justify-between pb-2 mb-3" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <span class="text-xs font-semibold" style="color: #38BDF8;">Transport & Fleet Dispatch</span>
              <span class="badge badge--navy text-xs">Live Dispatch</span>
            </div>
            <div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 0.75rem;">
              <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Active Vehicles</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: #38BDF8;">18 Vehicles</div>
              </div>
              <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Pending Requests</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: #FBBF24;">5 Approvals</div>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); padding: 0.5rem; font-size: 0.75rem;">
              <div class="flex justify-between py-1" style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span>Route A — Harar -> Dire Dawa</span>
                <span class="font-bold text-emerald-400">On Time</span>
              </div>
              <div class="flex justify-between py-1">
                <span>Route B — City Transit</span>
                <span class="font-bold text-emerald-400">Dispatched</span>
              </div>
            </div>
          </div>
        `;
      } else if (project.id === "eduflow") {
        mockupContent = `
          <div style="background: #0F172A; border-radius: var(--radius-lg); padding: var(--space-4); color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1); width: 100%; box-shadow: var(--shadow-lg);">
            <div class="flex items-center justify-between pb-2 mb-3" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <span class="text-xs font-semibold" style="color: #818CF8;">EduFlow — Academic Portal</span>
              <span class="badge badge--blue text-xs">School Suite</span>
            </div>
            <div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 0.75rem;">
              <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Total Enrolled</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: #818CF8;">1,240 Students</div>
              </div>
              <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Daily Attendance</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: #34D399;">98.2% Present</div>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); padding: 0.5rem; font-size: 0.75rem;">
              <div class="flex justify-between py-1" style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                <span>Grade 11-A Attendance</span>
                <span class="font-bold text-white">Submitted</span>
              </div>
              <div class="flex justify-between py-1">
                <span>Semester 2 Report Cards</span>
                <span class="font-bold text-amber-400">Processing</span>
              </div>
            </div>
          </div>
        `;
      } else {
        mockupContent = `
          <div style="background: #0F172A; border-radius: var(--radius-lg); padding: var(--space-4); color: #FFFFFF; border: 1px solid rgba(255,255,255,0.1); width: 100%; box-shadow: var(--shadow-lg);">
            <div class="flex items-center justify-between pb-2 mb-3" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
              <span class="text-xs font-semibold" style="color: #F43F5E;">ShegerHealth Prototype</span>
              <span class="badge badge--navy text-xs">Concept Demo</span>
            </div>
            <div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 0.75rem;">
              <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Digital Triage</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: #F43F5E;">Active Queue</div>
              </div>
              <div style="background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: var(--radius-sm);">
                <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Record Security</div>
                <div style="font-size: 0.9rem; font-weight: 700; color: #34D399;">Role-Protected</div>
              </div>
            </div>
            <div style="background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); padding: 0.5rem; font-size: 0.75rem;">
              <div class="flex justify-between py-1">
                <span>Workflow Automation</span>
                <span class="font-bold text-emerald-400">Prototype Active</span>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <div class="project-card-row mb-12" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-sm);">
          <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-6); padding: var(--space-6) md:padding: var(--space-8);">
            
            ${
              isEven
                ? `
              <!-- Left Text Content -->
              <div class="flex flex-col justify-between">
                <div>
                  <!-- Subdued Project Number Badge -->
                  <div class="flex items-center gap-3 mb-3">
                    <span style="font-size: 0.85rem; font-weight: 800; color: var(--color-blue); font-family: monospace;">${project.number} / ${project.category.toUpperCase()}</span>
                    <span class="badge badge--navy">${project.badge}</span>
                  </div>

                  <h3 class="text-navy font-bold mb-2" style="font-size: clamp(1.35rem, 2.5vw, 1.75rem); line-height: 1.25;">
                    ${project.name}
                  </h3>

                  <p class="text-secondary text-sm mb-4" style="line-height: 1.6;">
                    ${project.description}
                  </p>

                  <!-- Business Value Highlights -->
                  <div class="mb-4 p-3" style="background: var(--color-bg-light-blue); border-radius: var(--radius-md); border-left: 3px solid var(--color-blue);">
                    <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-navy); text-transform: uppercase; margin-bottom: 0.25rem;">Key Business Value</div>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.2rem; margin: 0; padding: 0;">
                      ${project.businessValue
                        .slice(0, 3)
                        .map(
                          (v) =>
                            `<li style="font-size: 0.8125rem; color: var(--color-text-secondary); display: flex; align-items: center; gap: 0.4rem;">${icons.check("w-3 h-3 text-blue")} <span>${v}</span></li>`,
                        )
                        .join("")}
                    </ul>
                  </div>

                  <!-- Scannable Feature Badges -->
                  <div class="flex flex-wrap gap-2 mb-6">
                    ${project.features
                      .slice(0, 5)
                      .map(
                        (f) =>
                          `<span class="badge badge--outline text-xs">${f}</span>`,
                      )
                      .join("")}
                  </div>
                </div>

                <div class="flex items-center justify-between pt-4" style="border-top: 1px solid var(--color-border-subtle);">
                  <a href="/portfolio/${project.id}" data-link class="btn btn--primary btn--sm">
                    <span>Discuss Your Project</span>
                    ${icons.arrowRight("w-4 h-4")}
                  </a>
                  <div class="flex gap-2">
                    ${project.technologies
                      .slice(0, 3)
                      .map(
                        (t) =>
                          `<span class="text-xs text-muted font-mono">${t}</span>`,
                      )
                      .join("")}
                  </div>
                </div>
              </div>

              <!-- Right Software UI Mockup -->
              <div class="flex items-center justify-center p-2" style="background: var(--color-bg-soft); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
                ${mockupContent}
              </div>
            `
                : `
              <!-- Left Software UI Mockup -->
              <div class="flex items-center justify-center p-2 order-2 md:order-1" style="background: var(--color-bg-soft); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
                ${mockupContent}
              </div>

              <!-- Right Text Content -->
              <div class="flex flex-col justify-between order-1 md:order-2">
                <div>
                  <!-- Subdued Project Number Badge -->
                  <div class="flex items-center gap-3 mb-3">
                    <span style="font-size: 0.85rem; font-weight: 800; color: var(--color-blue); font-family: monospace;">${project.number} / ${project.category.toUpperCase()}</span>
                    <span class="badge badge--navy">${project.badge}</span>
                  </div>

                  <h3 class="text-navy font-bold mb-2" style="font-size: clamp(1.35rem, 2.5vw, 1.75rem); line-height: 1.25;">
                    ${project.name}
                  </h3>

                  <p class="text-secondary text-sm mb-4" style="line-height: 1.6;">
                    ${project.description}
                  </p>

                  <!-- Business Value Highlights -->
                  <div class="mb-4 p-3" style="background: var(--color-bg-light-blue); border-radius: var(--radius-md); border-left: 3px solid var(--color-blue);">
                    <div style="font-size: 0.75rem; font-weight: 700; color: var(--color-navy); text-transform: uppercase; margin-bottom: 0.25rem;">Key Business Value</div>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.2rem; margin: 0; padding: 0;">
                      ${project.businessValue
                        .slice(0, 3)
                        .map(
                          (v) =>
                            `<li style="font-size: 0.8125rem; color: var(--color-text-secondary); display: flex; align-items: center; gap: 0.4rem;">${icons.check("w-3 h-3 text-blue")} <span>${v}</span></li>`,
                        )
                        .join("")}
                    </ul>
                  </div>

                  <!-- Scannable Feature Badges -->
                  <div class="flex flex-wrap gap-2 mb-6">
                    ${project.features
                      .slice(0, 5)
                      .map(
                        (f) =>
                          `<span class="badge badge--outline text-xs">${f}</span>`,
                      )
                      .join("")}
                  </div>
                </div>

                <div class="flex items-center justify-between pt-4" style="border-top: 1px solid var(--color-border-subtle);">
                  <a href="/portfolio/${project.id}" data-link class="btn btn--primary btn--sm">
                    <span>Discuss Your Project</span>
                    ${icons.arrowRight("w-4 h-4")}
                  </a>
                  <div class="flex gap-2">
                    ${project.technologies
                      .slice(0, 3)
                      .map(
                        (t) =>
                          `<span class="text-xs text-muted font-mono">${t}</span>`,
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            `
            }

          </div>
        </div>
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
            Real software systems, business management platforms, and operational tools designed for real business impact.
          </p>
        </div>

        <div class="flex flex-col">
          ${projectsHtml}
        </div>
      </div>
    </section>

    <style>
      @media (min-width: 768px) {
        .project-card-row .grid {
          grid-template-columns: 1fr 1fr !important;
        }
      }
    </style>
  `;
}
