import { renderHomePage } from "./home/HomePage.js";
import { renderServicesPage } from "./services/ServicesPage.js";
import { renderSolutionsPage } from "./solutions/SolutionsPage.js";
import { renderPortfolioPage } from "./portfolio/PortfolioPage.js";
import { renderProjectPage } from "./portfolio/ProjectPage.js";
import { renderAboutPage } from "./about/AboutPage.js";
import { renderContactPage } from "./contact/ContactPage.js";
import { renderPrivacyPage } from "./legal/PrivacyPage.js";
import { renderTermsPage } from "./legal/TermsPage.js";
import { renderGlobalCTA } from "../components/common/CTA.js";
import { renderTelegramCTA } from "../components/contact/TelegramCTA.js";
import { renderBreadcrumbs } from "../components/navigation/Breadcrumbs.js";
import { companyConfig } from "../config/company.js";

export const routes = {
  "/": () => renderHomePage(),

  "/services": () => renderServicesPage(),

  "/solutions": () => renderSolutionsPage(),

  "/portfolio": () => renderPortfolioPage(),

  "/portfolio/smartbiz": () => renderProjectPage("smartbiz"),
  "/portfolio/transport": () => renderProjectPage("transport"),
  "/portfolio/eduflow": () => renderProjectPage("eduflow"),
  "/portfolio/shegerhealth": () => renderProjectPage("shegerhealth"),

  "/about": () => renderAboutPage(),

  "/contact": () => renderContactPage(),

  "/privacy": () => renderPrivacyPage(),

  "/terms": () => renderTermsPage(),

  "/404": () => `
    <div class="container section text-center">
      <div style="max-width: 32rem; margin: 0 auto; padding: var(--space-12) 0;">
        <span class="badge badge--navy mb-4">404 Error</span>
        <h1 style="font-size: var(--font-size-6xl); color: var(--color-navy); margin-bottom: var(--space-2);">404</h1>
        <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--space-4);">Page not found</h2>
        <p class="text-secondary mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div class="flex justify-center gap-4">
          <a href="/" data-link class="btn btn--primary">Back to Home</a>
          <a href="/solutions" data-link class="btn btn--secondary">Explore Solutions</a>
        </div>
      </div>
    </div>
  `,
};
