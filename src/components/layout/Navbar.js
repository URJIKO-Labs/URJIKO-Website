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
        <a href="/" data-link class="navbar__logo flex items-center gap-2" aria-label="${companyConfig.name} Home" style="text-decoration: none;">
          <img 
            src="/src/assets/images/urjiko-logo.jpg" 
            alt="${companyConfig.name} Logo" 
            width="40" 
            height="40" 
            loading="eager"
            style="height: 2.5rem; width: 2.5rem; object-fit: contain;"
          />
          <span style="font-size: 1.125rem; font-weight: 700; color: var(--color-navy); letter-spacing: -0.01em;">URJIKO Labs</span>
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

      <div 
        class="navbar__mobile" 
        id="mobile-nav-panel" 
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile Navigation Menu"
        hidden
      >
        <div class="flex flex-col gap-4" style="min-height: 100%;">
          <nav aria-label="Mobile Navigation">
            <ul class="flex flex-col gap-2" role="list">
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
          
          <div class="mt-auto mb-4">
            <a href="${companyConfig.primaryCTA.path}" data-link class="btn btn--primary" style="width: 100%; text-align: center;">
              ${companyConfig.primaryCTA.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}
