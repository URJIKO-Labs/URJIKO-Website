import { renderHomePage } from './home/HomePage.js';
import { renderGlobalCTA } from '../components/common/CTA.js';
import { renderTelegramCTA } from '../components/contact/TelegramCTA.js';
import { renderBreadcrumbs } from '../components/navigation/Breadcrumbs.js';
import { companyConfig } from '../config/company.js';

export const routes = {
  '/': () => renderHomePage(),

  '/services': () => `
    <div class="container section">
      ${renderBreadcrumbs([{ label: 'Home', path: '/' }, { label: 'Services' }])}
      <div class="section-heading">
        <span class="section-heading__label">Our Capabilities</span>
        <h1 class="section-heading__title">Engineering & Technology Services</h1>
        <p class="section-heading__subtitle">
          Comprehensive digital engineering services built around practical utility, clean code, and business reliability.
        </p>
      </div>

      <div class="grid grid--2 mb-12">
        <div class="card card--service">
          <h3 class="card__title">Web & Mobile Platforms</h3>
          <p class="card__description">Modern, fast, and accessible digital platforms tailored for your clients.</p>
        </div>
        <div class="card card--service">
          <h3 class="card__title">Custom Enterprise Software</h3>
          <p class="card__description">Scalable backend architectures and workflow automation tools.</p>
        </div>
      </div>
    </div>
    ${renderGlobalCTA({ title: 'Ready to build your solution?', description: 'Contact us to discuss your system requirements and timeline.' })}
  `,

  '/solutions': () => `
    <div class="container section">
      ${renderBreadcrumbs([{ label: 'Home', path: '/' }, { label: 'Solutions' }])}
      <div class="section-heading">
        <span class="section-heading__label">Tailored Solutions</span>
        <h1 class="section-heading__title">Industry-Specific Digital Systems</h1>
        <p class="section-heading__subtitle">
          Engineered architectures designed to solve real operational bottlenecks across key sectors.
        </p>
      </div>

      <div class="grid grid--3 mb-12">
        <div class="card">
          <span class="badge badge--teal mb-3">Enterprise</span>
          <h3 class="card__title">SmartBiz</h3>
          <p class="card__description">Comprehensive business operations and inventory management platform.</p>
        </div>
        <div class="card">
          <span class="badge badge--teal mb-3">Education</span>
          <h3 class="card__title">EduFlow</h3>
          <p class="card__description">Integrated school administration and student management solution.</p>
        </div>
        <div class="card">
          <span class="badge badge--teal mb-3">Healthcare</span>
          <h3 class="card__title">ShegerHealth</h3>
          <p class="card__description">Clinical management and patient workflow records.</p>
        </div>
      </div>
    </div>
    ${renderGlobalCTA()}
  `,

  '/portfolio': () => `
    <div class="container section">
      ${renderBreadcrumbs([{ label: 'Home', path: '/' }, { label: 'Portfolio' }])}
      <div class="section-heading">
        <span class="section-heading__label">Case Studies</span>
        <h1 class="section-heading__title">Selected Works & Systems</h1>
        <p class="section-heading__subtitle">
          Real-world products and software platforms built and deployed by URJIKO Labs.
        </p>
      </div>

      <div class="grid grid--2 mb-12">
        <div class="card card--project">
          <div class="card__body">
            <div class="card__meta">
              <span class="badge badge--navy">Full-Stack ERP</span>
              <span class="badge badge--teal">Active Client</span>
            </div>
            <h3 class="card__title">SmartBiz Management Suite</h3>
            <p class="card__description">Automating point-of-sale, inventory, and supply chain tracking for retail businesses.</p>
          </div>
        </div>

        <div class="card card--project">
          <div class="card__body">
            <div class="card__meta">
              <span class="badge badge--navy">Logistics</span>
              <span class="badge badge--teal">Real-Time</span>
            </div>
            <h3 class="card__title">Transport & Fleet Management</h3>
            <p class="card__description">Live vehicle tracking, driver scheduling, and automated dispatch operations.</p>
          </div>
        </div>
      </div>
    </div>
    ${renderGlobalCTA()}
  `,

  '/about': () => `
    <div class="container section">
      ${renderBreadcrumbs([{ label: 'Home', path: '/' }, { label: 'About' }])}
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

  '/contact': () => `
    <div class="container section">
      ${renderBreadcrumbs([{ label: 'Home', path: '/' }, { label: 'Contact' }])}
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
            title: 'Quickest Response via Telegram',
            description: 'Directly message our engineering lead on Telegram to discuss requirements, feasibility, and project estimates.',
          })}

          <div class="card mt-6" style="margin-top: var(--space-6);">
            <h4 class="card__title mb-2">Email Inquiries</h4>
            <p class="text-sm text-secondary mb-2">For formal RFPs, partnerships, and detailed specifications:</p>
            <a href="mailto:${companyConfig.contact.email}" class="font-semibold text-teal">${companyConfig.contact.email}</a>
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

  '/404': () => `
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
