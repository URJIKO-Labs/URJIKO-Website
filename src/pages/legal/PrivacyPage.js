import { companyConfig } from "../../config/company.js";

/**
 * URJIKO Labs — Official Privacy Policy Page
 * Route: /privacy
 */
export function renderPrivacyPage() {
  return `
    <div class="container section" style="padding-top: var(--space-10, 2.5rem); padding-bottom: var(--space-16, 4rem);">
      <div style="max-width: 52rem; margin: 0 auto;">
        
        <!-- Header / Page Title -->
        <header style="margin-bottom: var(--space-12, 3rem); padding-bottom: var(--space-8, 2rem); border-bottom: 1px solid var(--color-border, #e2e8f0);">
          <span class="badge badge--navy" style="margin-bottom: var(--space-4, 1rem); display: inline-block;">Legal & Compliance</span>
          <h1 class="text-navy font-bold" style="font-size: var(--font-size-4xl, 2.25rem); line-height: 1.25; margin-top: var(--space-2, 0.5rem); margin-bottom: var(--space-4, 1rem);">Privacy Policy</h1>
          <p class="text-secondary text-sm" style="margin-top: var(--space-2, 0.5rem);">
            Effective Date: September 1, 2026 &nbsp;|&nbsp; Last Updated: September 4, 2026
          </p>
        </header>

        <!-- Main Legal Content Sections -->
        <div style="display: flex; flex-direction: column; gap: var(--space-10, 2.5rem); font-size: var(--font-size-base, 1rem); line-height: 1.8; color: var(--color-slate-700, #334155);">
          
          <!-- Section 1 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">1. Introduction & Overview</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">
              ${companyConfig.name} ("we," "our," or "us"), operating out of ${companyConfig.contact.location}, is dedicated to maintaining the confidentiality, privacy, and security of all personal and enterprise information provided to us by clients, website visitors, and business partners.
            </p>
            <p style="margin-bottom: 0;">
              This Privacy Policy applies to all services provided by ${companyConfig.name}, including our corporate website (<a href="${companyConfig.websiteUrl}" target="_blank" rel="noopener noreferrer" class="text-blue font-medium" style="color: var(--color-blue);">${companyConfig.websiteUrl.replace("https://", "")}</a>), custom web application development, business management systems (ERP/POS), mobile software solutions, AI integrations, technical support, and direct communications through email or messaging channels (such as Telegram).
            </p>
          </section>

          <!-- Section 2 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">2. Information We Collect</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">
              We collect only information that is strictly necessary for engineering software solutions, fulfilling contractual commitments, and consulting with clients:
            </p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);">
                <strong>Contact & Business Identification:</strong> Names, business email addresses (<a href="mailto:${companyConfig.contact.email}" class="text-blue font-medium" style="color: var(--color-blue);">${companyConfig.contact.email}</a>), telephone numbers, company names, job titles, and direct messaging handles (e.g., Telegram username).
              </li>
              <li style="margin-bottom: var(--space-3, 0.75rem);">
                <strong>Technical & Project Specifications:</strong> Software requirements, database schemas, architectural workflows, design assets, and business logic furnished during discovery or development phases.
              </li>
              <li style="margin-bottom: 0;">
                <strong>Web Usage Telemetry:</strong> Standard non-identifying server log information when accessing our web services, such as IP address, browser type, operating system version, access timestamps, and page request logs.
              </li>
            </ul>
          </section>

          <!-- Section 3 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">3. How We Use Information</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">
              We process personal and project data solely for legitimate operational and engineering purposes, including:
            </p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);">Designing, engineering, testing, deploying, and maintaining client software applications and infrastructure.</li>
              <li style="margin-bottom: var(--space-3, 0.75rem);">Communicating development progress, milestone approvals, technical support responses, and system status updates.</li>
              <li style="margin-bottom: var(--space-3, 0.75rem);">Executing binding Non-Disclosure Agreements (NDAs), project contracts, and service level commitments.</li>
              <li style="margin-bottom: 0;">Ensuring cybersecurity protection, preventing unauthorized access, and auditing infrastructure performance.</li>
            </ul>
          </section>

          <!-- Section 4 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">4. Code Confidentiality & Data Protection</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">
              We treat all client source code, database contents, internal operations, and business strategy documents with standard enterprise confidentiality.
            </p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);"><strong>Isolated Access:</strong> Access to code repositories and client data is strictly restricted to assigned software engineers equipped with multi-factor authentication.</li>
              <li style="margin-bottom: 0;"><strong>No Commercial Data Selling:</strong> We do not sell, rent, lease, or monetize client data or personal information to advertising networks, third-party brokers, or data analytics firms.</li>
            </ul>
          </section>

          <!-- Section 5 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">5. Infrastructure & Service Providers</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">
              We utilize reputable, enterprise-grade cloud platforms (such as GitHub, secure cloud hosting providers, and database hosting infrastructure) solely for building, hosting, and deploying client solutions. All third-party infrastructure providers adhere to industry security standards.
            </p>
            <p style="margin-bottom: 0;">
              We may disclose information only if required by applicable statutory laws, court orders, or governmental directives under the laws of Ethiopia.
            </p>
          </section>

          <!-- Section 6 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">6. Data Retention & Archival</h2>
            <p style="margin-bottom: 0;">
              Project records and contact details are retained for the duration of the contractual engagement and post-launch maintenance period to provide support, meet tax compliance obligations, and maintain project history. Client data will be securely archived or deleted upon contractual conclusion or written request.
            </p>
          </section>

          <!-- Section 7 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">7. Your Rights & Control</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">Clients and users retain rights over their personal and organizational data:</p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);">Request inspection or copies of stored contact records.</li>
              <li style="margin-bottom: var(--space-3, 0.75rem);">Request immediate correction of outdated contact details.</li>
              <li style="margin-bottom: 0;">Request deletion of non-contractual communications or data records.</li>
            </ul>
          </section>

          <!-- Section 8 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">8. Policy Updates</h2>
            <p style="margin-bottom: 0;">
              We may update this Privacy Policy to reflect advancements in technology, legal compliance, or operational enhancements. Revisions will be published on this page with an updated "Last Updated" timestamp.
            </p>
          </section>

          <!-- Contact Box with Generous Padding & Spacing -->
          <section style="margin-top: var(--space-8, 2rem); padding: var(--space-8, 2rem); background-color: var(--color-bg-light-blue, #f0f7ff); border: 1px solid var(--color-blue-light, #d0e4ff); border-radius: 12px;">
            <h3 class="text-navy font-semibold" style="font-size: var(--font-size-xl, 1.25rem); margin-top: 0; margin-bottom: var(--space-3, 0.75rem); color: var(--color-navy);">Contact Privacy Office</h3>
            <p style="font-size: var(--font-size-sm, 0.875rem); margin-bottom: var(--space-4, 1rem); color: var(--color-slate-600, #475569);">
              If you have any questions, data access requests, or privacy concerns regarding ${companyConfig.name}, please contact us directly:
            </p>
            <div style="font-size: var(--font-size-sm, 0.875rem); font-weight: 500; display: flex; flex-direction: column; gap: var(--space-2, 0.5rem); color: var(--color-navy);">
              <div>Phone (Ethio Telecom): <a href="tel:${companyConfig.contact.phoneEthioTel}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.phoneEthio}</a></div>
              <div>Phone (Safaricom): <a href="tel:${companyConfig.contact.phoneSafariTel}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.phoneSafari}</a></div>
              <div>Email: <a href="mailto:${companyConfig.contact.email}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.email}</a></div>
              <div>Telegram: <a href="${companyConfig.telegram.url}" target="_blank" rel="noopener noreferrer" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.telegram.handle}</a></div>
              <div>Location: ${companyConfig.contact.location}</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  `;
}
