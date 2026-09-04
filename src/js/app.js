import {
  renderPageLayout,
  attachPageLayoutEvents,
} from "../components/layout/PageLayout.js";
import { routes } from "../pages/routes.js";

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
    }
  }
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  document.querySelectorAll('.section-heading, .hero-image-wrapper, .cta-section, .portfolio-hero-mockup, .smartbiz-visual-wrapper').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
}

// Intercept page renders to re-init observer
const originalRender = Router.prototype.renderCurrentRoute;
Router.prototype.renderCurrentRoute = function() {
  originalRender.call(this);
  setTimeout(initScrollAnimations, 100);
};
