import { companyConfig } from "../../config/company.js";

export function renderGlobalCTA({
  title = "Have a Similar Project or Business Need?",
  description = "Tell us what you're trying to build or improve, and we'll help you design and deploy a practical digital solution.",
  primaryBtnLabel = companyConfig.primaryCTA.label,
  primaryBtnPath = companyConfig.primaryCTA.path,
  secondaryBtnLabel = "View Our Solutions",
  secondaryBtnPath = "/solutions",
} = {}) {
  return `
    <section class="section" aria-labelledby="cta-section-heading" style="padding-top: var(--space-12); padding-bottom: var(--space-12);">
      <div class="container">
        <div class="cta-section" style="padding: var(--space-10) var(--space-6); text-align: center;">
          <h2 id="cta-section-heading" class="cta-section__title text-balance" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); margin-bottom: var(--space-3);">${title}</h2>
          <p class="cta-section__description text-balance" style="max-width: 38rem; margin: 0 auto var(--space-6) auto; font-size: 1.05rem; opacity: 0.9;">${description}</p>
          <div class="cta-section__actions flex flex-wrap justify-center gap-4">
            <a href="${primaryBtnPath}" data-link class="btn btn--primary btn--lg">
              ${primaryBtnLabel}
            </a>
            ${
              secondaryBtnLabel
                ? `
              <a href="${secondaryBtnPath}" data-link class="btn btn--secondary btn--lg" style="border-color: rgba(255,255,255,0.4); color: #FFFFFF;">
                ${secondaryBtnLabel}
              </a>
            `
                : ""
            }
          </div>
        </div>
      </div>
    </section>
  `;
}
