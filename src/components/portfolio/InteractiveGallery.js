/**
 * URJIKO Labs — Interactive Gallery Component
 * Horizontal scroll gallery showing all screenshots in a row.
 */
export function renderInteractiveGallery(galleryItems) {
  if (!galleryItems || galleryItems.length === 0) return '';

  const imagesHtml = galleryItems
    .map(
      (item, index) => `
      <div class="gallery-scroll-item" style="flex-shrink: 0; width: 80%; max-width: 800px; scroll-snap-align: center;">
        <div style="border: 1px solid var(--color-border); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); background: var(--color-white);">
          <div style="background: var(--color-bg-soft); border-bottom: 1px solid var(--color-border); padding: 0.5rem 0.8rem; display: flex; gap: 0.3rem;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #FF5F56;"></span>
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #FFBD2E;"></span>
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #27C93F;"></span>
          </div>
          <div style="background: #f8f9fa;">
            <img src="${item.src}" alt="${item.alt || 'Screenshot ' + (index + 1)}" style="width: 100%; height: auto; display: block;">
          </div>
        </div>
        ${item.caption ? `<p class="text-center text-secondary" style="font-size: 0.85rem; margin-top: var(--space-2);">${item.caption}</p>` : ''}
      </div>
    `,
    )
    .join('');

  return `
    <div class="interactive-gallery" style="display: flex; flex-direction: column; gap: var(--space-4);">
      
      <!-- Scroll Hint -->
      <div class="text-center">
        <p class="text-muted" style="font-size: 0.8rem; margin: 0;">Scroll to explore screenshots</p>
      </div>

      <!-- Horizontal Scroll -->
      <div class="gallery-scroll-container" style="
        display: flex;
        gap: var(--space-4);
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        padding: var(--space-2) var(--space-4);
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
      ">
        ${imagesHtml}
      </div>

      <!-- Dots Navigation -->
      <div class="gallery-dots" style="display: flex; justify-content: center; gap: var(--space-2);">
        ${galleryItems
          .map(
            (_, i) => `
          <button class="gallery-dot ${i === 0 ? 'active' : ''}" data-index="${i}" style="
            width: 8px; height: 8px; border-radius: 50%; border: none; padding: 0; cursor: pointer;
            background: ${i === 0 ? 'var(--color-blue)' : 'var(--color-border)'};
            transition: background 0.2s;
          " aria-label="Go to screenshot ${i + 1}"></button>
        `,
          )
          .join('')}
      </div>

    </div>

    <style>
      .gallery-scroll-container::-webkit-scrollbar { height: 4px; }
      .gallery-scroll-container::-webkit-scrollbar-track { background: var(--color-bg-soft); border-radius: 2px; }
      .gallery-scroll-container::-webkit-scrollbar-thumb { background: var(--color-border); border-radius: 2px; }
    </style>
  `;
}
