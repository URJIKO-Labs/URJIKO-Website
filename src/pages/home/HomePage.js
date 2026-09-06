import { renderHero } from "../../components/home/Hero.js";
import { renderValueStrip } from "../../components/home/ValueStrip.js";
import { renderServicesPreview } from "../../components/home/ServicesPreview.js";
import { renderFeaturedSolutions } from "../../components/home/FeaturedSolutions.js";
import { renderWhyUrjiko } from "../../components/home/WhyUrjiko.js";
import { renderProcess } from "../../components/home/Process.js";
import { renderIndustries } from "../../components/home/Industries.js";
import { renderGlobalCTA } from "../../components/common/CTA.js";

/**
 * URJIKO Labs — Home Page View (Route: `/`)
 *
 * Order of Sections:
 * 1. Hero
 * 2. Trust / Value Strip
 * 3. What We Build (Services Preview)
 * 4. Featured Solutions (SmartBiz, Transport, EduFlow, ShegerHealth)
 * 5. Why URJIKO Labs (Problem-First Philosophy)
 * 6. How We Work (6-Stage Delivery Process)
 * 7. Who We Help (Industries)
 * 8. Final Global CTA
 */
export function renderHomePage() {
  return `
    <div class="home-page">
      <!-- 1. Hero -->
      ${renderHero()}

      <!-- 2. Value Strip -->
      ${renderValueStrip()}

      <!-- 3. What We Build -->
      ${renderServicesPreview()}

      <!-- 4. Featured Solutions -->
      ${renderFeaturedSolutions()}

      <!-- 5. Why URJIKO Labs -->
      ${renderWhyUrjiko()}

      <!-- 6. How We Work -->
      ${renderProcess()}

      <!-- 7. Who We Help -->
      ${renderIndustries()}

      <!-- 8. Final CTA -->
      ${renderGlobalCTA({
        title: "Have a business process that could work better with software?",
        description:
          "Tell us what you need. We'll help you explore a practical digital solution.",
        primaryBtnLabel: "Discuss Your Project",
        primaryBtnPath: "/contact",
        secondaryBtnLabel: "View Our Solutions",
        secondaryBtnPath: "/solutions",
      })}
    </div>
  `;
}
