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
        <div class="cta-section" style="padding: var(--space-12) var(--space-6); text-align: center; position: relative; background: linear-gradient(135deg, var(--color-navy) 0%, #0a3575 100%);">
          
          <!-- Background Tech Pattern Overlay -->
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1; background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px; z-index: 1;"></div>
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to bottom, transparent, rgba(6, 36, 92, 0.8)); z-index: 1;"></div>

          <div style="position: relative; z-index: 2;">
            <h2 id="cta-section-heading" class="cta-section__title text-balance" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); margin-bottom: var(--space-3); color: #fff;">${title}</h2>
            <p class="cta-section__description text-balance" style="max-width: 42rem; margin: 0 auto var(--space-8) auto; font-size: 1.1rem; color: rgba(255,255,255,0.85); line-height: 1.6;">${description}</p>
            <div class="cta-section__actions flex flex-wrap justify-center gap-4">
              <a href="${primaryBtnPath}" data-link class="btn btn--primary btn--lg" style="background-color: var(--color-blue); border-color: var(--color-blue); color: white; box-shadow: 0 4px 14px rgba(7, 87, 184, 0.4);">
                ${primaryBtnLabel}
              </a>
              ${
                secondaryBtnLabel
                  ? `
                <a href="${secondaryBtnPath}" data-link class="btn btn--secondary btn--lg" style="background-color: transparent; border: 1px solid rgba(255,255,255,0.4); color: #FFFFFF; transition: all 0.2s;">
                  ${secondaryBtnLabel}
                </a>
              `
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
