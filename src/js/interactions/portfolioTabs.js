export function initPortfolioTabs() {
  const tabs = document.querySelectorAll(".portfolio-tab");
  const panels = document.querySelectorAll(".portfolio-panel");
  if (tabs.length === 0) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.getAttribute("data-tab");

      tabs.forEach((t) => {
        t.classList.remove("portfolio-tab--active");
        t.style.background = "rgba(255, 255, 255, 0.05)";
        t.style.borderColor = "rgba(255,255,255,0.1)";
      });

      panels.forEach((p) => (p.style.display = "none"));

      this.classList.add("portfolio-tab--active");
      this.style.background = "rgba(7, 93, 184, 0.25)";
      this.style.borderColor = "var(--color-blue)";

      const targetPanel = document.querySelector(
        '[data-panel="' + target + '"]',
      );
      if (targetPanel) {
        targetPanel.style.display = "block";
        targetPanel.style.animation = "none";
        targetPanel.offsetHeight;
        targetPanel.style.animation = "";
      }
    });
  });
}

