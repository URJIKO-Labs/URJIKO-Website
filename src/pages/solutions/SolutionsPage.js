import { renderSolutionsHero } from "../../components/solutions/SolutionsHero.js";
import { renderSolutionCategories } from "../../components/solutions/SolutionCategories.js";
import { renderCapabilityGrid } from "../../components/solutions/CapabilityGrid.js";
import { renderCrossNavigation } from "../../components/solutions/CrossNavigation.js";
import { renderGlobalCTA } from "../../components/common/CTA.js";

/**
 * URJIKO Labs — Solutions Page
 * Route: /solutions
 *
 * Problem-first structure organized around industries:
 * - Business Operations (SmartBiz)
 * - Transport & Operations (Transport Management)
 * - Education (EduFlow)
 * - Healthcare (ShegerHealth)
 */
export function renderSolutionsPage() {
  return `
    ${renderSolutionsHero()}
    ${renderSolutionCategories()}
    ${renderCapabilityGrid()}
    ${renderCrossNavigation()}
    ${renderGlobalCTA({
      title: "Have a business process that could work better with software?",
      description:
        "Tell us what you need. We'll help you explore a practical digital solution.",
      primaryBtnLabel: "Discuss Your Project",
      primaryBtnPath: "/contact",
      secondaryBtnLabel: "View Our Services",
      secondaryBtnPath: "/services",
    })}
  `;
}
