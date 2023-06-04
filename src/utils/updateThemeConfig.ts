export const updateThemeConfig = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', '#141C2F');
  } else {
    document.documentElement.classList.remove('dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', '#f8fafc');
  }
};
