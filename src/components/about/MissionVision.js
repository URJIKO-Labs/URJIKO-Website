export function renderMissionVision() {
  return `
    <section class="section" aria-labelledby="mission-heading">
      <div class="container">
        <div class="section-heading section-heading--center" style="margin-bottom: var(--space-8);">
          <span class="section-heading__label">PURPOSE</span>
          <h2 id="mission-heading" class="section-heading__title">Mission & Vision</h2>
        </div>

        <div class="grid grid--2 gap-8">
          <!-- Mission -->
          <div style="background: var(--color-white); border: 1px solid var(--color-border); border-left: 4px solid var(--color-blue); border-radius: var(--radius-lg); padding: var(--space-6);">
            <div class="flex items-center gap-2 mb-3">
              <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-blue);"></div>
              <span class="text-xs font-semibold text-blue" style="text-transform: uppercase; letter-spacing: var(--letter-spacing-wider);">Our Mission</span>
            </div>
            <p class="text-navy" style="font-size: var(--font-size-md); line-height: 1.7; font-weight: 500;">
              To help businesses and organizations solve real operational problems through practical, accessible, and well-designed technology.
            </p>
          </div>

          <!-- Vision -->
          <div style="background: var(--color-white); border: 1px solid var(--color-border); border-left: 4px solid var(--color-navy); border-radius: var(--radius-lg); padding: var(--space-6);">
            <div class="flex items-center gap-2 mb-3">
              <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-navy);"></div>
              <span class="text-xs font-semibold text-navy" style="text-transform: uppercase; letter-spacing: var(--letter-spacing-wider);">Our Vision</span>
            </div>
            <p class="text-navy" style="font-size: var(--font-size-md); line-height: 1.7; font-weight: 500;">
              To become a trusted technology partner for organizations that want to use software to work smarter, operate better, and grow sustainably.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}
