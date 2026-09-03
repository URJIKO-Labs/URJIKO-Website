import { companyConfig } from '../../config/company.js';

export function renderGlobalCTA({
  title = 'Have a problem that technology could solve?',
  description = "Let's build a practical, high-performance digital solution tailored for your organization.",
  primaryBtnLabel = companyConfig.primaryCTA.label,
  primaryBtnPath = companyConfig.primaryCTA.path,
  secondaryBtnLabel = 'View Our Solutions',
  secondaryBtnPath = '/solutions',
} = {}) {
  return `
    <section class="section" aria-labelledby="cta-section-heading">
      <div class="container">
        <div class="cta-section">
          <h2 id="cta-section-heading" class="cta-section__title text-balance">${title}</h2>
          <p class="cta-section__description text-balance">${description}</p>
          <div class="cta-section__actions">
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
                : ''
            }
          </div>
        </div>
      </div>
    </section>
  `;
}
