import { companyConfig } from "../../config/company.js";
import { renderLegalPageLayout } from "../../components/layout/LegalPageLayout.js";

/**
 * URJIKO Labs — Privacy Policy Page
 * Route: /privacy
 */
export function renderPrivacyPage() {
  return `
    <div class="container section" style="padding-top: var(--space-10, 2.5rem); padding-bottom: var(--space-16, 4rem);">
      <div style="max-width: 48rem; margin: 0 auto;">
        
        <!-- Header -->
        <header style="margin-bottom: var(--space-10, 2.5rem); padding-bottom: var(--space-6, 1.5rem); border-bottom: 1px solid var(--color-border, #e2e8f0);">
          <span class="badge badge--navy" style="margin-bottom: var(--space-3, 0.75rem); display: inline-block;">Legal</span>
          <h1 class="text-navy font-bold" style="font-size: var(--font-size-3xl, 2rem); margin-top: 0.25rem; margin-bottom: 0.5rem;">Privacy Policy</h1>
          <p class="text-secondary text-sm">Last updated: September 2026</p>
        </header>

        <!-- Content -->
        <div style="display: flex; flex-direction: column; gap: var(--space-8, 2rem); font-size: 1rem; line-height: 1.75; color: var(--color-slate-700, #334155);">
          
  return renderLegalPageLayout({
    title: "Privacy Policy",
    lastUpdated: "September 2026",
    contentSections: `
          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">1. Information We Collect</h2>
            <p>
              At ${companyConfig.name}, we collect only necessary information to deliver our services:
            </p>
            <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0.75rem 0 0 0;">
              <li style="margin-bottom: 0.5rem;"><strong>Contact Information:</strong> Name, email address, phone number, and Telegram handle when you reach out to us.</li>
              <li style="margin-bottom: 0.5rem;"><strong>Project Details:</strong> Technical specifications, requirements, and related files you share with us.</li>
              <li style="margin-bottom: 0;"><strong>Website Usage:</strong> Basic analytics such as page views and referral sources to improve our website.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">2. Client Confidentiality & Data Protection</h2>
            <p style="margin-bottom: 0.75rem;">
              We treat all client source code, database contents, and project details as strictly confidential.
            </p>
            <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0;">
              <li style="margin-bottom: 0.5rem;"><strong>No Data Selling:</strong> We never sell, rent, or trade your data to third parties or advertisers.</li>
              <li style="margin-bottom: 0;"><strong>Secure Infrastructure:</strong> Code and project data are accessible only by authorized engineers.</li>
            </ul>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">3. How We Use Information</h2>
            <p>
              Your information is used strictly to deliver software development services, communicate project progress, provide technical support, and fulfill contractual agreements.
            </p>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">4. Cookies & Tracking</h2>
            <p>
              Our website uses essential cookies for basic functionality. We may use analytics tools such as Google Analytics to understand how visitors interact with our site. These tools collect anonymous usage data and do not identify you personally. You can disable cookies in your browser settings, though some features may not work properly.
            </p>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">5. Third-Party Services</h2>
            <p>
              We may use third-party services for hosting, analytics, and communication. These providers have access to information only as needed to perform their services and are contractually obligated to protect your data. We do not control third-party privacy practices and recommend reviewing their respective policies.
            </p>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">6. Data Retention</h2>
            <p>
              We retain your contact information and project details for as long as necessary to fulfill the purposes described in this policy. After project completion, we may retain records for up to 2 years for reference and support purposes. You may request deletion of your data at any time.
            </p>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0.75rem 0 0 0;">
              <li style="margin-bottom: 0.5rem;">Access the personal data we hold about you</li>
              <li style="margin-bottom: 0.5rem;">Request correction of inaccurate data</li>
              <li style="margin-bottom: 0.5rem;">Request deletion of your personal data</li>
              <li style="margin-bottom: 0;">Object to or restrict certain processing of your data</li>
            </ul>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">8. Data Breach Notification</h2>
            <p>
              In the unlikely event of a data breach that affects your personal information, we will notify you promptly via email or Telegram within 72 hours of discovery. We will provide details of what data was affected and the steps we are taking to address the breach.
            </p>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">10. Data Storage Location</h2>
            <p>
              Your data is stored on secure cloud servers provided by reputable hosting services. We take reasonable measures to ensure your data is protected regardless of where it is stored.
            </p>
          </section>

          <section>
            <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Significant changes will be communicated via email or a notice on our website. The "Last updated" date at the top reflects the most recent revision.
            </p>
          </section>

          <section style="margin-top: 1rem; padding: 1.5rem; background-color: var(--color-bg-light-blue, #f0f7ff); border: 1px solid var(--color-blue-light, #d0e4ff); border-radius: 10px;">
            <h3 class="text-navy font-semibold" style="font-size: 1.1rem; margin-bottom: 0.5rem;">Contact Us</h3>
            <p style="font-size: 0.875rem; margin-bottom: 0.75rem; color: var(--color-slate-600);">Have questions regarding your privacy? Contact ${companyConfig.name}:</p>
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
    `
  });
}
