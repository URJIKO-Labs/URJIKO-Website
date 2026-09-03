import { icons } from "../common/Icons.js";

export function renderContactHero() {
  return `
    <section class="section bg-white" aria-labelledby="contact-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-8);">
      <div class="container text-center" style="max-width: 48rem;">
        <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
          GET IN TOUCH
        </div>
        <h1 id="contact-hero-title" class="text-balance mb-4" style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 800; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight); line-height: 1.1;">
          Let's Talk About Your Project.
        </h1>
        <p class="text-secondary text-balance mx-auto" style="font-size: clamp(1rem, 2vw, 1.125rem); line-height: 1.6; max-width: 42rem;">
          Tell us what you're trying to build, improve, or solve. We'll help you identify a practical next step.
        </p>
      </div>
    </section>
  `;
}
