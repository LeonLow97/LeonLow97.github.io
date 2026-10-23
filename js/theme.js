(function () {
  const themeStorageKey = 'site-theme';
  const documentRoot = document.documentElement;

  function readStoredTheme() {
    try {
      const stored = window.localStorage.getItem(themeStorageKey);
      return stored === 'dark' || stored === 'light' ? stored : null;
    } catch {
      return null;
    }
  }

  function applyTheme(theme) {
    documentRoot.dataset.theme = theme;
    documentRoot.style.colorScheme = theme;
  }

  function updateToggleButtons() {
    const activeTheme = documentRoot.dataset.theme === 'dark' ? 'dark' : 'light';
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.setAttribute('aria-pressed', String(activeTheme === 'dark'));
      button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    });
  }

  function persistTheme(theme) {
    try {
      window.localStorage.setItem(themeStorageKey, theme);
    } catch {
      // Ignore storage failures and keep the in-memory theme.
    }
  }

  applyTheme(readStoredTheme() ?? 'light');

  document.addEventListener('DOMContentLoaded', () => {
    updateToggleButtons();

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextTheme = documentRoot.dataset.theme === 'dark' ? 'light' : 'dark';
        persistTheme(nextTheme);
        applyTheme(nextTheme);
        updateToggleButtons();
      });
    });
  });
})();
