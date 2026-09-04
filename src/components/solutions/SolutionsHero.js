import { icons } from "../common/Icons.js";

/**
 * Solutions Hero Section
 * Eyebrow: SOLUTIONS
 * Headline: Practical Software for Real-World Problems.
 * Supporting copy: We design digital systems around the workflows, challenges, and goals of businesses and organizations.
 */
export function renderSolutionsHero() {
  return `
    <section class="section section--lg" aria-labelledby="solutions-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-16); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column: Copy & Actions -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              SOLUTIONS
            </div>

            <h1 id="solutions-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Practical Software for Real-World Problems.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.1875rem); max-width: 38rem; line-height: 1.65;">
              We design digital systems around the workflows, challenges, and goals of businesses and organizations.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Get a Free Consultation</span>
                ${icons.arrowRight("w-4 h-4")}
              </a>
              <a href="/portfolio" data-link class="btn btn--secondary btn--lg">
                <span>Explore Our Work</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Solutions Hero Image -->
          <div class="hero-image-wrapper flex justify-center items-center" style="width: 100%;">
            <img 
              src="${import.meta.env.BASE_URL}src/assets/images/solutions_hero.jpg" 
              alt="Ethiopian business meeting discussing digital solutions" 
              class="hero__image"
              style="width: 100%; max-width: 500px; height: auto; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); border: 1px solid var(--color-border);"
            />
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="solutions-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
      @media (max-width: 768px) {
        section[aria-labelledby="solutions-hero-title"] .container > .grid {
          gap: var(--space-8) !important;
        }
        section[aria-labelledby="solutions-hero-title"] .hero-visual-wrapper {
          display: none !important;
        }
        section[aria-labelledby="solutions-hero-title"] h1 {
          font-size: clamp(1.5rem, 6vw, 2rem) !important;
          line-height: 1.2 !important;
        }
        section[aria-labelledby="solutions-hero-title"] p {
          font-size: var(--font-size-sm) !important;
        }
        section[aria-labelledby="solutions-hero-title"] .flex.items-center.justify-between {
          flex-wrap: wrap;
          gap: var(--space-2);
        }
        section[aria-labelledby="solutions-hero-title"] .text-sm.font-semibold {
          font-size: var(--font-size-xs);
        }
      }
    </style>
  `;
}
