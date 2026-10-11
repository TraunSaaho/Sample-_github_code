/**
 * My Love — Main Application Script
 * Particle background, dynamic section rendering, single hero image upload, scroll observers, and navigation.
 */

(function () {
  // 1. Dynamic Rendering from Config
  function renderDynamicSections() {
    if (typeof LOVE_CONFIG === 'undefined') return;

    // Names & Titles
    const coupleNames = document.querySelectorAll('.dynamic-couple-names');
    coupleNames.forEach(el => el.textContent = LOVE_CONFIG.couple.displayName);

    const dateBadges = document.querySelectorAll('.dynamic-date-badge');
    dateBadges.forEach(el => el.textContent = LOVE_CONFIG.hero.dateBadge);

    // Render Extended Timeline in Journey
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer && LOVE_CONFIG.timeline) {
      timelineContainer.innerHTML = '<div class="timeline-line"></div>' + 
        LOVE_CONFIG.timeline.map((item, index) => `
          <div class="timeline-item reveal-on-scroll delay-${(index % 3) + 1}">
            <div class="timeline-node">
              <img src="${item.icon}" alt="Milestone icon" />
            </div>
            <div class="timeline-card">
              <span class="timeline-date-stamp">${item.date}</span>
              <h3 class="timeline-title">${item.title}</h3>
              <p class="timeline-location">${item.location}</p>
              <div class="timeline-image-wrap">
                <img src="${item.image}" alt="${item.title}" loading="lazy" />
              </div>
              <p class="timeline-story">${item.story}</p>
            </div>
          </div>
        `).join('');
    }

    // Render Little Things Cards
    const littleThingsGrid = document.getElementById('little-things-grid');
    if (littleThingsGrid && LOVE_CONFIG.littleThings) {
      littleThingsGrid.innerHTML = LOVE_CONFIG.littleThings.map((item, index) => `
        <div class="note-card reveal-on-scroll delay-${(index % 4) + 1}">
          <div class="note-card-heart">
            <svg viewBox="0 0 24 24" fill="#7A283D">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <span class="note-card-tag">${item.tag}</span>
          <h4 class="note-card-title">${item.title}</h4>
          <p class="note-card-desc">${item.description}</p>
        </div>
      `).join('');
    }

    // Render Future Dreams
    const dreamsGrid = document.getElementById('dreams-grid');
    if (dreamsGrid && LOVE_CONFIG.dreams) {
      dreamsGrid.innerHTML = LOVE_CONFIG.dreams.map((item, index) => `
        <div class="dream-card reveal-on-scroll delay-${(index % 4) + 1}">
          <div class="dream-image-wrap">
            <span class="dream-badge">${item.tag}</span>
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="dream-card-content">
            <span class="dream-category">${item.category}</span>
            <h4 class="dream-title">${item.title}</h4>
            <p class="dream-desc">${item.desc}</p>
          </div>
        </div>
      `).join('');
    }
  }

  // 2. Interactive Single Hero Photo Upload
  function initHeroPhotoUpload() {
    const fileInput = document.getElementById('hero-photo-upload');
    const heroImg = document.getElementById('hero-main-photo');

    // Restore cached custom uploaded image if present
    const cachedHeroImg = localStorage.getItem('mylove_hero_image');
    if (cachedHeroImg && heroImg) {
      heroImg.src = cachedHeroImg;
    }

    if (fileInput && heroImg) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const dataUrl = event.target.result;
            heroImg.src = dataUrl;
            try {
              localStorage.setItem('mylove_hero_image', dataUrl);
            } catch (err) {
              console.warn('Storage quota exceeded, photo previewed for session.');
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  // 3. Floating Delicate Hearts Canvas
  function initFloatingCanvas() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none';
      return;
    }

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 4,
        speedY: Math.random() * 0.35 + 0.15,
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.3 + 0.1,
        type: Math.random() > 0.4 ? 'heart' : 'sparkle'
      });
    }

    function drawHeart(x, y, size, opacity) {
      ctx.save();
      ctx.fillStyle = `rgba(122, 40, 61, ${opacity * 0.65})`;
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x - size / 2, y + (size + topCurveHeight) / 2, x, y + (size + topCurveHeight) / 1.3, x, y + size);
      ctx.bezierCurveTo(x, y + (size + topCurveHeight) / 1.3, x + size / 2, y + (size + topCurveHeight) / 2, x + size / 2, y + topCurveHeight);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function drawSparkle(x, y, size, opacity) {
      ctx.save();
      ctx.fillStyle = `rgba(203, 163, 88, ${opacity * 0.8})`;
      ctx.beginPath();
      ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        if (p.type === 'heart') {
          drawHeart(p.x, p.y, p.size, p.opacity);
        } else {
          drawSparkle(p.x, p.y, p.size, p.opacity);
        }
      });

      requestAnimationFrame(renderParticles);
    }

    renderParticles();
  }

  // 4. Scroll Observers & Interactions
  function initScrollInteractions() {
    const nav = document.getElementById('site-nav');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (nav) {
        if (scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }

      if (backToTopBtn) {
        if (scrollY > 400) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }
    });

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isOpen = navLinks.classList.contains('active');
        mobileToggle.setAttribute('aria-expanded', isOpen);
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
        });
      });
    }

    // Scroll Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    // Reveal hero elements immediately on load
    setTimeout(() => {
      document.querySelectorAll('#love .reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
    }, 100);
  }

  function init() {
    renderDynamicSections();
    initHeroPhotoUpload();
    initFloatingCanvas();
    initScrollInteractions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
