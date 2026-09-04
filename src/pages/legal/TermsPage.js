import { companyConfig } from "../../config/company.js";

/**
 * URJIKO Labs — Official Terms of Service Page
 * Route: /terms
 */
export function renderTermsPage() {
  return `
    <div class="container section" style="padding-top: var(--space-10, 2.5rem); padding-bottom: var(--space-16, 4rem);">
      <div style="max-width: 52rem; margin: 0 auto;">
        
        <!-- Header / Page Title -->
        <header style="margin-bottom: var(--space-12, 3rem); padding-bottom: var(--space-8, 2rem); border-bottom: 1px solid var(--color-border, #e2e8f0);">
          <span class="badge badge--navy" style="margin-bottom: var(--space-4, 1rem); display: inline-block;">Legal & Terms</span>
          <h1 class="text-navy font-bold" style="font-size: var(--font-size-4xl, 2.25rem); line-height: 1.25; margin-top: var(--space-2, 0.5rem); margin-bottom: var(--space-4, 1rem);">Terms of Service</h1>
          <p class="text-secondary text-sm" style="margin-top: var(--space-2, 0.5rem);">
            Effective Date: September 1, 2026 &nbsp;|&nbsp; Last Updated: September 4, 2026
          </p>
        </header>

        <!-- Main Legal Content Sections -->
        <div style="display: flex; flex-direction: column; gap: var(--space-10, 2.5rem); font-size: var(--font-size-base, 1rem); line-height: 1.8; color: var(--color-slate-700, #334155);">
          
          <!-- Section 1 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">1. Binding Agreement & Acceptance</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">
              These Terms of Service ("Terms") constitute a legally binding agreement between you (whether acting individually or representing an organization, "Client") and <strong>${companyConfig.name}</strong> ("Company," "we," "us," or "our"), governing access to and use of our corporate website (<a href="${companyConfig.websiteUrl}" target="_blank" rel="noopener noreferrer" class="text-blue font-medium" style="color: var(--color-blue);">${companyConfig.websiteUrl.replace("https://", "")}</a>), software engineering services, business systems, mobile software solutions, and technical consulting.
            </p>
            <p style="margin-bottom: 0;">
              By browsing our website, executing a project proposal, commissioning software development, or utilizing deployed systems created by ${companyConfig.name}, you confirm that you have read, understood, and agreed to be bound by these Terms.
            </p>
          </section>

          <!-- Section 2 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">2. Scope of Software Services</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">${companyConfig.name} provides custom digital product engineering and software development services including:</p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);"><strong>Website & Web Application Engineering:</strong> Corporate websites, web applications, landing pages, and digital platforms.</li>
              <li style="margin-bottom: var(--space-3, 0.75rem);"><strong>Business Management Systems (ERP/POS):</strong> Enterprise software, Point-of-Sale platforms, inventory management, booking solutions, role-based dashboards, and custom operational tools.</li>
              <li style="margin-bottom: var(--space-3, 0.75rem);"><strong>Mobile Application Engineering:</strong> Native and cross-platform mobile apps for iOS and Android interfacing with client business systems.</li>
              <li style="margin-bottom: var(--space-3, 0.75rem);"><strong>Artificial Intelligence & Automation:</strong> Workflow automation, intelligent search, data analytics tools, and AI assistant integration.</li>
              <li style="margin-bottom: 0;"><strong>Technical Support & System Maintenance:</strong> Post-launch monitoring, security updates, bug fixes, and continuous technical maintenance.</li>
            </ul>
          </section>

          <!-- Section 3 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">3. Client Obligations & Collaboration</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">To facilitate successful software delivery, the Client agrees to:</p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);">Furnish accurate functional requirements, brand assets, database contents, and technical credentials required for development in a timely manner.</li>
              <li style="margin-bottom: var(--space-3, 0.75rem);">Designate a authorized representative responsible for reviewing sprint deliverables, providing feedback, and issuing milestone sign-offs.</li>
              <li style="margin-bottom: 0;">Ensure that all content, logos, text, data, and materials supplied to ${companyConfig.name} do not violate third-party copyrights, trademarks, or applicable statutory laws.</li>
            </ul>
          </section>

          <!-- Section 4 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">4. Intellectual Property & Ownership</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">Intellectual property rights for project deliverables are governed strictly as follows:</p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);"><strong>Custom Client Deliverables:</strong> Upon full payment of all agreed invoice fees for a project engagement, full ownership of custom application source code, bespoke assets, and custom user interfaces engineered explicitly for the Client shall transfer to the Client.</li>
              <li style="margin-bottom: 0;"><strong>Core Architecture & Pre-existing Tools:</strong> ${companyConfig.name} retains full rights over pre-existing code libraries, reusable open-source frameworks, developer tools, and internal code modules used during construction. The Client is granted a non-exclusive, royalty-free, perpetual license to run such core components as part of their delivered application.</li>
            </ul>
          </section>

          <!-- Section 5 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">5. Invoicing, Payments & Deposits</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">
              Project fee structures, deposit ratios, and milestone billing terms are defined in individual project contracts or proposals. Unless stated otherwise in writing:
            </p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);">Development commences upon receipt of the specified initial deposit.</li>
              <li style="margin-bottom: var(--space-3, 0.75rem);">Milestone invoices are payable upon completion and presentation of specified project deliverables.</li>
              <li style="margin-bottom: 0;">Invoices are payable within fourteen (14) calendar days of issuance. Unpaid balances beyond due dates may result in temporary suspension of active development or deployment services.</li>
            </ul>
          </section>

          <!-- Section 6 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">6. Technical Warranty & Maintenance</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">We take pride in building robust, high-performance software:</p>
            <ul style="list-style-type: disc; padding-left: 1.75rem; margin-top: var(--space-3, 0.75rem); margin-bottom: 0;">
              <li style="margin-bottom: var(--space-3, 0.75rem);"><strong>30-Day Bug-Fix Warranty:</strong> Custom software deliverables include a standard 30-day post-launch warranty period during which any technical defects or errors departing from approved specifications will be remediated at no extra cost.</li>
              <li style="margin-bottom: 0;"><strong>Post-Warranty Support:</strong> Feature expansions, server administration, and ongoing technical maintenance beyond the 30-day warranty require an active Maintenance & Technical Support plan.</li>
            </ul>
          </section>

          <!-- Section 7 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">7. Limitation of Liability</h2>
            <p style="margin-bottom: var(--space-4, 1rem);">
              To the maximum extent permitted under applicable law, ${companyConfig.name} shall not be liable for indirect, incidental, special, consequential, or punitive damages—including loss of profits, data loss, revenue interruption, or third-party hosting outages—arising out of or connected with the use of delivered software or services.
            </p>
            <p style="margin-bottom: 0;">
              In all circumstances, our maximum aggregate liability under any contract shall not exceed the total fees paid by the Client to ${companyConfig.name} for the specific project engagement giving rise to the claim.
            </p>
          </section>

          <!-- Section 8 -->
          <section style="margin-bottom: var(--space-4, 1rem);">
            <h2 class="text-navy font-semibold" style="font-size: var(--font-size-2xl, 1.5rem); margin-top: 0; margin-bottom: var(--space-4, 1rem); color: var(--color-navy);">8. Governing Law & Dispute Resolution</h2>
            <p style="margin-bottom: 0;">
              These Terms and all legal relations between the Client and ${companyConfig.name} shall be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia. Any controversy or claim arising from these Terms that cannot be resolved through mutual consultation shall be submitted to binding arbitration or competent courts in Ethiopia.
            </p>
          </section>

          <!-- Contact Box with Generous Padding & Spacing -->
          <section style="margin-top: var(--space-8, 2rem); padding: var(--space-8, 2rem); background-color: var(--color-bg-light-blue, #f0f7ff); border: 1px solid var(--color-blue-light, #d0e4ff); border-radius: 12px;">
            <h3 class="text-navy font-semibold" style="font-size: var(--font-size-xl, 1.25rem); margin-top: 0; margin-bottom: var(--space-3, 0.75rem); color: var(--color-navy);">Contact & Contract Inquiries</h3>
            <p style="font-size: var(--font-size-sm, 0.875rem); margin-bottom: var(--space-4, 1rem); color: var(--color-slate-600, #475569);">
              For questions regarding these Terms of Service or to request a customized software contract, please reach out to ${companyConfig.name}:
            </p>
            <div style="font-size: var(--font-size-sm, 0.875rem); font-weight: 500; display: flex; flex-direction: column; gap: var(--space-2, 0.5rem); color: var(--color-navy);">
              <div>Phone (Ethio Telecom): <a href="tel:${companyConfig.contact.phoneEthioTel}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.phoneEthio}</a></div>
              <div>Phone (Safaricom): <a href="tel:${companyConfig.contact.phoneSafariTel}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.phoneSafari}</a></div>
              <div>Email: <a href="mailto:${companyConfig.contact.email}" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.contact.email}</a></div>
              <div>Telegram: <a href="${companyConfig.telegram.url}" target="_blank" rel="noopener noreferrer" class="text-blue" style="color: var(--color-blue); text-decoration: underline;">${companyConfig.telegram.handle}</a></div>
              <div>Office Location: ${companyConfig.contact.location}</div>
            </div>
          </section>

        </div>
      </div>
    </div>
  `;
}
