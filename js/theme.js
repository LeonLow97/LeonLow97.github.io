(function () {
  const storageKey = 'site-theme';
  const root = document.documentElement;
  const mediaQuery =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-color-scheme: dark)')
      : null;

  function readStoredTheme() {
    try {
      const stored = window.localStorage.getItem(storageKey);
      return stored === 'dark' || stored === 'light' ? stored : null;
    } catch {
      return null;
    }
  }

  function getPreferredTheme() {
    const storedTheme = readStoredTheme();
    if (storedTheme) return storedTheme;
    return 'dark';
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  }

  function updateToggleButtons() {
    const activeTheme = root.dataset.theme === 'dark' ? 'dark' : 'light';
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.setAttribute('aria-pressed', String(activeTheme === 'dark'));
      button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    });
  }

  function persistTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      // Ignore storage failures and keep the in-memory theme.
    }
  }

  function handleSystemChange(event) {
    if (readStoredTheme()) return;
    applyTheme(event.matches ? 'dark' : 'light');
    updateToggleButtons();
  }

  applyTheme(getPreferredTheme());

  if (mediaQuery) {
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handleSystemChange);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateToggleButtons();

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        persistTheme(nextTheme);
        applyTheme(nextTheme);
        updateToggleButtons();
      });
    });
  });
})();
