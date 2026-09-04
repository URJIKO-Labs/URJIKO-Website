export function renderContactProcess() {
  return `
    <section class="section" style="background-color: var(--color-bg-soft);">
      <div class="container">
        <div class="section-heading section-heading--center" style="margin-bottom: var(--space-8);">
          <span class="section-heading__label">PROCESS</span>
          <h2 id="process-heading" class="section-heading__title">What Happens Next?</h2>
          <p class="section-heading__subtitle">
            From first contact to project kickoff — here's how we work.
          </p>
        </div>
        
        <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-4);">
          <div class="card" style="padding: var(--space-5); text-align: center;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-3); font-family: monospace;">01</div>
            <h3 class="text-navy font-semibold text-sm mb-2">We Listen</h3>
            <p class="text-secondary text-xs" style="line-height: 1.5;">You explain your current situation and problem.</p>
          </div>
          
          <div class="card" style="padding: var(--space-5); text-align: center;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-3); font-family: monospace;">02</div>
            <h3 class="text-navy font-semibold text-sm mb-2">We Understand</h3>
            <p class="text-secondary text-xs" style="line-height: 1.5;">We ask questions about your workflow and requirements.</p>
          </div>
          
          <div class="card" style="padding: var(--space-5); text-align: center;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-3); font-family: monospace;">03</div>
            <h3 class="text-navy font-semibold text-sm mb-2">We Recommend</h3>
            <p class="text-secondary text-xs" style="line-height: 1.5;">We suggest a practical solution and prioritize the MVP.</p>
          </div>
          
          <div class="card" style="padding: var(--space-5); text-align: center;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-3); font-family: monospace;">04</div>
            <h3 class="text-navy font-semibold text-sm mb-2">We Estimate</h3>
            <p class="text-secondary text-xs" style="line-height: 1.5;">We provide scope, timeline, and transparent pricing.</p>
          </div>
          
          <div class="card" style="padding: var(--space-5); text-align: center;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 700; font-size: 0.85rem; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-3); font-family: monospace;">05</div>
            <h3 class="text-navy font-semibold text-sm mb-2">We Start</h3>
            <p class="text-secondary text-xs" style="line-height: 1.5;">Once agreement and deposit are ready, development begins.</p>
          </div>
        </div>

        <style>
          @media (max-width: 768px) {
            section .grid[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 480px) {
            section .grid[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        </style>
      </div>
    </section>
  `;
}
