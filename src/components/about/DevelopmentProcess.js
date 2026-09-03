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
        <div class="mb-12">
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
  `;
}
