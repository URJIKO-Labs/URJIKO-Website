import { icons } from "../common/Icons.js";

/**
 * URJIKO Labs — Core Services Cards Component
 *
 * Displays 6 core services with correct hierarchy:
 * Core: UI/UX Design, Website Development, Business Systems
 * Supporting: Mobile App Development, AI Solutions
 * Ongoing: Maintenance & Support
 */
export function renderServiceCards() {
  const services = [
    {
      id: "ui-ux-design",
      number: "01",
      title: "UI/UX Design",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`,
      description:
        "Design intuitive, user-centered interfaces — from wireframes and prototypes to complete design systems that guide development.",
      tags: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "UI Audits",
        "Interactive Mockups",
      ],
    },
    {
      id: "web-dev",
      number: "02",
      title: "Website Development",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      description:
        "Build modern, responsive websites and digital platforms around organizational goals.",
      tags: [
        "Business Websites",
        "Portfolio Sites",
        "Landing Pages",
        "Digital Platforms",
        "Responsive Design",
        "SEO-Ready",
      ],
    },
    {
      id: "business-systems",
      number: "03",
      title: "Business Management Systems & Custom Software",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
      description:
        "Build practical business management systems and custom software — ERP, POS, inventory, booking platforms, and workflow tools built around your operations.",
      tags: [
        "ERP & POS",
        "Inventory",
        "Customer Management",
        "Booking Systems",
        "Dashboards",
        "APIs",
      ],
      featured: {
        label: "Featured: SmartBiz ERP",
        href: "/portfolio/smartbiz",
      },
    },
    {
      id: "ai-solutions",
      number: "04",
      title: "AI & Intelligent Solutions",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
      description:
        "Practical AI, automation, data analysis and intelligent features for real business workflows.",
      tags: [
        "AI Assistants",
        "Workflow Automation",
        "Data Analysis",
        "Intelligent Search",
        "AI Integration",
      ],
    },
    {
      id: "mobile-apps",
      number: "05",
      title: "Mobile App Development",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
      description:
        "Mobile applications that extend business systems and services to mobile users.",
      tags: [
        "iOS & Android",
        "Cross-Platform",
        "Push Notifications",
        "Offline Support",
        "Mobile Workflows",
      ],
    },
    {
      id: "maintenance",
      number: "06",
      title: "Maintenance & Technical Support",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
      description:
        "Ongoing improvements, bug fixes, updates, security and technical support after launch.",
      tags: [
        "Bug Fixes",
        "Updates",
        "Monitoring",
        "Security",
        "Performance",
        "Feature Improvements",
      ],
    },
  ];

  const cardsHtml = services
    .map(
      (service) => `
      <div ${service.id ? `id="${service.id}"` : ""} class="card flex flex-col" style="padding: var(--space-5);">
        <div>
          <!-- Top: Number & Icon -->
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-2">
              <span class="font-bold" style="color: var(--color-blue); font-size: var(--font-size-sm); font-family: monospace;">${service.number}</span>
              <div style="width: 2.25rem; height: 2.25rem; border-radius: 50%; background-color: var(--color-bg-light-blue); color: var(--color-blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                ${service.icon}
              </div>
            </div>
            ${
              service.featured
                ? `<a href="${service.featured.href}" data-link class="badge badge--blue text-xs font-semibold" style="text-decoration: none;">${service.featured.label}</a>`
                : ""
            }
          </div>

          <!-- Heading -->
          <h3 class="card__title text-navy mb-2" style="font-size: var(--font-size-md);">${service.title}</h3>

          <!-- Description -->
          <p class="card__description text-secondary mb-4" style="font-size: var(--font-size-sm); line-height: 1.6;">${service.description}</p>
        </div>

        <div>
          <!-- Capabilities Tags -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${service.tags
              .map(
                (tag) =>
                  `<span class="badge badge--outline text-xs">${tag}</span>`,
              )
              .join("")}
          </div>

          <!-- Action Link -->
          <a href="/contact" data-link class="card__link">
            <span>Learn More</span>
            ${icons.arrowRight("w-4 h-4")}
          </a>
        </div>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section" aria-labelledby="core-services-heading">
      <div class="container">
        <!-- Section Heading -->
        <div class="section-heading">
          <span class="section-heading__label">CORE SERVICES</span>
          <h2 id="core-services-heading" class="section-heading__title">What We Can Build For You</h2>
          <p class="section-heading__subtitle text-balance">
            From websites to intelligent software, every service is built around solving real business problems.
          </p>
        </div>

        <!-- 6 Service Cards Grid -->
        <div class="grid grid--2 gap-5">
          ${cardsHtml}
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        #core-services-heading ~ .grid {
          gap: var(--space-4) !important;
        }
        #core-services-heading ~ .grid .card {
          padding: var(--space-4) !important;
        }
        #core-services-heading ~ .grid .card__description {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        #core-services-heading ~ .grid .flex.flex-wrap.gap-1_5 {
          display: none;
        }
      }
    </style>
  `;
}
