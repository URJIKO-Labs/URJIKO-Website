import { companyConfig } from "../../config/company.js";

/**
 * URJIKO Labs — Terms of Service Page (Concise & Clean)
 * Route: /terms
 */
export function renderTermsPage() {
  return `
    <div class="container section" style="padding-top: var(--space-10, 2.5rem); padding-bottom: var(--space-16, 4rem);">
      <div style="max-width: 48rem; margin: 0 auto;">
        
        <!-- Header -->
        <header style="margin-bottom: var(--space-10, 2.5rem); padding-bottom: var(--space-6, 1.5rem); border-bottom: 1px solid var(--color-border, #e2e8f0);">
          <span class="badge badge--navy" style="margin-bottom: var(--space-3, 0.75rem); display: inline-block;">Legal</span>
          <h1 class="text-navy font-bold" style="font-size: var(--font-size-3xl, 2rem); margin-top: 0.25rem; margin-bottom: 0.5rem;">Terms of Service</h1>
          <p class="text-secondary text-sm">Last updated: September 2026</p>
        </header>

        <!-- Concise Content -->
        <div style="display: flex; flex-direction: column; gap: var(--space-8, 2rem); font-size: 1rem; line-height: 1.75; color: var(--color-slate-700, #334155);">
          
          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">1. Acceptance & Services Scope</h2>
            <p>
              By accessing our website (<a href="${companyConfig.websiteUrl}" target="_blank" rel="noopener noreferrer" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">urjiko-website.vercel.app</a>) or commissioning software engineering services from ${companyConfig.name}, you agree to these Terms. We provide web development, business systems (ERP/POS), custom software, mobile apps, and AI solutions.
            </p>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">2. Intellectual Property & Ownership</h2>
            <p style="margin-bottom: 0.75rem;">
              Ownership rights for project deliverables are straightforward:
            </p>
            <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0;">
              <li style="margin-bottom: 0.5rem;"><strong>Custom Deliverables:</strong> Full ownership of custom source code and designs transfers to the Client upon final invoice payment.</li>
              <li style="margin-bottom: 0;"><strong>Core Utilities:</strong> ${companyConfig.name} grants a perpetual, non-exclusive license to run pre-existing open-source frameworks and reusable tools included in your project.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">3. Payments & 30-Day Warranty</h2>
            <p style="margin-bottom: 0.75rem;">
              Payment terms and project warranties are defined as follows:
            </p>
            <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0;">
              <li style="margin-bottom: 0.5rem;"><strong>Invoicing:</strong> Projects commence upon receipt of the agreed deposit. Milestone payments are due upon phase sign-off.</li>
              <li style="margin-bottom: 0;"><strong>30-Day Warranty:</strong> All custom deliverables include a 30-day post-launch warranty for fixing reproducible bugs at no additional cost.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">4. Governing Law</h2>
            <p>
              These Terms and any project engagements are governed by the laws of the Federal Democratic Republic of Ethiopia.
            </p>
          </section>

          <section style="margin-top: 1rem; padding: 1.5rem; background-color: var(--color-bg-light-blue, #f0f7ff); border: 1px solid var(--color-blue-light, #d0e4ff); border-radius: 10px;">
            <h3 class="text-navy font-semibold" style="font-size: 1.1rem; margin-bottom: 0.5rem;">Contact & Contract Inquiries</h3>
            <p style="font-size: 0.875rem; margin-bottom: 0.75rem; color: var(--color-slate-600);">Questions regarding these Terms? Contact ${companyConfig.name}:</p>
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
