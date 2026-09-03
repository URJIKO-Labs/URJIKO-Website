import { renderPortfolioHero } from "../../components/portfolio/PortfolioHero.js";
import { renderPortfolioIntro } from "../../components/portfolio/PortfolioIntro.js";
import { renderFeaturedProjects } from "../../components/portfolio/FeaturedProjects.js";
import { renderSecondaryProjects } from "../../components/portfolio/SecondaryProjects.js";
import { renderPortfolioCapabilities } from "../../components/portfolio/PortfolioCapabilities.js";
import { renderIndustryCoverage } from "../../components/portfolio/IndustryCoverage.js";
import { renderGlobalCTA } from "../../components/common/CTA.js";

/**
 * URJIKO Labs — Portfolio Page
 * Route: /portfolio
 *
 * Demonstrates URJIKO Labs' ability to design and develop practical software solutions.
 */
export function renderPortfolioPage() {
  return `
    ${renderPortfolioHero()}
    ${renderPortfolioIntro()}
    ${renderFeaturedProjects()}
    ${renderSecondaryProjects()}
    ${renderPortfolioCapabilities()}
    ${renderIndustryCoverage()}
    ${renderGlobalCTA({
      title: "Like what you see?",
      description:
        "Tell us what you are trying to improve. We will help you identify a practical solution and the right place to start.",
      primaryBtnLabel: "Request a Demo",
      primaryBtnPath: "/contact",
      secondaryBtnLabel: "View Our Services",
      secondaryBtnPath: "/services",
    })}
  `;
}
