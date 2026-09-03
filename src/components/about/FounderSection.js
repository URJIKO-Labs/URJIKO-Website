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
              <h2 class="text-navy mb-2" style="font-size: 2.25rem; font-weight: 800; line-height: 1.1;">GEMACHIS TESFAYE</h2>
              <p class="text-blue font-bold mb-4" style="font-size: 1.125rem;">Software Engineer</p>
              
              <p class="text-muted" style="line-height: 1.7; font-size: 1.05rem;">
                A software engineer focused on building practical systems, solving real-world problems, and creating useful digital solutions.
              </p>
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
