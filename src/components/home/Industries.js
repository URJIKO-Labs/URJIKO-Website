/**
 * Who We Help / Industries Section
 * Focused on primary industries with clear descriptions.
 */
export function renderIndustries() {
  const industries = [
    {
      title: 'SMEs & Shops',
      description: 'Inventory, POS, customer management, and business dashboards for growing businesses.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    },
    {
      title: 'Hotels & Hospitality',
      description: 'Websites, booking workflows, and operational systems for hospitality businesses.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-4"></path><path d="M9 9v.01"></path><path d="M9 12v.01"></path><path d="M9 15v.01"></path><path d="M9 18v.01"></path></svg>`,
    },
    {
      title: 'Schools & Training Centers',
      description: 'Student, teacher, attendance, grade, and administration systems for educational institutions.',
      icon: `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    },
  ];

  const secondaryIndustries = [
    'Clinics & Healthcare',
    'Restaurants & Cafes',
    'NGOs & Nonprofits',
    'Other Growing Organizations',
  ];

  const industriesHtml = industries
    .map(
      (ind) => `
      <div class="card flex flex-col" style="padding: var(--space-5); text-align: left;">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex items-center justify-center" style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-sm); background: var(--color-bg-light-blue); color: var(--color-blue); flex-shrink: 0;">
            ${ind.icon}
          </div>
          <h3 style="font-size: var(--font-size-md); font-weight: 600; color: var(--color-navy); margin-bottom: 0;">${ind.title}</h3>
        </div>
        <p class="text-secondary mb-0" style="font-size: var(--font-size-sm); line-height: 1.6;">${ind.description}</p>
      </div>
    `
    )
    .join('');

  const secondaryHtml = secondaryIndustries
    .map(
      (ind) => `
      <span class="badge badge--outline">${ind}</span>
    `
    )
    .join('');

  return `
    <section class="section" aria-labelledby="industries-heading">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading">
          <span class="section-heading__label">Who We Help</span>
          <h2 id="industries-heading" class="section-heading__title">Industries We Serve</h2>
          <p class="section-heading__subtitle text-balance">
            We build software for organizations with real operational needs — from small businesses to schools and hospitality businesses.
          </p>
        </div>

        <!-- Primary Industries -->
        <div class="grid grid--3 gap-5" style="margin-bottom: var(--space-6);">
          ${industriesHtml}
        </div>

        <!-- Secondary Industries -->
        <div class="flex flex-col items-center" style="gap: var(--space-3);">
          <p class="text-secondary text-sm" style="margin-bottom: 0; font-weight: 500;">Also relevant for:</p>
          <div class="flex flex-wrap justify-center gap-2">
            ${secondaryHtml}
          </div>
        </div>

      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        [aria-labelledby="industries-heading"] .grid--3 {
          grid-template-columns: 1fr !important;
          gap: var(--space-4) !important;
        }
      }
    </style>
  `;
}
