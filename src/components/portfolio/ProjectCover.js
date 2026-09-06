/**
 * URJIKO Labs — Project Cover Component
 *
 * Renders real image if it exists, otherwise falls back to a clean
 * typography-led cover. No fake dashboards or mockups.
 */

function renderRealCoverImage(project, options = {}) {
  const isSmall = options.isSmall || false;
  return `
    <img src="${project.coverImage}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
  `;
}

function renderTypographyCover(project, options = {}) {
  const isSmall = options.isSmall || false;

  let accentStyle = 'border-left: 6px solid var(--color-blue);';
  if (project.id === 'transport') accentStyle = 'background-image: linear-gradient(135deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.02) 75%, transparent 75%, transparent); background-size: 20px 20px;';
  if (project.id === 'eduflow') accentStyle = 'border: 2px dashed var(--color-border);';
  if (project.id === 'shegerhealth') accentStyle = 'border-left: 6px solid #20B2AA;'; // teal

  // Responsive padding/font sizes based on context
  const padding = isSmall ? 'var(--space-4)' : 'var(--space-8)';
  const minHeight = isSmall ? '240px' : '400px';
  const numberSize = isSmall ? '2.5rem' : '4rem';
  const titleSize = isSmall ? '1.5rem' : '2rem';
  const taglineSize = isSmall ? '1rem' : '1.25rem';
  
  // Hide long descriptions on small grid cards
  const descHtml = isSmall ? '' : `
    <p style="font-size: 1.05rem; color: var(--color-secondary); line-height: 1.6; margin-bottom: var(--space-6);">
      ${project.description}
    </p>
  `;

  return `
    <div style="background: var(--color-bg-soft); border-radius: ${isSmall ? 'var(--radius-sm)' : 'var(--radius-xl)'}; border: 1px solid var(--color-border); padding: ${padding}; height: 100%; min-height: ${minHeight}; display: flex; flex-direction: column; justify-content: center; box-shadow: var(--shadow-sm); ${accentStyle}">
      <div style="font-size: ${numberSize}; font-weight: 900; color: rgba(0,0,0,0.05); line-height: 1; margin-bottom: ${isSmall ? 'var(--space-2)' : 'var(--space-4)'}; font-family: monospace;">
        ${project.number}
      </div>
      <h3 style="font-size: ${titleSize}; font-weight: 800; color: var(--color-navy); margin-bottom: var(--space-2);">
        ${project.name}
      </h3>
      <p style="font-size: ${taglineSize}; font-weight: 500; color: var(--color-blue); margin-bottom: ${isSmall ? 'var(--space-4)' : 'var(--space-6)'};">
        ${project.tagline}
      </p>
      ${descHtml}
      <div class="flex gap-2 mt-auto">
        <span class="badge badge--outline text-xs">${project.category}</span>
        <span class="badge badge--blue text-xs">${project.statusBadge}</span>
      </div>
    </div>
  `;
}

/**
 * Render a cover for a project (Hero or Portfolio Card)
 * @param {Object} project - The project data
 * @param {Object} options - { isSmall: boolean }
 */
export function renderProjectCover(project, options = {}) {
  if (project.coverImage) {
    return renderRealCoverImage(project, options);
  }
  return renderTypographyCover(project, options);
}
