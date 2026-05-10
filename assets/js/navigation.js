(function () {
  const links = [
    { href: 'index.html', el: 'Αρχική', en: 'Home' },
    { href: 'about.html', el: 'Σχετικά', en: 'About' },
    { href: 'activities.html', el: 'Δραστηριότητες', en: 'Activities' },
    { href: 'events.html', el: 'Εκδηλώσεις', en: 'Events' },
    { href: 'programs.html', el: 'Προγράμματα', en: 'Programs' },
    { href: 'products.html', el: 'Δημιουργίες', en: 'Products' },
    { href: 'contact.html', el: 'Επικοινωνία', en: 'Contact' }
  ];

  const desktopActiveClasses = ['text-secondary', 'border-b-2', 'border-secondary', 'pb-1'];
  const desktopInactiveClasses = ['text-on-surface-variant', 'hover:text-primary', 'transition-colors', 'duration-200'];
  const mobileActiveClasses = ['text-secondary', 'border-l-2', 'border-secondary'];
  const mobileInactiveClasses = ['text-on-surface-variant', 'hover:text-primary', 'transition-colors', 'duration-200'];

  function currentFilename() {
    const filename = window.location.pathname.split('/').pop();
    return filename === '' ? 'index.html' : filename;
  }

  function applyLanguage(language) {
    const lang = language === 'en' ? 'en' : 'el';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-nav-label]').forEach((item) => {
      item.textContent = item.dataset[lang];
    });
    document.querySelectorAll('[data-language-toggle]').forEach((toggle) => {
      toggle.innerHTML = lang === 'el'
        ? '<span class="border-b-2 border-secondary">EL</span> | EN'
        : 'EL | <span class="border-b-2 border-secondary">EN</span>';
      toggle.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
    });
    try {
      window.localStorage.setItem('calmeGardenLanguage', lang);
    } catch (error) {
      // Language preference is optional; navigation still works without localStorage.
    }
  }

  function markActiveLinks() {
    const filename = currentFilename();
    document.querySelectorAll('[data-nav-label]').forEach((item) => {
      const itemHref = item.getAttribute('href');
      const isActive = itemHref === filename || (filename === '' && itemHref === 'index.html');
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
    const savedLanguage = (() => {
      try {
        return window.localStorage.getItem('calmeGardenLanguage');
      } catch (error) {
        return null;
      }
    })();
    applyLanguage(savedLanguage === 'en' ? 'en' : 'el');

    document.querySelectorAll('[data-language-toggle]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const nextLanguage = document.documentElement.lang === 'en' ? 'el' : 'en';
        applyLanguage(nextLanguage);
      });
    });

    initMobileMenu();
  });
})();
