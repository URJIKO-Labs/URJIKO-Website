import { icons } from "../common/Icons.js";

// Global references for cleanup to prevent duplicate listeners on navigation
let currentKeydownHandler = null;
let currentDocumentClickHandler = null;

export function initMobileMenu() {
  const toggleBtn = document.getElementById("navbar-toggle-btn");
  const toggleIcon = document.getElementById("navbar-toggle-icon");
  const mobilePanel = document.getElementById("mobile-nav-panel");
  const closeBtn = document.getElementById("mobile-nav-close-btn");

  if (!toggleBtn || !mobilePanel) return;

  // Cleanup previous global listeners if they exist
  if (currentKeydownHandler) {
    document.removeEventListener("keydown", currentKeydownHandler);
  }
  if (currentDocumentClickHandler) {
    document.removeEventListener("click", currentDocumentClickHandler);
  }

  let isOpen = false;

  function openMenu() {
    isOpen = true;
    toggleBtn.setAttribute("aria-expanded", "true");
    toggleBtn.setAttribute("aria-label", "Close Navigation Menu");
    mobilePanel.removeAttribute("hidden");
    
    setTimeout(() => {
      mobilePanel.classList.add("is-open");
    }, 10);
    
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (toggleIcon) toggleIcon.innerHTML = icons.close();

    const firstLink = mobilePanel.querySelector("a");
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    isOpen = false;
    toggleBtn.setAttribute("aria-expanded", "false");
    toggleBtn.setAttribute("aria-label", "Open Navigation Menu");
    
    mobilePanel.classList.remove("is-open");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    if (toggleIcon) toggleIcon.innerHTML = icons.menu();

    setTimeout(() => {
      if (!isOpen) {
        mobilePanel.setAttribute("hidden", "");
      }
    }, 300);
  }

  toggleBtn.onclick = (e) => {
    e.stopPropagation();
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      if (isOpen) closeMenu();
    };
  }

  currentKeydownHandler = (e) => {
    if (e.key === "Escape" && isOpen) {
      closeMenu();
      toggleBtn.focus();
    }
  };
  document.addEventListener("keydown", currentKeydownHandler);

  const links = mobilePanel.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen) closeMenu();
    });
  });

  currentDocumentClickHandler = (e) => {
    if (
      isOpen &&
      !mobilePanel.contains(e.target) &&
      !toggleBtn.contains(e.target) &&
      !closeBtn?.contains(e.target)
    ) {
      closeMenu();
    }
  };
  document.addEventListener("click", currentDocumentClickHandler);
}
