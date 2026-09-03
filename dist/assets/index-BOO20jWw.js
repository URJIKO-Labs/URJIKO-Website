(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const n={name:"URJIKO Labs",tagline:"Practical digital solutions for modern businesses and organizations.",shortDescription:"URJIKO Labs designs and develops websites, business systems, custom software, and intelligent digital solutions that help organizations work smarter and grow.",contact:{email:"urjikolabs@gmail.com"},telegram:{url:"https://t.me/urjikolabs",ctaText:"Message Us on Telegram"},navLinks:[{label:"Home",path:"/"},{label:"Services",path:"/services"},{label:"Solutions",path:"/solutions"},{label:"Portfolio",path:"/portfolio"},{label:"About",path:"/about"},{label:"Contact",path:"/contact"}],footerNav:{company:[{label:"Home",path:"/"},{label:"Services",path:"/services"},{label:"Solutions",path:"/solutions"},{label:"Portfolio",path:"/portfolio"},{label:"About",path:"/about"},{label:"Contact",path:"/contact"}],services:[{label:"Web Development",path:"/services"},{label:"Business Systems",path:"/services"},{label:"Custom Software",path:"/services"},{label:"AI Solutions",path:"/services"}],connect:[{label:"Email",type:"email",href:"mailto:urjikolabs@gmail.com"},{label:"Telegram",type:"telegram",href:"https://t.me/urjikolabs"},{label:"GitHub",type:"github",href:"https://github.com/URJIKO-Labs"},{label:"LinkedIn",type:"linkedin",href:"#"}]},primaryCTA:{label:"Discuss Your Project",path:"/contact"}},p={defaultTitle:"URJIKO Labs — Building Practical Digital Solutions",defaultDescription:"URJIKO Labs builds high-reliability web applications, business management systems, custom software, and AI solutions.",routes:{"/":{title:"URJIKO Labs — Digital Solutions for Modern Businesses",description:"Practical digital products, web development, business management systems, and custom software engineering.",heading:"Building Practical Digital Products & Software Solutions"},"/services":{title:"Services — Website Development, Business Systems & Custom Software | URJIKO Labs",description:"Professional software development services in Ethiopia — website development, business management systems, custom software, AI solutions, and ongoing technical support for organizations.",heading:"Technology Built Around Your Business"},"/solutions":{title:"Solutions — Business, Education, Transport & Healthcare Software | URJIKO Labs",description:"Practical digital solutions for real-world problems — business operations, education management, transport systems, and healthcare platforms built by URJIKO Labs in Ethiopia.",heading:"Practical Software for Real-World Problems"},"/portfolio":{title:"Portfolio | URJIKO Labs",description:"Explore software solutions, business systems, and digital experiences developed by URJIKO Labs.",heading:"Software Built to Solve Real Problems."},"/about":{title:"About URJIKO Labs",description:"Our mission, engineering philosophy, and commitment to practical, reliable digital transformation.",heading:"About URJIKO Labs"},"/contact":{title:"Contact URJIKO Labs",description:"Get in touch with URJIKO Labs to discuss your project, request a consultation, or connect via Telegram.",heading:"Discuss Your Project"},"/404":{title:"404 — Page Not Found | URJIKO Labs",description:"The requested page could not be found.",heading:"Page Not Found"}}},o={telegram:(t="w-5 h-5")=>`
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
  `};function m(t="/"){const a=n.navLinks.map(e=>{const s=t===e.path;return`
        <li>
          <a 
            href="${e.path}" 
            data-link 
            class="navbar__link ${s?"navbar__link--active":""}"
            ${s?'aria-current="page"':""}
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
            width="48" 
            height="48" 
            loading="eager"
            style="height: 3rem; width: 3rem; object-fit: contain; border-radius: 4px;"
          />
        </a>

        <!-- Desktop Navigation Links -->
        <nav aria-label="Main Navigation" class="hide-mobile">
          <ul class="navbar__links" role="list">
            ${a}
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
              ${o.menu()}
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
              ${n.navLinks.map(e=>{const s=t===e.path;return`
                    <li>
                      <a 
                        href="${e.path}" 
                        data-link 
                        class="navbar__mobile-link ${s?"navbar__mobile-link--active":""}"
                        ${s?'aria-current="page"':""}
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
  `}function h(){const t=new Date().getFullYear()||2026,a=n.footerNav.company.map(i=>`<li><a href="${i.path}" data-link class="footer__link">${i.label}</a></li>`).join(""),e=n.footerNav.services.map(i=>`<li><a href="${i.path}" data-link class="footer__link">${i.label}</a></li>`).join(""),s=n.footerNav.connect.map(i=>{let r="";i.type==="telegram"&&(r=o.telegram("w-4 h-4")),i.type==="github"&&(r=o.github("w-4 h-4")),i.type==="linkedin"&&(r=o.linkedin("w-4 h-4")),i.type==="email"&&(r=o.mail("w-4 h-4"));const l=(i.href.startsWith("http")||i.href.startsWith("mailto:"))&&!i.href.startsWith("mailto:")?'target="_blank" rel="noopener noreferrer"':"";return`
        <li>
          <a href="${i.href}" class="footer__link flex items-center gap-2" ${l}>
            ${r}
            <span>${i.label}</span>
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
              ${a}
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
              ${s}
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
  `}function f(){const t=document.getElementById("navbar-toggle-btn"),a=document.getElementById("navbar-toggle-icon"),e=document.getElementById("mobile-nav-panel");if(!t||!e)return;let s=!1;function i(){s=!0,t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Close Navigation Menu"),e.removeAttribute("hidden"),e.classList.add("is-open"),document.body.style.overflow="hidden",a&&(a.innerHTML=o.close());const l=e.querySelector("a");l&&l.focus()}function r(){s=!1,t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Open Navigation Menu"),e.setAttribute("hidden",""),e.classList.remove("is-open"),document.body.style.overflow="",a&&(a.innerHTML=o.menu())}t.onclick=l=>{l.stopPropagation(),s?r():i()},document.addEventListener("keydown",l=>{l.key==="Escape"&&s&&(r(),t.focus())}),e.querySelectorAll("a").forEach(l=>{l.addEventListener("click",()=>{s&&r()})}),document.addEventListener("click",l=>{s&&!e.contains(l.target)&&!t.contains(l.target)&&r()})}function x({path:t="/",content:a=""}){const e=p.routes[t]||{title:p.defaultTitle,description:p.defaultDescription};document.title=e.title;let s=document.querySelector('meta[name="description"]');return s&&s.setAttribute("content",e.description),`
    <div class="app-layout flex flex-col min-h-screen" style="min-height: 100vh; display: flex; flex-direction: column;">
      <a href="#main-content" class="sr-only" style="position: absolute; top: 1rem; left: 1rem; z-index: 1000; background: var(--color-white); padding: 0.5rem 1rem; border: 2px solid var(--color-blue); border-radius: 4px;">
        Skip to main content
      </a>

      ${m(t)}

      <main id="main-content" class="flex-1" style="flex: 1 0 auto;" role="main">
        ${a}
      </main>

      ${h()}
    </div>
  `}function y(){f();const t=document.getElementById("site-navbar");if(t){const a=()=>{window.scrollY>20?t.classList.add("navbar--scrolled"):t.classList.remove("navbar--scrolled")};window.removeEventListener("scroll",a),window.addEventListener("scroll",a,{passive:!0}),a()}}function w(){return`
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
                ${o.arrowRight("w-4 h-4")}
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
  `}function k(){return`
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
  `}function S(){return`
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
            ${e.tags.map(s=>`<span class="badge badge--navy text-xs">${s}</span>`).join("")}
          </div>
          <a href="/services" data-link class="card__link">
            <span>Learn More</span>
            ${o.arrowRight("w-4 h-4")}
          </a>
        </div>
      </div>
    `).join("")}
        </div>

        <!-- Section Link to Services -->
        <div class="flex justify-center mt-8">
          <a href="/services" data-link class="btn btn--secondary flex items-center gap-2">
            <span>Explore All Services</span>
            ${o.arrowRight("w-4 h-4")}
          </a>
        </div>
      </div>
    </section>
  `}function _(){return`
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
                  ${o.arrowRight("w-4 h-4")}
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
                  ${o.arrowRight("w-4 h-4")}
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
                  ${o.arrowRight("w-4 h-4")}
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
                  ${o.arrowRight("w-4 h-4")}
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
  `}function C(){return`
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
  `}function c({title:t="Have a problem that technology could solve?",description:a="Let's build a practical, high-performance digital solution tailored for your organization.",primaryBtnLabel:e=n.primaryCTA.label,primaryBtnPath:s=n.primaryCTA.path,secondaryBtnLabel:i="View Our Solutions",secondaryBtnPath:r="/solutions"}={}){return`
    <section class="section" aria-labelledby="cta-section-heading">
      <div class="container">
        <div class="cta-section">
          <h2 id="cta-section-heading" class="cta-section__title text-balance">${t}</h2>
          <p class="cta-section__description text-balance">${a}</p>
          <div class="cta-section__actions">
            <a href="${s}" data-link class="btn btn--primary btn--lg">
              ${e}
            </a>
            ${i?`
              <a href="${r}" data-link class="btn btn--secondary btn--lg" style="border-color: rgba(255,255,255,0.4); color: #FFFFFF;">
                ${i}
              </a>
            `:""}
          </div>
        </div>
      </div>
    </section>
  `}function P(){return`
    <div class="home-page">
      <!-- 1. Hero -->
      ${w()}

      <!-- 2. Value Strip -->
      ${k()}

      <!-- 3. What We Do -->
      ${S()}

      <!-- 4. Featured Solutions -->
      ${_()}

      <!-- 5. Why URJIKO Labs -->
      ${C()}

      <!-- 6. How We Work -->
      ${$()}

      <!-- 7. Final CTA -->
      ${c({title:"Have a problem that technology could solve?",description:"Tell us what you're trying to improve. We'll help you explore a practical digital solution.",primaryBtnLabel:"Discuss Your Project",primaryBtnPath:"/contact",secondaryBtnLabel:"Explore Our Solutions",secondaryBtnPath:"/solutions"})}
    </div>
  `}function A(){return`
    <section class="section section--lg" aria-labelledby="services-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-16); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              WHAT WE DO
            </div>

            <h1 id="services-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Technology Built Around Your Business.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.1875rem); max-width: 38rem; line-height: 1.65;">
              From modern websites to business systems and intelligent software, URJIKO Labs builds practical digital solutions designed around real organizational needs.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Project</span>
                ${o.arrowRight("w-4 h-4")}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>View Our Solutions</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Abstract Connected Architecture Visual (Navy + Blue + Light Blue) -->
          <div class="hero-visual-wrapper" aria-hidden="true" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center;">
            <div style="width: 100%; max-width: 500px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); box-shadow: var(--shadow-xl);">
              
              <div class="flex items-center justify-between pb-4 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
                <span class="text-xs font-semibold text-navy">SYSTEM CAPABILITIES & ARCHITECTURE</span>
                <span class="badge badge--blue text-xs">5 Core Areas</span>
              </div>

              <!-- Connected Modules Stack -->
              <div class="flex flex-col gap-3">
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">Web & Mobile Platforms</span>
                  </div>
                  <span class="text-xs font-medium" style="color: var(--color-blue);">High Performance</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-navy); color: #FFFFFF; border-radius: var(--radius-sm); box-shadow: var(--shadow-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue-light);"></span>
                    <span class="text-sm font-semibold text-white">Business Management (ERP / POS)</span>
                  </div>
                  <span class="text-xs font-medium" style="color: rgba(255,255,255,0.75);">SmartBiz Ready</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">Custom Workflows & Database Systems</span>
                  </div>
                  <span class="text-xs text-muted">Scalable</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">AI Automation & Data Processing</span>
                  </div>
                  <span class="text-xs font-medium" style="color: var(--color-blue);">Intelligent Tools</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-navy);"></span>
                    <span class="text-sm font-semibold text-navy">Continuous Support & SLA Maintenance</span>
                  </div>
                  <span class="text-xs text-muted">99.9% Upkeep</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
    </style>
  `}function B(){return`
    <section class="section bg-soft" aria-labelledby="services-approach-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">Our Approach</span>
          <h2 id="services-approach-heading" class="section-heading__title">More Than Development</h2>
          <p class="section-heading__subtitle text-balance">
            We start by understanding the problem, then design and build the technology around the way your organization actually works.
          </p>
        </div>

        <!-- 4 Principle Cards -->
        <div class="grid grid--2">
          ${[{title:"Understand",description:"Understand the business, workflow, users, and problem before building.",icon:`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      `},{title:"Build",description:"Create practical software using modern engineering practices.",icon:`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      `},{title:"Improve",description:"Test, refine, deploy, and continuously improve the solution.",icon:`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      `},{title:"Support",description:"Provide technical support and maintenance after launch when needed.",icon:`
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      `}].map(e=>`
        <div class="card" style="background-color: var(--color-white); border: 1px solid var(--color-border); border-top: 3px solid var(--color-blue); display: flex; flex-direction: column;">
          <div class="approach-icon-circle" style="width: 3.25rem; height: 3.25rem; border-radius: var(--radius-full); background-color: var(--color-bg-light-blue); color: var(--color-blue); display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-4); flex-shrink: 0;">
            ${e.icon}
          </div>
          <h3 class="card__title text-navy mb-2" style="font-size: var(--font-size-xl); font-weight: 600;">
            ${e.title}
          </h3>
          <p class="text-secondary mb-0" style="line-height: 1.6; font-size: var(--font-size-base);">
            ${e.description}
          </p>
        </div>
      `).join("")}
        </div>

      </div>
    </section>
  `}function R(){return`
    <section class="section" aria-labelledby="core-services-heading">
      <div class="container">
        <!-- Section Heading -->
        <div class="section-heading">
          <span class="section-heading__label">CORE SERVICES</span>
          <h2 id="core-services-heading" class="section-heading__title">What We Can Build For You</h2>
          <p class="section-heading__subtitle text-balance">
            From websites to intelligent software, every service is built around solving real business problems.
          </p>
        </div>

        <!-- 5 Service Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: var(--space-6);">
          ${[{title:"Website Development",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',description:"Build modern, responsive websites that give businesses and organizations a professional digital presence and make it easier for customers to interact with them.",tags:["Business Websites","E-Commerce","Landing Pages","SEO-Ready","Responsive Design","CMS Integration"],link:"/contact"},{title:"Business Management Systems",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',description:"Build practical software that helps businesses manage daily operations, customers, sales, inventory, reporting, and internal workflows.",tags:["POS","Inventory","Sales","Customers","Reports","Dashboards"],featured:{label:"Featured: SmartBiz ERP",href:"/portfolio"},link:"/contact"},{title:"Custom Software Development",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',description:"Develop software around the specific workflows, requirements, and operational problems of an organization instead of forcing the organization to adapt to generic software.",tags:["Management Systems","Booking Systems","Internal Platforms","Role-Based Systems","Custom Dashboards"],link:"/contact"},{title:"AI & Intelligent Solutions",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>',description:"Explore practical ways artificial intelligence and data-driven technology can improve business workflows, automation, decision-making, and customer experiences.",tags:["AI Assistants","Workflow Automation","Data Analysis","Intelligent Search","AI Integration"],link:"/contact"},{title:"Maintenance & Technical Support",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>',description:"Keep deployed software reliable, secure, updated, and continuously improving after launch.",tags:["Bug Fixing","Updates","Monitoring","Security","Performance","Feature Improvements"],link:"/contact"}].map(e=>`
      <div class="card flex flex-col justify-between" style="height: 100%;">
        <div>
          <!-- Top Icon & Optional Featured Badge -->
          <div class="flex items-start justify-between gap-3 mb-4">
            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: var(--color-bg-light-blue); color: var(--color-blue); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              ${e.icon}
            </div>
            ${e.featured?`<a href="${e.featured.href}" data-link class="badge badge--blue text-xs font-semibold" style="text-decoration: none;">${e.featured.label}</a>`:""}
          </div>

          <!-- Heading -->
          <h3 class="card__title text-navy mb-3">${e.title}</h3>

          <!-- Description -->
          <p class="card__description text-secondary mb-6">${e.description}</p>
        </div>

        <div>
          <!-- Capabilities Tags -->
          <div class="flex flex-wrap gap-2 mb-6">
            ${e.tags.map(s=>`<span class="badge badge--outline text-xs">${s}</span>`).join("")}
          </div>

          <!-- Action Link -->
          <a href="${e.link}" data-link class="card__link">
            <span>Explore Service</span>
            ${o.arrowRight("w-4 h-4")}
          </a>
        </div>
      </div>
    `).join("")}
        </div>
      </div>
    </section>
  `}function T(){return`
    <section class="section bg-white" aria-labelledby="smartbiz-feature-title" style="background-color: var(--color-white); position: relative;">
      <div class="container">
        <div class="grid smartbiz-feature-grid items-center">
          
          <!-- Left Content -->
          <div class="flex flex-col items-start">
            <div class="section-heading mb-6" style="margin-bottom: var(--space-6);">
              <span class="section-heading__label">BUSINESS MANAGEMENT SOLUTION</span>
              <h2 id="smartbiz-feature-title" class="section-heading__title">Turn Daily Operations Into One Connected System.</h2>
              <p class="section-heading__subtitle text-balance">
                Businesses often manage sales, inventory, customers, and reporting across disconnected processes. URJIKO can bring these workflows together into practical software.
              </p>
            </div>

            <!-- Feature Chips -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="badge badge--navy">POS</span>
              <span class="badge badge--navy">Inventory</span>
              <span class="badge badge--navy">Sales</span>
              <span class="badge badge--navy">Customers</span>
              <span class="badge badge--navy">Reports</span>
              <span class="badge badge--navy">Dashboard</span>
            </div>

            <!-- CTA Button -->
            <div>
              <a href="/portfolio" data-link class="btn btn--primary">
                <span>View SmartBiz</span>
                ${o.arrowRight("w-4 h-4")}
              </a>
            </div>
          </div>

          <!-- Right Visual: CSS Terminal / Dashboard Mockup -->
          <div class="smartbiz-visual-wrapper" style="width: 100%; display: flex; justify-content: center;">
            <div class="card card--lg shadow-lg" role="region" aria-label="SmartBiz Control Panel Preview" style="width: 100%; max-width: 520px; background-color: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
              
              <!-- Top Bar -->
              <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
                <div class="flex items-center gap-2">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
                  <span class="text-sm font-semibold text-navy">SmartBiz Control Panel</span>
                </div>
                <span class="badge badge--blue text-xs font-semibold">Live</span>
              </div>

              <!-- 2x2 Mini Stat Cards -->
              <div class="grid grid--2 gap-3 mb-5" style="grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
                <!-- Stat Card 1 -->
                <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
                  <div class="text-xs text-muted mb-1 font-medium">Today's Sales</div>
                  <div class="text-lg font-bold text-navy">47 Orders</div>
                </div>

                <!-- Stat Card 2 -->
                <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
                  <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Inventory</div>
                  <div class="text-lg font-bold" style="color: var(--color-blue);">All Stocked</div>
                </div>

                <!-- Stat Card 3 -->
                <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
                  <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Customers</div>
                  <div class="text-lg font-bold text-navy">1,243</div>
                </div>

                <!-- Stat Card 4 -->
                <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
                  <div class="text-xs text-muted mb-1 font-medium">Revenue</div>
                  <div class="text-lg font-bold text-navy">Growing</div>
                </div>
              </div>

              <!-- Bottom: Progress Bar -->
              <div class="p-4" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-navy">Operations Efficiency</span>
                  <span class="text-xs font-bold" style="color: var(--color-blue);">91%</span>
                </div>
                <div style="width: 100%; height: 8px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden;">
                  <div style="width: 91%; height: 100%; background-color: var(--color-blue); border-radius: var(--radius-full);" role="progressbar" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100" aria-label="Operations Efficiency"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>
        .smartbiz-feature-grid {
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }

        .shadow-lg {
          box-shadow: var(--shadow-lg);
        }

        @media (min-width: 1024px) {
          .smartbiz-feature-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: var(--space-12);
          }
        }
      </style>
    </section>
  `}function j(){return`
    ${A()}
    ${B()}
    ${R()}
    ${T()}
    ${c({title:"Ready to Build Your Solution?",description:"Tell us about your project requirements. We will help you identify the right technology approach.",primaryBtnLabel:"Discuss Your Project",primaryBtnPath:"/contact",secondaryBtnLabel:"View Our Solutions",secondaryBtnPath:"/solutions"})}
  `}function z(){return`
    <section class="section section--lg" aria-labelledby="solutions-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-16); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column: Copy & Actions -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              SOLUTIONS
            </div>

            <h1 id="solutions-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Practical Software for Real-World Problems.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.1875rem); max-width: 38rem; line-height: 1.65;">
              We design digital systems around the workflows, challenges, and goals of businesses and organizations.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Problem</span>
                ${o.arrowRight("w-4 h-4")}
              </a>
              <a href="/portfolio" data-link class="btn btn--secondary btn--lg">
                <span>Explore Our Work</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Connected Industry Architecture Visual -->
          <div class="hero-visual-wrapper" aria-hidden="true" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center;">
            <div style="width: 100%; max-width: 500px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); box-shadow: var(--shadow-xl); position: relative;">
              
              <!-- Card Header -->
              <div class="flex items-center justify-between pb-4 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
                <span class="text-xs font-semibold text-navy" style="letter-spacing: var(--letter-spacing-wide);">SOLUTION ARCHITECTURE</span>
                <span class="badge badge--blue text-xs">4 Industries</span>
              </div>

              <!-- Connected Sector Rows -->
              <div class="flex flex-col gap-3" style="position: relative;">
                
                <!-- Row 1: Business Operations (light-blue bg) -->
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm); transition: all var(--transition-fast);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span>
                    <span class="text-sm font-semibold text-navy">Business Operations</span>
                  </div>
                  <span class="text-xs font-medium" style="color: var(--color-blue);">Enterprise ERP</span>
                </div>

                <!-- Row 2: Education Systems (soft-gray bg) -->
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm); transition: all var(--transition-fast);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span>
                    <span class="text-sm font-semibold text-navy">Education Systems</span>
                  </div>
                  <span class="text-xs font-medium text-secondary">Academic & Admin</span>
                </div>

                <!-- Row 3: Transport Management (light-blue bg) -->
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm); transition: all var(--transition-fast);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span>
                    <span class="text-sm font-semibold text-navy">Transport Management</span>
                  </div>
                  <span class="text-xs font-medium" style="color: var(--color-blue);">Fleet Logistics</span>
                </div>

                <!-- Row 4: Healthcare Platforms (soft-gray bg) -->
                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm); transition: all var(--transition-fast);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span>
                    <span class="text-sm font-semibold text-navy">Healthcare Platforms</span>
                  </div>
                  <span class="text-xs font-medium text-secondary">Clinical Workflows</span>
                </div>

              </div>

              <!-- Card Footer Connection Metric -->
              <div class="flex items-center justify-between pt-4 mt-4" style="border-top: 1px solid var(--color-border-subtle);">
                <span class="text-xs text-secondary flex items-center gap-2">
                  <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-blue);"></span>
                  Connected Digital Workflows
                </span>
                <span class="text-xs font-semibold text-navy">Unified Modular Core</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="solutions-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
    </style>
  `}const I=[{id:"business-solutions",badge:"BUSINESS SOLUTIONS",title:"Business Solutions",description:"Tools that help businesses manage operations, sales, customers, inventory, and decision-making more efficiently.",bgClass:"bg-white",gridClass:"grid--3",cards:[{title:"Inventory Management",description:"Real-time stock tracking, multi-location inventory, automated reorder alerts, and supplier sync."},{title:"Point of Sale",description:"Fast, intuitive checkout interface with receipt printing, payment tracking, and barcode support."},{title:"Customer Management",description:"Centralized customer directory with transaction histories, preferences, and credit monitoring."},{title:"Sales Management",description:"Pipeline oversight, invoice creation, recurring billing, and real-time revenue performance metrics."},{title:"Business Analytics",description:"Custom financial reports, sales trends, inventory turnover analysis, and visual dashboards."}],featured:{name:"SmartBiz ERP",badgeClass:"badge--blue",badgeText:"Core Product",link:"/portfolio"},cta:{label:"Explore Business Solutions",link:"/portfolio"}},{id:"education-solutions",badge:"EDUCATION SOLUTIONS",title:"Education Solutions",description:"Digital systems that help schools and educational organizations manage students, teachers, classes, attendance, grades, and academic workflows.",bgClass:"bg-soft",gridClass:"grid--3",cards:[{title:"Student Management",description:"Complete student profiles, enrollment tracking, demographic records, and academic history."},{title:"Teacher Management",description:"Faculty directories, subject assignments, department allocations, and teaching schedules."},{title:"Attendance",description:"Digital daily attendance recording for students and staff with automated absence notifications."},{title:"Grades",description:"Comprehensive gradebook management, automated report card generation, and exam assessments."},{title:"Timetable",description:"Automated class and room scheduling with conflict resolution and teacher availability tracking."}],featured:{name:"EduFlow",badgeClass:"badge--navy",badgeText:"Education Platform",link:"/portfolio"},cta:{label:"Explore Education Solutions",link:"/portfolio"}},{id:"transport-solutions",badge:"TRANSPORT SOLUTIONS",title:"Transport Solutions",description:"Operational systems that help transport organizations coordinate vehicles, drivers, requests, workflows, and reporting.",bgClass:"bg-white",gridClass:"grid--3",cards:[{title:"Vehicle Management",description:"Fleet registry with maintenance schedules, inspection logs, insurance records, and vehicle health."},{title:"Driver Management",description:"Driver rosters, license compliance, shift assignments, and trip performance histories."},{title:"Transport Requests",description:"Digital dispatch workflows, trip approvals, passenger allocations, and request tracking."},{title:"Operations",description:"Live operational control, daily trip execution monitoring, and incident management workflows."},{title:"Reports",description:"Automated fuel consumption tracking, mileage logs, operational cost reports, and fleet analytics."}],featured:{name:"Transport Management",badgeClass:"badge--navy",badgeText:"Operations System",link:"/portfolio"},cta:{label:"Explore Transport Solutions",link:"/portfolio"}},{id:"healthcare-solutions",badge:"HEALTHCARE SOLUTIONS",title:"Healthcare Solutions",description:"Digital platforms designed to support healthcare workflows, records, management, and operational visibility.",bgClass:"bg-soft",gridClass:"grid--2",cards:[{title:"Digital Records",description:"Secure digital patient charts, medical history archives, treatment notes, and lab records."},{title:"Patient Workflows",description:"Streamlined appointment scheduling, triage queues, intake workflows, and patient check-in."},{title:"Management Dashboards",description:"Facility occupancy rates, department performance, staff coverage, and service analytics."}],featured:{name:"ShegerHealth",badgeClass:"badge--blue",badgeText:"Project Concept",link:"/portfolio",disclaimer:"ShegerHealth is a demonstration project exploring digital healthcare workflows."},cta:{label:"Explore Healthcare Solutions",link:"/portfolio"}}];function E(){return I.map(t=>`
    <section 
      id="${t.id}" 
      class="section ${t.bgClass}" 
      aria-labelledby="${t.id}-heading"
      style="border-top: 1px solid var(--color-border-subtle);"
    >
      <div class="container">
        
        <!-- Left-aligned Section Heading -->
        <div class="section-heading mb-8">
          <div class="mb-3">
            <span class="badge badge--blue font-semibold">${t.badge}</span>
          </div>
          <h2 id="${t.id}-heading" class="section-heading__title">${t.title}</h2>
          <p class="section-heading__subtitle text-balance">
            ${t.description}
          </p>
        </div>

        <!-- Compact Solution Cards Grid -->
        <div class="grid ${t.gridClass} gap-4 mb-8">
          ${t.cards.map(a=>`
            <div class="card" style="background: var(--color-white); border: 1px solid var(--color-border-subtle); padding: var(--space-5);">
              <div class="flex items-center gap-2 mb-2">
                <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block; flex-shrink: 0;" aria-hidden="true"></span>
                <h4 class="text-navy font-semibold" style="margin: 0; font-size: var(--font-size-base); line-height: 1.4;">
                  ${a.title}
                </h4>
              </div>
              <p class="text-secondary text-sm mb-0" style="line-height: 1.5;">
                ${a.description}
              </p>
            </div>
          `).join("")}
        </div>

        <!-- Featured Project Indicator -->
        <div style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); padding: var(--space-4) var(--space-5); margin-bottom: var(--space-6);">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex flex-wrap items-center gap-3">
              <span class="badge ${t.featured.badgeClass} font-semibold">${t.featured.badgeText}</span>
              <span class="font-semibold text-navy" style="font-size: var(--font-size-base);">${t.featured.name}</span>
            </div>
            <a href="${t.featured.link}" data-link class="card__link font-semibold flex items-center gap-1" style="margin-top: 0; font-size: var(--font-size-sm);">
              <span>View Project</span>
              ${o.arrowRight("w-4 h-4")}
            </a>
          </div>
          ${t.featured.disclaimer?`
            <p class="text-xs text-muted mb-0 mt-3 pt-3" style="border-top: 1px solid rgba(7, 87, 184, 0.12); line-height: 1.5;">
              ${t.featured.disclaimer}
            </p>
          `:""}
        </div>

        <!-- Category CTA Link -->
        <div class="flex items-center">
          <a href="${t.cta.link}" data-link class="btn btn--secondary flex items-center gap-2">
            <span>${t.cta.label}</span>
            ${o.arrowRight("w-4 h-4")}
          </a>
        </div>

      </div>
    </section>
  `).join(`
`)}function L(){const t=[{number:"01",name:"Problem"},{number:"02",name:"Understand"},{number:"03",name:"Design"},{number:"04",name:"Build"},{number:"05",name:"Deploy"},{number:"06",name:"Improve"}];return`
    <section class="section bg-soft problem-solution-section" aria-labelledby="problem-solution-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Heading (Centered) -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">OUR APPROACH</span>
          <h2 id="problem-solution-heading" class="section-heading__title">
            Start With the Problem. Build the Right Solution.
          </h2>
        </div>

        <!-- Responsive Process Flow -->
        <div class="problem-solution__flow" role="list">
          ${t.map((e,s)=>{const r=s===t.length-1?"":`
          <div class="problem-solution__connector" aria-hidden="true">
            <span class="problem-solution__connector-line"></span>
            <svg class="problem-solution__connector-arrow" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 3 11 8 6 13"></polyline>
            </svg>
          </div>
        `;return`
        <div class="problem-solution__step">
          <div class="problem-solution__node font-bold">${e.number}</div>
          <span class="problem-solution__name font-semibold text-navy">${e.name}</span>
        </div>
        ${r}
      `}).join("")}
        </div>

        <!-- Centered Supporting Message -->
        <div class="problem-solution__message-wrapper text-center" style="max-width: 36rem; margin-left: auto; margin-right: auto;">
          <p class="problem-solution__message text-secondary text-balance text-center">
            We don't believe every organization needs the same software. We build around the actual problem, workflow, users, and goals.
          </p>
        </div>

      </div>
    </section>

    <style>
      .problem-solution-section {
        border-top: 1px solid var(--color-border-subtle);
        background-color: var(--color-bg-soft);
      }

      /* Process Flow — Horizontal Flexbox on Desktop */
      .problem-solution__flow {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        max-width: 64rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: var(--space-12);
        padding: 0 var(--space-2);
        position: relative;
      }

      /* Step Item */
      .problem-solution__step {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--space-2);
        flex-shrink: 0;
        position: relative;
        z-index: 1;
        transition: transform var(--transition-fast);
      }

      .problem-solution__step:hover {
        transform: translateY(-2px);
      }

      /* Circle / Node (Blue on Light-Blue BG) */
      .problem-solution__node {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 50%;
        background-color: var(--color-bg-light-blue);
        color: var(--color-blue);
        border: 2px solid var(--color-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-bold);
        font-family: monospace;
        box-shadow: 0 2px 6px rgba(7, 87, 184, 0.12);
        transition: background-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast);
      }

      .problem-solution__step:hover .problem-solution__node {
        background-color: var(--color-blue);
        color: var(--color-white);
        box-shadow: 0 4px 12px rgba(7, 87, 184, 0.25);
      }

      /* Step Name */
      .problem-solution__name {
        font-size: var(--font-size-sm);
        color: var(--color-navy);
        letter-spacing: var(--letter-spacing-tight);
        white-space: nowrap;
        transition: color var(--transition-fast);
      }

      .problem-solution__step:hover .problem-solution__name {
        color: var(--color-blue);
      }

      /* Connector Line & Arrow */
      .problem-solution__connector {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        min-width: 1.25rem;
        max-width: 4.5rem;
        margin-top: 1.375rem;
        transform: translateY(-50%);
        color: var(--color-blue);
      }

      .problem-solution__connector-line {
        flex: 1;
        height: 2px;
        background-color: rgba(7, 87, 184, 0.3);
        min-width: 0.75rem;
      }

      .problem-solution__connector-arrow {
        flex-shrink: 0;
        color: var(--color-blue);
        margin-left: -2px;
      }

      /* Supporting Message Block */
      .problem-solution__message-wrapper {
        max-width: 36rem;
        margin-left: auto;
        margin-right: auto;
      }

      .problem-solution__message {
        font-size: var(--font-size-base);
        line-height: var(--line-height-relaxed);
        margin-bottom: 0;
      }

      /* Mobile Layout (< 768px): Vertical Flow Top-to-Bottom */
      @media (max-width: 767.98px) {
        .problem-solution__flow {
          flex-direction: column;
          align-items: center;
          gap: 0;
          max-width: 20rem;
          margin-bottom: var(--space-8);
          padding: 0 var(--space-4);
        }

        .problem-solution__step {
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--space-3);
          width: 100%;
          padding: var(--space-3) var(--space-4);
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xs);
          text-align: left;
        }

        .problem-solution__step:hover {
          transform: none;
          border-color: var(--color-border-blue);
          box-shadow: var(--shadow-sm);
        }

        .problem-solution__step:hover .problem-solution__node {
          transform: none;
        }

        .problem-solution__node {
          width: 2.25rem;
          height: 2.25rem;
          font-size: var(--font-size-xs);
          flex-shrink: 0;
        }

        .problem-solution__name {
          font-size: var(--font-size-base);
        }

        .problem-solution__connector {
          flex-direction: column;
          height: 1.75rem;
          width: 100%;
          min-width: auto;
          max-width: none;
          margin-top: 0;
          transform: none;
          padding: 0.15rem 0;
        }

        .problem-solution__connector-line {
          width: 2px;
          height: 100%;
          flex: 1;
          min-width: unset;
        }

        .problem-solution__connector-arrow {
          transform: rotate(90deg);
          margin-left: 0;
          margin-top: -2px;
        }
      }
    </style>
  `}function M(){return`
    <section class="section bg-white" aria-labelledby="capabilities-heading">
      <div class="container">
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">TECHNICAL CAPABILITIES</span>
          <h2 id="capabilities-heading" class="section-heading__title">Built-In Features Across Every Solution</h2>
          <p class="section-heading__subtitle text-balance">
            Common capabilities integrated into our digital systems.
          </p>
        </div>

        <!-- Capabilities Grid -->
        <div class="capability-grid">
          ${[{title:"Inventory Management",description:"Track products, stock levels, and availability",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>'},{title:"Point of Sale",description:"Process transactions and manage sales records",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><line x1="6" y1="15" x2="10" y2="15"></line><line x1="14" y1="15" x2="18" y2="15"></line></svg>'},{title:"Customer Management",description:"Organize contacts, accounts, and interactions",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>'},{title:"Dashboards",description:"Real-time operational visibility and metrics",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect></svg>'},{title:"Reporting",description:"Generate business intelligence and data exports",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><line x1="2" y1="20" x2="22" y2="20"></line></svg>'},{title:"Authentication",description:"Secure user login and session management",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>'},{title:"Role-Based Access",description:"Control permissions by user role",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>'},{title:"Workflow Automation",description:"Automate repetitive business processes",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>'},{title:"Data Management",description:"Structured storage, queries, and data integrity",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>'},{title:"Booking & Scheduling",description:"Manage appointments and resource allocation",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>'},{title:"Administration",description:"System settings, user management, and configuration",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'},{title:"AI Integration",description:"Intelligent features and automation capabilities",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>'}].map(e=>`
        <div class="capability-card">
          <div class="capability-card__icon" aria-hidden="true">
            ${e.icon}
          </div>
          <h3 class="text-sm font-semibold text-navy mb-1">${e.title}</h3>
          <p class="text-xs text-muted mb-0" style="line-height: 1.5;">${e.description}</p>
        </div>
      `).join("")}
        </div>
      </div>
    </section>

    <style>
      .capability-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: var(--space-4);
      }

      .capability-card {
        background-color: var(--color-white);
        border: 1px solid var(--color-border-subtle);
        border-radius: var(--radius-sm);
        padding: var(--space-4);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: box-shadow var(--transition-base), border-color var(--transition-base);
      }

      .capability-card:hover {
        box-shadow: var(--shadow-sm);
        border-color: var(--color-border);
      }

      .capability-card__icon {
        width: 36px;
        height: 36px;
        min-width: 36px;
        border-radius: var(--radius-full);
        background-color: var(--color-bg-light-blue);
        color: var(--color-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--space-3);
        flex-shrink: 0;
      }

      .capability-card__icon svg {
        width: 20px;
        height: 20px;
      }
    </style>
  `}function O(){return`
    <section class="section bg-white" aria-labelledby="cross-nav-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Centered Section Heading -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">FIND WHAT YOU NEED</span>
          <h2 id="cross-nav-heading" class="section-heading__title">Navigate Our Capabilities</h2>
        </div>

        <!-- 3 Columns Navigation Cards Grid -->
        <div class="grid grid--3 gap-6">
          ${[{category:"SERVICES",heading:"Need a specific service?",links:[{label:"Website Development",path:"/services"},{label:"Business Systems",path:"/services"},{label:"Custom Software",path:"/services"},{label:"AI Solutions",path:"/services"},{label:"Technical Support",path:"/services"}],ctaText:"View All Services",ctaPath:"/services"},{category:"SOLUTIONS",heading:"Looking for industry solutions?",links:[{label:"Business Operations",path:"/solutions#business-solutions"},{label:"Education Systems",path:"/solutions"},{label:"Transport Management",path:"/solutions"},{label:"Healthcare Platforms",path:"/solutions"}],ctaText:"View All Solutions",ctaPath:"/solutions"},{category:"PORTFOLIO",heading:"Want to see our work?",links:[{label:"SmartBiz ERP",path:"/portfolio"},{label:"EduFlow",path:"/portfolio"},{label:"Transport System",path:"/portfolio"},{label:"ShegerHealth",path:"/portfolio"}],ctaText:"View Portfolio",ctaPath:"/portfolio"}].map(e=>`
      <div class="card cross-nav-card flex flex-col justify-between" style="background-color: var(--color-white); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg); padding: var(--space-6);">
        <div>
          <span class="badge badge--blue font-semibold mb-3">${e.category}</span>
          <h3 class="card__title mb-4" style="font-size: var(--font-size-lg); color: var(--color-navy); line-height: var(--line-height-snug);">
            ${e.heading}
          </h3>

          <ul class="flex flex-col gap-2.5 mb-6" role="list" style="list-style: none; padding: 0; margin: 0;">
            ${e.links.map(s=>`
              <li>
                <a href="${s.path}" data-link class="cross-nav-link flex items-center gap-2 text-sm text-navy">
                  <span class="cross-nav-icon" aria-hidden="true" style="color: var(--color-blue); display: inline-flex; align-items: center; flex-shrink: 0;">
                    ${o.arrowRight("w-3.5 h-3.5")}
                  </span>
                  <span>${s.label}</span>
                </a>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="mt-auto pt-4" style="border-top: 1px solid var(--color-border-subtle);">
          <a href="${e.ctaPath}" data-link class="btn btn--secondary btn--sm flex items-center justify-center gap-2" style="width: 100%;">
            <span>${e.ctaText}</span>
            ${o.arrowRight("w-3.5 h-3.5")}
          </a>
        </div>
      </div>
    `).join("")}
        </div>

      </div>
    </section>

    <style>
      .cross-nav-card {
        box-shadow: var(--shadow-xs);
        transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
      }

      .cross-nav-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-card);
        border-color: var(--color-border-blue) !important;
      }

      a.cross-nav-link {
        color: var(--color-navy);
        text-decoration: none;
        font-weight: var(--font-weight-medium);
        padding: 2px 0;
        transition: transform var(--transition-fast), color var(--transition-fast);
      }

      a.cross-nav-link:hover {
        color: var(--color-navy);
        text-decoration: underline;
      }

      a.cross-nav-link:hover .cross-nav-icon {
        transform: translateX(3px);
      }

      .cross-nav-icon {
        transition: transform var(--transition-fast);
      }
    </style>
  `}function F(){return`
    ${z()}
    ${E()}
    ${L()}
    ${M()}
    ${O()}
    ${c({title:"Have a Problem Technology Could Solve?",description:"Tell us what you are trying to improve. We will help you identify a practical digital solution.",primaryBtnLabel:"Discuss Your Project",primaryBtnPath:"/contact",secondaryBtnLabel:"View Our Work",secondaryBtnPath:"/portfolio"})}
  `}function D(){return`
    <section class="section" aria-labelledby="portfolio-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-14); background: #FFFFFF; position: relative; overflow: hidden;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-10);">

          <!-- Left: Copy -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
              PORTFOLIO
            </div>

            <h1 id="portfolio-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.5rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Software Built to Solve Real&nbsp;Problems.
            </h1>

            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.125rem); max-width: 36rem; line-height: 1.65;">
              Explore selected software, business systems, and digital experiences developed by URJIKO Labs for organizations across business, education, transport, and healthcare.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Project</span>
                ${o.arrowRight("w-4 h-4")}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>View Our Solutions</span>
              </a>
            </div>
          </div>

          <!-- Right: Project Summary Visual -->
          <div aria-hidden="true" style="width: 100%; display: flex; justify-content: center;">
            <div style="width: 100%; max-width: 460px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-5); box-shadow: var(--shadow-lg);">

              <div class="flex items-center justify-between pb-3 mb-4" style="border-bottom: 1px solid var(--color-border-subtle);">
                <span class="text-xs font-semibold text-navy">PROJECT PORTFOLIO</span>
                <span class="badge badge--blue text-xs">4 Core Projects</span>
              </div>

              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between p-3" style="background: var(--color-navy); border-radius: var(--radius-sm); color: #FFF;">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue-light);"></span>
                    <span class="text-sm font-semibold">SmartBiz ERP</span>
                  </div>
                  <span class="text-xs" style="color: rgba(255,255,255,0.7);">Business</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">Transport Management</span>
                  </div>
                  <span class="text-xs text-muted">Operations</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">EduFlow</span>
                  </div>
                  <span class="text-xs text-muted">Education</span>
                </div>

                <div class="flex items-center justify-between p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-sm);">
                  <div class="flex items-center gap-3">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></span>
                    <span class="text-sm font-semibold text-navy">ShegerHealth</span>
                  </div>
                  <span class="text-xs text-muted">Healthcare</span>
                </div>
              </div>

              <div class="flex items-center justify-between mt-4 pt-3" style="border-top: 1px solid var(--color-border-subtle);">
                <span class="text-xs text-muted">+ 3 additional projects</span>
                <span class="text-xs font-semibold" style="color: var(--color-blue);">5 Industries</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      @media (min-width: 1024px) {
        section[aria-labelledby="portfolio-hero-title"] .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
    </style>
  `}function H(){return`
    <section class="section" aria-labelledby="portfolio-intro-heading" style="padding-top: var(--space-10); padding-bottom: var(--space-10); background: var(--color-bg-soft); border-top: 1px solid var(--color-border-subtle); border-bottom: 1px solid var(--color-border-subtle);">
      <div class="container" style="max-width: 52rem;">
        <div class="text-center">
          <h2 id="portfolio-intro-heading" style="font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-4);">
            From Business Problems to Practical Software
          </h2>
          <p class="text-secondary text-balance" style="font-size: var(--font-size-md); line-height: 1.7; margin-bottom: var(--space-8);">
            Each project below demonstrates a different set of capabilities — from business management and education to transport operations and healthcare. The common thread is our approach: understand the problem, design a practical solution, and build software that actually works for the organization.
          </p>

          <div class="flex flex-wrap justify-center gap-3">
            <span class="badge badge--navy">Business Management</span>
            <span class="badge badge--navy">Education</span>
            <span class="badge badge--navy">Transport</span>
            <span class="badge badge--navy">Healthcare</span>
            <span class="badge badge--outline">Retail</span>
            <span class="badge badge--outline">Hospitality</span>
            <span class="badge badge--outline">Websites</span>
          </div>
        </div>
      </div>
    </section>
  `}const W=[{id:"smartbiz",number:"01",name:"SmartBiz ERP",category:"Business Management",badge:"BUSINESS MANAGEMENT",statusBadge:"Active Project",tagline:"Business Management & Inventory Solution",description:"A practical business management system designed to help businesses manage important daily operations — sales, inventory, customers, and reporting — from one unified platform.",problem:"Businesses often lack centralized visibility into sales activity, inventory levels, customer accounts, and daily transactions. Information is scattered across spreadsheets, paper records, and disconnected tools, making it harder to track performance and make informed decisions.",solution:"SmartBiz brings core business operations into one practical system, providing a unified dashboard for sales, inventory, customers, credit management, and reporting — accessible from any device.",features:["Dashboard & Analytics","Point of Sale (POS)","Inventory Management","Product Management","Customer Management","Credit & Balances","Sales Tracking","Profit & Reporting","Business Insights","Mobile-Friendly UI"],businessValue:["Centralized business information","Better organization of daily operations","Easier sales and inventory monitoring","Clearer reporting and business insights","More efficient daily workflows"],technologies:["React","Node.js","Express","PostgreSQL","REST API","Authentication","Responsive UI"],solutionLink:"/solutions#business-solutions",solutionLabel:"Business Solutions",layout:"left"},{id:"transport",number:"02",name:"Transport Management System",category:"Transport & Operations",badge:"TRANSPORT & OPERATIONS",statusBadge:"Management System",tagline:"Transport & Operations Management Solution",description:"A centralized digital system for organizing transport-related workflows, coordinating vehicles, drivers, requests, and administrative operations.",problem:"Transport operations involve multiple requests, people, vehicles, drivers, and administrative workflows that can be difficult to coordinate manually. Lack of centralized information leads to inefficiencies and missed communication.",solution:"A structured digital platform that centralizes transport operations — from request management and vehicle tracking to driver assignments and administrative reporting.",features:["Authentication & Roles","Transport Requests","Vehicle Management","Driver Management","Operations Dashboard","Workflow Management","Administration Panel","Reports & Data"],businessValue:["Centralized operations management","Better visibility into transport activities","Structured request and approval workflows","Easier administration and reporting","Improved coordination across teams"],technologies:["JavaScript","Node.js","Express","MySQL","REST API","Role-Based Access","Responsive UI"],solutionLink:"/solutions#transport-solutions",solutionLabel:"Transport Solutions",layout:"right"},{id:"eduflow",number:"03",name:"EduFlow",category:"Education",badge:"EDUCATION",statusBadge:"MVP / Prototype",tagline:"School Management Solution",description:"An education management platform designed around common school administration workflows — organizing students, teachers, classes, attendance, grades, and scheduling.",problem:"Schools manage complex information across students, teachers, classes, attendance records, grades, and schedules. Without a centralized system, administrative tasks become time-consuming and error-prone.",solution:"A centralized school management platform that organizes key educational workflows into a clean, structured interface with role-based access for administrators and staff.",features:["Student Management","Teacher Management","Class Organization","Attendance Tracking","Grade Management","Timetable & Scheduling","Administration Dashboard","Role-Based Access"],businessValue:["Organized school information","Centralized administration","Easier student and teacher monitoring","Structured academic workflows","Improved visibility for school leaders"],technologies:["React","JavaScript","Node.js","REST API","Authentication","Responsive UI"],solutionLink:"/solutions#education-solutions",solutionLabel:"Education Solutions",layout:"left"},{id:"shegerhealth",number:"04",name:"ShegerHealth",category:"Healthcare",badge:"HEALTHCARE",statusBadge:"Demo / Concept",tagline:"Digital Healthcare Platform Demo",description:"A digital healthcare platform concept focused on structured workflows, management dashboards, and administrative tools for healthcare organizations.",problem:"Healthcare organizations can benefit from better digital tools for organizing information, managing workflows, and improving administrative efficiency across departments.",solution:"A digital healthcare platform concept that demonstrates structured workflows, management interfaces, and administrative tools — designed to explore how technology can support healthcare operations.",features:["Digital Records","Patient Workflows","Management Dashboard","Forms & Data Entry","Navigation & Routing","Responsive Interface","Administrative Tools"],businessValue:["Organized digital information","Structured healthcare workflows","Easier administrative management","Digital accessibility for staff","Clearer management interfaces"],technologies:["JavaScript","React","REST API","Responsive UI"],solutionLink:"/solutions#healthcare-solutions",solutionLabel:"Healthcare Solutions",disclaimer:"ShegerHealth is a demonstration project exploring digital healthcare workflows. It is not a certified medical system.",layout:"right"}],N=[{id:"ethiobrew",name:"EthioBrew",category:"Business / Hospitality",description:"A digital experience for a hospitality business — focused on product presentation, brand identity, and customer engagement.",capabilities:["UX/UI Design","Responsive Design","Product Presentation","Business Workflows"]},{id:"haramaya-gym",name:"Haramaya Gym",category:"Business Website",description:"A professional web presence for a fitness business — service presentation, responsive layout, and clear calls to action.",capabilities:["Professional Web Design","Responsive Layout","Service Presentation","CTAs"]},{id:"abebe-bookstore",name:"Abebe Book Store",category:"Retail / E-commerce",description:"A retail website focused on product presentation, browsing experience, and customer-facing workflows for a bookstore.",capabilities:["Product Presentation","Retail Experience","Responsive Interface","Customer Workflows"]}],U=["Business Management Systems","Inventory Management","Point of Sale","Dashboards & Analytics","Reporting","Authentication","Role-Based Access","Workflow Automation","Data Management","Administration","Responsive Web Applications","API Integration"],V=[{name:"Business",description:"Business management, inventory, POS, customer workflows, and operational reporting.",project:"SmartBiz ERP"},{name:"Education",description:"Student, teacher, attendance, grades, timetable, and school administration.",project:"EduFlow"},{name:"Transport",description:"Operations, vehicles, drivers, requests, workflows, and reporting.",project:"Transport Management"},{name:"Healthcare",description:"Digital workflows, records, dashboards, and administrative tools.",project:"ShegerHealth"},{name:"Retail & Hospitality",description:"Customer-facing websites, product presentation, and digital experiences.",project:"EthioBrew, Abebe Book Store"}];function b(){return`
    <div class="card card--lg" role="region" aria-label="SmartBiz ERP Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <!-- Header Bar -->
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">SmartBiz Control Panel</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Active Session</span>
      </div>

      <!-- 2x2 Stats Grid -->
      <div class="grid grid--2 gap-3 mb-5" style="grid-template-columns: repeat(2, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <div class="text-xs text-muted mb-1 font-medium">Today's Sales</div>
          <div class="text-xl font-bold text-navy">47 Orders</div>
          <div class="text-xs font-medium mt-1" style="color: var(--color-blue);">Updated live</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Inventory</div>
          <div class="text-xl font-bold" style="color: var(--color-blue);">Stocked</div>
          <div class="text-xs text-muted mt-1">Zero stockouts</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Customers</div>
          <div class="text-xl font-bold text-navy">1,243</div>
          <div class="text-xs text-muted mt-1">Accounts synced</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
          <div class="text-xs text-muted mb-1 font-medium">Revenue</div>
          <div class="text-xl font-bold text-navy">Growing</div>
          <div class="text-xs font-medium mt-1" style="color: var(--color-blue);">+18.4% MoM</div>
        </div>
      </div>

      <!-- Progress Bars -->
      <div class="p-4 flex flex-col gap-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-semibold text-navy">Daily Target Fulfillment</span>
            <span class="text-xs font-bold" style="color: var(--color-blue);">92%</span>
          </div>
          <div style="width: 100%; height: 7px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden;">
            <div style="width: 92%; height: 100%; background-color: var(--color-blue); border-radius: var(--radius-full);" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" aria-label="Daily Target Fulfillment"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-semibold text-navy">Inventory Replenishment</span>
            <span class="text-xs font-bold" style="color: var(--color-navy);">86%</span>
          </div>
          <div style="width: 100%; height: 7px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden;">
            <div style="width: 86%; height: 100%; background-color: var(--color-navy); border-radius: var(--radius-full);" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" aria-label="Inventory Replenishment"></div>
          </div>
        </div>
      </div>
    </div>
  `}function G(){return`
    <div class="card card--lg" role="region" aria-label="Transport Operations Panel Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <!-- Header Bar -->
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">Transport Operations Panel</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Fleet Live</span>
      </div>

      <!-- 3 Stats Grid -->
      <div class="grid gap-3 mb-5" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Vehicle Fleet</div>
          <div class="text-2xl font-bold text-navy">24</div>
          <div class="text-xs text-muted mt-1">Vehicles Total</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Active Drivers</div>
          <div class="text-2xl font-bold text-navy">18</div>
          <div class="text-xs text-muted mt-1">On Schedule</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Pending Requests</div>
          <div class="text-2xl font-bold" style="color: var(--color-blue);">7</div>
          <div class="text-xs text-muted mt-1">Awaiting Action</div>
        </div>
      </div>

      <!-- Status Indicators Section -->
      <div class="p-4 mb-4" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="text-xs font-semibold text-navy mb-3">Fleet Status Indicators</div>
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
              <span class="font-medium text-navy">In Transit (Active Routes)</span>
            </div>
            <span class="font-bold text-navy">14 Vehicles</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-navy); display: inline-block;"></span>
              <span class="font-medium text-navy">Ready for Assignment</span>
            </div>
            <span class="font-bold text-navy">8 Vehicles</span>
          </div>
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span style="width: 8px; height: 8px; border-radius: 50%; background-color: #64748B; display: inline-block;"></span>
              <span class="font-medium text-muted">Scheduled Maintenance</span>
            </div>
            <span class="font-bold text-muted">2 Vehicles</span>
          </div>
        </div>
      </div>

      <!-- Dispatch Indicator -->
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span class="badge badge--navy text-xs">DISPATCH #842</span>
          <span class="text-xs font-medium text-navy">Route Central &bull; Driver Assigned</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">In Progress</span>
      </div>
    </div>
  `}function q(){return`
    <div class="card card--lg" role="region" aria-label="EduFlow School Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <!-- Header Bar -->
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">EduFlow School Dashboard</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Semester Active</span>
      </div>

      <!-- 3 Stats Grid -->
      <div class="grid gap-3 mb-5" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Students</div>
          <div class="text-2xl font-bold text-navy">845</div>
          <div class="text-xs text-muted mt-1">Enrolled</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Teachers</div>
          <div class="text-2xl font-bold text-navy">32</div>
          <div class="text-xs text-muted mt-1">Faculty Staff</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Classes</div>
          <div class="text-2xl font-bold text-navy">28</div>
          <div class="text-xs text-muted mt-1">Active Sections</div>
        </div>
      </div>

      <!-- Attendance Bar Section -->
      <div class="p-4 mb-4" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-semibold text-navy">Daily Student Attendance</span>
          <span class="text-xs font-bold" style="color: var(--color-blue);">96.4%</span>
        </div>
        <div style="width: 100%; height: 8px; background-color: var(--color-border); border-radius: var(--radius-full); overflow: hidden; margin-bottom: var(--space-2);">
          <div style="width: 96.4%; height: 100%; background-color: var(--color-blue); border-radius: var(--radius-full);" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100" aria-label="Daily Student Attendance"></div>
        </div>
        <div class="flex justify-between text-xs text-muted">
          <span>815 Present</span>
          <span>30 Absent / Leave</span>
        </div>
      </div>

      <!-- Timetable & Grading Module -->
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span class="badge badge--navy text-xs">TERM 2</span>
          <span class="text-xs font-medium text-navy">Timetable &amp; Grade Records Synced</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">Updated</span>
      </div>
    </div>
  `}function J(){return`
    <div class="card card--lg" role="region" aria-label="ShegerHealth Healthcare Dashboard Preview" style="background: var(--color-white); border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); border-radius: var(--radius-xl); padding: var(--space-6);">
      <!-- Header Bar -->
      <div class="flex items-center justify-between pb-4 mb-5" style="border-bottom: 1px solid var(--color-border-subtle);">
        <div class="flex items-center gap-2">
          <span style="width: 8px; height: 8px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-sm font-semibold text-navy">ShegerHealth Platform Demo</span>
        </div>
        <span class="badge badge--blue text-xs font-semibold">Workflow Concept</span>
      </div>

      <!-- 3 Stats Grid -->
      <div class="grid gap-3 mb-5" style="grid-template-columns: repeat(3, 1fr); gap: var(--space-3); margin-bottom: var(--space-5);">
        <div class="p-3" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs font-medium mb-1" style="color: var(--color-blue);">Patients</div>
          <div class="text-2xl font-bold text-navy">Active</div>
          <div class="text-xs text-muted mt-1">Care Profiles</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Records</div>
          <div class="text-2xl font-bold text-navy">Digital</div>
          <div class="text-xs text-muted mt-1">Centralized EHR</div>
        </div>
        <div class="p-3" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md); text-align: center;">
          <div class="text-xs text-muted mb-1 font-medium">Workflows</div>
          <div class="text-2xl font-bold" style="color: var(--color-blue);">Structured</div>
          <div class="text-xs text-muted mt-1">Multi-Role</div>
        </div>
      </div>

      <!-- Structured Clinical Modules -->
      <div class="p-4 mb-4 flex flex-col gap-2" style="background: var(--color-bg-soft); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-md);">
        <div class="text-xs font-semibold text-navy mb-1">Clinical &amp; Departmental Modules</div>
        <div class="flex items-center justify-between text-xs py-1" style="border-bottom: 1px solid var(--color-border-subtle);">
          <span class="text-navy font-medium">Patient Intake &amp; Triage</span>
          <span class="badge badge--navy text-xs">Standardized</span>
        </div>
        <div class="flex items-center justify-between text-xs py-1" style="border-bottom: 1px solid var(--color-border-subtle);">
          <span class="text-navy font-medium">Diagnostic &amp; Lab Requests</span>
          <span class="badge badge--navy text-xs">Connected</span>
        </div>
        <div class="flex items-center justify-between text-xs py-1">
          <span class="text-navy font-medium">Prescription &amp; Pharmacy Logs</span>
          <span class="badge badge--navy text-xs">Structured</span>
        </div>
      </div>

      <!-- Security & Privacy Status -->
      <div class="p-3 flex items-center justify-between" style="background: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);">
        <div class="flex items-center gap-2">
          <span style="width: 6px; height: 6px; border-radius: 50%; background-color: var(--color-blue); display: inline-block;"></span>
          <span class="text-xs font-medium text-navy">Role-Based Access &amp; Data Security</span>
        </div>
        <span class="text-xs font-bold" style="color: var(--color-blue);">Enforced</span>
      </div>
    </div>
  `}function K(t){switch(t.id){case"smartbiz":return b();case"transport":return G();case"eduflow":return q();case"shegerhealth":return J();default:return b()}}function Y(){const t=`
    <style>
      @media (min-width: 1024px) {
        .project-layout { grid-template-columns: 1fr 1fr !important; }
        .project-layout--left .project-visual { order: 1; }
        .project-layout--left .project-content { order: 2; }
        .project-layout--right .project-visual { order: 2; }
        .project-layout--right .project-content { order: 1; }
      }
    </style>
  `,a=W.map((e,s)=>{const i=s%2===0?"var(--color-white)":"var(--color-bg-soft)";return`
        <section class="section" id="project-${e.id}" aria-labelledby="project-${e.id}-title" style="border-top: 1px solid var(--color-border-subtle); background: ${i};">
          <div class="container">
            <!-- Project Header -->
            <div class="flex items-center gap-3 mb-3">
              <span class="font-bold" style="color: var(--color-blue); font-size: var(--font-size-2xl); font-family: monospace;">${e.number}</span>
              <span class="badge badge--navy">${e.badge}</span>
              <span class="badge badge--blue">${e.statusBadge}</span>
            </div>
            <h2 id="project-${e.id}-title" style="font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; color: var(--color-navy); margin-bottom: var(--space-2);">${e.name}</h2>
            <p class="text-secondary mb-2" style="font-size: var(--font-size-md);">${e.tagline}</p>
            
            <!-- Two Column Layout: Content + Visual (alternating based on layout field) -->
            <div class="grid items-start project-layout project-layout--${e.layout}" style="grid-template-columns: 1fr; gap: var(--space-10); margin-top: var(--space-8);">
              
              <!-- Content Column (always first in DOM for mobile, use CSS order for desktop) -->
              <div class="project-content">
                <p class="text-secondary mb-6" style="line-height: 1.65;">${e.description}</p>
                
                <!-- The Problem -->
                <div class="mb-6">
                  <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-lg);">The Problem</h3>
                  <p class="text-secondary text-sm" style="line-height: 1.6;">${e.problem}</p>
                </div>
                
                <!-- The Solution -->
                <div class="mb-6">
                  <h3 class="text-navy font-semibold mb-2" style="font-size: var(--font-size-lg);">The Solution</h3>
                  <p class="text-secondary text-sm" style="line-height: 1.6;">${e.solution}</p>
                </div>
                
                <!-- Business Value -->
                <div class="mb-6">
                  <h3 class="text-navy font-semibold mb-3" style="font-size: var(--font-size-lg);">Business Value</h3>
                  <ul style="list-style: none; padding: 0; margin: 0;" class="flex flex-col gap-2">
                    ${e.businessValue.map(r=>`<li class="flex items-start gap-2 text-sm text-secondary"><span style="color: var(--color-blue); margin-top: 2px;">✓</span><span>${r}</span></li>`).join("")}
                  </ul>
                </div>

                <!-- Disclaimer if exists -->
                ${e.disclaimer?`<p class="text-xs text-muted mb-4" style="font-style: italic;">${e.disclaimer}</p>`:""}

                <!-- CTAs -->
                <div class="flex flex-wrap gap-3 items-center">
                  <a href="/contact" data-link class="btn btn--primary">
                    <span>Explore Project</span>
                    ${o.arrowRight("w-4 h-4")}
                  </a>
                  <a href="${e.solutionLink}" data-link class="btn btn--secondary text-sm">View ${e.solutionLabel} &rarr;</a>
                </div>
              </div>

              <!-- Visual Column: CSS-only project dashboard mockup -->
              <div class="project-visual">
                ${K(e)}
              </div>
            </div>

            <!-- Key Features Grid -->
            <div class="mt-8">
              <h3 class="text-navy font-semibold mb-4" style="font-size: var(--font-size-lg);">Key Features</h3>
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: var(--space-3);">
                ${e.features.map(r=>`<div class="flex items-center gap-2 p-3" style="background: var(--color-white); border: 1px solid var(--color-border-subtle); border-radius: var(--radius-sm);"><span style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-blue); flex-shrink: 0;"></span><span class="text-sm font-medium text-navy">${r}</span></div>`).join("")}
              </div>
            </div>

            <!-- Technologies -->
            <div class="mt-6 flex flex-wrap gap-2">
              ${e.technologies.map(r=>`<span class="badge badge--outline text-xs">${r}</span>`).join("")}
            </div>
          </div>
        </section>
      `}).join("");return`
    ${t}
    ${a}
  `}function Q(){return`
    <section class="section bg-white" aria-labelledby="secondary-projects-heading" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        
        <!-- Section Heading -->
        <div class="section-heading">
          <span class="section-heading__label">ADDITIONAL WORK</span>
          <h2 id="secondary-projects-heading" class="section-heading__title">More Projects & Digital Experiences</h2>
          <p class="section-heading__subtitle text-balance">
            Additional websites and digital solutions developed by URJIKO Labs.
          </p>
        </div>

        <!-- Secondary Projects Grid -->
        <div class="grid grid--3">
          ${N.map(t=>`
            <article class="card flex flex-col" style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-5);">
              
              <!-- Placeholder Visual Area -->
              <div class="flex items-center justify-center mb-4" style="height: 120px; background-color: var(--color-bg-light-blue); border: 1px solid var(--color-border-blue); border-radius: var(--radius-md);" aria-hidden="true">
                <span class="font-semibold text-navy text-sm">${t.name}</span>
              </div>

              <!-- Category Badge -->
              <div class="mb-3">
                <span class="badge badge--outline">${t.category}</span>
              </div>

              <!-- Project Title -->
              <h3 class="text-navy font-bold mb-2" style="font-size: var(--font-size-lg); line-height: var(--line-height-snug);">
                ${t.name}
              </h3>

              <!-- Project Description -->
              <p class="text-secondary text-sm mb-4 flex-1" style="line-height: var(--line-height-normal);">
                ${t.description}
              </p>

              <!-- Capabilities -->
              <div class="flex flex-wrap gap-2 mt-auto">
                ${t.capabilities.map(a=>`
                  <span class="badge badge--outline text-xs">${a}</span>
                `).join("")}
              </div>

            </article>
          `).join("")}
        </div>

      </div>
    </section>
  `}function Z(t=U){return`
    <section class="section bg-soft" aria-labelledby="portfolio-capabilities-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        <!-- Section Header -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">WHAT WE DELIVER</span>
          <h2 id="portfolio-capabilities-heading" class="section-heading__title">Capabilities Demonstrated</h2>
          <p class="section-heading__subtitle text-balance">
            Technical capabilities and system features demonstrated across our project portfolio.
          </p>
        </div>

        <!-- Capabilities Grid -->
        <div class="portfolio-capabilities-grid">
          ${t.map(e=>`
        <div class="portfolio-capability-item">
          <span class="portfolio-capability-dot" aria-hidden="true"></span>
          <span class="text-sm font-medium text-navy">${e}</span>
        </div>
      `).join("")}
        </div>
      </div>
    </section>

    <style>
      .portfolio-capabilities-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--space-3);
      }

      .portfolio-capability-item {
        background-color: var(--color-white);
        border: 1px solid var(--color-border-subtle);
        border-radius: var(--radius-sm);
        padding: var(--space-3);
        display: flex;
        align-items: center;
        gap: var(--space-2);
        transition: box-shadow var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
      }

      .portfolio-capability-item:hover {
        box-shadow: var(--shadow-sm);
        border-color: var(--color-border);
        transform: translateY(-1px);
      }

      .portfolio-capability-dot {
        width: 6px;
        height: 6px;
        min-width: 6px;
        border-radius: var(--radius-full);
        background-color: var(--color-blue);
        flex-shrink: 0;
      }
    </style>
  `}function X(){return`
    <section class="section bg-white" aria-labelledby="industry-coverage-heading" style="border-top: 1px solid var(--color-border);">
      <div class="container">
        <!-- Section Heading (Centered) -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">INDUSTRIES WE SERVE</span>
          <h2 id="industry-coverage-heading" class="section-heading__title">Software for Your Industry</h2>
          <p class="section-heading__subtitle text-balance">
            We build practical solutions for organizations across multiple sectors.
          </p>
        </div>

        <!-- Industry Grid -->
        <div class="industry-grid">
          ${V.map(a=>`
        <div class="industry-card">
          <div>
            <h3 class="text-navy font-semibold text-lg mb-2">${a.name}</h3>
            <p class="text-secondary text-sm mb-4">${a.description}</p>
          </div>
          <div class="industry-card__featured flex items-center gap-2 text-xs text-muted">
            <span class="industry-card__dot" aria-hidden="true"></span>
            <span>Featured: ${a.project}</span>
          </div>
        </div>
      `).join("")}
        </div>

        <!-- Centered Actions CTA -->
        <div class="flex flex-wrap items-center justify-center gap-4" style="margin-top: var(--space-12);">
          <a href="/contact" data-link class="btn btn--primary">
            <span>Discuss Your Industry</span>
            ${o.arrowRight("w-4 h-4")}
          </a>
          <a href="/solutions" data-link class="btn btn--secondary">
            <span>View All Solutions</span>
          </a>
        </div>
      </div>
    </section>

    <style>
      .industry-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: var(--space-5);
      }

      .industry-card {
        background-color: var(--color-white);
        border: 1px solid var(--color-border);
        border-left: 3px solid var(--color-blue);
        border-radius: var(--radius-lg);
        padding: var(--space-5);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
      }

      .industry-card:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-sm);
        border-color: var(--color-border);
        border-left-color: var(--color-blue);
      }

      .industry-card__dot {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: var(--radius-full);
        background-color: var(--color-blue);
        flex-shrink: 0;
      }
    </style>
  `}function ee(){return`
    ${D()}
    ${H()}
    ${Y()}
    ${Q()}
    ${Z()}
    ${X()}
    ${c({title:"Have a Problem That Software Could Solve?",description:"Tell us what you are trying to improve. We will help you identify a practical solution and the right place to start.",primaryBtnLabel:"Discuss Your Project",primaryBtnPath:"/contact",secondaryBtnLabel:"View Our Services",secondaryBtnPath:"/services"})}
  `}function te({title:t="Have a project idea?",description:a="Tell us what you're trying to solve. We'll discuss how practical technology can streamline your business.",btnText:e=n.telegram.ctaText}={}){const s=n.telegram.url;return`
    <div class="card card--lg flex flex-col items-start gap-4" style="border-left: 4px solid var(--color-blue); background-color: var(--color-bg-soft);">
      <div class="flex items-center gap-3">
        <div class="card__icon" style="margin-bottom: 0; color: var(--color-blue); background-color: var(--color-bg-light-blue);">
          ${o.telegram("w-6 h-6")}
        </div>
        <div>
          <h3 style="font-size: var(--font-size-xl); margin-bottom: 0.25rem; color: var(--color-navy);">${t}</h3>
          <span class="text-xs text-muted">Primary Direct Messaging Channel</span>
        </div>
      </div>
      <p style="margin-bottom: var(--space-2);">${a}</p>
      <a 
        href="${s}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn btn--primary flex items-center gap-2"
      >
        ${o.telegram("w-5 h-5")}
        <span>${e}</span>
      </a>
    </div>
  `}function v(t=[]){return!t||t.length<=1?"":`
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol class="flex items-center text-sm" style="list-style: none; padding: 0;" role="list">
        ${t.map((e,s)=>s===t.length-1?`
          <li aria-current="page">
            <span class="text-secondary font-medium">${e.label}</span>
          </li>
        `:`
        <li>
          <a href="${e.path||"#"}" data-link class="text-muted" style="transition: color 0.2s;">${e.label}</a>
          <span class="mx-2 text-muted" aria-hidden="true" style="margin: 0 var(--space-2);">/</span>
        </li>
      `).join("")}
      </ol>
    </nav>
  `}const u={"/":()=>P(),"/services":()=>j(),"/solutions":()=>F(),"/portfolio":()=>ee(),"/about":()=>`
    <div class="container section">
      ${v([{label:"Home",path:"/"},{label:"About"}])}
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
    ${c()}
  `,"/contact":()=>`
    <div class="container section">
      ${v([{label:"Home",path:"/"},{label:"Contact"}])}
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
          ${te({title:"Quickest Response via Telegram",description:"Directly message our engineering lead on Telegram to discuss requirements, feasibility, and project estimates."})}

          <div class="card mt-6" style="margin-top: var(--space-6);">
            <h4 class="card__title mb-2">Email Inquiries</h4>
            <p class="text-sm text-secondary mb-2">For formal RFPs, partnerships, and detailed specifications:</p>
            <a href="mailto:${n.contact.email}" class="font-semibold" style="color: var(--color-blue);">${n.contact.email}</a>
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
  `};class ae{constructor(){this.appContainer=document.getElementById("app"),this.init()}init(){document.addEventListener("click",a=>{const e=a.target.closest("a[data-link]");if(e){const s=e.getAttribute("href");s&&!s.startsWith("http")&&!s.startsWith("mailto:")&&(a.preventDefault(),this.navigateTo(s))}}),window.addEventListener("popstate",()=>{this.renderCurrentRoute()}),this.renderCurrentRoute()}navigateTo(a){window.location.pathname!==a&&window.history.pushState(null,null,a),this.renderCurrentRoute(),window.scrollTo({top:0,behavior:"smooth"})}renderCurrentRoute(){let e=(window.location.pathname||"/").replace(/\/$/,"")||"/";window.location.hash.startsWith("#/")&&(e=window.location.hash.slice(1));const s=u[e]||u["/404"]||u["/"],i=s?s():"";this.appContainer&&(this.appContainer.innerHTML=x({path:e,content:i}),y())}}function g(){window.urjikoRouter||(window.urjikoRouter=new ae)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g();
