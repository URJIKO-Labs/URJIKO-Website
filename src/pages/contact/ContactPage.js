import { renderContactHero } from "../../components/contact/ContactHero.js";
import { renderContactInfo } from "../../components/contact/ContactInfo.js";
import { renderContactForm } from "../../components/contact/ContactForm.js";
import { renderContactProcess } from "../../components/contact/ContactProcess.js";
import { renderContactFAQ } from "../../components/contact/ContactFAQ.js";
import { renderGlobalCTA } from "../../components/common/CTA.js";

/**
 * URJIKO Labs — Contact Page
 * Route: /contact
 */
export function renderContactPage() {
  return `
    ${renderContactHero()}
    
    <section class="section" aria-label="Contact Methods" style="background: var(--color-white); border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container" style="max-width: 64rem;">
        <div class="grid items-start" style="grid-template-columns: 1fr; gap: var(--space-8);">
          <div style="flex: 1;">
            ${renderContactInfo()}
          </div>
          <div style="flex: 1.5;">
            ${renderContactForm()}
          </div>
        </div>
        <style>
          @media (min-width: 768px) {
            .container > .grid[style*="grid-template-columns: 1fr"] {
              grid-template-columns: 1fr 1.5fr !important;
            }
          }
        </style>
      </div>
    </section>

    ${renderContactProcess()}
    ${renderContactFAQ()}
    
    ${renderGlobalCTA({
      title: "Have a Problem Worth Solving?",
      description:
        "Start with the problem. We'll help you figure out the right technology and the right first step.",
      primaryBtnLabel: "Start a Conversation",
      primaryBtnPath: "/contact",
      secondaryBtnLabel: "Explore Our Portfolio",
      secondaryBtnPath: "/portfolio",
    })}
  `;
}
