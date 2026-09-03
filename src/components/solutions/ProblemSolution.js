import { icons } from '../common/Icons.js';

/**
 * ProblemSolution Component
 * Communicates URJIKO's approach: Start with the problem, build the right solution.
 * Responsive horizontal process flow on desktop, vertical on mobile.
 */
export function renderProblemSolution() {
  const steps = [
    { number: '01', name: 'Problem' },
    { number: '02', name: 'Understand' },
    { number: '03', name: 'Design' },
    { number: '04', name: 'Build' },
    { number: '05', name: 'Deploy' },
    { number: '06', name: 'Improve' },
  ];

  const stepsHtml = steps
    .map((step, index) => {
      const isLast = index === steps.length - 1;
      const connectorHtml = isLast
        ? ''
        : `
          <div class="problem-solution__connector" aria-hidden="true">
            <span class="problem-solution__connector-line"></span>
            <svg class="problem-solution__connector-arrow" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 3 11 8 6 13"></polyline>
            </svg>
          </div>
        `;

      return `
        <div class="problem-solution__step">
          <div class="problem-solution__node font-bold">${step.number}</div>
          <span class="problem-solution__name font-semibold text-navy">${step.name}</span>
        </div>
        ${connectorHtml}
      `;
    })
    .join('');

  return `
    <section class="section bg-soft problem-solution-section" aria-labelledby="problem-solution-heading" style="border-top: 1px solid var(--color-border-subtle);">
      <div class="container">
        
        <!-- Section Heading (Centered) -->
        <div class="section-heading section-heading--center">
          <span class="section-heading__label">OUR APPROACH</span>
          <h2 id="problem-solution-heading" class="section-heading__title">
            Start With the Problem. Build the Right Solution.
          </h2>
        </div>

        <!-- Responsive Process Flow -->
        <div class="problem-solution__flow" role="list">
          ${stepsHtml}
        </div>

        <!-- Centered Supporting Message -->
        <div class="problem-solution__message-wrapper text-center" style="max-width: 36rem; margin-left: auto; margin-right: auto;">
          <p class="problem-solution__message text-secondary text-balance text-center">
            We don't believe every organization needs the same software. We build around the actual problem, workflow, users, and goals.
          </p>
        </div>

      </div>
    </section>

    <style>
      .problem-solution-section {
        border-top: 1px solid var(--color-border-subtle);
        background-color: var(--color-bg-soft);
      }

      /* Process Flow — Horizontal Flexbox on Desktop */
      .problem-solution__flow {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        max-width: 64rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: var(--space-12);
        padding: 0 var(--space-2);
        position: relative;
      }

      /* Step Item */
      .problem-solution__step {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--space-2);
        flex-shrink: 0;
        position: relative;
        z-index: 1;
        transition: transform var(--transition-fast);
      }

      .problem-solution__step:hover {
        transform: translateY(-2px);
      }

      /* Circle / Node (Blue on Light-Blue BG) */
      .problem-solution__node {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 50%;
        background-color: var(--color-bg-light-blue);
        color: var(--color-blue);
        border: 2px solid var(--color-blue);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-bold);
        font-family: monospace;
        box-shadow: 0 2px 6px rgba(7, 87, 184, 0.12);
        transition: background-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast);
      }

      .problem-solution__step:hover .problem-solution__node {
        background-color: var(--color-blue);
        color: var(--color-white);
        box-shadow: 0 4px 12px rgba(7, 87, 184, 0.25);
      }

      /* Step Name */
      .problem-solution__name {
        font-size: var(--font-size-sm);
        color: var(--color-navy);
        letter-spacing: var(--letter-spacing-tight);
        white-space: nowrap;
        transition: color var(--transition-fast);
      }

      .problem-solution__step:hover .problem-solution__name {
        color: var(--color-blue);
      }

      /* Connector Line & Arrow */
      .problem-solution__connector {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        min-width: 1.25rem;
        max-width: 4.5rem;
        margin-top: 1.375rem;
        transform: translateY(-50%);
        color: var(--color-blue);
      }

      .problem-solution__connector-line {
        flex: 1;
        height: 2px;
        background-color: rgba(7, 87, 184, 0.3);
        min-width: 0.75rem;
      }

      .problem-solution__connector-arrow {
        flex-shrink: 0;
        color: var(--color-blue);
        margin-left: -2px;
      }

      /* Supporting Message Block */
      .problem-solution__message-wrapper {
        max-width: 36rem;
        margin-left: auto;
        margin-right: auto;
      }

      .problem-solution__message {
        font-size: var(--font-size-base);
        line-height: var(--line-height-relaxed);
        margin-bottom: 0;
      }

      /* Mobile Layout (< 768px): Vertical Flow Top-to-Bottom */
      @media (max-width: 767.98px) {
        .problem-solution__flow {
          flex-direction: column;
          align-items: center;
          gap: 0;
          max-width: 20rem;
          margin-bottom: var(--space-8);
          padding: 0 var(--space-4);
        }

        .problem-solution__step {
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--space-3);
          width: 100%;
          padding: var(--space-3) var(--space-4);
          background-color: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xs);
          text-align: left;
        }

        .problem-solution__step:hover {
          transform: none;
          border-color: var(--color-border-blue);
          box-shadow: var(--shadow-sm);
        }

        .problem-solution__step:hover .problem-solution__node {
          transform: none;
        }

        .problem-solution__node {
          width: 2.25rem;
          height: 2.25rem;
          font-size: var(--font-size-xs);
          flex-shrink: 0;
        }

        .problem-solution__name {
          font-size: var(--font-size-base);
        }

        .problem-solution__connector {
          flex-direction: column;
          height: 1.75rem;
          width: 100%;
          min-width: auto;
          max-width: none;
          margin-top: 0;
          transform: none;
          padding: 0.15rem 0;
        }

        .problem-solution__connector-line {
          width: 2px;
          height: 100%;
          flex: 1;
          min-width: unset;
        }

        .problem-solution__connector-arrow {
          transform: rotate(90deg);
          margin-left: 0;
          margin-top: -2px;
        }
      }
    </style>
  `;
}
