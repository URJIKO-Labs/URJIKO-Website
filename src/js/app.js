import {
  renderPageLayout,
  attachPageLayoutEvents,
} from "../components/layout/PageLayout.js";
import { routes } from "../pages/routes.js";
import { initScrollAnimations } from "./interactions/scrollAnimations.js";
import { initPortfolioTabs } from "./interactions/portfolioTabs.js";
import { initCustomSelects } from "./interactions/customSelects.js";
import { initFAQAccordion } from "./interactions/faqAccordion.js";
import { initContactForm } from "./interactions/contactForm.js";

/**
 * Escapes HTML characters to prevent XSS.
 */
export function escapeHTML(str) {
  if (typeof str !== "string") return str;
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[tag] || tag,
  );
}

/**
 * URJIKO Labs — Client-Side Router
 * Intercepts anchor navigation, updates browser history, and renders page layout into #app.
 */
class Router {
  constructor() {
    this.appContainer = document.getElementById("app");
    this.init();
  }

  init() {
    // Intercept clicks on links with data-link
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a[data-link]");
      if (link) {
        const href = link.getAttribute("href");
        if (href && !href.startsWith("http") && !href.startsWith("mailto:")) {
          e.preventDefault();
          this.navigateTo(href);
        }
      }
    });

    // Handle browser back/forward buttons
    window.addEventListener("popstate", () => {
      this.renderCurrentRoute();
    });

    // Initial render
    this.renderCurrentRoute();
  }

  navigateTo(path) {
    if (window.location.pathname !== path) {
      window.history.pushState(null, null, path);
    }
    this.renderCurrentRoute();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderCurrentRoute() {
    const rawPath = window.location.pathname || "/";
    let normalizedPath = rawPath.replace(/\/$/, "") || "/";

    if (window.location.hash.startsWith("#/")) {
      normalizedPath = window.location.hash.slice(1);
    }

    const routeRenderer =
      routes[normalizedPath] || routes["/404"] || routes["/"];
    const pageContent = routeRenderer ? routeRenderer() : "";

    if (this.appContainer) {
      this.appContainer.innerHTML = renderPageLayout({
        path: normalizedPath,
        content: pageContent,
      });

      attachPageLayoutEvents();
      initPageComponents();
    }
  }
}

// Initialize all interactive components
function initPageComponents() {
  requestAnimationFrame(() => {
    initScrollAnimations();
    initPortfolioTabs();
    initCustomSelects();
    initContactForm();
    initFAQAccordion();
  });
}

// Start router
function startApp() {
  if (!window.urjikoRouter) {
    window.urjikoRouter = new Router();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startApp);
} else {
  startApp();
}

// Intersection Observer for subtle scroll animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document
    .querySelectorAll(
      ".section-heading, .hero-image-wrapper, .cta-section, .portfolio-hero-mockup, .smartbiz-visual-wrapper",
    )
    .forEach((el) => {
      el.classList.add("fade-up");
      observer.observe(el);
    });
}

// Portfolio hero interactive tabs
function initPortfolioTabs() {
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
      this.style.background = "rgba(37, 99, 235, 0.25)";
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

// Custom select dropdowns
function initCustomSelects() {
  document.querySelectorAll(".custom-select").forEach((select) => {
    if (select.dataset.initialized) return;
    select.dataset.initialized = "true";

    const trigger = select.querySelector(".custom-select__trigger");
    const dropdown = select.querySelector(".custom-select__dropdown");
    const hiddenInput = select.querySelector('input[type="hidden"]');
    const options = select.querySelectorAll(".custom-select__option");
    const displaySpan = trigger.querySelector("span");

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".custom-select__dropdown").forEach((d) => {
        if (d !== dropdown) d.classList.remove("open");
      });
      dropdown.classList.toggle("open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        const value = option.dataset.value;
        const text = option.textContent;
        hiddenInput.value = value;
        displaySpan.textContent = text;
        displaySpan.style.color = value
          ? "var(--color-navy)"
          : "var(--color-muted)";
        dropdown.classList.remove("open");
      });
    });
  });

  // Close dropdowns on outside click
  document.addEventListener("click", () => {
    document.querySelectorAll(".custom-select__dropdown").forEach((d) => {
      d.classList.remove("open");
    });
  });
}

// FAQ accordion
function initFAQAccordion() {
  document.querySelectorAll(".faq-item__trigger").forEach((trigger) => {
    if (trigger.dataset.initialized) return;
    trigger.dataset.initialized = "true";

    const item = trigger.closest(".faq-item");
    const content = item.querySelector(".faq-item__content");
    const icon = trigger.querySelector(".faq-item__icon");

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

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
        item.style.boxShadow = "0 2px 12px rgba(6, 36, 92, 0.08)";
      }
    });
  });
}

// Contact form submit
function initContactForm() {
  const form = document.getElementById("urjiko-contact-form");
  if (!form || form.dataset.initialized) return;
  form.dataset.initialized = "true";

  // File upload
  const fileArea = document.getElementById("file-upload-area");
  const fileInput = document.getElementById("file-input");
  const fileList = document.getElementById("file-list");
  let uploadedFiles = [];

  if (fileArea && fileInput) {
    fileArea.addEventListener("click", () => fileInput.click());

    fileArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      fileArea.classList.add("dragover");
    });

    fileArea.addEventListener("dragleave", () => {
      fileArea.classList.remove("dragover");
    });

    fileArea.addEventListener("drop", (e) => {
      e.preventDefault();
      fileArea.classList.remove("dragover");
      handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener("change", () => {
      handleFiles(fileInput.files);
      fileInput.value = "";
    });

    function handleFiles(files) {
      Array.from(files).forEach((file) => {
        if (file.size > 5 * 1024 * 1024) {
          alert(file.name + " is too large (max 5MB)");
          return;
        }
        if (uploadedFiles.length >= 5) {
          alert("Maximum 5 files allowed");
          return;
        }
        uploadedFiles.push(file);
      });
      renderFileList();
    }

    function renderFileList() {
      fileList.innerHTML = uploadedFiles
        .map(
          (file, i) => `
        <div class="file-upload__item">
          <span>${escapeHTML(file.name)}</span>
          <button type="button" data-index="${i}">&times;</button>
        </div>
      `,
        )
        .join("");

      fileList.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          uploadedFiles.splice(parseInt(btn.dataset.index), 1);
          renderFileList();
        });
      });
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = "Message Sent!";
    btn.disabled = true;
    btn.style.backgroundColor = "#16a34a";
    uploadedFiles = [];
    renderFileList();
    form.reset();
    document.querySelectorAll(".custom-select").forEach((select) => {
      const hiddenInput = select.querySelector('input[type="hidden"]');
      const displaySpan = select.querySelector(".custom-select__trigger span");
      const defaultOption = select.querySelector(".custom-select__option");
      hiddenInput.value = defaultOption.dataset.value;
      displaySpan.textContent = defaultOption.textContent;
      displaySpan.style.color = "";
    });
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      btn.style.backgroundColor = "";
    }, 3000);
  });
}
