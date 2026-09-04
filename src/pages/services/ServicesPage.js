import { renderServicesHero } from "../../components/services/ServicesHero.js";
import { renderServicesApproach } from "../../components/services/ServicesApproach.js";
import { renderServiceCards } from "../../components/services/ServiceCards.js";
import { renderSmartBizFeature } from "../../components/services/SmartBizFeature.js";
import { renderGlobalCTA } from "../../components/common/CTA.js";

/**
 * URJIKO Labs — Services Page
 * Route: /services
 *
 * Explains what URJIKO Labs can be hired to do:
 * 1. Website Development
 * 2. Business Management Systems
 * 3. Custom Software Development
 * 4. AI & Intelligent Solutions
 * 5. Maintenance & Technical Support
 */
export function renderServicesPage() {
  return `
    ${renderServicesHero()}
    ${renderServicesApproach()}
    ${renderServiceCards()}
    ${renderSmartBizFeature()}
    ${renderGlobalCTA({
      title: "Ready to build your solution?",
      description:
        "Tell us about your project requirements. We will help you identify the right technology approach.",
      primaryBtnLabel: "Discuss Your Project",
      primaryBtnPath: "/contact",
      secondaryBtnLabel: "View Our Solutions",
      secondaryBtnPath: "/solutions",
    })}
  `;
}
