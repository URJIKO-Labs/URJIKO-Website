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
  if (project.id === 'transport')
    accentStyle =
      'background-image: linear-gradient(135deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.02) 75%, transparent 75%, transparent); background-size: 20px 20px;';
  if (project.id === 'eduflow')
    accentStyle = 'border: 2px dashed var(--color-border);';
  if (project.id === 'shegerhealth')
    accentStyle = 'border-left: 6px solid #20B2AA;'; // teal

  const minHeight = isSmall ? '200px' : '360px';
  const numberSize = isSmall ? '4rem' : '8rem';

  return `
    <div style="background: var(--color-bg-soft); border-radius: ${isSmall ? 'var(--radius-sm)' : 'var(--radius-md)'}; border: 1px solid var(--color-border); height: 100%; min-height: ${minHeight}; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); ${accentStyle}">
      <!-- Abstract Number Motif -->
      <div style="font-size: ${numberSize}; font-weight: 900; color: rgba(0,0,0,0.04); line-height: 1; font-family: monospace; user-select: none;">
        ${project.number}
      </div>
      <!-- Project ID Watermark -->
      <div style="position: absolute; bottom: var(--space-4); right: var(--space-4); font-size: 0.75rem; font-weight: 700; color: var(--color-navy); opacity: 0.2; text-transform: uppercase; letter-spacing: 0.1em; user-select: none;">
        ${project.id}
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
