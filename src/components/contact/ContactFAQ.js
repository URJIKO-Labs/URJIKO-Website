export function renderContactFAQ() {
  const faqs = [
    {
      question: "What kinds of projects do you build?",
      answer:
        "Websites, business management systems (ERP/POS), custom software, mobile apps, AI solutions, and digital platforms.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes. Solutions can start with a focused MVP and scale as your business grows.",
    },
    {
      question: "Do you build everything at once?",
      answer:
        "No. We recommend prioritizing your most critical operational problem first.",
    },
    {
      question: "Who pays for hosting infrastructure?",
      answer:
        "Infrastructure is owned by the client. URJIKO configures, deploys, and maintains it for you.",
    },
    {
      question: "How does a new project start?",
      answer:
        "We analyze your requirements, then agree on project scope, transparent pricing, timeline, and deliverables.",
    },
  ];

  const faqItemsHtml = faqs
    .map(
      (item, i) => `
      <div class="faq-item" style="border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); background: var(--color-white); overflow: hidden; transition: box-shadow 0.2s;">
        <button class="faq-item__trigger" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: var(--space-5); background: none; border: none; cursor: pointer; text-align: left; gap: var(--space-3);">
          <h3 style="font-size: var(--font-size-base); font-weight: 600; color: var(--color-navy); margin: 0; line-height: 1.4;">${item.question}</h3>
          <svg class="faq-item__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; transition: transform 0.3s;">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="faq-item__content" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease;">
          <p class="text-secondary" style="font-size: var(--font-size-sm); line-height: 1.7; padding: 0 var(--space-5) var(--space-5); margin: 0;">${item.answer}</p>
        </div>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section" aria-labelledby="faq-heading">
      <div class="container" style="max-width: 56rem;">
        
        <div class="section-heading section-heading--center" style="margin-bottom: var(--space-8);">
          <span class="section-heading__label">FAQ</span>
          <h2 id="faq-heading" class="section-heading__title">Got Questions? We Have Answers</h2>
        </div>

        <div class="flex flex-col gap-3">
          ${faqItemsHtml}
        </div>
      </div>
    </section>
  `;
}
