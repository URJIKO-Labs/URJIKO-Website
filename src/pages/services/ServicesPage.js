import { renderServicesHero } from '../../components/services/ServicesHero.js';
import { renderServicesApproach } from '../../components/services/ServicesApproach.js';
import { renderServiceCards } from '../../components/services/ServiceCards.js';
import { renderGlobalCTA } from '../../components/common/CTA.js';

/**
 * URJIKO Labs — Services Page
 * Route: /services
 */
export function renderServicesPage() {
  return `
    ${renderServicesHero()}
    
    <!-- Engagement Model -->
    <section class="section" style="background: var(--color-bg-soft); border-bottom: 1px solid var(--color-border-subtle); padding-top: var(--space-8); padding-bottom: var(--space-8);">
      <div class="container text-center" style="max-width: 48rem;">
        <h2 class="text-navy font-bold mb-4" style="font-size: 1.5rem;">How Engagement Works</h2>
        <p class="text-secondary" style="font-size: 1.2rem; line-height: 1.6;">
          <strong>Start with discovery. Define the workflow. Build the smallest useful version. Test it with real users. Improve it over time.</strong>
        </p>
      </div>
    </section>

    ${renderServicesApproach()}
    ${renderServiceCards()}
    
    ${renderGlobalCTA({
      title: 'Have a workflow that is difficult to manage?',
      description:
        'Tell us what currently happens, and we will help you map the right digital solution.',
      primaryBtnLabel: 'Discuss your workflow',
      primaryBtnPath: '/contact',
      secondaryBtnLabel: 'View portfolio',
      secondaryBtnPath: '/portfolio',
    })}
  `;
}
