import { icons } from "../common/Icons.js";

export function renderAboutHero() {
  return `
    <section class="section bg-white" aria-labelledby="about-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">
      <div class="container text-center" style="max-width: 56rem;">
        <h1 id="about-hero-title" class="text-balance mb-6" style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight); line-height: 1.1;">
          Technology With a Purpose.
        </h1>
        <p class="text-secondary text-balance mb-8 mx-auto" style="font-size: clamp(1.125rem, 2.5vw, 1.25rem); line-height: 1.6; max-width: 48rem;">
          URJIKO Labs builds practical software and digital solutions designed around real business and organizational needs.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="/contact" data-link class="btn btn--primary btn--lg">
            Discuss Your Project ${icons.arrowRight("w-4 h-4")}
          </a>
          <a href="/portfolio" data-link class="btn btn--secondary btn--lg">
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  `;
}
