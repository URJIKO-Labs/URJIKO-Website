import { icons } from "../common/Icons.js";

/**
 * Portfolio Hero Section
 * Interactive mockup with clickable tabs for SmartBiz, EduFlow, and Transport.
 */
export function renderPortfolioHero() {
  return `
    <section class="section" aria-labelledby="portfolio-hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-12); background: #FFFFFF; position: relative; overflow: hidden;">
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
                ${icons.arrowRight("w-4 h-4")}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>View Our Solutions</span>
              </a>
            </div>
          </div>

          <!-- Right: Interactive Software Composite UI Mockup -->
          <div class="hero-image-wrapper flex justify-center items-center" style="width: 100%;">
            <div class="portfolio-hero-mockup" style="width: 100%; max-width: 500px; background: var(--color-navy); border-radius: var(--radius-xl); padding: var(--space-4); box-shadow: var(--shadow-xl); border: 1px solid var(--color-border-subtle); color: #FFFFFF;">
              <!-- Window header -->
              <div class="flex items-center justify-between pb-3 mb-3" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <div class="flex items-center gap-2">
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.25); display: inline-block;"></span>
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.15); display: inline-block;"></span>
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.08); display: inline-block;"></span>
                </div>
                <span class="text-xs" style="color: rgba(255,255,255,0.6); font-family: monospace; font-weight: 500;">URJIKO Software Preview</span>
                <span class="badge badge--blue text-xs" style="font-size: 0.65rem; padding: 0.15rem 0.4rem;">SYSTEM SUITE</span>
              </div>
              
              <!-- Clickable System Tabs -->
              <div class="portfolio-tabs" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 0.85rem;">
                <button class="portfolio-tab portfolio-tab--active" data-tab="smartbiz" style="background: rgba(37, 99, 235, 0.25); border: 1px solid var(--color-blue); border-radius: var(--radius-sm); padding: 0.4rem 0.5rem; text-align: center; cursor: pointer; transition: all 0.2s ease; width: 100%;">
                  <div style="font-size: 0.75rem; font-weight: 700; color: #FFFFFF;">SmartBiz ERP</div>
                  <div style="font-size: 0.65rem; color: rgba(255,255,255,0.7);">POS & Inventory</div>
                </button>
                <button class="portfolio-tab" data-tab="eduflow" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-sm); padding: 0.4rem 0.5rem; text-align: center; cursor: pointer; transition: all 0.2s ease; width: 100%;">
                  <div style="font-size: 0.75rem; font-weight: 700; color: rgba(255,255,255,0.9);">EduFlow</div>
                  <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">School Management</div>
                </button>
                <button class="portfolio-tab" data-tab="transport" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius-sm); padding: 0.4rem 0.5rem; text-align: center; cursor: pointer; transition: all 0.2s ease; width: 100%;">
                  <div style="font-size: 0.75rem; font-weight: 700; color: rgba(255,255,255,0.9);">Transport</div>
                  <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Operations & Fleet</div>
                </button>
              </div>

              <!-- Dashboard Panels -->
              <div style="background: rgba(15, 23, 42, 0.8); border-radius: var(--radius-md); padding: 0.85rem; border: 1px solid rgba(255,255,255,0.08); min-height: 200px;">

                <!-- SmartBiz Panel -->
                <div class="portfolio-panel portfolio-panel--active" data-panel="smartbiz">
                  <div class="flex items-center justify-between mb-3">
                    <div style="font-size: 0.85rem; font-weight: 600;">POS & Inventory Overview</div>
                    <span style="font-size: 0.7rem; color: #60A5FA; font-weight: 600;">Product Preview</span>
                  </div>
                  <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 0.85rem;">
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Sales & POS</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #60A5FA;">Real-time Tracker</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Inventory</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #93C5FD;">Stock Alerts</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Customers</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #60A5FA;">CRM Module</div>
                    </div>
                  </div>
                  <div style="height: 60px; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); padding: 0.5rem; display: flex; align-items: flex-end; gap: 0.4rem;">
                    <div style="flex: 1; height: 40%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 65%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 50%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 85%; background: #60A5FA; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 70%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 95%; background: #3B82F6; border-radius: 2px;"></div>
                  </div>
                </div>

                <!-- EduFlow Panel -->
                <div class="portfolio-panel" data-panel="eduflow" style="display: none;">
                  <div class="flex items-center justify-between mb-3">
                    <div style="font-size: 0.85rem; font-weight: 600;">Academic Management Portal</div>
                    <span style="font-size: 0.7rem; color: #60A5FA; font-weight: 600;">Product Preview</span>
                  </div>
                  <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 0.85rem;">
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Students</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #60A5FA;">Enrollment</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Attendance</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #93C5FD;">Daily Logs</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Grades</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #60A5FA;">Report Cards</div>
                    </div>
                  </div>
                  <div style="height: 60px; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); padding: 0.5rem; display: flex; align-items: flex-end; gap: 0.4rem;">
                    <div style="flex: 1; height: 70%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 55%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 80%; background: #60A5FA; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 45%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 90%; background: #3B82F6; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 60%; background: #2563EB; border-radius: 2px;"></div>
                  </div>
                </div>

                <!-- Transport Panel -->
                <div class="portfolio-panel" data-panel="transport" style="display: none;">
                  <div class="flex items-center justify-between mb-3">
                    <div style="font-size: 0.85rem; font-weight: 600;">Fleet & Dispatch Operations</div>
                    <span style="font-size: 0.7rem; color: #60A5FA; font-weight: 600;">Product Preview</span>
                  </div>
                  <div class="grid" style="grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 0.85rem;">
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Vehicles</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #60A5FA;">Roster</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Dispatch</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #93C5FD;">Route Assign</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.04); padding: 0.5rem; border-radius: var(--radius-sm);">
                      <div style="font-size: 0.65rem; color: rgba(255,255,255,0.6);">Requests</div>
                      <div style="font-size: 0.85rem; font-weight: 700; color: #60A5FA;">Approval Queue</div>
                    </div>
                  </div>
                  <div style="height: 60px; background: rgba(255,255,255,0.03); border-radius: var(--radius-sm); padding: 0.5rem; display: flex; align-items: flex-end; gap: 0.4rem;">
                    <div style="flex: 1; height: 55%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 75%; background: #60A5FA; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 40%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 90%; background: #3B82F6; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 60%; background: #2563EB; border-radius: 2px;"></div>
                    <div style="flex: 1; height: 80%; background: #2563EB; border-radius: 2px;"></div>
                  </div>
                </div>

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
      @media (max-width: 768px) {
        section[aria-labelledby="portfolio-hero-title"] .container > .grid {
          gap: var(--space-8) !important;
        }
      }

      /* Tab active state */
      .portfolio-tab--active {
        background: rgba(37, 99, 235, 0.25) !important;
        border-color: var(--color-blue) !important;
      }
      .portfolio-tab--active div:first-child {
        color: #FFFFFF !important;
      }

      /* Tab hover */
      .portfolio-tab:hover {
        background: rgba(255, 255, 255, 0.08) !important;
        border-color: rgba(255,255,255,0.2) !important;
      }
      .portfolio-tab--active:hover {
        background: rgba(37, 99, 235, 0.35) !important;
        border-color: var(--color-blue) !important;
      }

      /* Panel transitions */
      .portfolio-panel {
        animation: panelFadeIn 0.3s ease;
      }
      @keyframes panelFadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  `;
}
