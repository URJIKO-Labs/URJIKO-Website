import { icons } from "../common/Icons.js";

export function renderWhatWeBuild() {
  return `
    <section class="section bg-soft" aria-labelledby="what-we-build-title">
      <div class="container">
        
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">Capabilities</span>
          <h2 id="what-we-build-title" class="section-heading__title">What We Build</h2>
          <p class="section-heading__subtitle text-balance">
            We focus on core digital solutions that improve how organizations operate and present themselves online.
          </p>
        </div>

        <div class="grid grid--2" style="gap: var(--space-6);">
          
          <a href="/services" data-link class="card card--project" style="text-decoration: none; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: #FFF; transition: transform 0.2s, box-shadow 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
              ${icons.arrowRight("w-6 h-6")} <!-- Placeholder for a generic icon, arrow is fine -->
            </div>
            <div>
              <h3 class="text-navy font-semibold text-xl mb-2">Websites</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Professional websites and digital experiences designed for performance and credibility.</p>
            </div>
          </a>

          <a href="/solutions#business-solutions" data-link class="card card--project" style="text-decoration: none; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: #FFF; transition: transform 0.2s, box-shadow 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
              <span style="font-size: 24px;">📊</span>
            </div>
            <div>
              <h3 class="text-navy font-semibold text-xl mb-2">Business Systems</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Inventory, POS, customer management, reporting, and operational systems.</p>
            </div>
          </a>

          <a href="/services" data-link class="card card--project" style="text-decoration: none; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: #FFF; transition: transform 0.2s, box-shadow 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
              <span style="font-size: 24px;">⚙️</span>
            </div>
            <div>
              <h3 class="text-navy font-semibold text-xl mb-2">Custom Software</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Software designed around specific organizational workflows and bottlenecks.</p>
            </div>
          </a>

          <a href="/solutions" data-link class="card card--project" style="text-decoration: none; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: #FFF; transition: transform 0.2s, box-shadow 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
              <span style="font-size: 24px;">🏢</span>
            </div>
            <div>
              <h3 class="text-navy font-semibold text-xl mb-2">Digital Platforms</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Solutions for education, transport, healthcare, retail, hospitality, and other organizational needs.</p>
            </div>
          </a>

        </div>

        <div class="text-center mt-8">
          <a href="/solutions" data-link class="btn btn--secondary">
            View All Solutions
          </a>
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        [aria-labelledby="what-we-build-title"] .card--project {
          padding: var(--space-4) !important;
          gap: var(--space-3) !important;
        }
        [aria-labelledby="what-we-build-title"] .card--project > div:first-child {
          width: 40px !important;
          height: 40px !important;
        }
        [aria-labelledby="what-we-build-title"] .card--project h3 {
          font-size: var(--font-size-base) !important;
        }
        [aria-labelledby="what-we-build-title"] .card--project p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    </style>
  `;
}
