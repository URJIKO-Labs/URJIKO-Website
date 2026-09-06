export function renderCompanyIntro() {
  return `
    <section class="section bg-soft" aria-labelledby="company-intro-title" style="border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container">
        <div style="max-width: 48rem; margin: 0 auto;">
          <div class="section-heading" style="margin-bottom: var(--space-6);">
            <span class="section-heading__label">WHO WE ARE</span>
            <h2 id="company-intro-title" class="section-heading__title">Building Practical Digital Solutions</h2>
          </div>
          
          <p class="text-secondary mb-6" style="font-size: var(--font-size-md); line-height: 1.75;">
            URJIKO Labs is a software and technology company focused on building useful digital products and systems for organizations. We don't build software simply because technology is available. We build it when technology can make a real process better.
          </p>

          <p class="text-secondary mb-8" style="font-size: var(--font-size-md); line-height: 1.75;">
            Founded in 2026, we help businesses, schools, transport operators, and healthcare organizations across Ethiopia move from disconnected tools and manual processes to practical digital systems.
          </p>

          <div class="grid" style="grid-template-columns: repeat(2, 1fr); gap: var(--space-6);">
            <div>
              <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-md);">Understand First</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">We start by learning how your organization currently works before writing any code.</p>
            </div>
            <div>
              <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-md);">Build Around the Problem</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Our software is designed around your actual workflows and operational bottlenecks.</p>
            </div>
            <div>
              <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-md);">Keep It Practical</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">We focus on the most important functionality first to deliver immediate value.</p>
            </div>
            <div>
              <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-md);">Improve Over Time</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">We build systems in phases, allowing them to evolve rather than forcing everything into version one.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
