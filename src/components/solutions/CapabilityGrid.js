/**
 * URJIKO Labs — Technical Capability Grid Component
 * Displays a clean, compact grid of built-in digital system capabilities.
 */

export function renderCapabilityGrid() {
  const capabilities = [
    {
      title: 'Inventory Management',
      description: 'Track products, stock levels, and availability across your business.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    },
    {
      title: 'Point of Sale',
      description: 'Process transactions and manage sales records in real time.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><line x1="6" y1="15" x2="10" y2="15"></line><line x1="14" y1="15" x2="18" y2="15"></line></svg>`,
    },
    {
      title: 'Customer Management',
      description: 'Organize contacts, accounts, and interactions in one place.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    },
    {
      title: 'Dashboards',
      description: 'Get real-time visibility into operations, sales, and performance.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect></svg>`,
    },
    {
      title: 'Reporting',
      description: 'Generate business intelligence and export data when needed.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><line x1="2" y1="20" x2="22" y2="20"></line></svg>`,
    },
    {
      title: 'Authentication',
      description: 'Secure login and session management for every user.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    },
    {
      title: 'Role-Based Access',
      description: 'Give each user access to the information and actions relevant to their role.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    },
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline business processes.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    },
    {
      title: 'Data Management',
      description: 'Structured storage, reliable queries, and data integrity across systems.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    },
    {
      title: 'Booking & Scheduling',
      description: 'Manage appointments, reservations, and resource allocation.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    },
    {
      title: 'Administration',
      description: 'System settings, user management, and configuration controls.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    },
    {
      title: 'AI Integration',
      description: 'Add intelligent features, automation, and data-driven insights.',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    },
  ];

  const itemsHtml = capabilities
    .map(
      (item) => `
        <div class="capability-card">
          <div class="capability-card__icon" aria-hidden="true">
            ${item.icon}
          </div>
          <h3 class="text-sm font-semibold text-navy mb-1">${item.title}</h3>
          <p class="text-xs text-muted mb-0" style="line-height: 1.5;">${item.description}</p>
        </div>
      `
    )
    .join('');

  return `
    <section class="section bg-white" aria-labelledby="capabilities-heading">
      <div class="container">
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">TECHNICAL CAPABILITIES</span>
          <h2 id="capabilities-heading" class="section-heading__title">Built-In Features Across Every Solution</h2>
          <p class="section-heading__subtitle text-balance">
            Common capabilities integrated into our digital systems.
          </p>
        </div>

        <!-- Capabilities Grid -->
        <div class="capability-grid">
          ${itemsHtml}
        </div>
      </div>
    </section>

    <style>
      .capability-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
        gap: var(--space-4);
      }

      .capability-card {
        background-color: var(--color-white);
        border: 1px solid var(--color-border-subtle);
        border-radius: var(--radius-sm);
        padding: var(--space-4);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: box-shadow var(--transition-base), border-color var(--transition-base);
      }

      .capability-card:hover {
        box-shadow: var(--shadow-sm);
        border-color: var(--color-border);
      }

      .capability-card__icon {
        width: 36px;
        height: 36px;
        min-width: 36px;
        border-radius: var(--radius-full);
        background-color: var(--color-bg-light-blue);
        color: var(--color-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--space-3);
        flex-shrink: 0;
      }

      .capability-card__icon svg {
        width: 20px;
        height: 20px;
      }
    </style>
  `;
}
