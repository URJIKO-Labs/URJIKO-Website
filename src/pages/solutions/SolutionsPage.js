import { renderSolutionsHero } from "../../components/solutions/SolutionsHero.js";
import { renderSolutionCategories } from "../../components/solutions/SolutionCategories.js";
import { renderProblemSolution } from "../../components/solutions/ProblemSolution.js";
import { renderCapabilityGrid } from "../../components/solutions/CapabilityGrid.js";
import { renderCrossNavigation } from "../../components/solutions/CrossNavigation.js";
import { renderGlobalCTA } from "../../components/common/CTA.js";

/**
 * URJIKO Labs — Solutions Page
 * Route: /solutions
 *
 * Organized around industries, workflows, and operational needs:
 * - Business Solutions (SmartBiz ERP)
 * - Education Solutions (EduFlow)
 * - Transport Solutions (Transport Management)
 * - Healthcare Solutions (ShegerHealth)
 */
export function renderSolutionsPage() {
  return `
    ${renderSolutionsHero()}
    ${renderSolutionCategories()}
    ${renderProblemSolution()}
    ${renderCapabilityGrid()}
    ${renderCrossNavigation()}
    ${renderGlobalCTA({
      title: "Have a Problem Technology Could Solve?",
      description:
        "Tell us what you are trying to improve. We will help you identify a practical digital solution.",
      primaryBtnLabel: "Discuss Your Project",
      primaryBtnPath: "/contact",
      secondaryBtnLabel: "View Our Work",
      secondaryBtnPath: "/portfolio",
    })}
  `;
}
