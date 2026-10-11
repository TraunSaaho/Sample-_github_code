/**
 * My Love — Memories Polaroid Gallery & Lightbox
 */

(function () {
  let activeIndex = 0;
  let galleryItems = [];

  function initGallery() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const polaroidCards = document.querySelectorAll('.polaroid-card');
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    // Collect gallery items data
    galleryItems = Array.from(polaroidCards).map((card, idx) => {
      const img = card.querySelector('.polaroid-image-wrap img');
      const title = card.querySelector('.polaroid-caption h4')?.textContent || '';
      const script = card.querySelector('.polaroid-caption p')?.textContent || '';
      const date = card.querySelector('.polaroid-date')?.textContent || '';

      card.addEventListener('click', () => openLightbox(idx));

      return {
        src: img ? img.getAttribute('src') : '',
        alt: img ? img.getAttribute('alt') : '',
        caption: `${title} — <em>${script}</em> <small style="display:block;opacity:0.7;margin-top:4px;">${date}</small>`,
        category: card.dataset.category || 'all',
        element: card
      };
    });

    // Category Filtering
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        polaroidCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = '';
            }, 20);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });

    // Open Lightbox
    function openLightbox(index) {
      if (!lightbox || !galleryItems[index]) return;
      activeIndex = index;
      updateLightboxContent();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function updateLightboxContent() {
      const item = galleryItems[activeIndex];
      if (!item) return;
      if (lightboxImg) lightboxImg.src = item.src;
      if (lightboxCaption) lightboxCaption.innerHTML = item.caption;
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function showPrev() {
      activeIndex = (activeIndex - 1 + galleryItems.length) % galleryItems.length;
      updateLightboxContent();
    }

    function showNext() {
      activeIndex = (activeIndex + 1) % galleryItems.length;
      updateLightboxContent();
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }

    // Keyboard support (Escape, Left, Right)
    document.addEventListener('keydown', (e) => {
      if (!lightbox || !lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
