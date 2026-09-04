import { companyConfig } from "../../config/company.js";
import { icons } from "../common/Icons.js";

/**
 * Hero Section for URJIKO Labs Home Page
 *
 * Full-width background image with clean transparent light overlay showing software team background photo.
 */
export function renderHero() {
  const bgUrl = `${import.meta.env.BASE_URL}src/assets/images/home_bg_dark.jpg`;

  return `
    <section class="section home-hero-banner" aria-labelledby="hero-title" style="
      position: relative; 
      padding-top: clamp(4.5rem, 8vw, 6.5rem); 
      padding-bottom: clamp(4.5rem, 8vw, 6.5rem); 
      background: linear-gradient(135deg, rgba(6, 20, 52, 0.90) 0%, rgba(7, 45, 110, 0.85) 100%), url('${bgUrl}') center/cover no-repeat;
      color: #FFFFFF;
      overflow: hidden;
    ">
      <div class="container" style="position: relative; z-index: 2;">
        <div class="flex flex-col items-center text-center" style="max-width: 52rem; margin: 0 auto;">
          
          <!-- Eyebrow -->
          <div class="badge mb-4" style="
            background-color: rgba(255, 255, 255, 0.12); 
            color: #60A5FA; 
            font-weight: 600; 
            text-transform: uppercase; 
            letter-spacing: var(--letter-spacing-wider); 
            padding: 0.4rem 1.1rem; 
            border: 1px solid rgba(96, 165, 250, 0.35); 
            backdrop-filter: blur(8px);
          ">
            DIGITAL SOLUTIONS FOR MODERN ORGANIZATIONS
          </div>

          <!-- Headline -->
          <h1 id="hero-title" class="text-balance mb-4" style="
            font-size: clamp(2.25rem, 5vw, 3.75rem); 
            line-height: 1.15; 
            font-weight: 800; 
            color: #FFFFFF; 
            letter-spacing: var(--letter-spacing-tight);
          ">
            Build Smarter. <br/>
            <span style="color: #60A5FA;">Grow With Better Technology.</span>
          </h1>

          <!-- Description -->
          <p class="mb-8 text-balance" style="
            font-size: clamp(1rem, 2vw, 1.15rem); 
            max-width: 42rem; 
            line-height: 1.6; 
            color: rgba(255, 255, 255, 0.88);
          ">
            ${companyConfig.shortDescription || "URJIKO Labs designs and develops websites, business systems, custom software, and intelligent digital solutions that help organizations work smarter and grow."}
          </p>

          <!-- Actions -->
          <div class="flex flex-wrap gap-4 items-center justify-center">
            <a href="/contact" data-link class="btn btn--primary btn--lg" style="box-shadow: 0 4px 20px rgba(7, 87, 184, 0.4);">
              <span>Get a Free Consultation</span>
              ${icons.arrowRight("w-4 h-4")}
            </a>
            <a href="/solutions" data-link class="btn btn--lg" style="
              background: rgba(255, 255, 255, 0.10); 
              color: #FFFFFF; 
              border: 1px solid rgba(255, 255, 255, 0.3);
              backdrop-filter: blur(8px);
            ">
              <span>Explore Our Solutions</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  `;
}
