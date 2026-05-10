(function () {
  const desktopActiveClasses = ['text-secondary', 'border-b-2', 'border-secondary', 'pb-1'];
  const desktopInactiveClasses = ['text-on-surface-variant', 'hover:text-primary', 'transition-colors', 'duration-200'];
  const mobileActiveClasses = ['text-secondary', 'border-l-2', 'border-secondary'];
  const mobileInactiveClasses = ['text-on-surface-variant', 'hover:text-primary', 'transition-colors', 'duration-200'];

  function currentFilename() {
    const filename = window.location.pathname.split('/').pop();
    return filename === '' ? 'index.html' : filename;
  }

  function linkFilename(link) {
    const href = link.getAttribute('href') || '';
    const cleanHref = href.split('#')[0].split('?')[0];
    const filename = cleanHref.split('/').pop();
    return filename === '' ? 'index.html' : filename;
  }

  function markActiveLinks() {
    const filename = currentFilename();
    document.querySelectorAll('[data-nav-label]').forEach((item) => {
      const isActive = linkFilename(item) === filename;
      const isMobile = Boolean(item.closest('#mobile-menu'));
      const activeClasses = isMobile ? mobileActiveClasses : desktopActiveClasses;
      const inactiveClasses = isMobile ? mobileInactiveClasses : desktopInactiveClasses;
      item.classList.remove(...activeClasses, ...inactiveClasses);
      item.classList.add(...(isActive ? activeClasses : inactiveClasses));
      if (isActive) {
        item.setAttribute('aria-current', 'page');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  function initMobileMenu() {
    const menuButton = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      menuButton.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    markActiveLinks();
    initMobileMenu();
  });
})();
