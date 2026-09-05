export function initCustomSelects() {
  document.querySelectorAll(".custom-select").forEach((select) => {
    if (select.dataset.initialized) return;
    select.dataset.initialized = "true";

    const trigger = select.querySelector(".custom-select__trigger");
    const dropdown = select.querySelector(".custom-select__dropdown");
    const hiddenInput = select.querySelector('input[type="hidden"]');
    const options = select.querySelectorAll(".custom-select__option");
    const displaySpan = trigger.querySelector("span");

    // ARIA Attributes
    trigger.setAttribute("role", "combobox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-haspopup", "listbox");
    dropdown.setAttribute("role", "listbox");

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".custom-select__dropdown").forEach((d) => {
        if (d !== dropdown) {
            d.classList.remove("open");
            const otherTrigger = d.parentElement.querySelector(".custom-select__trigger");
            if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
        }
      });
      const isOpen = dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    options.forEach((option) => {
      option.setAttribute("role", "option");
      option.addEventListener("click", () => {
        const value = option.dataset.value;
        const text = option.textContent;
        hiddenInput.value = value;
        displaySpan.textContent = text;
        displaySpan.style.color = value
          ? "var(--color-navy)"
          : "var(--color-muted)";
        dropdown.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
        
        // Update aria-selected
        options.forEach(opt => opt.setAttribute("aria-selected", "false"));
        option.setAttribute("aria-selected", "true");
      });
    });
  });

  // Close dropdowns on outside click
  document.addEventListener("click", () => {
    document.querySelectorAll(".custom-select__dropdown").forEach((d) => {
      d.classList.remove("open");
      const trigger = d.parentElement.querySelector(".custom-select__trigger");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
    });
  });
}

