import { icons } from "../common/Icons.js";

export function renderContactHero() {
  return `
    <section class="section bg-white" aria-labelledby="contact-hero-title" style="padding-top: clamp(4rem, 8vw, 6rem); padding-bottom: clamp(4rem, 8vw, 6rem); position: relative; overflow: hidden;">
      
      <!-- Decorative geometric elements -->
      <div style="position: absolute; top: 10%; left: 4%; width: 180px; height: 180px; border: 2px solid rgba(40, 120, 220, 0.30); border-radius: 50%; pointer-events: none;"></div>
      <div style="position: absolute; top: 20%; right: 5%; width: 140px; height: 140px; border: 2px solid rgba(6, 36, 92, 0.25); border-radius: 50%; pointer-events: none;"></div>
      <div style="position: absolute; bottom: 15%; left: 8%; width: 100px; height: 100px; background: rgba(40, 120, 220, 0.18); border-radius: 50%; pointer-events: none;"></div>
      <div style="position: absolute; bottom: 25%; right: 10%; width: 160px; height: 160px; border: 2px solid rgba(7, 87, 184, 0.22); border-radius: 50%; pointer-events: none;"></div>
      <div style="position: absolute; top: 40%; left: 50%; transform: translate(-50%, -50%); width: 300px; height: 300px; border: 1.5px solid rgba(40, 120, 220, 0.12); border-radius: 50%; pointer-events: none;"></div>
      
      <!-- Small dots -->
      <div style="position: absolute; top: 15%; left: 28%; width: 12px; height: 12px; background: rgba(6, 36, 92, 0.40); border-radius: 50%; pointer-events: none;"></div>
      <div style="position: absolute; top: 55%; right: 22%; width: 10px; height: 10px; background: rgba(7, 87, 184, 0.35); border-radius: 50%; pointer-events: none;"></div>
      <div style="position: absolute; bottom: 12%; left: 35%; width: 14px; height: 14px; background: rgba(40, 120, 220, 0.30); border-radius: 50%; pointer-events: none;"></div>
      <div style="position: absolute; top: 35%; left: 18%; width: 8px; height: 8px; background: rgba(6, 36, 92, 0.35); border-radius: 50%; pointer-events: none;"></div>
      <div style="position: absolute; bottom: 35%; right: 25%; width: 9px; height: 9px; background: rgba(7, 87, 184, 0.30); border-radius: 50%; pointer-events: none;"></div>

      <div class="container text-center" style="max-width: 48rem; position: relative; z-index: 2;">
        <div class="badge mb-4" style="background-color: var(--color-bg-light-blue); color: var(--color-blue); font-weight: 600; text-transform: uppercase; letter-spacing: var(--letter-spacing-wider); padding: 0.35rem 0.85rem; border: 1px solid var(--color-border-blue);">
          GET IN TOUCH
        </div>
        <h1 id="contact-hero-title" class="text-balance mb-4" style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 800; color: var(--color-navy); letter-spacing: var(--letter-spacing-tight); line-height: 1.1;">
          Let's Talk About Your Project.
        </h1>
        <p class="text-secondary text-balance mx-auto" style="font-size: clamp(1rem, 2vw, 1.125rem); line-height: 1.6; max-width: 42rem;">
          Tell us what you're trying to build, improve, or solve. We'll help you identify a practical next step.
        </p>
      </div>

      <style>
        @media (max-width: 768px) {
          [aria-labelledby="contact-hero-title"] div[style*="position: absolute"] {
            transform: scale(0.5);
          }
        }
      </style>
    </section>
  `;
}
