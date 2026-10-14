/** Real soundtrack player for the supplied MP3. */
(function () {
  const audio = document.getElementById('love-audio');
  if (!audio) return;

  const playBtn = document.getElementById('player-play-btn');
  const navToggle = document.getElementById('nav-audio-toggle');
  const heroStartButton = document.getElementById('hero-audio-start');
  const progressBar = document.getElementById('player-progress-bar');
  const durationLabel = document.getElementById('player-time-total');
  const currentLabel = document.getElementById('player-time-current');
  const fill = document.getElementById('player-progress-fill');
  const vinyl = document.getElementById('vinyl-disc');

  function timeLabel(seconds) {
    if (!Number.isFinite(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
  }

  function update() {
    const playing = !audio.paused;
    if (playing && heroStartButton) heroStartButton.hidden = true;
    if (currentLabel) currentLabel.textContent = timeLabel(audio.currentTime);
    if (durationLabel) durationLabel.textContent = timeLabel(audio.duration);
    if (fill) fill.style.width = `${audio.duration ? (audio.currentTime / audio.duration) * 100 : 0}%`;
    if (vinyl) vinyl.classList.toggle('spinning', playing);
    if (playBtn) {
      playBtn.setAttribute('aria-label', playing ? 'Pause song' : 'Play song');
      playBtn.innerHTML = playing
        ? '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'
        : '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    }
    if (navToggle) {
      navToggle.classList.toggle('playing', playing);
      const label = navToggle.querySelector('.nav-audio-text');
      if (label) label.textContent = playing ? 'Pause Our Song' : 'Play Our Song';
      navToggle.setAttribute('aria-label', playing ? 'Pause our song' : 'Play our song');
    }
  }

  function togglePlayback() {
    if (audio.paused) audio.play().catch(() => update());
    else audio.pause();
  }

  if (playBtn) playBtn.addEventListener('click', togglePlayback);
  if (navToggle) navToggle.addEventListener('click', togglePlayback);
  if (heroStartButton) heroStartButton.addEventListener('click', togglePlayback);
  if (progressBar) {
    progressBar.addEventListener('click', (event) => {
      if (!Number.isFinite(audio.duration)) return;
      const bounds = progressBar.getBoundingClientRect();
      audio.currentTime = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)) * audio.duration;
    });
  }
  ['play', 'pause', 'timeupdate', 'loadedmetadata', 'ended'].forEach(eventName => audio.addEventListener(eventName, update));

  // Try audible autoplay on load. If the browser blocks it, start on the
  // visitor's first non-control click. The audio element loops only after the
  // entire track has finished.
  audio.play().then(update).catch(() => {
    update();
    if (heroStartButton) heroStartButton.hidden = false;
    const startAfterInteraction = (event) => {
      if (event.target.closest('#player-play-btn, #nav-audio-toggle, #hero-audio-start')) return;
      audio.play().then(() => {
        update();
        document.removeEventListener('click', startAfterInteraction);
      }).catch(update);
    };
    document.addEventListener('click', startAfterInteraction);
  });
  update();
})();
