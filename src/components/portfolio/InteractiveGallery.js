/**
 * URJIKO Labs — Interactive Gallery Component
 * Horizontal scroll gallery showing all screenshots in a row.
 */
export function renderInteractiveGallery(galleryItems, device = 'laptop') {
  if (!galleryItems || galleryItems.length === 0) return '';

  const imagesHtml = galleryItems
    .map(
      (item, index) => `
      <div class="gallery-scroll-item" style="flex-shrink: 0; width: 85%; max-width: ${device === 'mobile' ? '320px' : '850px'}; scroll-snap-align: center; display: flex; flex-direction: column; align-items: center; padding: var(--space-4) 0;">
        
        ${device === 'mobile' ? `
        <!-- Mobile-only project (always iPhone) -->
        <div style="width: 100%; position: relative;">
          <div style="background: #111; padding: 2.5%; border-radius: 36px; box-shadow: inset 0 0 0 2px #444, 0 10px 30px rgba(0,0,0,0.15); position: relative; z-index: 2;">
            <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 40%; height: 20px; background: #111; border-radius: 0 0 12px 12px; z-index: 3;"></div>
            <div style="background: #fff; border-radius: 28px; overflow: hidden; aspect-ratio: 9/19.5; position: relative;">
              <img src="${item.src.startsWith('/') ? item.src : '/' + item.src}" alt="${item.alt || 'Screenshot ' + (index + 1)}" style="width: 100%; height: 100%; object-fit: cover; display: block; object-position: top;">
            </div>
          </div>
        </div>
        ` : `
        <!-- Responsive Laptop Cover (Macbook on Desktop, iPhone on Mobile) -->
        <style>
          .gallery-mockup-desktop { display: none !important; }
          .gallery-mockup-mobile { display: block !important; width: 100%; max-width: 320px; margin: 0 auto; }
          @media(min-width: 768px) {
            .gallery-mockup-desktop { display: block !important; width: 100%; }
            .gallery-mockup-mobile { display: none !important; }
          }
        </style>

        <div class="gallery-mockup-mobile">
          <div style="background: #111; padding: 2.5%; border-radius: 36px; box-shadow: inset 0 0 0 2px #444, 0 10px 30px rgba(0,0,0,0.15); position: relative; z-index: 2;">
            <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 40%; height: 20px; background: #111; border-radius: 0 0 12px 12px; z-index: 3;"></div>
            <div style="background: #fff; border-radius: 28px; overflow: hidden; aspect-ratio: 9/19.5; position: relative;">
              <img src="${item.src.startsWith('/') ? item.src : '/' + item.src}" alt="${item.alt || 'Screenshot ' + (index + 1)}" style="width: 100%; height: 100%; object-fit: cover; display: block; object-position: top;">
            </div>
          </div>
        </div>

        <div class="gallery-mockup-desktop">
          <div class="macbook-wrapper" style="width: 100%; position: relative; perspective: 1000px;">
            <!-- Screen/Lid -->
            <div style="
              background: #111;
              padding: 2% 2% 4% 2%;
              border-radius: 12px 12px 0 0;
              box-shadow: inset 0 0 0 2px #444, 0 10px 30px rgba(0,0,0,0.15);
              position: relative;
              z-index: 2;
            ">
              <!-- Camera dot -->
              <div style="position: absolute; top: 1.5%; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; background: #333; border-radius: 50%;"></div>
              
              <!-- The actual screenshot -->
              <div style="
                background: #fff;
                border-radius: 4px;
                overflow: hidden;
                aspect-ratio: 16/10;
                position: relative;
              ">
                <img src="${item.src.startsWith('/') ? item.src : '/' + item.src}" alt="${item.alt || 'Screenshot ' + (index + 1)}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
              </div>
              
              <!-- MacBook Pro text -->
              <div style="position: absolute; bottom: 1%; left: 50%; transform: translateX(-50%); color: #555; font-size: 0.5rem; font-family: sans-serif; letter-spacing: 1px;">MacBook Pro</div>
            </div>
            
            <!-- Base/Keyboard lip -->
            <div style="
              position: relative;
              height: 12px;
              background: linear-gradient(to bottom, #d5d5d5 0%, #b3b3b3 100%);
              border-radius: 0 0 16px 16px;
              width: 115%;
              left: -7.5%;
              z-index: 1;
              box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 15px 20px rgba(0,0,0,0.15);
              display: flex;
              justify-content: center;
            ">
              <!-- Trackpad notch -->
              <div style="width: 15%; height: 4px; background: #a5a5a5; border-radius: 0 0 4px 4px; box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);"></div>
            </div>
          </div>
        </div>
        `}

        ${item.caption ? `<div style="margin-top: var(--space-6); background: var(--color-bg-soft); padding: var(--space-3) var(--space-5); border-radius: var(--radius-lg); border: 1px solid var(--color-border); max-width: 80%;"><p class="text-center text-navy font-semibold" style="font-size: 0.9rem; margin: 0;">${item.caption}</p></div>` : ''}
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
