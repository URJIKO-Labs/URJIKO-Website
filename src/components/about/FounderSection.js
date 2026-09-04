import { icons } from "../common/Icons.js";

export function renderFounderSection() {
  return `
    <section class="section" style="background-color: var(--color-bg-soft);">
      <div class="container">
        <div class="card card--lg" style="border-top: 4px solid var(--color-blue);">
          <div class="grid grid--2 items-center gap-8">
            
            <!-- Left Column: Intro -->
            <div class="founder-info">
              <div class="badge badge--navy mb-4">Founder</div>
              <h2 class="text-navy mb-2" style="font-size: clamp(1.75rem, 5vw, 2.25rem); font-weight: 800; line-height: 1.1;">GEMACHIS TESFAYE</h2>
              <p class="text-blue font-bold mb-4" style="font-size: 1.125rem;">Founder & Software Engineer</p>
              
              <p class="text-muted mb-4" style="line-height: 1.7; font-size: 1.05rem;">
                Building practical software systems across web development, business applications, data, and intelligent technologies.
              </p>

              <div class="flex gap-3">
                <a href="https://github.com/urjiko-labs" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/company/urjiko-labs/" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <!-- Right Column: Skills -->
            <div class="founder-skills bg-white p-6" style="border: 1px solid var(--color-border); border-radius: 8px;">
              <h3 class="text-navy font-bold mb-4" style="font-size: 1.25rem;">Core Focus Areas</h3>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px;">
                <li class="flex items-center gap-3">
                  <div class="flex items-center justify-center" style="color: var(--color-blue); width: 28px; height: 28px; border-radius: 50%; background-color: var(--color-bg-light-blue);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span class="text-secondary font-semibold">Software Engineering</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="flex items-center justify-center" style="color: var(--color-blue); width: 28px; height: 28px; border-radius: 50%; background-color: var(--color-bg-light-blue);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span class="text-secondary font-semibold">AI & Intelligent Systems</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="flex items-center justify-center" style="color: var(--color-blue); width: 28px; height: 28px; border-radius: 50%; background-color: var(--color-bg-light-blue);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span class="text-secondary font-semibold">Business Applications</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="flex items-center justify-center" style="color: var(--color-blue); width: 28px; height: 28px; border-radius: 50%; background-color: var(--color-bg-light-blue);">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span class="text-secondary font-semibold">Digital Solutions</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  `;
}
