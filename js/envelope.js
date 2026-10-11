/**
 * My Love — Interactive Love Letter & Wax Seal Envelope
 */

(function () {
  function initEnvelope() {
    const envelope = document.getElementById('love-envelope');
    const seal = document.getElementById('wax-seal-btn');
    const closeBtn = document.getElementById('close-letter-btn');
    const salutationEl = document.getElementById('letter-salutation');
    const bodyEl = document.getElementById('letter-body');
    const closingEl = document.getElementById('letter-closing');
    const signatureEl = document.getElementById('letter-signature');

    if (!envelope) return;

    // Populate letter content from LOVE_CONFIG
    if (LOVE_CONFIG && LOVE_CONFIG.loveLetter) {
      const { salutation, paragraphs, closing, signature } = LOVE_CONFIG.loveLetter;
      if (salutationEl) salutationEl.textContent = salutation;
      if (closingEl) closingEl.textContent = closing;
      if (signatureEl) signatureEl.textContent = signature;

      if (bodyEl && paragraphs && paragraphs.length) {
        bodyEl.innerHTML = paragraphs.map(p => `<p class="letter-text">${p}</p>`).join('');
      }
    }

    function openEnvelope() {
      if (!envelope.classList.contains('is-open')) {
        envelope.classList.add('is-open');
        envelope.setAttribute('aria-expanded', 'true');
        
        // Trigger subtle celebration haptic/particle if available
        if (typeof window.triggerLetterSparkles === 'function') {
          window.triggerLetterSparkles();
        }
      }
    }

    function closeEnvelope(e) {
      if (e) e.stopPropagation();
      envelope.classList.remove('is-open');
      envelope.setAttribute('aria-expanded', 'false');
    }

    if (seal) {
      seal.addEventListener('click', function (e) {
        e.stopPropagation();
        openEnvelope();
      });
    }

    envelope.addEventListener('click', function () {
      if (!envelope.classList.contains('is-open')) {
        openEnvelope();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeEnvelope);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnvelope);
  } else {
    initEnvelope();
  }
})();
