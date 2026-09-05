import { renderNavbar } from "./Navbar.js";
import { renderFooter } from "./Footer.js";
import { initMobileMenu } from "../navigation/MobileMenu.js";
import { seoConfig } from "../../config/company.js";

export function renderPageLayout({ path = "/", content = "" }) {
  const routeMeta = seoConfig.routes[path] || {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
  };

  document.title = routeMeta.title;
  let metaDescTag = document.querySelector('meta[name="description"]');
  if (metaDescTag) {
    metaDescTag.setAttribute("content", routeMeta.description);
  }

  const ogImages = {
    "/": "og-default.svg",
    "/services": "og-services.svg",
    "/solutions": "og-solutions.svg",
    "/portfolio": "og-portfolio.svg",
    "/about": "og-about.svg",
    "/contact": "og-contact.svg",
  };
  const ogImage = ogImages[path] || "og-default.svg";
  const ogUrl = `https://urjiko-website.vercel.app${path === "/" ? "" : path}`;
  const ogImageUrl = `https://urjiko-website.vercel.app/images/${ogImage}`;

  const ogImageTag = document.querySelector('meta[property="og:image"]');
  if (ogImageTag) ogImageTag.setAttribute("content", ogImageUrl);
  const ogUrlTag = document.querySelector('meta[property="og:url"]');
  if (ogUrlTag) ogUrlTag.setAttribute("content", ogUrl);
  const twitterImageTag = document.querySelector('meta[name="twitter:image"]');
  if (twitterImageTag) twitterImageTag.setAttribute("content", ogImageUrl);

  return `
    <div class="app-layout flex flex-col min-h-screen" style="min-height: 100vh; display: flex; flex-direction: column;">
      <a href="#main-content" class="sr-only" style="position: absolute; top: 1rem; left: 1rem; z-index: 1000; background: var(--color-white); padding: 0.5rem 1rem; border: 2px solid var(--color-blue); border-radius: 4px;">
        Skip to main content
      </a>

      ${renderNavbar(path)}

      <main id="main-content" class="flex-1" style="flex: 1 0 auto; padding-top: 4.5rem;" role="main">
        ${content}
      </main>

      ${renderFooter()}
    </div>
  `;
}

export function attachPageLayoutEvents() {
  initMobileMenu();

  const navbar = document.getElementById("site-navbar");
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add("navbar--scrolled");
      } else {
        navbar.classList.remove("navbar--scrolled");
      }
    };
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }
}
