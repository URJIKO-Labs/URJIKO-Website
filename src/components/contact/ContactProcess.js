export function renderContactProcess() {
  return `
    <section class="section" style="background-color: var(--color-bg-soft);">
      <div class="container">
        <div class="mb-8" style="text-align: center;">
          <h2 class="text-navy">What Happens Next?</h2>
        </div>
        
        <div class="flex flex-col gap-4" style="flex-direction: row; flex-wrap: wrap; justify-content: space-between;">
          <div class="card p-4" style="flex: 1 1 200px;">
            <div class="text-blue font-bold mb-2">01 &mdash; We Listen</div>
            <p class="text-sm text-secondary">You explain your current situation and problem.</p>
          </div>
          
          <div class="card p-4" style="flex: 1 1 200px;">
            <div class="text-blue font-bold mb-2">02 &mdash; We Understand</div>
            <p class="text-sm text-secondary">We ask questions about your workflow, users, and requirements.</p>
          </div>
          
          <div class="card p-4" style="flex: 1 1 200px;">
            <div class="text-blue font-bold mb-2">03 &mdash; We Recommend</div>
            <p class="text-sm text-secondary">We suggest a practical solution and prioritize the MVP.</p>
          </div>
          
          <div class="card p-4" style="flex: 1 1 200px;">
            <div class="text-blue font-bold mb-2">04 &mdash; We Estimate</div>
            <p class="text-sm text-secondary">We provide scope, timeline, pricing, and responsibilities.</p>
          </div>
          
          <div class="card p-4" style="flex: 1 1 200px;">
            <div class="text-blue font-bold mb-2">05 &mdash; We Start</div>
            <p class="text-sm text-secondary">Once the agreement, deposit, and requirements are ready, development begins.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
