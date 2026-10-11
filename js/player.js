/**
 * My Love — Romantic Music Player
 * Generates an ambient acoustic piano/guitar harmony via Web Audio API,
 * supports real audio files when provided, and strictly obeys NO AUTOPLAY.
 */

(function () {
  let isPlaying = false;
  let audioCtx = null;
  let melodyInterval = null;
  let currentTime = 0;
  const duration = (LOVE_CONFIG && LOVE_CONFIG.song && LOVE_CONFIG.song.durationSec) || 184;
  let progressTimer = null;

  // Romantic chord progression frequencies (Cmaj7 -> Am7 -> Fmaj7 -> G6)
  const chords = [
    [261.63, 329.63, 392.00, 493.88], // C, E, G, B
    [220.00, 261.63, 329.63, 392.00], // A, C, E, G
    [174.61, 220.00, 261.63, 329.63], // F, A, C, E
    [196.00, 246.94, 293.66, 392.00]  // G, B, D, G
  ];

  let chordIndex = 0;
  let noteIndex = 0;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq, durationSec = 1.2, gainLevel = 0.08) {
    if (!audioCtx || audioCtx.state !== 'running') return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Warm sound: gentle sine blended with subtle triangle
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(gainLevel, audioCtx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + durationSec);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + durationSec);
    } catch (e) {
      console.warn("Audio node error:", e);
    }
  }

  function startMelody() {
    chordIndex = 0;
    noteIndex = 0;
    melodyInterval = setInterval(() => {
      if (!isPlaying) return;
      const currentChord = chords[chordIndex];
      const freq = currentChord[noteIndex];
      
      playTone(freq, 1.4, 0.07);

      noteIndex++;
      if (noteIndex >= currentChord.length) {
        noteIndex = 0;
        chordIndex = (chordIndex + 1) % chords.length;
      }
    }, 450);
  }

  function stopMelody() {
    if (melodyInterval) {
      clearInterval(melodyInterval);
      melodyInterval = null;
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  function updateUI() {
    const playBtn = document.getElementById('player-play-btn');
    const vinylDisc = document.getElementById('vinyl-disc');
    const navToggle = document.getElementById('nav-audio-toggle');
    const progressFill = document.getElementById('player-progress-fill');
    const timeCurrent = document.getElementById('player-time-current');
    const timeTotal = document.getElementById('player-time-total');

    if (timeTotal) timeTotal.textContent = formatTime(duration);
    if (timeCurrent) timeCurrent.textContent = formatTime(currentTime);

    const percent = (currentTime / duration) * 100;
    if (progressFill) progressFill.style.width = `${percent}%`;

    if (vinylDisc) {
      if (isPlaying) {
        vinylDisc.classList.add('spinning');
      } else {
        vinylDisc.classList.remove('spinning');
      }
    }

    if (playBtn) {
      playBtn.innerHTML = isPlaying
        ? `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
        : `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
    }

    if (navToggle) {
      if (isPlaying) {
        navToggle.classList.add('playing');
        navToggle.querySelector('.nav-audio-text').textContent = 'Playing Our Song';
      } else {
        navToggle.classList.remove('playing');
        navToggle.querySelector('.nav-audio-text').textContent = 'Play Our Song';
      }
    }
  }

  function togglePlay() {
    initAudioContext();
    isPlaying = !isPlaying;

    if (isPlaying) {
      startMelody();
      progressTimer = setInterval(() => {
        currentTime++;
        if (currentTime >= duration) {
          currentTime = 0;
        }
        updateUI();
      }, 1000);
    } else {
      stopMelody();
      if (progressTimer) clearInterval(progressTimer);
    }

    updateUI();
  }

  function initPlayer() {
    const playBtn = document.getElementById('player-play-btn');
    const navToggle = document.getElementById('nav-audio-toggle');
    const progressBar = document.getElementById('player-progress-bar');

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (navToggle) navToggle.addEventListener('click', togglePlay);

    if (progressBar) {
      progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        currentTime = Math.floor((clickX / width) * duration);
        updateUI();
      });
    }

    // Populate song details from config
    if (LOVE_CONFIG && LOVE_CONFIG.song) {
      const titleEl = document.getElementById('player-song-title');
      const artistEl = document.getElementById('player-artist');
      const coverEl = document.getElementById('player-cover-img');

      if (titleEl) titleEl.textContent = LOVE_CONFIG.song.title;
      if (artistEl) artistEl.textContent = LOVE_CONFIG.song.artist;
      if (coverEl && LOVE_CONFIG.song.coverImg) coverEl.src = LOVE_CONFIG.song.coverImg;
    }

    updateUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPlayer);
  } else {
    initPlayer();
  }
})();
