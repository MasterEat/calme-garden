(function () {
  const NAV_ITEMS = [
    { key: 'home', en: 'Home', el: 'Αρχική', href: 'index.html' },
    { key: 'about', en: 'About', el: 'Σχετικά', href: 'about.html' },
    { key: 'activities', en: 'Activities', el: 'Δραστηριότητες', href: 'activities.html' },
    { key: 'events', en: 'Events & Retreats', el: 'Εκδηλώσεις & Retreats', href: 'events.html' },
    { key: 'programs', en: 'Educational Programs', el: 'Εκπαιδευτικά Προγράμματα', href: 'programs.html' },
    { key: 'products', en: 'Products', el: 'Προϊόντα', href: 'products.html' },
    { key: 'contact', en: 'Contact', el: 'Επικοινωνία', href: 'contact.html' }
  ];

  const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  function getLang() {
    const stored = localStorage.getItem('cg-lang');
    if (stored === 'el' || stored === 'en') return stored;
    return document.documentElement.lang?.toLowerCase().startsWith('el') ? 'el' : 'en';
  }

  function setLang(lang) {
    localStorage.setItem('cg-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      const active = btn.getAttribute('data-lang-toggle') === lang;
      btn.classList.toggle('font-bold', active);
      btn.classList.toggle('opacity-100', active);
      btn.classList.toggle('opacity-60', !active);
      btn.setAttribute('aria-pressed', String(active));
    });

    document.querySelectorAll('[data-i18n-key]').forEach((el) => {
      const item = NAV_ITEMS.find((n) => n.key === el.getAttribute('data-i18n-key'));
      if (item) el.textContent = item[lang];
    });

    document.querySelectorAll('[data-lang]').forEach((el) => {
      el.style.display = el.getAttribute('data-lang') === lang ? '' : 'none';
    });
  }

  function buildDesktopNav(container) {
    const lang = getLang();
    container.innerHTML = '';
    NAV_ITEMS.forEach((item) => {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item[lang];
      a.setAttribute('data-i18n-key', item.key);
      a.className = item.href === currentPage
        ? 'text-[#2D4F1E] font-bold border-b-2 border-[#2D4F1E] pb-1'
        : 'text-[#2D4F1E]/70 hover:text-[#2D4F1E] transition-colors';
      if (item.href === currentPage) a.setAttribute('aria-current', 'page');
      container.appendChild(a);
    });
  }

  function buildLangSwitcher(wrapper) {
    wrapper.innerHTML = '';
    wrapper.classList.add('text-[#2D4F1E]');

    const mk = (lang) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'px-1';
      b.textContent = lang.toUpperCase();
      b.setAttribute('data-lang-toggle', lang);
      return b;
    };

    wrapper.append(mk('el'), Object.assign(document.createElement('span'), { textContent: ' | ' }), mk('en'));
    wrapper.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-lang-toggle]');
      if (btn) setLang(btn.getAttribute('data-lang-toggle'));
    });
  }

  function setupHeader() {
    const header = document.querySelector('header, body > nav.fixed');
    if (!header) return;
    const row = header.querySelector('.flex.justify-between.items-center') || header.querySelector('nav.flex.justify-between.items-center');
    if (!row) return;

    let desktop = row.querySelector('.cg-desktop-nav')
      || row.querySelector('nav.hidden.md\\:flex')
      || row.querySelector('div.hidden.md\\:flex');
    if (!desktop) {
      desktop = document.createElement('nav');
      desktop.className = 'hidden md:flex items-center gap-8';
      (row.firstElementChild || row).after(desktop);
    }
    desktop.classList.add('cg-desktop-nav');
    buildDesktopNav(desktop);

    let actionWrap = Array.from(row.children).find((el) => el !== desktop && el.classList?.contains('flex'));
    if (!actionWrap) {
      actionWrap = document.createElement('div');
      actionWrap.className = 'flex items-center gap-4';
      row.appendChild(actionWrap);
    }

    let langWrap = row.querySelector('.cg-lang-switcher');
    if (!langWrap) {
      const oldLang = actionWrap.querySelector('button:not(.md\\:hidden):not([data-mobile-menu-toggle])');
      langWrap = document.createElement('div');
      langWrap.className = (oldLang ? oldLang.className : 'text-sm font-medium') + ' cg-lang-switcher';
      oldLang ? oldLang.replaceWith(langWrap) : actionWrap.prepend(langWrap);
    }
    buildLangSwitcher(langWrap);

    let menuBtn = row.querySelector('[data-mobile-menu-toggle]') || row.querySelector('button.md\\:hidden');
    if (!menuBtn) {
      menuBtn = document.createElement('button');
      menuBtn.type = 'button';
      menuBtn.className = 'md:hidden material-symbols-outlined text-[#2D4F1E]';
      menuBtn.textContent = 'menu';
      actionWrap.appendChild(menuBtn);
    }
    menuBtn.setAttribute('data-mobile-menu-toggle', 'true');

    let mobilePanel = header.querySelector('.cg-mobile-menu');
    if (!mobilePanel) {
      mobilePanel = document.createElement('div');
      mobilePanel.className = 'cg-mobile-menu md:hidden hidden px-8 pb-6 bg-[#FAFAFA]/95 backdrop-blur-md border-t border-[#2D4F1E]/10';

      const list = document.createElement('div');
      list.className = 'flex flex-col gap-3 pt-4';
      NAV_ITEMS.forEach((item) => {
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item[getLang()];
        a.setAttribute('data-i18n-key', item.key);
        a.className = item.href === currentPage ? 'text-[#2D4F1E] font-bold' : 'text-[#2D4F1E]/80';
        list.appendChild(a);
      });

      const mobileLang = document.createElement('div');
      mobileLang.className = 'cg-lang-switcher pt-3 mt-3 border-t border-[#2D4F1E]/10';
      buildLangSwitcher(mobileLang);

      mobilePanel.append(list, mobileLang);
      header.appendChild(mobilePanel);
      list.addEventListener('click', (e) => e.target.closest('a') && mobilePanel.classList.add('hidden'));
    }

    menuBtn.addEventListener('click', () => mobilePanel.classList.toggle('hidden'));
  }

  function patchKnownMenuLinks() {
    const map = {
      Home: 'index.html', About: 'about.html', 'About Us': 'about.html',
      Activities: 'activities.html', Events: 'events.html', 'Events & Retreats': 'events.html',
      'Educational Programs': 'programs.html', Educational: 'programs.html', Education: 'programs.html',
      Products: 'products.html', Contact: 'contact.html', 'Contact Us': 'contact.html'
    };
    document.querySelectorAll('a').forEach((a) => {
      const text = a.textContent.replace(/\s+/g, ' ').trim();
      if (map[text]) a.setAttribute('href', map[text]);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    patchKnownMenuLinks();
    setupHeader();
    setLang(getLang());
  });
})();
