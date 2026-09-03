import { companyConfig } from "../../config/company.js";
import { icons } from "../common/Icons.js";

export function renderFooter() {
  const currentYear = new Date().getFullYear() || 2026;

  const companyLinksHtml = companyConfig.footerNav.company
    .map(
      (item) =>
        `<li><a href="${item.path}" data-link class="footer__link">${item.label}</a></li>`,
    )
    .join("");

  const serviceLinksHtml = companyConfig.footerNav.services
    .map(
      (item) =>
        `<li><a href="${item.path}" data-link class="footer__link">${item.label}</a></li>`,
    )
    .join("");

  const connectLinksHtml = companyConfig.footerNav.connect
    .map((item) => {
      let icon = "";
      if (item.type === "telegram") icon = icons.telegram("w-4 h-4");
      if (item.type === "github") icon = icons.github("w-4 h-4");
      if (item.type === "linkedin") icon = icons.linkedin("w-4 h-4");
      if (item.type === "email") icon = icons.mail("w-4 h-4");

      const isExternal =
        item.href.startsWith("http") || item.href.startsWith("mailto:");
      const targetAttr =
        isExternal && !item.href.startsWith("mailto:")
          ? 'target="_blank" rel="noopener noreferrer"'
          : "";

      return `
        <li>
          <a href="${item.href}" class="footer__link flex items-center gap-2" ${targetAttr}>
            ${icon}
            <span>${item.label}</span>
          </a>
        </li>
      `;
    })
    .join("");

  return `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer__grid">
          <!-- Brand Info -->
          <div class="footer__brand">
            <h3 class="text-white" style="font-size: var(--font-size-xl);">${companyConfig.name}</h3>
            <p>${companyConfig.tagline}</p>
          </div>

          <!-- Company Links -->
          <div>
            <h4 class="footer__heading">Company</h4>
            <ul class="footer__links" role="list">
              ${companyLinksHtml}
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="footer__heading">Services</h4>
            <ul class="footer__links" role="list">
              ${serviceLinksHtml}
            </ul>
          </div>

          <!-- Connect Channels -->
          <div>
            <h4 class="footer__heading">Connect</h4>
            <ul class="footer__links" role="list">
              ${connectLinksHtml}
            </ul>
          </div>
        </div>

        <!-- Bottom Copyright / Legal -->
        <div class="footer__bottom">
          <div>
            © ${currentYear} ${companyConfig.name}. All rights reserved.
          </div>
          <div class="flex gap-4">
            <a href="/privacy" data-link class="footer__link">Privacy Policy</a>
            <span style="color: rgba(255,255,255,0.2);">|</span>
            <a href="/terms" data-link class="footer__link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
