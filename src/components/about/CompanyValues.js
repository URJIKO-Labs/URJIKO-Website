export function renderCompanyValues() {
  return `
    <section class="section bg-soft py-12">
      <div class="container">
        <h2 class="text-navy font-bold mb-8 text-center text-3xl">What We Believe</h2>
        <div class="grid grid--3 gap-6">
          <div class="card p-6 bg-white border border-subtle shadow-sm rounded-lg">
            <div class="w-8 h-1 bg-blue mb-4 rounded"></div>
            <h3 class="text-navy font-semibold mb-2 text-lg">Practicality</h3>
            <p class="text-secondary text-sm">Build what solves the problem.</p>
          </div>
          <div class="card p-6 bg-white border border-subtle shadow-sm rounded-lg">
            <div class="w-8 h-1 bg-blue mb-4 rounded"></div>
            <h3 class="text-navy font-semibold mb-2 text-lg">Clarity</h3>
            <p class="text-secondary text-sm">Keep systems understandable and usable.</p>
          </div>
          <div class="card p-6 bg-white border border-subtle shadow-sm rounded-lg">
            <div class="w-8 h-1 bg-blue mb-4 rounded"></div>
            <h3 class="text-navy font-semibold mb-2 text-lg">Quality</h3>
            <p class="text-secondary text-sm">Pay attention to reliability, security, and user experience.</p>
          </div>
          <div class="card p-6 bg-white border border-subtle shadow-sm rounded-lg">
            <div class="w-8 h-1 bg-blue mb-4 rounded"></div>
            <h3 class="text-navy font-semibold mb-2 text-lg">Continuous Improvement</h3>
            <p class="text-secondary text-sm">Software should evolve as needs change.</p>
          </div>
          <div class="card p-6 bg-white border border-subtle shadow-sm rounded-lg">
            <div class="w-8 h-1 bg-blue mb-4 rounded"></div>
            <h3 class="text-navy font-semibold mb-2 text-lg">Partnership</h3>
            <p class="text-secondary text-sm">Work with clients rather than simply delivering software to them.</p>
          </div>
          <div class="card p-6 bg-white border border-subtle shadow-sm rounded-lg">
            <div class="w-8 h-1 bg-blue mb-4 rounded"></div>
            <h3 class="text-navy font-semibold mb-2 text-lg">Responsibility</h3>
            <p class="text-secondary text-sm">Be honest about capabilities, timelines, limitations, and costs.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
