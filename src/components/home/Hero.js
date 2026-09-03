import { companyConfig } from '../../config/company.js';
import { icons } from '../common/Icons.js';

/**
 * Hero Section for URJIKO Labs Home Page
 * 
 * Clean White + Navy foundation, Royal Blue technology depth, and restrained Turquoise accents.
 */
export function renderHero() {
  return `
    <section class="section section--lg" aria-labelledby="hero-title" style="padding-top: var(--space-12); padding-bottom: var(--space-16); position: relative; overflow: hidden; background: #FFFFFF;">
      <div class="container">
        <div class="grid items-center" style="grid-template-columns: 1fr; gap: var(--space-12);">
          
          <!-- Left Column: Messaging & Actions -->
          <div class="flex flex-col items-start">
            
            <!-- Eyebrow -->
            <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue); white-space: normal; text-align: center;">
              DIGITAL SOLUTIONS FOR MODERN ORGANIZATIONS
            </div>

            <!-- Headline: Navy dominant with subtle blue tone -->
            <h1 id="hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); line-height: 1.15; font-weight: 700; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight);">
              Build Smarter. <br/>
              <span>Grow With Better Technology.</span>
            </h1>

            <!-- Description -->
            <p class="text-secondary mb-8 text-balance" style="font-size: clamp(1rem, 2vw, 1.1875rem); max-width: 38rem; line-height: 1.65;">
              ${companyConfig.shortDescription || 'URJIKO Labs designs and develops websites, business systems, custom software, and intelligent digital solutions that help organizations work smarter and grow.'}
            </p>

            <!-- Actions -->
            <div class="flex flex-wrap gap-4 items-center">
              <a href="/contact" data-link class="btn btn--primary btn--lg">
                <span>Discuss Your Project</span>
                ${icons.arrowRight('w-4 h-4')}
              </a>
              <a href="/solutions" data-link class="btn btn--secondary btn--lg">
                <span>Explore Our Solutions</span>
              </a>
            </div>

          </div>

          <!-- Right Column: Abstract Technology & Software Ecosystem Visual -->
          <div class="hero-visual-wrapper" aria-hidden="true" style="position: relative; width: 100%; display: flex; justify-content: center; align-items: center;">
            <div style="width: 100%; max-width: 520px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: clamp(var(--space-4), 4vw, var(--space-6)); box-shadow: var(--shadow-xl); position: relative;">
              
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

    <!-- Desktop Grid Override & Mobile Fixes -->
    <style>
      @media (min-width: 1024px) {
        .section--lg .container > .grid {
          grid-template-columns: 1.15fr 0.85fr !important;
        }
      }
      @media (max-width: 768px) {
        .section--lg .container > .grid {
          gap: var(--space-8) !important;
        }
        .hero-visual-wrapper {
          display: none !important;
        }
      }
    </style>
  `;
}
