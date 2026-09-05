export function initFAQAccordion() {
  document.querySelectorAll(".faq-item__trigger").forEach((trigger) => {
    if (trigger.dataset.initialized) return;
    trigger.dataset.initialized = "true";

    const item = trigger.closest(".faq-item");
    const content = item.querySelector(".faq-item__content");
    const icon = trigger.querySelector(".faq-item__icon");

    // Add ARIA roles
    trigger.setAttribute("role", "button");
    trigger.setAttribute("aria-expanded", "false");
    // Ensure content has an ID for aria-controls (generate one if missing)
    if (!content.id) {
        content.id = 'faq-content-' + Math.random().toString(36).substr(2, 9);
    }
    trigger.setAttribute("aria-controls", content.id);
    content.setAttribute("role", "region");

    trigger.addEventListener("click", () => {
      const isOpen =
        content.style.maxHeight && content.style.maxHeight !== "0px";

      // Close all others
      document.querySelectorAll(".faq-item__content").forEach((c) => {
        c.style.maxHeight = "0px";
      });
      document.querySelectorAll(".faq-item__icon").forEach((ic) => {
        ic.style.transform = "rotate(0deg)";
      });
      document.querySelectorAll(".faq-item").forEach((fi) => {
        fi.style.boxShadow = "none";
      });
      document.querySelectorAll(".faq-item__trigger").forEach(t => {
          t.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
        item.style.boxShadow = "0 2px 12px rgba(6, 36, 92, 0.08)";
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
}

