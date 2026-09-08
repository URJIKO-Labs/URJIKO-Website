/**
 * URJIKO Labs — Project Cover Component
 *
 * Renders real image if it exists, otherwise falls back to a clean
 * typography-led cover. No fake dashboards or mockups.
 */

function renderRealCoverImage(project, options = {}) {
  const isSmall = options.isSmall || false;
  const isFlush = options.isFlush || false;
  const borderStyle = isFlush
    ? 'border-radius: 0; box-shadow: none;'
    : 'border-radius: var(--radius-md); box-shadow: var(--shadow-sm);';
    
  if (isSmall) {
    // Mini Macbook for cards (Home / Portfolio Grid)
    return `
      <div style="width: 100%; height: 100%; background: var(--color-bg-soft); display: flex; align-items: flex-end; justify-content: center; padding-top: 1.5rem; overflow: hidden; ${borderStyle}">
        <div style="width: 85%; max-width: 320px; position: relative;">
          <div style="background: #111; padding: 2% 2% 3% 2%; border-radius: 8px 8px 0 0; position: relative; z-index: 2;">
            <div style="aspect-ratio: 16/10; overflow: hidden; border-radius: 2px;">
              <img src="${project.coverImage}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
          <div style="height: 6px; background: linear-gradient(to bottom, #d5d5d5 0%, #b3b3b3 100%); border-radius: 0 0 6px 6px; width: 110%; left: -5%; position: relative; z-index: 1;"></div>
        </div>
      </div>
    `;
  }

  // Large Macbook for Hero Cover (Project Detail Page)
  return `
    <div style="width: 100%; height: 100%; min-height: 400px; background: var(--color-bg-soft); display: flex; align-items: center; justify-content: center; padding: var(--space-8) var(--space-4); ${borderStyle}">
      <div style="width: 100%; max-width: 700px; position: relative; margin-top: 2rem;">
          <div style="background: #111; padding: 2% 2% 4% 2%; border-radius: 12px 12px 0 0; box-shadow: inset 0 0 0 2px #444, 0 10px 30px rgba(0,0,0,0.15); position: relative; z-index: 2;">
            <div style="position: absolute; top: 1.5%; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; background: #333; border-radius: 50%;"></div>
            <div style="background: #fff; border-radius: 4px; overflow: hidden; aspect-ratio: 16/10; position: relative;">
              <img src="${project.coverImage}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div style="position: absolute; bottom: 1%; left: 50%; transform: translateX(-50%); color: #555; font-size: 0.5rem; font-family: sans-serif; letter-spacing: 1px;">MacBook Pro</div>
          </div>
          <div style="position: relative; height: 12px; background: linear-gradient(to bottom, #d5d5d5 0%, #b3b3b3 100%); border-radius: 0 0 16px 16px; width: 115%; left: -7.5%; z-index: 1; box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 15px 20px rgba(0,0,0,0.15); display: flex; justify-content: center;">
            <div style="width: 15%; height: 4px; background: #a5a5a5; border-radius: 0 0 4px 4px; box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);"></div>
          </div>
      </div>
    </div>
  `;
}

function renderTypographyCover(project, options = {}) {
  const isSmall = options.isSmall || false;
  const isFlush = options.isFlush || false;

  let accentColor = 'var(--color-blue)';
  let gradient =
    'linear-gradient(135deg, rgba(6,36,92,0.03) 0%, rgba(6,36,92,0) 100%)';

  if (project.id === 'transport') {
    accentColor = '#FF8C00'; // Orange
    gradient =
      'linear-gradient(135deg, rgba(255,140,0,0.05) 0%, transparent 100%)';
  } else if (project.id === 'eduflow') {
    accentColor = '#8A2BE2'; // Purple
    gradient =
      'linear-gradient(135deg, rgba(138,43,226,0.05) 0%, transparent 100%)';
  } else if (project.id === 'shegerhealth') {
    accentColor = '#20B2AA'; // Teal
    gradient =
      'linear-gradient(135deg, rgba(32,178,170,0.05) 0%, transparent 100%)';
  }

  const minHeight = isSmall ? '180px' : '360px';
  const borderStyle = isFlush
    ? 'border: none; border-radius: 0;'
    : `border: 1px solid var(--color-border); border-radius: ${isSmall ? 'var(--radius-md)' : 'var(--radius-xl)'};`;

  if (isSmall) {
    return `
      <div style="background: var(--color-bg-soft); ${borderStyle} height: 100%; min-height: ${minHeight}; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); border-bottom: 4px solid ${accentColor}; ${gradient}">
        <!-- Abstract Number Motif -->
        <div style="font-size: 4rem; font-weight: 900; color: rgba(0,0,0,0.04); line-height: 1; font-family: monospace; user-select: none;">
          ${project.number}
        </div>
        <!-- Project ID Watermark -->
        <div style="position: absolute; bottom: var(--space-4); right: var(--space-4); font-size: 0.75rem; font-weight: 700; color: var(--color-navy); opacity: 0.2; text-transform: uppercase; letter-spacing: 0.1em; user-select: none;">
          ${project.id}
        </div>
      </div>
    `;
  }

  // Large Art Cover
  return `
    <div style="background: var(--color-navy); ${borderStyle} height: 100%; min-height: ${minHeight}; display: flex; flex-direction: column; position: relative; overflow: hidden; box-shadow: var(--shadow-md);">
      
      <!-- Decorative Background Elements -->
      <div style="position: absolute; top: -20%; right: -10%; width: 60%; height: 60%; background: ${accentColor}; opacity: 0.15; filter: blur(60px); border-radius: 50%;"></div>
      <div style="position: absolute; bottom: -10%; left: -10%; width: 40%; height: 40%; background: var(--color-blue); opacity: 0.1; filter: blur(40px); border-radius: 50%;"></div>
      
      <!-- Grid Overlay -->
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 30px 30px;"></div>

      <div style="position: relative; z-index: 1; padding: var(--space-8); display: flex; flex-direction: column; height: 100%; justify-content: space-between;">
        <div class="flex justify-between items-start">
          <div style="font-family: monospace; font-size: 1.25rem; font-weight: 700; color: rgba(255,255,255,0.3);">
            NO.${project.number}
          </div>
          <div style="width: 12px; height: 12px; border-radius: 50%; background: ${accentColor}; box-shadow: 0 0 10px ${accentColor};"></div>
        </div>

        <div style="margin-top: auto; padding-top: var(--space-8);">
          <div style="font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-2);">
            ${project.category}
          </div>
          <div style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: var(--color-white); line-height: 1.1; letter-spacing: -0.02em;">
            ${project.name}
          </div>
        </div>
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
