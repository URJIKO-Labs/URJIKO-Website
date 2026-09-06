import { icons } from "../common/Icons.js";

export function renderWhatWeBuild() {
  return `
    <section class="section bg-soft" aria-labelledby="what-we-build-title">
      <div class="container">
        
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">CAPABILITIES</span>
          <h2 id="what-we-build-title" class="section-heading__title">What We Build</h2>
          <p class="section-heading__subtitle text-balance">
            We focus on core digital solutions that improve how organizations operate and present themselves online.
          </p>
        </div>

        <div class="grid grid--2" style="gap: var(--space-6);">
          
          <a href="/services" data-link class="card" style="text-decoration: none; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-white); transition: transform 0.2s, box-shadow 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div>
              <h3 class="text-navy font-semibold text-xl mb-2">Websites</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Professional websites and digital experiences designed for performance and credibility.</p>
            </div>
          </a>

          <a href="/solutions#business-solutions" data-link class="card" style="text-decoration: none; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-white); transition: transform 0.2s, box-shadow 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <div>
              <h3 class="text-navy font-semibold text-xl mb-2">Business Systems</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Inventory, POS, customer management, reporting, and operational systems.</p>
            </div>
          </a>

          <a href="/services" data-link class="card" style="text-decoration: none; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-white); transition: transform 0.2s, box-shadow 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <div>
              <h3 class="text-navy font-semibold text-xl mb-2">Custom Software</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Software designed around specific organizational workflows and bottlenecks.</p>
            </div>
          </a>

          <a href="/solutions" data-link class="card" style="text-decoration: none; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-4); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-white); transition: transform 0.2s, box-shadow 0.2s;">
            <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-bg-light-blue); display: flex; align-items: center; justify-content: center; color: var(--color-blue);">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <div>
              <h3 class="text-navy font-semibold text-xl mb-2">Digital Platforms</h3>
              <p class="text-secondary text-sm" style="line-height: 1.6;">Solutions for education, transport, healthcare, and other organizational needs.</p>
            </div>
          </a>

        </div>

        <div class="text-center" style="margin-top: var(--space-8);">
          <a href="/solutions" data-link class="btn btn--secondary">
            View All Solutions
          </a>
        </div>
      </div>
    </section>

    <style>
      @media (max-width: 768px) {
        [aria-labelledby="what-we-build-title"] .card {
          padding: var(--space-4) !important;
          gap: var(--space-3) !important;
        }
        [aria-labelledby="what-we-build-title"] .card > div:first-child {
          width: 40px !important;
          height: 40px !important;
        }
        [aria-labelledby="what-we-build-title"] .card h3 {
          font-size: var(--font-size-base) !important;
        }
        [aria-labelledby="what-we-build-title"] .card p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    </style>
  `;
}
