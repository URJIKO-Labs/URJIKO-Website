export function renderCompanyIntro() {
  return `
    <section class="section bg-soft" aria-labelledby="company-intro-title" style="border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container">
        <div class="grid items-start" style="grid-template-columns: 1fr; gap: var(--space-10);">
          <div style="max-width: 48rem; margin: 0 auto;">
            <h2 id="company-intro-title" class="mb-6" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: var(--color-navy); line-height: 1.2;">
              Building Practical Digital Solutions
            </h2>
            
            <p class="text-secondary mb-6 text-lg" style="line-height: 1.7;">
              URJIKO Labs is a software and technology company focused on building useful digital products and systems for organizations. We don't build software simply because technology is available. We build it when technology can make a real process better.
            </p>

            <div class="grid mt-8" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-6);">
              
              <!-- Point 1 -->
              <div>
                <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-lg);">Understand First</h3>
                <p class="text-secondary text-sm" style="line-height: 1.6;">We start by learning how your organization currently works before writing any code.</p>
              </div>

              <!-- Point 2 -->
              <div>
                <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-lg);">Build Around the Problem</h3>
                <p class="text-secondary text-sm" style="line-height: 1.6;">Our software is designed around your actual workflows and operational bottlenecks.</p>
              </div>

              <!-- Point 3 -->
              <div>
                <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-lg);">Keep It Practical</h3>
                <p class="text-secondary text-sm" style="line-height: 1.6;">We focus on the most important functionality first to deliver immediate value.</p>
              </div>

              <!-- Point 4 -->
              <div>
                <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-lg);">Improve Over Time</h3>
                <p class="text-secondary text-sm" style="line-height: 1.6;">We build systems in phases, allowing them to evolve rather than forcing everything into version one.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
