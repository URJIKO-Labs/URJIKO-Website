import { icons } from "../common/Icons.js";

export function initMobileMenu() {
  const toggleBtn = document.getElementById("navbar-toggle-btn");
  const toggleIcon = document.getElementById("navbar-toggle-icon");
  const mobilePanel = document.getElementById("mobile-nav-panel");

  if (!toggleBtn || !mobilePanel) return;

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.setAttribute("aria-label", "Close Navigation Menu");
    mobilePanel.removeAttribute("hidden");
    mobilePanel.classList.add("is-open");
    document.body.style.overflow = "hidden";
    if (toggleIcon) toggleIcon.innerHTML = icons.close();

    const firstLink = mobilePanel.querySelector("a");
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    isOpen = false;
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "Open Navigation Menu");
    mobilePanel.setAttribute("hidden", "");
    mobilePanel.classList.remove("is-open");
    document.body.style.overflow = "";
    if (toggleIcon) toggleIcon.innerHTML = icons.menu();
  }

  toggleBtn.onclick = (e) => {
    e.stopPropagation();
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  const links = mobilePanel.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen) closeMenu();
    });
  });

  document.addEventListener("click", (e) => {
    if (
      isOpen &&
      !mobilePanel.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });
}
