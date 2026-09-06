import { renderPortfolioHero } from '../../components/portfolio/PortfolioHero.js';
import { featuredProjects } from '../../config/projects.js';
import { icons } from '../../components/common/Icons.js';
import { renderGlobalCTA } from '../../components/common/CTA.js';

/**
 * URJIKO Labs — Portfolio Page
 * Route: /portfolio
 */
export function renderPortfolioPage() {
  const smartbiz = featuredProjects.find((p) => p.id === 'smartbiz');
  const otherProjects = featuredProjects.filter((p) => p.id !== 'smartbiz');

  return `
    ${renderPortfolioHero()}
    
    <!-- Filter Section -->
    <section class="section" style="padding-top: var(--space-8); padding-bottom: var(--space-4); background: var(--color-bg-soft);">
      <div class="container flex justify-between items-center flex-wrap gap-4">
        <h2 style="font-size: 1.25rem; font-weight: 600; color: var(--color-navy); margin: 0;">Explore by Category</h2>
        <div class="flex flex-wrap gap-2">
          <button class="btn btn--outline btn--sm" style="background: var(--color-white);">All Projects</button>
          <button class="btn btn--outline btn--sm" style="background: var(--color-white); border-color: transparent;">Business</button>
          <button class="btn btn--outline btn--sm" style="background: var(--color-white); border-color: transparent;">Transport</button>
          <button class="btn btn--outline btn--sm" style="background: var(--color-white); border-color: transparent;">Education</button>
          <button class="btn btn--outline btn--sm" style="background: var(--color-white); border-color: transparent;">Healthcare</button>
        </div>
      </div>
    </section>

    <!-- Featured Case Study (SmartBiz) -->
    <section class="section" style="padding-top: var(--space-6); padding-bottom: var(--space-10); background: var(--color-bg-soft);">
      <div class="container">
        <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-xl); box-shadow: var(--shadow-md); overflow: hidden;">
          <div class="grid" style="grid-template-columns: 1fr; @media(min-width: 900px) { grid-template-columns: 1.2fr 1fr; }">
            
            <div style="padding: var(--space-8); display: flex; flex-direction: column; justify-content: center;">
              <div class="flex items-center gap-2 mb-4">
                <span class="badge badge--blue">BUSINESS ERP</span>
                <span class="badge badge--outline text-xs">Product Preview</span>
              </div>
              
              <h3 style="font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 700; color: var(--color-navy); line-height: 1.15; margin-bottom: var(--space-4);">
                ${smartbiz.name}
              </h3>
              
              <p style="font-size: 1.1rem; color: var(--color-navy); font-weight: 500; margin-bottom: var(--space-4);">
                Centralized sales, stock, customers, and reporting.
              </p>
              
              <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: var(--space-6);">
                ${smartbiz.description}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-6">
                ${smartbiz.features
                  .slice(0, 4)
                  .map(
                    (f) =>
                      `<span class="badge badge--outline text-xs">${f}</span>`,
                  )
                  .join('')}
              </div>
              
              <a href="/portfolio/smartbiz" data-link class="btn btn--primary" style="align-self: flex-start;">
                Read the case study
              </a>
            </div>
            
            <div style="background: var(--color-bg-light-blue); padding: var(--space-6); display: flex; align-items: center; justify-content: center;">
              <img src="${import.meta.env.BASE_URL}images/project-smartbiz.svg" alt="SmartBiz" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-lg);">
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Project Grid -->
    <section class="section" style="padding-top: var(--space-6); padding-bottom: var(--space-12); background: var(--color-bg-soft);">
      <div class="container">
        <div class="grid grid--2 gap-6">
          ${otherProjects
            .map(
              (project) => `
            <div class="card flex flex-col" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-sm); transition: transform 0.2s, box-shadow 0.2s;">
              <div style="background: var(--color-bg-light-blue); padding: var(--space-4); border-bottom: 1px solid var(--color-border-subtle);">
                <img src="${import.meta.env.BASE_URL}images/project-${project.id}.svg" alt="${project.name}" style="width: 100%; border-radius: var(--radius-sm); border: 1px solid rgba(0,0,0,0.05); box-shadow: var(--shadow-sm);">
              </div>
              <div style="padding: var(--space-6); flex: 1; display: flex; flex-direction: column;">
                <div class="flex items-center gap-2 mb-3">
                  <span class="badge badge--outline text-xs">${project.category.toUpperCase()}</span>
                </div>
                <h3 class="text-navy font-bold" style="font-size: 1.35rem; margin-bottom: var(--space-2);">${project.name}</h3>
                <p class="text-secondary mb-5" style="font-size: 0.95rem; line-height: 1.6; flex: 1;">${project.tagline}</p>
                <div class="flex flex-wrap gap-1.5 mb-5">
                  ${project.features
                    .slice(0, 3)
                    .map(
                      (f) =>
                        `<span class="badge badge--outline text-xs">${f}</span>`,
                    )
                    .join('')}
                </div>
                <a href="/portfolio/${project.id}" data-link class="btn btn--outline btn--sm" style="align-self: flex-start;">
                  View case study
                </a>
              </div>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- Capabilities Proof -->
    <section class="section" style="padding-top: var(--space-10); padding-bottom: var(--space-12); background: var(--color-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        <h2 class="text-center" style="font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-8);">Capabilities Demonstrated</h2>
        
        <div class="grid grid--3 gap-6">
          
          <div style="padding: var(--space-6); background: var(--color-bg-soft); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <div style="color: var(--color-blue); margin-bottom: var(--space-3);">${icons.barChart('w-6 h-6')}</div>
            <h4 style="font-size: 1.1rem; font-weight: 600; color: var(--color-navy); margin-bottom: var(--space-2);">Dashboards & Reporting</h4>
            <p style="font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: var(--space-3); line-height: 1.5;">Real-time business intelligence and operational oversight.</p>
            <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-navy);">Demonstrated in:</div>
            <div class="flex gap-2 mt-2">
              <span class="badge badge--outline text-xs">SmartBiz ERP</span>
              <span class="badge badge--outline text-xs">Transport Management</span>
            </div>
          </div>

          <div style="padding: var(--space-6); background: var(--color-bg-soft); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <div style="color: var(--color-blue); margin-bottom: var(--space-3);">${icons.layers('w-6 h-6')}</div>
            <h4 style="font-size: 1.1rem; font-weight: 600; color: var(--color-navy); margin-bottom: var(--space-2);">Role-Based Workflows</h4>
            <p style="font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: var(--space-3); line-height: 1.5;">Complex multi-user permissions, approvals, and dispatches.</p>
            <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-navy);">Demonstrated in:</div>
            <div class="flex gap-2 mt-2">
              <span class="badge badge--outline text-xs">Transport Management</span>
              <span class="badge badge--outline text-xs">EduFlow</span>
            </div>
          </div>

          <div style="padding: var(--space-6); background: var(--color-bg-soft); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <div style="color: var(--color-blue); margin-bottom: var(--space-3);">${icons.database('w-6 h-6')}</div>
            <h4 style="font-size: 1.1rem; font-weight: 600; color: var(--color-navy); margin-bottom: var(--space-2);">Data Entry & Forms</h4>
            <p style="font-size: 0.95rem; color: var(--color-text-secondary); margin-bottom: var(--space-3); line-height: 1.5;">Intelligent validation, file management, and record creation.</p>
            <div style="font-size: 0.8rem; font-weight: 600; color: var(--color-navy);">Demonstrated in:</div>
            <div class="flex gap-2 mt-2">
              <span class="badge badge--outline text-xs">EduFlow</span>
              <span class="badge badge--outline text-xs">ShegerHealth</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    ${renderGlobalCTA({
      title: 'Have a workflow that is difficult to manage?',
      description:
        'Tell us what currently happens, and we will help you map the right digital solution.',
      primaryBtnLabel: 'Discuss your workflow',
      primaryBtnPath: '/contact',
      secondaryBtnLabel: 'View services',
      secondaryBtnPath: '/services',
    })}
    
    <style>
      @media (min-width: 900px) {
        .section .container > .grid {
          grid-template-columns: 1.2fr 1fr;
        }
      }
    </style>
  `;
}
