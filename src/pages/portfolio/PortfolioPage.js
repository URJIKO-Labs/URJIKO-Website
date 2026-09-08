import { renderPortfolioHero } from '../../components/portfolio/PortfolioHero.js';
import { featuredProjects, secondaryProjects } from '../../config/projects.js';
import { icons } from '../../components/common/Icons.js';
import { renderGlobalCTA } from '../../components/common/CTA.js';
import { renderProjectCover } from '../../components/portfolio/ProjectCover.js';

function renderSecondaryCover(project) {
  const accents = {
    ethiobrew: { color: '#D97706', glow: 'rgba(217, 119, 6, 0.2)' },
    'haramaya-gym': { color: '#059669', glow: 'rgba(5, 150, 105, 0.2)' },
    'abebe-bookstore': { color: '#7C3AED', glow: 'rgba(124, 58, 237, 0.2)' },
  };
  const accent = accents[project.id] || {
    color: '#075DB8',
    glow: 'rgba(7, 93, 184, 0.2)',
  };
  const num = secondaryProjects.indexOf(project) + 1;

  return `
    <div style="background: var(--color-navy); height: 100%; min-height: 140px; display: flex; flex-direction: column; position: relative; overflow: hidden; border-radius: var(--radius-md) var(--radius-md) 0 0;">
      <div style="position: absolute; top: -20%; right: -10%; width: 50%; height: 50%; background: ${accent.color}; opacity: 0.15; filter: blur(50px); border-radius: 50%;"></div>
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 24px 24px;"></div>
      <div style="position: relative; z-index: 1; padding: var(--space-4); display: flex; flex-direction: column; height: 100%; justify-content: space-between;">
        <div class="flex justify-between items-start">
          <div style="font-family: monospace; font-size: 0.85rem; font-weight: 700; color: rgba(255,255,255,0.3);">NO.0${num}</div>
          <div style="width: 10px; height: 10px; border-radius: 50%; background: ${accent.color}; box-shadow: 0 0 8px ${accent.color};"></div>
        </div>
        <div>
          <div style="font-size: 0.7rem; font-weight: 600; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-1);">${project.category}</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--color-white); line-height: 1.15;">${project.name}</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * URJIKO Labs — Portfolio Page
 * Route: /portfolio
 */
export function renderPortfolioPage() {
  const smartbiz = featuredProjects.find((p) => p.id === 'smartbiz');
  const otherProjects = featuredProjects.filter((p) => p.id !== 'smartbiz');

  return `
    ${renderPortfolioHero()}
    
    <!-- Featured Case Study (SmartBiz) -->
    <section class="section" style="padding-top: var(--space-4); padding-bottom: var(--space-8); background: var(--color-bg-soft);">
      <div class="container">
        <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); overflow: hidden;">
          <div class="portfolio-featured-grid">
            
            <div style="padding: var(--space-5); display: flex; flex-direction: column; justify-content: center;">
              <div class="flex items-center gap-2 mb-3">
                <span class="badge badge--blue">BUSINESS ERP</span>
                <span class="badge badge--outline text-xs">Product Preview</span>
              </div>
              
              <h3 style="font-size: clamp(1.4rem, 2.5vw, 1.8rem); font-weight: 700; color: var(--color-navy); line-height: 1.15; margin-bottom: var(--space-3);">
                ${smartbiz.name}
              </h3>
              
              <p style="font-size: 0.95rem; color: var(--color-navy); font-weight: 500; margin-bottom: var(--space-3);">
                Centralized sales, stock, customers, and reporting.
              </p>
              
              <p class="text-secondary" style="font-size: 0.9rem; line-height: 1.55; margin-bottom: var(--space-4);">
                ${smartbiz.description}
              </p>
              
              <div class="flex flex-wrap gap-1.5 mb-4">
                ${smartbiz.features
                  .slice(0, 4)
                  .map(
                    (f) =>
                      `<span class="badge badge--outline text-xs">${f}</span>`,
                  )
                  .join('')}
              </div>
              
              <a href="/portfolio/smartbiz" data-link class="btn btn--primary btn--sm" style="align-self: flex-start;">
                Read the case study
              </a>
            </div>
            
            <div style="padding: var(--space-3); display: flex; align-items: center; justify-content: center;">
              <div style="width: 100%; height: 100%; min-height: 220px; border-radius: var(--radius-md); overflow: hidden;">
                <img src="${import.meta.env.BASE_URL}images/smartbiz-features.png" alt="SmartBiz ERP Features" style="width: 100%; height: 100%; object-fit: cover; display: block;">
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Project Grid -->
    <section class="section" style="padding-top: var(--space-4); padding-bottom: var(--space-8); background: var(--color-bg-soft);">
      <div class="container">
        <div class="portfolio-grid" style="gap: var(--space-4);">
          ${otherProjects
            .map((project) => {
              const projectImages = {
                transport: 'transport-hero.png',
                eduflow: 'eduflow-hero.png',
                shegerhealth: null,
              };
              const img = projectImages[project.id];
              return `
            <div class="card flex flex-col" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden; box-shadow: 0 2px 8px rgba(6, 36, 92, 0.04); transition: transform 0.2s, box-shadow 0.2s;">
              <div style="height: 130px; ${img ? 'overflow: hidden;' : ''}">
                ${
                  img
                    ? `<img src="${import.meta.env.BASE_URL}images/${img}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">`
                    : renderProjectCover(project, {
                        isSmall: true,
                        isFlush: true,
                      })
                }
              </div>
              <div style="padding: var(--space-4); flex: 1; display: flex; flex-direction: column;">
                <span class="badge badge--outline text-xs mb-2" style="align-self: flex-start;">${project.category.toUpperCase()}</span>
                <h3 class="text-navy font-bold" style="font-size: 1rem; margin-bottom: var(--space-1);">${project.name}</h3>
                <p class="text-secondary mb-3" style="font-size: 0.85rem; line-height: 1.5; flex: 1;">${project.tagline}</p>
                <div class="flex flex-wrap gap-1.5 mb-3">
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
          `;
            })
            .join('')}
        </div>
      </div>
    </section>

    

    <!-- Capabilities Proof -->
    <section class="section" style="padding-top: var(--space-8); padding-bottom: var(--space-8); background: var(--color-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        <h2 class="text-center" style="font-size: clamp(1.4rem, 2.5vw, 1.8rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-6);">Capabilities Demonstrated</h2>
        
        <div class="portfolio-cap-grid" style="gap: var(--space-4);">
          
          <div style="padding: var(--space-4); background: var(--color-bg-soft); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
            <div style="color: var(--color-blue); margin-bottom: var(--space-2);">${icons.barChart('w-5 h-5')}</div>
            <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-navy); margin-bottom: var(--space-1);">Dashboards & Reporting</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: var(--space-2); line-height: 1.5;">Real-time business intelligence and operational oversight.</p>
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--color-navy);">Demonstrated in:</div>
            <div class="flex gap-1.5 mt-1.5">
              <span class="badge badge--outline text-xs">SmartBiz ERP</span>
              <span class="badge badge--outline text-xs">Transport Management</span>
            </div>
          </div>

          <div style="padding: var(--space-4); background: var(--color-bg-soft); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
            <div style="color: var(--color-blue); margin-bottom: var(--space-2);">${icons.layers('w-5 h-5')}</div>
            <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-navy); margin-bottom: var(--space-1);">Role-Based Workflows</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: var(--space-2); line-height: 1.5;">Complex multi-user permissions, approvals, and dispatches.</p>
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--color-navy);">Demonstrated in:</div>
            <div class="flex gap-1.5 mt-1.5">
              <span class="badge badge--outline text-xs">Transport Management</span>
              <span class="badge badge--outline text-xs">EduFlow</span>
            </div>
          </div>

          <div style="padding: var(--space-4); background: var(--color-bg-soft); border-radius: var(--radius-md); border: 1px solid var(--color-border-subtle);">
            <div style="color: var(--color-blue); margin-bottom: var(--space-2);">${icons.database('w-5 h-5')}</div>
            <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--color-navy); margin-bottom: var(--space-1);">Data Entry & Forms</h4>
            <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: var(--space-2); line-height: 1.5;">Intelligent validation, file management, and record creation.</p>
            <div style="font-size: 0.75rem; font-weight: 600; color: var(--color-navy);">Demonstrated in:</div>
            <div class="flex gap-1.5 mt-1.5">
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
      .portfolio-featured-grid {
        display: grid;
        grid-template-columns: 1fr;
      }
      .portfolio-grid {
        display: grid;
        grid-template-columns: 1fr;
      }
      .portfolio-more-grid {
        display: grid;
        grid-template-columns: 1fr;
      }
      .portfolio-cap-grid {
        display: grid;
        grid-template-columns: 1fr;
      }
      @media (min-width: 768px) {
        .portfolio-featured-grid {
          grid-template-columns: 1.2fr 1fr;
        }
        .portfolio-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .portfolio-more-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .portfolio-cap-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (min-width: 1024px) {
        .portfolio-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
  `;
}
