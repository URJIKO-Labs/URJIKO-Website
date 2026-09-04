import { renderAboutHero } from "../../components/about/AboutHero.js";
import { renderCompanyIntro } from "../../components/about/CompanyIntro.js";
import { renderMissionVision } from "../../components/about/MissionVision.js";
import { renderCompanyValues } from "../../components/about/CompanyValues.js";
import { renderWhatWeBuild } from "../../components/about/WhatWeBuild.js";
import { renderGlobalCTA } from "../../components/common/CTA.js";

/**
 * URJIKO Labs — About Page
 * Route: /about
 */
export function renderAboutPage() {
  return `
    ${renderAboutHero()}
    ${renderCompanyIntro()}
    ${renderMissionVision()}
    ${renderCompanyValues()}
    ${renderWhatWeBuild()}
    ${renderGlobalCTA({
      title: "Let's Build Something Useful.",
      description:
        "Have a business process that could work better with technology? Let's discuss the problem and find a practical place to start.",
      primaryBtnLabel: "Discuss Your Project",
      primaryBtnPath: "/contact",
      secondaryBtnLabel: "View Our Services",
      secondaryBtnPath: "/services",
    })}
  `;
}
