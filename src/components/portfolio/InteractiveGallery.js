/**
 * URJIKO Labs — Interactive Gallery Component
 * Renders a device mockup (browser) with a horizontal thumbnail strip.
 * The active image can be swapped by clicking the thumbnails.
 */
export function renderInteractiveGallery(galleryItems) {
  if (!galleryItems || galleryItems.length === 0) return '';

  const mainItem = galleryItems[0];

  const thumbnailsHtml = galleryItems
    .map(
      (item, index) => `
    <button 
      class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
      data-src="${item.src}" 
      data-caption="${item.caption || ''}"
      data-type="${item.type || 'desktop'}"
      aria-label="View screenshot ${index + 1}"
      style="
        flex-shrink: 0;
        width: 120px;
        height: 80px;
        border-radius: var(--radius-sm);
        border: 2px solid ${index === 0 ? 'var(--color-blue)' : 'transparent'};
        overflow: hidden;
        cursor: pointer;
        padding: 0;
        background: var(--color-bg-soft);
        opacity: ${index === 0 ? '1' : '0.6'};
        transition: all 0.2s ease;
      "
    >
      <img src="${item.src}" alt="Thumbnail ${index + 1}" style="width: 100%; height: 100%; object-fit: cover;">
    </button>
  `,
    )
    .join('');

  return `
    <div class="interactive-gallery" style="display: flex; flex-direction: column; gap: var(--space-6);">
      
      <!-- Device Mockup (Active Image) -->
      <div class="gallery-mockup browser-mockup" style="
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
        background: var(--color-white);
        transition: max-width 0.3s ease;
        margin: 0 auto;
        width: 100%;
        max-width: ${mainItem.type === 'mobile' ? '375px' : mainItem.type === 'tablet' ? '768px' : '100%'};
      ">
        <!-- Browser Top Bar -->
        <div class="browser-header" style="
          background: var(--color-bg-soft);
          border-bottom: 1px solid var(--color-border);
          padding: 0.6rem 1rem;
          display: flex;
          gap: 0.4rem;
        ">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #FF5F56;"></span>
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #FFBD2E;"></span>
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #27C93F;"></span>
        </div>
        
        <!-- Image Container -->
        <div class="browser-body" style="background: #f8f9fa; min-height: 200px; position: relative;">
          <img 
            src="${mainItem.src}" 
            alt="${mainItem.alt || 'Product Screenshot'}" 
            class="gallery-main-img" 
            style="width: 100%; height: auto; display: block; transition: opacity 0.2s ease;"
          >
        </div>
      </div>

      <!-- Caption -->
      <div class="text-center">
        <p class="gallery-main-caption text-secondary" style="font-size: 0.95rem; margin: 0; min-height: 1.5rem;">
          ${mainItem.caption || ''}
        </p>
      </div>

      <!-- Thumbnails Strip -->
      <div class="gallery-thumbnails-wrapper" style="
        position: relative;
        padding: 0 var(--space-4);
      ">
        <div class="gallery-thumbnails-scroll" style="
          display: flex;
          gap: var(--space-3);
          overflow-x: auto;
          padding-bottom: var(--space-2);
          scrollbar-width: thin;
          justify-content: center;
        ">
          ${thumbnailsHtml}
        </div>
      </div>

    </div>
  `;
}
