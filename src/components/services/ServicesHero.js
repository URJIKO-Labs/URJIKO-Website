import { icons } from "../common/Icons.js";

/**
 * Services Hero Section
 * Eyebrow: WHAT WE DO
 * Headline: Technology Built Around Your Business.
 */
export function renderServicesHero() {
  return `
    <section class="section section--lg" aria-labelledby="services-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-16); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              WHAT WE DO
            </div>

            <h1 id="services-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Technology Built Around Your Business.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.1875rem); max-width: 38rem; line-height: 1.65;">
              From modern websites to business systems and intelligent software, URJIKO Labs builds practical digital solutions designed around real organizational needs.
            </p>

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

          <!-- Right Column: Services Hero Image -->
          <div class="hero-image-wrapper flex justify-center items-center" style="width: 100%;">
            <img 
              src="${import.meta.env.BASE_URL}images/services_hero.jpg" 
              alt="Ethiopian team collaboration on digital services" 
              class="hero__image"
              style="width: 100%; max-width: 500px; height: auto; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); border: 1px solid var(--color-border);"
            />
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
      @media (max-width: 768px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          gap: var(--space-8) !important;
        }
        section[aria-labelledby="services-hero-title"] .hero-visual-wrapper {
          display: none !important;
        }
        section[aria-labelledby="services-hero-title"] h1 {
          font-size: clamp(1.5rem, 6vw, 2rem) !important;
          line-height: 1.2 !important;
        }
        section[aria-labelledby="services-hero-title"] p {
          font-size: var(--font-size-sm) !important;
        }
        section[aria-labelledby="services-hero-title"] .flex.items-center.justify-between {
          flex-wrap: wrap;
          gap: var(--space-2);
        }
        section[aria-labelledby="services-hero-title"] .text-sm.font-semibold {
          font-size: var(--font-size-xs);
        }
      }
    </style>
  `;
}
