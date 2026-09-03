(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const n={name:"URJIKO Labs",tagline:"Practical digital solutions for modern businesses and organizations.",shortDescription:"URJIKO Labs designs and develops websites, business systems, custom software, and intelligent digital solutions that help organizations work smarter and grow.",contact:{email:"urjikolabs@gmail.com"},telegram:{url:"https://t.me/urjikolabs",ctaText:"Message Us on Telegram"},navLinks:[{label:"Home",path:"/"},{label:"Services",path:"/services"},{label:"Solutions",path:"/solutions"},{label:"Portfolio",path:"/portfolio"},{label:"About",path:"/about"},{label:"Contact",path:"/contact"}],footerNav:{company:[{label:"Home",path:"/"},{label:"Services",path:"/services"},{label:"Solutions",path:"/solutions"},{label:"Portfolio",path:"/portfolio"},{label:"About",path:"/about"},{label:"Contact",path:"/contact"}],services:[{label:"Web Development",path:"/services"},{label:"Business Systems",path:"/services"},{label:"Custom Software",path:"/services"},{label:"AI Solutions",path:"/services"}],connect:[{label:"Email",type:"email",href:"mailto:urjikolabs@gmail.com"},{label:"Telegram",type:"telegram",href:"https://t.me/urjikolabs"},{label:"GitHub",type:"github",href:"https://github.com/URJIKO-Labs"},{label:"LinkedIn",type:"linkedin",href:"#"}]},primaryCTA:{label:"Discuss Your Project",path:"/contact"}},u={defaultTitle:"URJIKO Labs — Building Practical Digital Solutions",defaultDescription:"URJIKO Labs builds high-reliability web applications, business management systems, custom software, and AI solutions.",routes:{"/":{title:"URJIKO Labs — Digital Solutions for Modern Businesses",description:"Practical digital products, web development, business management systems, and custom software engineering.",heading:"Building Practical Digital Products & Software Solutions"},"/services":{title:"Services — URJIKO Labs",description:"Explore our technology services: Web Development, Business Management Systems, Custom Software, and AI Intelligent Solutions.",heading:"Engineering Capabilities & Services"},"/solutions":{title:"Solutions — URJIKO Labs",description:"Specialized digital solutions engineered for businesses, schools, clinics, hotels, and growing organizations.",heading:"Specialized Industry Solutions"},"/portfolio":{title:"Portfolio — URJIKO Labs",description:"Selected case studies and digital systems engineered by URJIKO Labs for real-world impact.",heading:"Selected Works & Case Studies"},"/about":{title:"About URJIKO Labs",description:"Our mission, engineering philosophy, and commitment to practical, reliable digital transformation.",heading:"About URJIKO Labs"},"/contact":{title:"Contact URJIKO Labs",description:"Get in touch with URJIKO Labs to discuss your project, request a consultation, or connect via Telegram.",heading:"Discuss Your Project"},"/404":{title:"404 — Page Not Found | URJIKO Labs",description:"The requested page could not be found.",heading:"Page Not Found"}}},r={telegram:(t="w-5 h-5")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .34z"/>
    </svg>
  `,arrowRight:(t="w-4 h-4")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `,menu:(t="w-6 h-6")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  `,close:(t="w-6 h-6")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `,mail:(t="w-5 h-5")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `,github:(t="w-5 h-5")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  `,linkedin:(t="w-5 h-5")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  `,alertTriangle:(t="w-6 h-6")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  `,inbox:(t="w-8 h-8")=>`
    <svg class="${t}" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
    </svg>
  `};function b(t="/"){const s=n.navLinks.map(e=>{const i=t===e.path;return`
        <li>
          <a 
            href="${e.path}" 
            data-link 
            class="navbar__link ${i?"navbar__link--active":""}"
            ${i?'aria-current="page"':""}
          >
            ${e.label}
          </a>
        </li>
      `}).join("");return`
    <header class="navbar" id="site-navbar" role="banner">
      <div class="container navbar__inner">
        <!-- Logo -->
        <a href="/" data-link class="navbar__logo" aria-label="${n.name} Home">
          <img 
            src="/src/assets/images/urjiko-logo.jpg" 
            alt="${n.name} Logo" 
            width="120" 
            height="40" 
            loading="eager"
            style="height: 2.5rem; width: auto; object-fit: contain;"
          />
        </a>

        <!-- Desktop Navigation Links -->
        <nav aria-label="Main Navigation" class="hide-mobile">
          <ul class="navbar__links" role="list">
            ${s}
          </ul>
        </nav>

        <!-- Right Action / Mobile Toggle -->
        <div class="navbar__actions">
          <a href="${n.primaryCTA.path}" data-link class="btn btn--primary btn--sm hide-mobile">
            ${n.primaryCTA.label}
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
              ${r.menu()}
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div 
        class="navbar__mobile" 
        id="mobile-nav-panel" 
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile Navigation Menu"
        hidden
      >
        <div class="flex flex-col gap-4">
          <nav aria-label="Mobile Navigation">
            <ul class="flex flex-col gap-2" role="list">
              ${n.navLinks.map(e=>{const i=t===e.path;return`
                    <li>
                      <a 
                        href="${e.path}" 
                        data-link 
                        class="navbar__mobile-link ${i?"navbar__mobile-link--active":""}"
                        ${i?'aria-current="page"':""}
                      >
                        ${e.label}
                      </a>
                    </li>
                  `}).join("")}
            </ul>
          </nav>
          
          <div class="mt-auto mb-4">
            <a href="${n.primaryCTA.path}" data-link class="btn btn--primary" style="width: 100%; text-align: center;">
              ${n.primaryCTA.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  `}function h(){const t=new Date().getFullYear()||2026,s=n.footerNav.company.map(a=>`<li><a href="${a.path}" data-link class="footer__link">${a.label}</a></li>`).join(""),e=n.footerNav.services.map(a=>`<li><a href="${a.path}" data-link class="footer__link">${a.label}</a></li>`).join(""),i=n.footerNav.connect.map(a=>{let o="";a.type==="telegram"&&(o=r.telegram("w-4 h-4 text-teal")),a.type==="github"&&(o=r.github("w-4 h-4")),a.type==="linkedin"&&(o=r.linkedin("w-4 h-4")),a.type==="email"&&(o=r.mail("w-4 h-4"));const l=(a.href.startsWith("http")||a.href.startsWith("mailto:"))&&!a.href.startsWith("mailto:")?'target="_blank" rel="noopener noreferrer"':"";return`
        <li>
          <a href="${a.href}" class="footer__link flex items-center gap-2" ${l}>
            ${o}
            <span>${a.label}</span>
          </a>
        </li>
      `}).join("");return`
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer__grid">
          <!-- Brand Info -->
          <div class="footer__brand">
            <h3 class="text-white" style="font-size: var(--font-size-xl);">${n.name}</h3>
            <p>${n.tagline}</p>
          </div>

          <!-- Company Links -->
          <div>
            <h4 class="footer__heading">Company</h4>
            <ul class="footer__links" role="list">
              ${s}
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="footer__heading">Services</h4>
            <ul class="footer__links" role="list">
              ${e}
            </ul>
          </div>

          <!-- Connect Channels -->
          <div>
            <h4 class="footer__heading">Connect</h4>
            <ul class="footer__links" role="list">
              ${i}
            </ul>
          </div>
        </div>

        <!-- Bottom Copyright / Legal -->
        <div class="footer__bottom">
          <div>
            © ${t} ${n.name}. All rights reserved.
          </div>
          <div class="flex gap-4">
            <a href="/privacy" data-link class="footer__link">Privacy Policy</a>
            <span style="color: rgba(255,255,255,0.2);">|</span>
            <a href="/terms" data-link class="footer__link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `}function m(){const t=document.getElementById("navbar-toggle-btn"),s=document.getElementById("navbar-toggle-icon"),e=document.getElementById("mobile-nav-panel");if(!t||!e)return;let i=!1;function a(){i=!0,t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Close Navigation Menu"),e.removeAttribute("hidden"),e.classList.add("is-open"),document.body.style.overflow="hidden",s&&(s.innerHTML=r.close());const l=e.querySelector("a");l&&l.focus()}function o(){i=!1,t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Open Navigation Menu"),e.setAttribute("hidden",""),e.classList.remove("is-open"),document.body.style.overflow="",s&&(s.innerHTML=r.menu())}t.onclick=l=>{l.stopPropagation(),i?o():a()},document.addEventListener("keydown",l=>{l.key==="Escape"&&i&&(o(),t.focus())}),e.querySelectorAll("a").forEach(l=>{l.addEventListener("click",()=>{i&&o()})}),document.addEventListener("click",l=>{i&&!e.contains(l.target)&&!t.contains(l.target)&&o()})}function f({path:t="/",content:s=""}){const e=u.routes[t]||{title:u.defaultTitle,description:u.defaultDescription};document.title=e.title;let i=document.querySelector('meta[name="description"]');return i&&i.setAttribute("content",e.description),`
    <div class="app-layout flex flex-col min-h-screen" style="min-height: 100vh; display: flex; flex-direction: column;">
      <a href="#main-content" class="sr-only" style="position: absolute; top: 1rem; left: 1rem; z-index: 1000; background: var(--color-white); padding: 0.5rem 1rem; border: 2px solid var(--color-teal); border-radius: 4px;">
        Skip to main content
      </a>

      ${b(t)}

      <main id="main-content" class="flex-1" style="flex: 1 0 auto;" role="main">
        ${s}
      </main>

      ${h()}
    </div>
  `}function y(){m();const t=document.getElementById("site-navbar");if(t){const s=()=>{window.scrollY>20?t.classList.add("navbar--scrolled"):t.classList.remove("navbar--scrolled")};window.removeEventListener("scroll",s),window.addEventListener("scroll",s,{passive:!0}),s()}}function x(){return`
    <section class="section section--lg" aria-labelledby="hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-16); position: relative; overflow: hidden; background: #FFFFFF;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column: Messaging & Actions -->
          <div class="flex flex-col items-start">
            
            <!-- Eyebrow -->
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              DIGITAL SOLUTIONS FOR MODERN ORGANIZATIONS
            </div>

            <!-- Headline: Navy dominant with subtle blue tone -->
            <h1 id="hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Build Smarter. <br/>
              <span>Grow With Better Technology.</span>
            </h1>

            <!-- Description -->
            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.1875rem); max-width: 38rem; line-height: 1.65;">
              ${n.shortDescription}
            </p>

            <!-- Actions -->
            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Project</span>
                ${r.arrowRight("w-4 h-4")}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>Explore Our Solutions</span>
              </a>
            </div>

          </div>

          <!-- Right Column: Abstract Technology & Software Ecosystem Visual -->
          <div class="hero-visual-wrapper" aria-hidden="true" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center;">
            <div style="width: 100%; max-width: 520px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); box-shadow: var(--shadow-xl); position: relative;">
              
              <!-- Subtle top bar -->
              <div class="flex items-center justify-between pb-4 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
                <div class="flex items-center gap-2">
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: #EF4444; opacity: 0.7;"></span>
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: #F59E0B; opacity: 0.7;"></span>
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: #10B981; opacity: 0.7;"></span>
                </div>
                <div class="text-xs font-medium text-muted" style="font-family: monospace; letter-spacing: 0.05em;">
                  URJIKO CORE v2.4
                </div>
              </div>

              <!-- Main Metric Cards -->
              <div class="grid grid--2 gap-3 mb-4">
                <!-- Mini Metric Card 1 (Light Blue background with Navy/Blue text) -->
                <div style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); padding: var(--space-4); box-shadow: var(--shadow-xs);">
                  <div class="text-xs text-muted font-medium mb-1">Operational Reliability</div>
                  <div class="text-navy font-bold" style="font-size: var(--font-size-2xl);">99.4%</div>
                  <div class="text-xs font-semibold mt-1 flex items-center gap-1" style="color: var(--color-blue);">
                    <span>↑ High Performance</span>
                  </div>
                </div>

                <!-- Mini Metric Card 2 (Navy Background with Royal Blue / Turquoise accent) -->
                <div style="background: var(--gradient-tech); border-radius: var(--radius-md); padding: var(--space-4); color: white; box-shadow: var(--shadow-md);">
                  <div class="text-xs font-medium mb-1" style="color: rgba(255,255,255,0.75);">Architecture</div>
                  <div class="text-white font-bold" style="font-size: var(--font-size-2xl); color: #FFFFFF;">Modular</div>
                  <div class="text-xs font-medium mt-1 flex items-center gap-1" style="color: var(--color-turquoise-light);">
                    <span>● Live Sync</span>
                  </div>
                </div>
              </div>

              <!-- Data Stream Activity Card -->
              <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: var(--space-4); margin-bottom: var(--space-3);">
                <div class="flex justify-between items-center mb-3">
                  <span class="text-xs font-semibold text-navy">Business Operations Stream</span>
                  <span class="badge text-xs" style="background: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600;">Active</span>
                </div>
                
                <!-- Progress Bars: Royal Blue and Deep Navy -->
                <div class="flex flex-col gap-2">
                  <div>
                    <div class="flex justify-between text-xs text-muted mb-1">
                      <span>Inventory & Sales Sync</span>
                      <span class="font-medium text-navy">Optimal</span>
                    </div>
                    <div style="width: 100%; height: 6px; background: var(--color-bg-muted); border-radius: 3px; overflow: hidden;">
                      <div style="width: 88%; height: 100%; background: var(--color-blue); border-radius: 3px;"></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between text-xs text-muted mb-1">
                      <span>Records & Management Latency</span>
                      <span class="font-medium text-navy">12ms</span>
                    </div>
                    <div style="width: 100%; height: 6px; background: var(--color-bg-muted); border-radius: 3px; overflow: hidden;">
                      <div style="width: 95%; height: 100%; background: var(--color-navy); border-radius: 3px;"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Micro-Card -->
              <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-3) var(--space-4); background: var(--color-bg-soft); border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">
                <div class="flex items-center gap-2">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-turquoise);"></span>
                  <span class="text-xs font-medium text-secondary">Custom Systems Ready for Deployment</span>
                </div>
                <span class="text-xs font-semibold text-navy">Enterprise Ready</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Desktop Grid Override -->
    <style>
      @media (min-width: 1024px) {
        .section--lg .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
    </style>
  `}function w(){return`
    <section class="section--sm bg-soft" aria-label="Why organizations trust URJIKO Labs" style="border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container">
        <div class="grid grid--4 gap-6">
          ${[{title:"Practical Solutions",description:"Technology designed around real business problems and operational bottlenecks.",icon:'<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>'},{title:"Mobile-Friendly",description:"Responsive, cross-platform experiences engineered for smooth use on any device.",icon:'<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>'},{title:"Secure & Reliable",description:"Built with security, high availability, and maintainable software architecture in mind.",icon:'<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>'},{title:"Long-Term Support",description:"Continuous improvements, dependable maintenance, and technical assistance.",icon:'<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>'}].map(e=>`
      <div class="flex flex-col items-start gap-2 p-4" style="border-left: 2px solid var(--color-border-subtle); padding-left: var(--space-4);">
        <div class="mb-1 flex items-center justify-center" style="width: 2.25rem; height: 2.25rem; border-radius: var(--radius-sm); background: var(--color-bg-light-blue); color: var(--color-blue);">
          ${e.icon}
        </div>
        <h3 style="font-size: var(--font-size-md); font-weight: 600; color: var(--color-navy); margin-bottom: 0.25rem;">
          ${e.title}
        </h3>
        <p class="text-sm text-secondary" style="margin-bottom: 0; line-height: 1.5;">
          ${e.description}
        </p>
      </div>
    `).join("")}
        </div>
      </div>
    </section>
  `}function _(){return`
    <section class="section" aria-labelledby="services-heading">
      <div class="container">
        <!-- Section Header -->
        <div class="section-heading">
          <span class="section-heading__label">Core Capabilities</span>
          <h2 id="services-heading" class="section-heading__title">What We Build</h2>
          <p class="section-heading__subtitle text-balance">
            From websites to custom business platforms, we build practical digital solutions designed around the way organizations actually work.
          </p>
        </div>

        <!-- 4 Services Cards Grid -->
        <div class="grid grid--2 gap-6 mb-8">
          ${[{title:"Web Development",description:"Professional websites and digital experiences that help organizations establish their presence, communicate clearly, and reach their customers.",tags:["Corporate Websites","E-Commerce","Web Apps"],icon:'<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'},{title:"Business Management Systems",description:"Digital systems that help businesses manage sales, inventory, customers, operations, and reporting more efficiently.",tags:["POS & Sales","Inventory Workflows","Reporting"],icon:'<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>'},{title:"Custom Software",description:"Software designed around your organization's unique workflows, processes, requirements, and operational challenges.",tags:["ERP Architecture","Database Systems","Custom APIs"],icon:'<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'},{title:"AI & Intelligent Solutions",description:"Intelligent software experiences that use AI, automation, and data to help organizations make better decisions and work more efficiently.",tags:["Workflow Automation","Data Insights","Custom AI Tools"],icon:'<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>'}].map(e=>`
      <div class="card card--service flex flex-col justify-between">
        <div>
          <div class="card__icon">
            ${e.icon}
          </div>
          <h3 class="card__title">${e.title}</h3>
          <p class="card__description mb-4">${e.description}</p>
        </div>
        
        <div>
          <div class="flex flex-wrap gap-2 mb-4">
            ${e.tags.map(i=>`<span class="badge badge--navy text-xs">${i}</span>`).join("")}
          </div>
          <a href="/services" data-link class="card__link">
            <span>Learn More</span>
            ${r.arrowRight("w-4 h-4")}
          </a>
        </div>
      </div>
    `).join("")}
        </div>

        <!-- Section Link to Services -->
        <div class="flex justify-center mt-8">
          <a href="/services" data-link class="btn btn--secondary flex items-center gap-2">
            <span>Explore All Services</span>
            ${r.arrowRight("w-4 h-4")}
          </a>
        </div>
      </div>
    </section>
  `}function k(){return`
    <section class="section bg-soft" aria-labelledby="solutions-heading" style="border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading">
          <span class="section-heading__label">Case Studies & Systems</span>
          <h2 id="solutions-heading" class="section-heading__title">Solutions Built for Real-World Problems</h2>
          <p class="section-heading__subtitle text-balance">
            Explore selected digital solutions designed to address real operational challenges across business, education, transport, and healthcare.
          </p>
        </div>

        <div class="flex flex-col gap-8 mb-12">
          
          <!-- 1. SMARTBIZ (Prominent Hero Card) -->
          <div class="card card--lg" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);">
            <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-8);">
              
              <!-- Content -->
              <div class="flex flex-col items-start">
                <div class="flex items-center gap-2 mb-3">
                  <span class="badge badge--blue font-semibold">BUSINESS MANAGEMENT</span>
                  <span class="badge badge--navy font-semibold">Core Product</span>
                </div>
                <h3 style="font-size: clamp(1.5rem, 3vw, 2rem); color: var(--color-navy); margin-bottom: var(--space-3); font-weight: 700;">
                  SmartBiz Suite
                </h3>
                <p class="text-secondary mb-6 text-balance" style="font-size: var(--font-size-md); line-height: 1.6;">
                  A business management solution designed to help businesses manage sales, inventory, customers, credit, reporting, and daily operations from one unified platform.
                </p>
                
                <div class="flex flex-wrap gap-3 mb-6">
                  <span class="badge badge--outline text-xs">Point of Sale (POS)</span>
                  <span class="badge badge--outline text-xs">Inventory Sync</span>
                  <span class="badge badge--outline text-xs">Credit & Ledger</span>
                  <span class="badge badge--outline text-xs">Real-Time Reports</span>
                </div>

                <a href="/portfolio" data-link class="btn btn--primary flex items-center gap-2">
                  <span>View Solution Overview</span>
                  ${r.arrowRight("w-4 h-4")}
                </a>
              </div>

              <!-- Product Preview Visual -->
              <div style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-lg); padding: var(--space-5); box-shadow: var(--shadow-sm);">
                <div class="flex justify-between items-center pb-3 mb-3" style="border-bottom: 1px solid rgba(7, 87, 184, 0.15);">
                  <div class="flex items-center gap-2">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-xs font-bold text-navy">SmartBiz Control Terminal</span>
                  </div>
                  <span class="badge badge--blue text-xs">Live System</span>
                </div>

                <div class="grid grid--2 gap-3 mb-3">
                  <div style="background: var(--color-white); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">
                    <div class="text-xs text-muted">Today's Transactions</div>
                    <div class="font-bold text-navy" style="font-size: var(--font-size-lg);">342 Orders</div>
                  </div>
                  <div style="background: var(--color-white); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">
                    <div class="text-xs text-muted">Inventory Alerts</div>
                    <div class="font-bold text-navy" style="font-size: var(--font-size-lg); color: var(--color-blue);">All Stocked</div>
                  </div>
                </div>

                <div style="background: var(--color-white); padding: var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">
                  <div class="text-xs font-semibold text-navy mb-2">Automated Ledger & Credit Tracking</div>
                  <div style="width: 100%; height: 6px; background: var(--color-bg-muted); border-radius: 3px; overflow: hidden;">
                    <div style="width: 84%; height: 100%; background: var(--color-blue); border-radius: 3px;"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- 3 Supporting Cards Grid -->
          <div class="grid grid--3 gap-6">
            
            <!-- 2. TRANSPORT MANAGEMENT -->
            <div class="card flex flex-col justify-between">
              <div>
                <span class="badge badge--navy mb-3">TRANSPORT & OPERATIONS</span>
                <h3 class="card__title">Transport Management</h3>
                <p class="card__description mb-4">
                  A digital platform for managing transport requests, vehicles, drivers, operations, workflows, and automated reporting.
                </p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="badge badge--outline text-xs">Fleet Tracking</span>
                  <span class="badge badge--outline text-xs">Driver Schedules</span>
                </div>
                <a href="/portfolio" data-link class="card__link">
                  <span>View Solution</span>
                  ${r.arrowRight("w-4 h-4")}
                </a>
              </div>
            </div>

            <!-- 3. EDUFLOW -->
            <div class="card flex flex-col justify-between">
              <div>
                <span class="badge badge--blue mb-3">EDUCATION</span>
                <h3 class="card__title">EduFlow</h3>
                <p class="card__description mb-4">
                  A school management solution designed to organize students, teachers, classes, attendance, grades, timetables, and administration.
                </p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="badge badge--outline text-xs">Student Records</span>
                  <span class="badge badge--outline text-xs">Attendance & Grades</span>
                </div>
                <a href="/portfolio" data-link class="card__link">
                  <span>View Solution</span>
                  ${r.arrowRight("w-4 h-4")}
                </a>
              </div>
            </div>

            <!-- 4. SHEGERHEALTH -->
            <div class="card flex flex-col justify-between">
              <div>
                <span class="badge badge--navy mb-3">HEALTHCARE</span>
                <h3 class="card__title">ShegerHealth</h3>
                <p class="card__description mb-4">
                  A digital healthcare platform concept focused on improving healthcare workflows, appointment records, and clinical management.
                </p>
              </div>
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="badge badge--outline text-xs">Patient Queue</span>
                  <span class="badge badge--outline text-xs">Project Concept</span>
                </div>
                <a href="/portfolio" data-link class="card__link">
                  <span>View Solution</span>
                  ${r.arrowRight("w-4 h-4")}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- Desktop Grid Overrides -->
    <style>
      @media (min-width: 1024px) {
        .card--lg > .grid {
          grid-template-columns: 1.2fr 0.8fr !important;
        }
      }
    </style>
  `}function S(){return`
    <section class="section" aria-labelledby="why-heading">
      <div class="container">
        <div class="grid items-start" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column: Context -->
          <div class="flex flex-col items-start">
            <div class="section-heading mb-6" style="margin-bottom: var(--space-6);">
              <span class="section-heading__label">Our Engineering Philosophy</span>
              <h2 id="why-heading" class="section-heading__title">Why Work With URJIKO Labs?</h2>
              <p class="section-heading__subtitle text-balance">
                We start with the problem, understand the workflow, and build technology around what your organization actually needs.
              </p>
            </div>

            <div class="card bg-soft" style="border-left: 3px solid var(--color-blue); padding: var(--space-6);">
              <h4 class="text-navy font-semibold mb-2">No Over-Engineering</h4>
              <p class="text-sm text-secondary mb-0">
                You get dependable, performant software engineered to solve real business pain points without bloat or vendor lock-in.
              </p>
            </div>
          </div>

          <!-- Right Column: 5 Numbered Principles -->
          <div class="flex flex-col gap-6">
            ${[{number:"01",title:"Understand the Problem",description:"We focus on the underlying business challenge and operational workflow before choosing the technology stack."},{number:"02",title:"Practical Technology",description:"We prioritize useful features, high usability, and measurable value over unnecessary complexity."},{number:"03",title:"Modern Engineering",description:"Solutions are built with clean code, standard conventions, and maintainable software architecture."},{number:"04",title:"Designed to Grow",description:"Systems are structured modularly so they can expand seamlessly as your organization scales."},{number:"05",title:"Continued Support",description:"We partner for the long term, helping you maintain, upgrade, and monitor your solution after launch."}].map(e=>`
      <div class="flex items-start gap-4 pb-6" style="border-bottom: 1px solid var(--color-border-subtle);">
        <span class="font-bold" style="color: var(--color-blue); font-size: var(--font-size-xl); font-family: monospace; min-width: 2.5rem;">
          ${e.number}
        </span>
        <div>
          <h3 style="font-size: var(--font-size-lg); color: var(--color-navy); margin-bottom: 0.25rem; font-weight: 600;">
            ${e.title}
          </h3>
          <p class="text-secondary text-sm" style="margin-bottom: 0; line-height: 1.55;">
            ${e.description}
          </p>
        </div>
      </div>
    `).join("")}
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="why-heading"] .container > .grid {
          grid-template-columns: 0.9fr 1.1fr !important;
        }
      }
    </style>
  `}function $(){return`
    <section class="section bg-soft" aria-labelledby="process-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">Clear Delivery Cycle</span>
          <h2 id="process-heading" class="section-heading__title">How We Work</h2>
          <p class="section-heading__subtitle text-balance">
            A transparent, milestone-driven process keeps projects on schedule, within scope, and aligned with your organizational goals.
          </p>
        </div>

        <div class="grid grid--3 gap-6">
          ${[{number:"01",title:"Discover",description:"Understand your business goals, users, pain points, and existing operational workflow."},{number:"02",title:"Plan",description:"Define scope, technical priorities, system architecture, deliverables, and core MVP."},{number:"03",title:"Design",description:"Create clean, intuitive user experiences, component layouts, and database models."},{number:"04",title:"Develop",description:"Build your solution using modern engineering practices, clean code, and robust APIs."},{number:"05",title:"Test",description:"Verify functionality, performance, security, mobile responsiveness, and data integrity."},{number:"06",title:"Deploy & Support",description:"Launch the system reliably, onboard your team, and provide continuous technical support."}].map(e=>`
      <div class="card flex flex-col justify-between" style="background: var(--color-white); border-top: 3px solid var(--color-blue);">
        <div>
          <div class="flex items-center justify-between mb-4">
            <span class="font-bold" style="color: var(--color-blue); font-size: var(--font-size-2xl); font-family: monospace;">${e.number}</span>
            <span class="text-xs font-semibold text-muted uppercase">Stage</span>
          </div>
          <h3 class="card__title mb-2">${e.title}</h3>
          <p class="text-sm text-secondary mb-0" style="line-height: 1.55;">${e.description}</p>
        </div>
      </div>
    `).join("")}
        </div>

      </div>
    </section>
  `}function p({title:t="Have a problem that technology could solve?",description:s="Let's build a practical, high-performance digital solution tailored for your organization.",primaryBtnLabel:e=n.primaryCTA.label,primaryBtnPath:i=n.primaryCTA.path,secondaryBtnLabel:a="View Our Solutions",secondaryBtnPath:o="/solutions"}={}){return`
    <section class="section" aria-labelledby="cta-section-heading">
      <div class="container">
        <div class="cta-section">
          <h2 id="cta-section-heading" class="cta-section__title text-balance">${t}</h2>
          <p class="cta-section__description text-balance">${s}</p>
          <div class="cta-section__actions">
            <a href="${i}" data-link class="btn btn--primary btn--lg">
              ${e}
            </a>
            ${a?`
              <a href="${o}" data-link class="btn btn--secondary btn--lg" style="border-color: rgba(255,255,255,0.4); color: #FFFFFF;">
                ${a}
              </a>
            `:""}
          </div>
        </div>
      </div>
    </section>
  `}function C(){return`
    <div class="home-page">
      <!-- 1. Hero -->
      ${x()}

      <!-- 2. Value Strip -->
      ${w()}

      <!-- 3. What We Do -->
      ${_()}

      <!-- 4. Featured Solutions -->
      ${k()}

      <!-- 5. Why URJIKO Labs -->
      ${S()}

      <!-- 6. How We Work -->
      ${$()}

      <!-- 7. Final CTA -->
      ${p({title:"Have a problem that technology could solve?",description:"Tell us what you're trying to improve. We'll help you explore a practical digital solution.",primaryBtnLabel:"Discuss Your Project",primaryBtnPath:"/contact",secondaryBtnLabel:"Explore Our Solutions",secondaryBtnPath:"/solutions"})}
    </div>
  `}function L({title:t="Have a project idea?",description:s="Tell us what you're trying to solve. We'll discuss how practical technology can streamline your business.",btnText:e=n.telegram.ctaText}={}){const i=n.telegram.url;return`
    <div class="card card--lg flex flex-col items-start gap-4" style="border-left: 4px solid var(--color-blue); background-color: var(--color-bg-soft);">
      <div class="flex items-center gap-3">
        <div class="card__icon" style="margin-bottom: 0; color: var(--color-blue); background-color: var(--color-bg-light-blue);">
          ${r.telegram("w-6 h-6")}
        </div>
        <div>
          <h3 style="font-size: var(--font-size-xl); margin-bottom: 0.25rem; color: var(--color-navy);">${t}</h3>
          <span class="text-xs text-muted">Primary Direct Messaging Channel</span>
        </div>
      </div>
      <p style="margin-bottom: var(--space-2);">${s}</p>
      <a 
        href="${i}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn--primary flex items-center gap-2"
      >
        ${r.telegram("w-5 h-5")}
        <span>${e}</span>
      </a>
    </div>
  `}function c(t=[]){return!t||t.length<=1?"":`
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center text-sm" style="list-style: none; padding: 0;" role="list">
        ${t.map((e,i)=>i===t.length-1?`
          <li aria-current="page">
            <span class="text-secondary font-medium">${e.label}</span>
          </li>
        `:`
        <li>
          <a href="${e.path||"#"}" data-link class="text-muted hover:text-teal">${e.label}</a>
          <span class="mx-2 text-muted" aria-hidden="true" style="margin: 0 var(--space-2);">/</span>
        </li>
      `).join("")}
      </ol>
    </nav>
  `}const v={"/":()=>C(),"/services":()=>`
    <div class="container section">
      ${c([{label:"Home",path:"/"},{label:"Services"}])}
      <div class="section-heading">
        <span class="section-heading__label">Our Capabilities</span>
        <h1 class="section-heading__title">Engineering & Technology Services</h1>
        <p class="section-heading__subtitle">
          Comprehensive digital engineering services built around practical utility, clean code, and business reliability.
        </p>
      </div>

      <div class="grid grid--2 mb-12">
        <div class="card card--service">
          <h3 class="card__title">Web & Mobile Platforms</h3>
          <p class="card__description">Modern, fast, and accessible digital platforms tailored for your clients.</p>
        </div>
        <div class="card card--service">
          <h3 class="card__title">Custom Enterprise Software</h3>
          <p class="card__description">Scalable backend architectures and workflow automation tools.</p>
        </div>
      </div>
    </div>
    ${p({title:"Ready to build your solution?",description:"Contact us to discuss your system requirements and timeline."})}
  `,"/solutions":()=>`
    <div class="container section">
      ${c([{label:"Home",path:"/"},{label:"Solutions"}])}
      <div class="section-heading">
        <span class="section-heading__label">Tailored Solutions</span>
        <h1 class="section-heading__title">Industry-Specific Digital Systems</h1>
        <p class="section-heading__subtitle">
          Engineered architectures designed to solve real operational bottlenecks across key sectors.
        </p>
      </div>

      <div class="grid grid--3 mb-12">
        <div class="card">
          <span class="badge badge--teal mb-3">Enterprise</span>
          <h3 class="card__title">SmartBiz</h3>
          <p class="card__description">Comprehensive business operations and inventory management platform.</p>
        </div>
        <div class="card">
          <span class="badge badge--teal mb-3">Education</span>
          <h3 class="card__title">EduFlow</h3>
          <p class="card__description">Integrated school administration and student management solution.</p>
        </div>
        <div class="card">
          <span class="badge badge--teal mb-3">Healthcare</span>
          <h3 class="card__title">ShegerHealth</h3>
          <p class="card__description">Clinical management and patient workflow records.</p>
        </div>
      </div>
    </div>
    ${p()}
  `,"/portfolio":()=>`
    <div class="container section">
      ${c([{label:"Home",path:"/"},{label:"Portfolio"}])}
      <div class="section-heading">
        <span class="section-heading__label">Case Studies</span>
        <h1 class="section-heading__title">Selected Works & Systems</h1>
        <p class="section-heading__subtitle">
          Real-world products and software platforms built and deployed by URJIKO Labs.
        </p>
      </div>

      <div class="grid grid--2 mb-12">
        <div class="card card--project">
          <div class="card__body">
            <div class="card__meta">
              <span class="badge badge--navy">Full-Stack ERP</span>
              <span class="badge badge--teal">Active Client</span>
            </div>
            <h3 class="card__title">SmartBiz Management Suite</h3>
            <p class="card__description">Automating point-of-sale, inventory, and supply chain tracking for retail businesses.</p>
          </div>
        </div>

        <div class="card card--project">
          <div class="card__body">
            <div class="card__meta">
              <span class="badge badge--navy">Logistics</span>
              <span class="badge badge--teal">Real-Time</span>
            </div>
            <h3 class="card__title">Transport & Fleet Management</h3>
            <p class="card__description">Live vehicle tracking, driver scheduling, and automated dispatch operations.</p>
          </div>
        </div>
      </div>
    </div>
    ${p()}
  `,"/about":()=>`
    <div class="container section">
      ${c([{label:"Home",path:"/"},{label:"About"}])}
      <div class="section-heading">
        <span class="section-heading__label">Company</span>
        <h1 class="section-heading__title">About URJIKO Labs</h1>
        <p class="section-heading__subtitle">
          We are a team of dedicated software engineers, product thinkers, and problem solvers building software for the real world.
        </p>
      </div>

      <div class="card card--lg mb-12">
        <h3 class="card__title mb-4">Our Engineering Philosophy</h3>
        <p>
          URJIKO Labs was founded on the principle that digital tools should be reliable, intuitive, and directly aligned with business value. We do not build technology for technology's sake; we solve actual operational bottlenecks.
        </p>
      </div>
    </div>
    ${p()}
  `,"/contact":()=>`
    <div class="container section">
      ${c([{label:"Home",path:"/"},{label:"Contact"}])}
      <div class="section-heading">
        <span class="section-heading__label">Get in Touch</span>
        <h1 class="section-heading__title">Discuss Your Project</h1>
        <p class="section-heading__subtitle">
          Have an upcoming software project, technical challenge, or need a custom solution? Reach out directly.
        </p>
      </div>

      <div class="grid grid--2 mb-12">
        <!-- Direct Telegram CTA Component -->
        <div>
          ${L({title:"Quickest Response via Telegram",description:"Directly message our engineering lead on Telegram to discuss requirements, feasibility, and project estimates."})}

          <div class="card mt-6" style="margin-top: var(--space-6);">
            <h4 class="card__title mb-2">Email Inquiries</h4>
            <p class="text-sm text-secondary mb-2">For formal RFPs, partnerships, and detailed specifications:</p>
            <a href="mailto:${n.contact.email}" class="font-semibold text-teal">${n.contact.email}</a>
          </div>
        </div>

        <!-- Contact Form Placeholder / Foundation -->
        <div class="card card--lg">
          <h3 class="card__title mb-4">Send a Message</h3>
          <form onsubmit="event.preventDefault(); alert('Form submitted!');" novalidate>
            <div class="form-group">
              <label for="contact-name" class="form-label form-label--required">Full Name</label>
              <input type="text" id="contact-name" class="form-input" placeholder="e.g. John Doe" required />
            </div>
            <div class="form-group">
              <label for="contact-email" class="form-label form-label--required">Email Address</label>
              <input type="email" id="contact-email" class="form-input" placeholder="name@company.com" required />
            </div>
            <div class="form-group">
              <label for="contact-service" class="form-label">Service Area</label>
              <select id="contact-service" class="form-select">
                <option value="web">Web Development</option>
                <option value="business">Business Management System</option>
                <option value="custom">Custom Software Development</option>
                <option value="ai">AI & Intelligent Solutions</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact-message" class="form-label form-label--required">Project Details</label>
              <textarea id="contact-message" class="form-textarea" placeholder="Tell us about what you want to build..." required></textarea>
            </div>
            <button type="submit" class="btn btn--primary" style="width: 100%;">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `,"/404":()=>`
    <div class="container section text-center">
      <div style="max-width: 32rem; margin: 0 auto; padding: var(--space-12) 0;">
        <span class="badge badge--navy mb-4">404 Error</span>
        <h1 style="font-size: var(--font-size-6xl); color: var(--color-navy); margin-bottom: var(--space-2);">404</h1>
        <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--space-4);">Page not found</h2>
        <p class="text-secondary mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div class="flex justify-center gap-4">
          <a href="/" data-link class="btn btn--primary">Back to Home</a>
          <a href="/solutions" data-link class="btn btn--secondary">Explore Solutions</a>
        </div>
      </div>
    </div>
  `};class A{constructor(){this.appContainer=document.getElementById("app"),this.init()}init(){document.addEventListener("click",s=>{const e=s.target.closest("a[data-link]");if(e){const i=e.getAttribute("href");i&&!i.startsWith("http")&&!i.startsWith("mailto:")&&(s.preventDefault(),this.navigateTo(i))}}),window.addEventListener("popstate",()=>{this.renderCurrentRoute()}),this.renderCurrentRoute()}navigateTo(s){window.location.pathname!==s&&window.history.pushState(null,null,s),this.renderCurrentRoute(),window.scrollTo({top:0,behavior:"smooth"})}renderCurrentRoute(){let e=(window.location.pathname||"/").replace(/\/$/,"")||"/";window.location.hash.startsWith("#/")&&(e=window.location.hash.slice(1));const i=v[e]||v["/404"]||v["/"],a=i?i():"";this.appContainer&&(this.appContainer.innerHTML=f({path:e,content:a}),y())}}function g(){window.urjikoRouter||(window.urjikoRouter=new A)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g();
