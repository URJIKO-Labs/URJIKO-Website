import { icons } from "../common/Icons.js";

/**
 * Services Hero Section
 * Positioned as a software development studio.
 */
export function renderServicesHero() {
  return `
    <section class="section section--lg" aria-labelledby="services-hero-title" style="padding-top: var(--space-10); padding-bottom: var(--space-12); background: var(--color-white);">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-10);">
          
          <!-- Left Column -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue); font-size: 0.7rem;">
              WHAT WE DO
            </div>

            <h1 id="services-hero-title" class="text-balance mb-4" style="font-size: clamp(2rem, 4.5vw, 3.25rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight); margin-bottom: var(--space-4);">
              Software Development & Digital Product Services
            </h1>

            <p class="text-secondary mb-6 text-balance" style="font-size: clamp(0.95rem, 1.5vw, 1.1rem); max-width: 36rem; line-height: 1.65;">
              URJIKO Labs provides practical software development and digital product services designed around real organizational needs — from modern websites to business management systems and intelligent software.
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

          <!-- Right Column: Product Visual -->
          <div class="flex justify-center items-center" style="width: 100%;">
            <div style="width: 100%; max-width: 480px;">
              <img 
                src="${import.meta.env.BASE_URL}images/project-smartbiz.svg" 
                alt="SmartBiz Suite — business management dashboard showing sales, inventory, and customer metrics" 
                width="800" 
                height="500" 
                loading="eager"
                style="width: 100%; height: auto; border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);"
              >
              <div style="text-align: center; margin-top: var(--space-3);">
                <span class="text-xs text-muted" style="font-size: 0.75rem;">SmartBiz Suite — Product Preview</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          grid-template-columns: 1.1fr 0.9fr !important;
        }
      }
      @media (max-width: 768px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          gap: var(--space-6) !important;
        }
        section[aria-labelledby="services-hero-title"] h1 {
          font-size: clamp(1.5rem, 6vw, 2rem) !important;
        }
      }
    </style>
  `;
}
