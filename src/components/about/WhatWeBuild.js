import { icons } from "../common/Icons.js";

export function renderWhatWeBuild() {
  const services = [
    {
      number: "01",
      title: "Website Development",
      description:
        "Professional websites and web applications built for performance, credibility, and user experience.",
      href: "/services#web-dev",
    },
    {
      number: "02",
      title: "Business Systems & Custom Software",
      description:
        "Inventory, POS, CRM, reporting, and software designed around your specific operational workflows.",
      href: "/services#business-systems",
    },
    {
      number: "03",
      title: "AI & Intelligent Solutions",
      description:
        "AI-powered features, automation workflows, and data processing tools that add intelligence to your operations.",
      href: "/services#ai-solutions",
    },
    {
      number: "04",
      title: "Mobile App Development",
      description:
        "Cross-platform and native mobile applications for Android and iOS.",
      href: "/services#mobile-app",
    },
    {
      number: "05",
      title: "UI/UX Design",
      description:
        "User research, interface design, and prototyping that makes software intuitive and easy to adopt.",
      href: "/services#ui-ux",
    },
    {
      number: "06",
      title: "Maintenance & Technical Support",
      description:
        "Ongoing updates, bug fixes, monitoring, and improvements to keep your systems running smoothly.",
      href: "/services#maintenance",
    },
  ];

  const servicesHtml = services
    .map(
      (service) => `
      <a href="${service.href}" data-link class="card" style="text-decoration: none; padding: var(--space-5); display: flex; gap: var(--space-4); align-items: flex-start; border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-white); transition: transform 0.2s, box-shadow 0.2s;">
        <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 700; font-size: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: monospace;">${service.number}</div>
        <div>
          <h3 class="text-navy font-semibold mb-1" style="font-size: var(--font-size-base);">${service.title}</h3>
          <p class="text-secondary text-sm" style="line-height: 1.6; margin: 0;">${service.description}</p>
        </div>
      </a>
    `,
    )
    .join("");

  return `
    <section class="section bg-soft" aria-labelledby="what-we-build-title">
      <div class="container">
        
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">SERVICES</span>
          <h2 id="what-we-build-title" class="section-heading__title">How We Help Organizations</h2>
          <p class="section-heading__subtitle text-balance">
            We focus on core digital solutions that improve how organizations operate and present themselves online.
          </p>
        </div>

        <div class="grid grid--2" style="gap: var(--space-4);">
          ${servicesHtml}
        </div>

        <div class="text-center" style="margin-top: var(--space-8);">
          <a href="/services" data-link class="btn btn--secondary">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        [aria-labelledby="what-we-build-title"] .card {
          padding: var(--space-4) !important;
          gap: var(--space-3) !important;
        }
        [aria-labelledby="what-we-build-title"] .card > div:first-child {
          width: 32px !important;
          height: 32px !important;
          font-size: 0.65rem !important;
        }
        [aria-labelledby="what-we-build-title"] .card h3 {
          font-size: var(--font-size-sm) !important;
        }
        [aria-labelledby="what-we-build-title"] .card p {
          font-size: 0.8rem !important;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    </style>
  `;
}
