/**
 * How We Work (Process) Section
 *
 * 6-step project delivery process:
 * 01 Discover, 02 Plan, 03 Design, 04 Develop, 05 Test, 06 Deploy & Support
 */
export function renderProcess() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand your business goals, users, pain points, and existing operational workflow.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Define scope, technical priorities, system architecture, deliverables, and core MVP.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Create clean, intuitive user experiences, component layouts, and database models.",
    },
    {
      number: "04",
      title: "Develop",
      description:
        "Build your solution using modern engineering practices, clean code, and robust APIs.",
    },
    {
      number: "05",
      title: "Test",
      description:
        "Verify functionality, performance, security, mobile responsiveness, and data integrity.",
    },
    {
      number: "06",
      title: "Deploy & Support",
      description:
        "Launch the system reliably, onboard your team, and provide continuous technical support.",
    },
  ];

  const stepsHtml = steps
    .map(
      (s) => `
      <div class="card flex flex-col justify-between" style="background: var(--color-white); border-top: 3px solid var(--color-teal);">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="font-bold text-teal" style="font-size: var(--font-size-2xl); font-family: monospace;">${s.number}</span>
            <span class="text-xs font-semibold text-muted uppercase">Stage</span>
          </div>
          <h3 class="card__title mb-2">${s.title}</h3>
          <p class="text-sm text-secondary mb-0" style="line-height: 1.55;">${s.description}</p>
        </div>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section bg-soft" aria-labelledby="process-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">Clear Delivery Cycle</span>
          <h2 id="process-heading" class="section-heading__title">How We Work</h2>
          <p class="section-heading__subtitle text-balance">
            A transparent, milestone-driven process keeps projects on schedule, within scope, and aligned with your organizational goals.
          </p>
        </div>

        <!-- 6 Steps Grid (Responsive: 1 col on mobile, 2 col on tablet, 3 col on desktop) -->
        <div class="grid grid--3 gap-6">
          ${stepsHtml}
        </div>

      </div>
    </section>
  `;
}
