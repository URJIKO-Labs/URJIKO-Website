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


