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
      <div class="card card--service" style="padding: var(--space-4, 1rem) var(--space-5, 1.25rem); background-color: var(--color-bg-soft, #f8fafc); border: 1px solid var(--color-border-subtle, #e2e8f0); border-radius: 8px;">
        <h3 class="text-navy font-semibold" style="font-size: var(--font-size-base, 1rem); margin-bottom: 0.35rem; color: var(--color-navy); line-height: 1.4;">${item.question}</h3>
        <p class="text-secondary" style="font-size: var(--font-size-sm, 0.875rem); line-height: 1.6; margin: 0; color: var(--color-slate-600, #475569);">${item.answer}</p>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section" aria-labelledby="faq-heading" style="padding-top: var(--space-8, 2rem); padding-bottom: var(--space-12, 3rem);">
      <div class="container" style="max-width: 56rem; margin: 0 auto;">
        
        <!-- Compact Section Heading -->
        <div class="text-center mb-6">
          <span class="section-heading__label" style="display: block; font-size: var(--font-size-xs, 0.75rem); letter-spacing: 0.05em; margin-bottom: 0.25rem;">FREQUENTLY ASKED QUESTIONS</span>
          <h2 id="faq-heading" class="text-navy font-semibold" style="font-size: var(--font-size-xl, 1.25rem); color: var(--color-navy); margin: 0;">Got Questions? We Have Answers</h2>
        </div>

        <!-- 2-Column Compact FAQ Grid -->
        <div class="grid grid--2 gap-4">
          ${faqCardsHtml}
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        .grid.grid--2.gap-4 {
          grid-template-columns: 1fr !important;
          gap: var(--space-3) !important;
        }
      }
    </style>
  `;
}
