import { renderHero } from "../../components/home/Hero.js";
import { renderValueStrip } from "../../components/home/ValueStrip.js";
import { renderServicesPreview } from "../../components/home/ServicesPreview.js";
import { renderFeaturedSolutions } from "../../components/home/FeaturedSolutions.js";
import { renderWhyUrjiko } from "../../components/home/WhyUrjiko.js";
import { renderProcess } from "../../components/home/Process.js";
import { renderGlobalCTA } from "../../components/common/CTA.js";

/**
 * URJIKO Labs — Home Page View (Route: `/`)
 *
 * Order of Sections:
 * 1. Hero
 * 2. Trust / Value Strip
 * 3. What We Do (Services Preview)
 * 4. Featured Solutions (SmartBiz, Transport, EduFlow, ShegerHealth)
 * 5. Why URJIKO Labs (Engineering Philosophy & 5 Principles)
 * 6. How We Work (6-Stage Delivery Process)
 * 7. Final Global CTA
 */
export function renderHomePage() {
  return `
    <div class="home-page">
      <!-- 1. Hero -->
      ${renderHero()}

      <!-- 2. Value Strip -->
      ${renderValueStrip()}

      <!-- 3. What We Do -->
      ${renderServicesPreview()}

      <!-- 4. Featured Solutions -->
      ${renderFeaturedSolutions()}

      <!-- 5. Why URJIKO Labs -->
      ${renderWhyUrjiko()}

      <!-- 6. How We Work -->
      ${renderProcess()}

      <!-- 7. Final CTA -->
      ${renderGlobalCTA({
        title: "Have a problem that technology could solve?",
        description:
          "Tell us what you're trying to improve. We'll help you explore a practical digital solution.",
        primaryBtnLabel: "Discuss Your Project",
        primaryBtnPath: "/contact",
        secondaryBtnLabel: "Explore Our Solutions",
        secondaryBtnPath: "/solutions",
      })}
    </div>
  `;
}
