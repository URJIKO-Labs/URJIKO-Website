import { companyConfig } from "../../config/company.js";
import { icons } from "../common/Icons.js";
import { featuredProjects } from "../../config/projects.js";
import { renderProjectCover } from "../portfolio/ProjectCover.js";

/**
 * Hero Section for URJIKO Labs Home Page
 *
 * Clean white background with product visual and clear messaging.
 */
export function renderHero() {
  const smartbiz = featuredProjects.find((p) => p.id === 'smartbiz');
  
  return `
    <section class="section home-hero" aria-labelledby="hero-title" style="
      padding-top: clamp(4rem, 7vw, 6rem);
      padding-bottom: clamp(4rem, 7vw, 6rem);
      background: var(--color-white);
      overflow: hidden;
    ">
      <div class="container">
        <div class="home-hero__grid" style="
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-8);
          align-items: center;
        ">
          
          <!-- Text Content -->
          <div class="home-hero__content" style="max-width: 36rem;">
            <!-- Eyebrow -->
            <div class="badge badge--blue mb-4" style="
              display: inline-flex;
              font-size: 0.7rem;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: var(--letter-spacing-wider);
              padding: 0.35rem 0.9rem;
            ">
              Software Development Studio
            </div>

            <!-- Headline -->
            <h1 id="hero-title" class="text-balance mb-4" style="
              font-size: clamp(2rem, 4.5vw, 3.25rem);
              line-height: 1.15;
              font-weight: 800;
              color: var(--color-navy);
              letter-spacing: var(--letter-spacing-tight);
              margin-bottom: var(--space-4);
            ">
              We Build Practical Software Systems for Growing Organizations
            </h1>
            
            <p class="mb-4" style="font-size: 1.1rem; font-weight: 600; color: var(--color-blue);">
              For transport operators, clinics, schools, and trading businesses.
            </p>

            <!-- Description -->
            <p class="mb-6 text-balance" style="
              font-size: clamp(0.95rem, 1.5vw, 1.1rem);
              max-width: 32rem;
              line-height: 1.65;
              color: var(--color-text-secondary);
              margin-bottom: var(--space-6);
            ">
              ${companyConfig.shortDescription}
            </p>

            <!-- Actions -->
            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Project</span>
                ${icons.arrowRight("w-4 h-4")}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>View Our Solutions</span>
              </a>
            </div>
          </div>

          <!-- Product Visual -->
          <div class="home-hero__visual" style="
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 320px;
          ">
            <div style="width: 100%; max-width: 560px; height: 100%;">
              ${renderProjectCover(smartbiz)}
            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        .home-hero__grid {
          grid-template-columns: 1fr 1fr !important;
          gap: var(--space-10) !important;
        }
        .home-hero__content {
          order: 1;
        }
        .home-hero__visual {
          order: 2;
        }
      }
      @media (max-width: 768px) {
        .home-hero__visual {
          min-height: 240px !important;
        }
      }
    </style>
  `;
}
