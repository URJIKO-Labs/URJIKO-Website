import { icons } from '../common/Icons.js';

/**
 * Services Hero Section
 * Positioned as a software development studio.
 */
export function renderServicesHero() {
  return `
    <section class="section section--lg" aria-labelledby="services-hero-title" style="padding-top: var(--space-10); padding-bottom: var(--space-12); background: var(--color-white);">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-10);">
          
          <!-- Left Column -->
          <div class="flex flex-col items-start">
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue); font-size: 0.7rem;">
              WHAT WE DO
            </div>

            <h1 id="services-hero-title" class="text-balance mb-4" style="font-size: clamp(2rem, 4.5vw, 3.25rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight); margin-bottom: var(--space-4);">
              Software Development & Digital Product Services
            </h1>

            <p class="text-secondary mb-6 text-balance" style="font-size: clamp(0.95rem, 1.5vw, 1.1rem); max-width: 36rem; line-height: 1.65;">
              URJIKO Labs provides practical software development and digital product services designed around real organizational needs — from modern websites to business management systems and intelligent software.
            </p>

            <div class="flex flex-wrap gap-4 items-center">
              <a href="/portfolio" data-link class="btn btn--primary btn--lg">
                <span>See how we work</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
              <a href="/contact" data-link class="btn btn--secondary btn--lg">
                <span>Discuss your project</span>
              </a>
            </div>
          </div>

          <!-- Right Column: CSS Workflow Diagram -->
          <div class="flex justify-center items-center" style="width: 100%;">
            <div class="workflow-diagram" style="width: 100%; max-width: 440px; background: var(--color-bg-soft); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: var(--space-6); box-shadow: var(--shadow-sm);">
              
              <!-- Step 1 -->
              <div class="workflow-step">
                <div class="workflow-icon">${icons.search('w-5 h-5')}</div>
                <div class="workflow-content">
                  <span class="workflow-label">Phase 1</span>
                  <h4 class="workflow-title">Problem Discovery</h4>
                  <p class="workflow-desc">Understanding your workflow, users, and technical constraints.</p>
                </div>
              </div>
              
              <!-- Connector -->
              <div class="workflow-connector"></div>

              <!-- Step 2 -->
              <div class="workflow-step">
                <div class="workflow-icon">${icons.code('w-5 h-5')}</div>
                <div class="workflow-content">
                  <span class="workflow-label">Phase 2</span>
                  <h4 class="workflow-title">System Design</h4>
                  <p class="workflow-desc">Information architecture, wireframes, and database planning.</p>
                </div>
              </div>
              
              <!-- Connector -->
              <div class="workflow-connector"></div>

              <!-- Step 3 -->
              <div class="workflow-step">
                <div class="workflow-icon">${icons.check('w-5 h-5')}</div>
                <div class="workflow-content">
                  <span class="workflow-label">Phase 3</span>
                  <h4 class="workflow-title">Agile Build</h4>
                  <p class="workflow-desc">Frontend, backend, API integration, and rigorous testing.</p>
                </div>
              </div>
              
              <!-- Connector -->
              <div class="workflow-connector"></div>

              <!-- Step 4 -->
              <div class="workflow-step">
                <div class="workflow-icon">${icons.arrowRight('w-5 h-5')}</div>
                <div class="workflow-content">
                  <span class="workflow-label">Phase 4</span>
                  <h4 class="workflow-title">Launch & Support</h4>
                  <p class="workflow-desc">Deployment, monitoring, training, and continuous updates.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <style>
      /* Workflow Diagram Styles */
      .workflow-step {
        display: flex;
        align-items: flex-start;
        gap: var(--space-4);
      }
      .workflow-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--color-bg-light-blue);
        color: var(--color-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border: 1px solid var(--color-border-blue);
      }
      .workflow-content {
        display: flex;
        flex-direction: column;
      }
      .workflow-label {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing-wider);
        color: var(--color-blue);
        font-weight: 700;
        margin-bottom: 0.2rem;
      }
      .workflow-title {
        font-size: 1.05rem;
        font-weight: 600;
        color: var(--color-navy);
        margin-bottom: 0.25rem;
      }
      .workflow-desc {
        font-size: 0.85rem;
        color: var(--color-text-secondary);
        line-height: 1.5;
        margin: 0;
      }
      .workflow-connector {
        width: 2px;
        height: 24px;
        background-color: var(--color-border);
        margin: var(--space-2) 0 var(--space-2) 19px;
      }

      @media (min-width: 1024px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          grid-template-columns: 1.1fr 0.9fr !important;
        }
      }
      @media (max-width: 768px) {
        section[aria-labelledby="services-hero-title"] .container > .grid {
          gap: var(--space-8) !important;
        }
        section[aria-labelledby="services-hero-title"] h1 {
          font-size: clamp(1.5rem, 6vw, 2rem) !important;
        }
      }
    </style>
  `;
}
