/**
 * Interactive Gallery logic for Project detail pages.
 * Handles clicking thumbnails to update the main active mockup image.
 */
export function initInteractiveGallery() {
  const galleries = document.querySelectorAll('.interactive-gallery');
  
  galleries.forEach(gallery => {
    const mockup = gallery.querySelector('.gallery-mockup');
    const mainImg = gallery.querySelector('.gallery-main-img');
    const mainCaption = gallery.querySelector('.gallery-main-caption');
    const thumbnails = gallery.querySelectorAll('.gallery-thumbnail');
    
    if (!mainImg || thumbnails.length === 0) return;
    
    thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        // Remove active state from all thumbnails
        thumbnails.forEach(t => {
          t.classList.remove('active');
          t.style.opacity = '0.6';
          t.style.border = '2px solid transparent';
        });
        
        // Add active state to clicked thumbnail
        thumb.classList.add('active');
        thumb.style.opacity = '1';
        thumb.style.border = '2px solid var(--color-blue)';
        
        // Extract data
        const src = thumb.dataset.src;
        const caption = thumb.dataset.caption;
        const type = thumb.dataset.type; // 'desktop', 'tablet', 'mobile'
        
        // Fade out slightly before changing source for a smoother effect
        mainImg.style.opacity = '0.3';
        
        // Adjust the mockup max-width based on device type
        if (type === 'mobile') {
          mockup.style.maxWidth = '375px';
        } else if (type === 'tablet') {
          mockup.style.maxWidth = '768px';
        } else {
          mockup.style.maxWidth = '100%';
        }
        
        setTimeout(() => {
          mainImg.src = src;
          mainImg.alt = caption;
          if (mainCaption) {
            mainCaption.textContent = caption;
          }
          mainImg.style.opacity = '1';
        }, 200);
      });
    });
  });
}
