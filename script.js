/* ============================================================
   Blade & Co — interactive layer
   - Theme switcher (classic / light / neon), persisted in localStorage
   - Booking form: demo submit feedback
   - Reveal-on-scroll for sections (IntersectionObserver)
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Theme switcher ---------- */

  const THEME_KEY = "blade-co-theme";
  const VALID_THEMES = ["classic", "light", "neon"];
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll("[data-theme-btn]");

  function applyTheme(theme) {
    if (!VALID_THEMES.includes(theme)) theme = "classic";
    root.setAttribute("data-theme", theme);

    themeButtons.forEach((btn) => {
      const isActive = btn.dataset.themeBtn === theme;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {
      /* storage disabled — fine, theme just won't persist */
    }
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (_) {}
    applyTheme(saved || root.getAttribute("data-theme") || "classic");
  }

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn));
  });

  initTheme();

  /* ---------- Booking form ---------- */

  const bookingForm = document.querySelector("#booking-form");
  const formNote = document.querySelector("#form-note");

  if (bookingForm && formNote) {
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(bookingForm);
      const name = (formData.get("name") || "Готово").toString().trim() || "Готово";
      bookingForm.classList.add("is-sent");
      formNote.textContent =
        `${name}, заявка подготовлена. Администратор свяжется с вами для подтверждения.`;
    });
  }

  /* ---------- Reveal on scroll ---------- */

  const revealTargets = document.querySelectorAll(
    ".section, .split-section, .booking-section, .location-section, .intro-band"
  );

  if ("IntersectionObserver" in window && revealTargets.length) {
    revealTargets.forEach((el) => el.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    revealTargets.forEach((el) => io.observe(el));
  }
})();
