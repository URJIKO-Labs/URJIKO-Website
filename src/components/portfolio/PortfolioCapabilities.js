import { icons } from "../common/Icons.js";

/**
 * Portfolio Capabilities Section — Business Outcome Focused
 */
export function renderPortfolioCapabilities() {
  const capabilitiesList = [
    {
      title: "Business Management",
      desc: "Centralized platforms for sales, inventory, customers, and operational workflows.",
      icon: icons.layers("w-5 h-5 text-blue"),
    },
    {
      title: "Inventory & POS",
      desc: "Product tracking, stock monitoring, and point-of-sale workflows.",
      icon: icons.database("w-5 h-5 text-blue"),
    },
    {
      title: "Dashboards & Reporting",
      desc: "Operational summaries, reports, and decision-support interfaces.",
      icon: icons.barChart("w-5 h-5 text-blue"),
    },
    {
      title: "Role-Based Access",
      desc: "Authentication, permissions, and user-specific access.",
      icon: icons.shield("w-5 h-5 text-blue"),
    },
    {
      title: "Workflow Management",
      desc: "Structured requests, approvals, statuses, and internal processes.",
      icon: icons.cpu("w-5 h-5 text-blue"),
    },
    {
      title: "API & Data Integration",
      desc: "Connecting systems with APIs, databases, and external services.",
      icon: icons.code("w-5 h-5 text-blue"),
    },
  ];

  const itemsHtml = capabilitiesList
    .map(
      (item) => `
        <div class="capability-card" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-4); display: flex; flex-direction: column; gap: var(--space-2);">
          <div style="width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm); background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 0.25rem;">
            ${item.icon}
          </div>
          <h3 style="font-size: 0.95rem; font-weight: 600; color: var(--color-navy); margin: 0;">${item.title}</h3>
          <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">${item.desc}</p>
        </div>
      `,
    )
    .join("");

  return `
    <section class="section" aria-labelledby="portfolio-capabilities-heading" style="background: var(--color-white); border-top: 1px solid var(--color-border-subtle); padding-top: var(--space-8); padding-bottom: var(--space-8);">
      <div class="container">
        <!-- Section Header -->
        <div class="section-heading section-heading--center" style="margin-bottom: var(--space-5);">
          <span class="section-heading__label">Capabilities</span>
          <h2 id="portfolio-capabilities-heading" class="section-heading__title">Capabilities Demonstrated</h2>
          <p class="section-heading__subtitle text-balance">
            Core business capabilities demonstrated across our project portfolio.
          </p>
        </div>

        <!-- Capabilities Grid -->
        <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4);">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}
