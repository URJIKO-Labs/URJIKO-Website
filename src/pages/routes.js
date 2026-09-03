import { renderHomePage } from "./home/HomePage.js";
import { renderServicesPage } from "./services/ServicesPage.js";
import { renderSolutionsPage } from "./solutions/SolutionsPage.js";
import { renderPortfolioPage } from "./portfolio/PortfolioPage.js";
import { renderGlobalCTA } from "../components/common/CTA.js";
import { renderTelegramCTA } from "../components/contact/TelegramCTA.js";
import { renderBreadcrumbs } from "../components/navigation/Breadcrumbs.js";
import { companyConfig } from "../config/company.js";

export const routes = {
  "/": () => renderHomePage(),

  "/services": () => renderServicesPage(),

  "/solutions": () => renderSolutionsPage(),

  "/portfolio": () => renderPortfolioPage(),


  "/about": () => `
    <div class="container section">
      ${renderBreadcrumbs([{ label: "Home", path: "/" }, { label: "About" }])}
      <div class="section-heading">
        <span class="section-heading__label">Company</span>
        <h1 class="section-heading__title">About URJIKO Labs</h1>
        <p class="section-heading__subtitle">
          We are a team of dedicated software engineers, product thinkers, and problem solvers building software for the real world.
        </p>
      </div>

      <div class="card card--lg mb-12">
        <h3 class="card__title mb-4">Our Engineering Philosophy</h3>
        <p>
          URJIKO Labs was founded on the principle that digital tools should be reliable, intuitive, and directly aligned with business value. We do not build technology for technology's sake; we solve actual operational bottlenecks.
        </p>
      </div>
    </div>
    ${renderGlobalCTA()}
  `,

  "/contact": () => `
    <div class="container section">
      ${renderBreadcrumbs([{ label: "Home", path: "/" }, { label: "Contact" }])}
      <div class="section-heading">
        <span class="section-heading__label">Get in Touch</span>
        <h1 class="section-heading__title">Discuss Your Project</h1>
        <p class="section-heading__subtitle">
          Have an upcoming software project, technical challenge, or need a custom solution? Reach out directly.
        </p>
      </div>

      <div class="grid grid--2 mb-12">
        <!-- Direct Telegram CTA Component -->
        <div>
          ${renderTelegramCTA({
            title: "Quickest Response via Telegram",
            description:
              "Directly message our engineering lead on Telegram to discuss requirements, feasibility, and project estimates.",
          })}

          <div class="card mt-6" style="margin-top: var(--space-6);">
            <h4 class="card__title mb-2">Email Inquiries</h4>
            <p class="text-sm text-secondary mb-2">For formal RFPs, partnerships, and detailed specifications:</p>
            <a href="mailto:${companyConfig.contact.email}" class="font-semibold" style="color: var(--color-blue);">${companyConfig.contact.email}</a>
          </div>
        </div>

        <!-- Contact Form Placeholder / Foundation -->
        <div class="card card--lg">
          <h3 class="card__title mb-4">Send a Message</h3>
          <form onsubmit="event.preventDefault(); alert('Form submitted!');" novalidate>
            <div class="form-group">
              <label for="contact-name" class="form-label form-label--required">Full Name</label>
              <input type="text" id="contact-name" class="form-input" placeholder="e.g. John Doe" required />
            </div>
            <div class="form-group">
              <label for="contact-email" class="form-label form-label--required">Email Address</label>
              <input type="email" id="contact-email" class="form-input" placeholder="name@company.com" required />
            </div>
            <div class="form-group">
              <label for="contact-service" class="form-label">Service Area</label>
              <select id="contact-service" class="form-select">
                <option value="web">Web Development</option>
                <option value="business">Business Management System</option>
                <option value="custom">Custom Software Development</option>
                <option value="ai">AI & Intelligent Solutions</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact-message" class="form-label form-label--required">Project Details</label>
              <textarea id="contact-message" class="form-textarea" placeholder="Tell us about what you want to build..." required></textarea>
            </div>
            <button type="submit" class="btn btn--primary" style="width: 100%;">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `,

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
