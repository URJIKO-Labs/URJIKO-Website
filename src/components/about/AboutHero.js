import { icons } from "../common/Icons.js";

export function renderAboutHero() {
  const bgUrl = `${import.meta.env.BASE_URL}src/assets/images/home_bg_dark.jpg`;

  return `
    <section class="section" aria-labelledby="about-hero-title" style="
      padding-top: clamp(4rem, 8vw, 6rem);
      padding-bottom: clamp(4rem, 8vw, 6rem);
      background: linear-gradient(135deg, rgba(6, 36, 92, 0.92) 0%, rgba(7, 45, 110, 0.88) 100%), url('${bgUrl}') center/cover no-repeat;
      color: #FFFFFF;
      position: relative;
      overflow: hidden;
    ">
      <div class="container text-center" style="max-width: 56rem; position: relative; z-index: 2;">
        <div class="badge mb-4" style="
          background-color: rgba(255, 255, 255, 0.12);
          color: #60A5FA;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wider);
          padding: 0.4rem 1.1rem;
          border: 1px solid rgba(96, 165, 250, 0.35);
          backdrop-filter: blur(8px);
          display: inline-block;
        ">
          ABOUT URJIKO LABS
        </div>

        <h1 id="about-hero-title" class="text-balance mb-6" style="font-size: clamp(2.25rem, 5vw, 3.75rem); font-weight: 800; color: #FFFFFF; letter-spacing: var(--letter-spacing-tight); line-height: 1.1;">
          Technology With a Purpose.
        </h1>

        <p class="text-balance mb-8 mx-auto" style="font-size: clamp(1rem, 2vw, 1.15rem); line-height: 1.65; max-width: 44rem; color: rgba(255, 255, 255, 0.88);">
          URJIKO Labs builds practical software and digital solutions designed around real business and organizational needs.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <a href="/contact" data-link class="btn btn--primary btn--lg" style="box-shadow: 0 4px 20px rgba(7, 87, 184, 0.4);">
            <span>Discuss Your Project</span>
            ${icons.arrowRight("w-4 h-4")}
          </a>
          <a href="/portfolio" data-link class="btn btn--lg" style="
            background: rgba(255, 255, 255, 0.10);
            color: #FFFFFF;
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(8px);
          ">
            <span>View Our Work</span>
          </a>
        </div>
      </div>
    </section>
  `;
}
