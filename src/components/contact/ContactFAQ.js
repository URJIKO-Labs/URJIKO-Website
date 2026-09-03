export function renderContactFAQ() {
  return `
    <section class="section">
      <div class="container">
        <h2 class="text-navy font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div class="grid grid--2 gap-6">
          <div class="card card--service">
            <h3 class="text-navy font-semibold mb-3">What kinds of projects do you build?</h3>
            <p class="text-secondary">Websites, business systems, custom software, AI solutions, and digital platforms.</p>
          </div>

          <div class="card card--service">
            <h3 class="text-navy font-semibold mb-3">Do you work with small businesses?</h3>
            <p class="text-secondary">Yes. Solutions can start with a focused MVP and grow over time.</p>
          </div>

          <div class="card card--service">
            <h3 class="text-navy font-semibold mb-3">Do you build everything at once?</h3>
            <p class="text-secondary">No. URJIKO recommends prioritizing the most important problem first.</p>
          </div>

          <div class="card card--service">
            <h3 class="text-navy font-semibold mb-3">Who pays for hosting and infrastructure?</h3>
            <p class="text-secondary">Production infrastructure is normally owned and paid for by the client. URJIKO can recommend, configure, deploy, and maintain it.</p>
          </div>

          <div class="card card--service">
            <h3 class="text-navy font-semibold mb-3">How does a project start?</h3>
            <p class="text-secondary">First understand the requirements, then agree on scope, pricing, timeline, and responsibilities before development begins.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
