import { icons } from "../common/Icons.js";

/**
 * Portfolio Capabilities Section
 * Premium grid showcasing technical capabilities with icon + title + short description.
 */
export function renderPortfolioCapabilities() {
  const capabilitiesList = [
    {
      title: "Business Management",
      desc: "Centralized platforms for tracking sales, inventory, and operations.",
      icon: icons.layers("w-5 h-5 text-blue"),
    },
    {
      title: "Inventory & POS",
      desc: "Real-time stock monitoring and point-of-sale transaction processing.",
      icon: icons.database("w-5 h-5 text-blue"),
    },
    {
      title: "Dashboards & Analytics",
      desc: "Visual data summaries, operational metrics, and executive insights.",
      icon: icons.barChart("w-5 h-5 text-blue"),
    },
    {
      title: "Role-Based Access",
      desc: "Secure permissions, authentication, and user access levels.",
      icon: icons.shield("w-5 h-5 text-blue"),
    },
    {
      title: "Workflow Automation",
      desc: "Automating request approvals, notifications, and internal status shifts.",
      icon: icons.cpu("w-5 h-5 text-blue"),
    },
    {
      title: "API & Data Integration",
      desc: "Connecting custom systems with external REST APIs and databases.",
      icon: icons.code("w-5 h-5 text-blue"),
    },
  ];

  const itemsHtml = capabilitiesList
    .map(
      (item) => `
        <div class="capability-card" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-5); display: flex; flex-direction: column; gap: var(--space-2); box-shadow: var(--shadow-sm); transition: transform 0.2s ease, box-shadow 0.2s ease;">
          <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-sm); background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 0.25rem;">
            ${item.icon}
          </div>
          <h4 style="font-size: 1rem; font-weight: 700; color: var(--color-navy); margin: 0;">${item.title}</h4>
          <p style="font-size: 0.85rem; color: var(--color-text-secondary); line-height: 1.5; margin: 0;">${item.desc}</p>
        </div>
      `,
    )
    .join("");

  return `
    <section class="section" aria-labelledby="portfolio-capabilities-heading" style="background: var(--color-white); border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">ENGINEERING CAPABILITIES</span>
          <h2 id="portfolio-capabilities-heading" class="section-heading__title">Capabilities Demonstrated</h2>
          <p class="section-heading__subtitle text-balance">
            Core technical capabilities and system architectures demonstrated across our project portfolio.
          </p>
        </div>

        <!-- Capabilities Grid -->
        <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-4);">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}
