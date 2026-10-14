/**
 * My Love — Relationship Time Counters
 * Handles real-time elapsed time calculation and anniversary/event countdown.
 */

(function () {
  const startDate = new Date(LOVE_CONFIG.couple.relationshipStartDate);
  const countdownDurationMs = 1260592 * 60 * 1000;
  const countdownStorageKey = 'praveen_dhanu_countdown_target';
  let countdownTarget = Date.now() + countdownDurationMs;
  try {
    const savedTarget = Number(localStorage.getItem(countdownStorageKey));
    if (Number.isFinite(savedTarget) && savedTarget > 0) {
      countdownTarget = savedTarget;
    } else {
      localStorage.setItem(countdownStorageKey, String(countdownTarget));
    }
  } catch (error) {
    // Keep the timer working for browsers that block local storage.
  }

  function updateElapsedCounter() {
    const current = new Date();
    let diff = current - startDate;

    if (diff < 0) diff = 0;

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    let years = current.getFullYear() - startDate.getFullYear();
    let months = current.getMonth() - startDate.getMonth();
    let days = current.getDate() - startDate.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(current.getFullYear(), current.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const hours = current.getHours() - startDate.getHours() < 0 
      ? 24 + (current.getHours() - startDate.getHours()) 
      : current.getHours() - startDate.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();

    const elYears = document.getElementById('count-years');
    const elMonths = document.getElementById('count-months');
    const elDays = document.getElementById('count-days');
    const elHours = document.getElementById('count-hours');
    const elMins = document.getElementById('count-mins');
    const elSecs = document.getElementById('count-secs');

    if (elYears) elYears.textContent = String(years);
    if (elMonths) elMonths.textContent = String(months);
    if (elDays) elDays.textContent = String(days);
    if (elHours) elHours.textContent = String(hours).padStart(2, '0');
    if (elMins) elMins.textContent = String(minutes).padStart(2, '0');
    if (elSecs) elSecs.textContent = String(seconds).padStart(2, '0');

    // Milestone stats
    const elTotalDays = document.getElementById('stat-total-days');
    if (elTotalDays) elTotalDays.textContent = totalDays.toLocaleString() + '+';

    const elTotalHours = document.getElementById('stat-total-hours');
    if (elTotalHours) elTotalHours.textContent = totalHours.toLocaleString();
  }

  function updateAnniversaryCountdown() {
    const remainingMs = Math.max(0, countdownTarget - Date.now());
    const totalSeconds = Math.floor(remainingMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Update Special Day section
    const elDays = document.getElementById('anni-days');
    const elHours = document.getElementById('anni-hours');
    const elMins = document.getElementById('anni-mins');
    const elSecs = document.getElementById('anni-secs');

    if (elDays) elDays.textContent = String(days);
    if (elHours) elHours.textContent = String(hours).padStart(2, '0');
    if (elMins) elMins.textContent = String(minutes).padStart(2, '0');
    if (elSecs) elSecs.textContent = String(seconds).padStart(2, '0');

  }

  function initCounters() {
    updateElapsedCounter();
    updateAnniversaryCountdown();
    setInterval(updateElapsedCounter, 1000);
    setInterval(updateAnniversaryCountdown, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }
})();
