import { companyConfig } from "../../config/company.js";
import { renderLegalPageLayout } from "../../components/layout/LegalPageLayout.js";

export function renderTermsPage() {
  return renderLegalPageLayout({
    title: "Terms of Service",
    lastUpdated: "September 2026",
    contentSections: `
      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">1. Acceptance & Services Scope</h2>
        <p>By accessing our website or commissioning software engineering services from ${companyConfig.name}, you agree to these Terms. We provide web development, business systems (ERP/POS), custom software, mobile apps, and AI solutions.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">2. Intellectual Property & Ownership</h2>
        <p style="margin-bottom: 0.75rem;">Ownership rights for project deliverables are straightforward:</p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0;">
          <li style="margin-bottom: 0.5rem;"><strong>Custom Deliverables:</strong> Full ownership of custom source code and designs transfers to the Client upon final invoice payment.</li>
          <li style="margin-bottom: 0;"><strong>Core Utilities:</strong> ${companyConfig.name} grants a perpetual, non-exclusive license to run pre-existing open-source frameworks and reusable tools included in your project.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">3. Payments & 30-Day Warranty</h2>
        <p style="margin-bottom: 0.75rem;">Payment terms and project warranties are defined as follows:</p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0;">
          <li style="margin-bottom: 0.5rem;"><strong>Invoicing:</strong> Projects commence upon receipt of the agreed deposit. Milestone payments are due upon phase sign-off.</li>
          <li style="margin-bottom: 0;"><strong>30-Day Warranty:</strong> All custom deliverables include a 30-day post-launch warranty for fixing reproducible bugs at no additional cost.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">4. Limitation of Liability</h2>
        <p>${companyConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to our services. This includes but is not limited to loss of profits, data, business opportunities, or goodwill. Our total liability for any claim related to a project shall not exceed the total amount paid by the Client for that specific project.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">5. Disclaimer of Warranties</h2>
        <p>Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure. While we strive for quality, we cannot guarantee specific business outcomes from using our software.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">6. Confidentiality</h2>
        <p>Both parties agree to keep confidential all proprietary information shared during the course of a project. This includes source code, business processes, trade secrets, and any other sensitive information. This obligation survives the termination of the engagement for a period of 2 years.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">7. Project Scope Changes</h2>
        <p>If the Client requests changes to the agreed project scope, ${companyConfig.name} will provide a written estimate of the additional time and cost. Work on changes will not begin until the Client approves the updated estimate. Scope changes may affect project timelines.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">8. Delays & Cancellation</h2>
        <p style="margin-bottom: 0.75rem;">Project timelines depend on timely Client feedback and deliverables:</p>
        <ul style="list-style-type: disc; padding-left: 1.5rem; margin: 0;">
          <li style="margin-bottom: 0.5rem;"><strong>Client Delays:</strong> If the Client fails to provide required feedback or materials within 14 days, the project timeline will be extended accordingly.</li>
          <li style="margin-bottom: 0;"><strong>Cancellation:</strong> The Client may cancel at any time with written notice. Deposits are non-refundable. Work completed up to the cancellation date will be invoiced and must be paid.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">9. Refund Policy</h2>
        <p>Deposits are non-refundable once work has commenced. If ${companyConfig.name} fails to deliver the agreed scope due to our own fault, we will either complete the work at no additional cost or provide a partial refund for undelivered milestones. Refund requests must be made in writing within 30 days of the issue.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">10. Termination</h2>
        <p>Either party may terminate the agreement with 14 days written notice. Upon termination, the Client will receive all completed work and source code for which payment has been made. Outstanding invoices remain payable. ${companyConfig.name} reserves the right to terminate immediately if the Client breaches these Terms.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">11. Dispute Resolution</h2>
        <p>Any disputes arising from these Terms or project engagements will first be addressed through good-faith negotiation. If unresolved within 30 days, disputes will be submitted to mediation. If mediation fails, disputes will be resolved through the courts of the Federal Democratic Republic of Ethiopia.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">12. Force Majeure</h2>
        <p>Neither party shall be liable for delays or failures in performance resulting from causes beyond reasonable control, including natural disasters, war, government actions, power outages, internet disruptions, or pandemics. The affected party will notify the other promptly and use reasonable efforts to resume performance.</p>
      </section>

      <section>
        <h2 class="text-navy font-semibold" style="font-size: 1.25rem; margin-bottom: 0.75rem;">13. Governing Law</h2>
        <p>These Terms and any project engagements are governed by the laws of the Federal Democratic Republic of Ethiopia.</p>
      </section>
    `,
  });
}
