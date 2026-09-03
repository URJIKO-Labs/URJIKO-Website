import { companyConfig } from "../../config/company.js";
import { icons } from "../common/Icons.js";

export function renderNavbar(activePath = "/") {
  const navLinksHtml = companyConfig.navLinks
    .map((link) => {
      const isActive = activePath === link.path;
      return `
        <li>
          <a 
            href="${link.path}" 
            data-link 
            class="navbar__link ${isActive ? "navbar__link--active" : ""}"
            ${isActive ? 'aria-current="page"' : ""}
          >
            ${link.label}
          </a>
        </li>
      `;
    })
    .join("");

  return `
    <header class="navbar" id="site-navbar" role="banner">
      <div class="container navbar__inner">
        <!-- Logo -->
        <a href="/" data-link class="navbar__logo" aria-label="${companyConfig.name} Home" style="text-decoration: none; display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0;">
          <img 
            src="/src/assets/images/urjiko-logo.jpg" 
            alt="${companyConfig.name} Logo" 
            width="40" 
            height="40" 
            loading="eager"
            style="height: 2rem; width: 2rem; object-fit: contain; flex-shrink: 0;"
          />
          <span class="navbar__logo-text" style="font-size: 1rem; font-weight: 700; color: var(--color-navy); letter-spacing: -0.01em; white-space: nowrap;">URJIKO Labs</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav aria-label="Main Navigation" class="hide-mobile">
          <ul class="navbar__links" role="list">
            ${navLinksHtml}
          </ul>
        </nav>

        <!-- Right Action / Mobile Toggle -->
        <div class="navbar__actions">
          <a href="${companyConfig.primaryCTA.path}" data-link class="btn btn--primary btn--sm hide-mobile">
            ${companyConfig.primaryCTA.label}
          </a>

          <button 
            type="button" 
            class="navbar__toggle" 
            id="navbar-toggle-btn"
            aria-expanded="false" 
            aria-controls="mobile-nav-panel"
            aria-label="Open Navigation Menu"
          >
            <span class="navbar__toggle-icon" id="navbar-toggle-icon">
              ${icons.menu()}
            </span>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer — outside header to avoid fixed-inside-fixed issue -->
    <div 
      class="navbar__mobile" 
      id="mobile-nav-panel" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Mobile Navigation Menu"
      hidden
    >
      <button 
        type="button" 
        class="navbar__mobile-close" 
        id="mobile-nav-close-btn"
        aria-label="Close Navigation Menu"
      >
        ${icons.close()}
      </button>
      <nav aria-label="Mobile Navigation" style="flex: 1;">
        <ul class="navbar__mobile-links" role="list">
          ${companyConfig.navLinks
            .map((link) => {
              const isActive = activePath === link.path;
              return `
                <li>
                  <a 
                    href="${link.path}" 
                    data-link 
                    class="navbar__mobile-link ${isActive ? "navbar__mobile-link--active" : ""}"
                    ${isActive ? 'aria-current="page"' : ""}
                  >
                    ${link.label}
                  </a>
                </li>
              `;
            })
            .join("")}
        </ul>
      </nav>
      
      <div style="padding-top: var(--space-4); border-top: 1px solid var(--color-border-subtle); margin-top: auto;">
        <a href="${companyConfig.primaryCTA.path}" data-link class="btn btn--primary btn--sm" style="width: 100%; text-align: center;">
          ${companyConfig.primaryCTA.label}
        </a>
      </div>
    </div>
  `;
}
