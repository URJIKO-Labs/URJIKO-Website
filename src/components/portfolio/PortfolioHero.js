import { icons } from "../common/Icons.js";

/**
 * Portfolio Hero Section
 * Clean, premium hero communicating URJIKO's project portfolio.
 */
export function renderPortfolioHero() {
  return `
    <section class="section" aria-labelledby="portfolio-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-12); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-10);">

          <!-- Left: Copy -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              PORTFOLIO
            </div>

            <h1 id="portfolio-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.5rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Software Built to Solve Real&nbsp;Problems.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.125rem); max-width: 36rem; line-height: 1.65;">
              Explore selected software, business systems, and digital experiences developed by URJIKO Labs for organizations across business, education, transport, and healthcare.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Request a Demo</span>
                ${icons.arrowRight("w-4 h-4")}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>View Our Solutions</span>
              </a>
            </div>
          </div>

          <!-- Right: Portfolio Hero Image -->
          <div class="hero-image-wrapper flex justify-center items-center" style="width: 100%;">
            <img 
              src="${import.meta.env.BASE_URL}src/assets/images/portfolio_hero.jpg" 
              alt="URJIKO Labs project portfolio showcase" 
              class="hero__image"
              style="width: 100%; max-width: 460px; height: auto; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); border: 1px solid var(--color-border);"
            />
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="portfolio-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
      @media (max-width: 768px) {
        section[aria-labelledby="portfolio-hero-title"] .container > .grid {
          gap: var(--space-8) !important;
        }
      }
    </style>
  `;
}
