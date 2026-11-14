(() => {
  "use strict";

  // موعد الفرح: 5 ديسمبر 2026، الساعة 7 مساءً بتوقيت مصر (UTC+02:00).
  const weddingDate = new Date("2026-12-05T19:00:00+02:00").getTime();

  const fields = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };

  const note = document.getElementById("countdown-note");
  const pad = value => String(value).padStart(2, "0");

  function updateCountdown() {
    const remaining = weddingDate - Date.now();

    if (remaining <= 0) {
      Object.values(fields).forEach(field => {
        if (field) field.textContent = "00";
      });
      if (note) note.textContent = "الليلة بدأت… نتمنى لكم أجمل الأوقات معنا.";
      return;
    }

    const total = Math.floor(remaining / 1000);

    if (fields.days) fields.days.textContent = String(Math.floor(total / 86400));
    if (fields.hours) fields.hours.textContent = pad(Math.floor((total % 86400) / 3600));
    if (fields.minutes) fields.minutes.textContent = pad(Math.floor((total % 3600) / 60));
    if (fields.seconds) fields.seconds.textContent = pad(total % 60);
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
