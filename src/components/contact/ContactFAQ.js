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

  const faqCardsHtml = faqs
    .map(
      (item) => `
      <div class="card" style="padding: var(--space-5); background-color: var(--color-white); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg);">
        <h3 class="text-navy font-semibold" style="font-size: var(--font-size-base); margin-bottom: 0.35rem; line-height: 1.4;">${item.question}</h3>
        <p class="text-secondary" style="font-size: var(--font-size-sm); line-height: 1.6; margin: 0;">${item.answer}</p>
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

        <div class="grid grid--2" style="gap: var(--space-4);">
          ${faqCardsHtml}
        </div>
      </div>
    </section>
  `;
}
