import { companyConfig } from "../../config/company.js";

export function renderLegalPageLayout({ title, lastUpdated, contentSections }) {
  return `
    <div class="container section" style="padding-top: var(--space-10, 2.5rem); padding-bottom: var(--space-16, 4rem);">
      <div style="max-width: 48rem; margin: 0 auto;">
        
        <!-- Header -->
        <header style="margin-bottom: var(--space-10, 2.5rem); padding-bottom: var(--space-6, 1.5rem); border-bottom: 1px solid var(--color-border, #e2e8f0);">
          <span class="badge badge--navy" style="margin-bottom: var(--space-3, 0.75rem); display: inline-block;">Legal</span>
          <h1 class="text-navy font-bold" style="font-size: var(--font-size-3xl, 2rem); margin-top: 0.25rem; margin-bottom: 0.5rem;">${title}</h1>
          <p class="text-secondary text-sm">Last updated: ${lastUpdated}</p>
        </header>

        <!-- Content -->
        <div style="display: flex; flex-direction: column; gap: var(--space-8, 2rem); font-size: 1rem; line-height: 1.75; color: var(--color-slate-700, #334155);">
          
          ${contentSections}

          <section style="margin-top: 1rem; padding: 1.5rem; background-color: var(--color-bg-light-blue, #f0f7ff); border: 1px solid var(--color-blue-light, #d0e4ff); border-radius: 10px;">
            <h3 class="text-navy font-semibold" style="font-size: 1.1rem; margin-bottom: 0.5rem;">Contact Us</h3>
            <p style="font-size: 0.875rem; margin-bottom: 0.75rem; color: var(--color-slate-600);">Have questions regarding this document? Contact ${companyConfig.name}:</p>
            <div style="font-size: 0.875rem; font-weight: 500; display: flex; flex-direction: column; gap: 0.35rem;">
              <div>Email: <a href="mailto:${companyConfig.contact.email}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.email}</a></div>
              <div>Telegram: <a href="${companyConfig.telegram.url}" target="_blank" rel="noopener noreferrer" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.telegram.handle}</a></div>
              <div>Phone: <a href="tel:${companyConfig.contact.phoneEthioTel}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.phoneEthio}</a> | <a href="tel:${companyConfig.contact.phoneSafariTel}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.phoneSafari}</a></div>
              <div>Location: ${companyConfig.contact.location}</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  `;
}
