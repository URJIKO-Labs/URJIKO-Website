export function renderDevelopmentProcess() {
  const steps = [
    { num: '01', title: 'Discover', desc: 'Understand the organization, users, workflow, and problem.' },
    { num: '02', title: 'Plan', desc: 'Define priorities, scope, features, and the MVP.' },
    { num: '03', title: 'Design', desc: 'Create a clear user experience and system structure.' },
    { num: '04', title: 'Develop', desc: 'Build the software using appropriate technologies.' },
    { num: '05', title: 'Test', desc: 'Test functionality, usability, responsiveness, security, and data handling.' },
    { num: '06', title: 'Deploy', desc: 'Deploy the solution and prepare the client for use.' },
    { num: '07', title: 'Support', desc: 'Provide maintenance, improvements, and technical support where required.' }
  ];

  return `
    <section class="section" style="background-color: var(--color-bg-soft);">
      <div class="container">
        <div class="mb-8">
          <h2 class="text-navy font-bold" style="font-size: 2rem;">How We Work</h2>
        </div>
        
        <div class="grid grid--3 gap-6">
          ${steps.map(step => `
            <div class="card flex flex-col gap-3">
              <div class="font-bold" style="color: var(--color-blue); font-size: 1.5rem;">
                ${step.num}
              </div>
              <h3 class="text-navy font-semibold">
                ${step.title}
              </h3>
              <p class="text-secondary text-sm">
                ${step.desc}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        [style*="background-color: var(--color-bg-soft)"] .grid {
          grid-template-columns: 1fr !important;
          gap: var(--space-2) !important;
        }
        [style*="background-color: var(--color-bg-soft)"] .card {
          padding: var(--space-3) var(--space-4) !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: var(--space-3) !important;
        }
        [style*="background-color: var(--color-bg-soft)"] .card .font-bold {
          font-size: 0.875rem !important;
          min-width: 36px;
          text-align: center;
          background: var(--color-bg-light-blue);
          color: var(--color-blue);
          border-radius: var(--radius-sm);
          padding: var(--space-1) var(--space-2);
        }
        [style*="background-color: var(--color-bg-soft)"] .card h3 {
          font-size: var(--font-size-sm) !important;
          margin: 0 !important;
        }
        [style*="background-color: var(--color-bg-soft)"] .card p {
          margin: 0 !important;
          font-size: var(--font-size-xs) !important;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    </style>
  `;
}
