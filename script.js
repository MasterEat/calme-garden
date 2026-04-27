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
    return 'el';
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

    document.querySelectorAll('[data-el][data-en]').forEach((el) => {
      const value = el.getAttribute(lang === 'el' ? 'data-el' : 'data-en');
      if (value != null) {
        if (el.getAttribute('data-i18n-html') === 'true') {
          el.innerHTML = value;
        } else {
          el.textContent = value;
        }
      }
    });

    document.querySelectorAll('[data-el-placeholder][data-en-placeholder]').forEach((el) => {
      const value = el.getAttribute(lang === 'el' ? 'data-el-placeholder' : 'data-en-placeholder');
      if (value != null) el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-el-aria-label][data-en-aria-label]').forEach((el) => {
      const value = el.getAttribute(lang === 'el' ? 'data-el-aria-label' : 'data-en-aria-label');
      if (value != null) el.setAttribute('aria-label', value);
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

  function ensureLogo(brand) {
    if (!brand) return;
    const fallbackText = (brand.textContent || 'Calme Garden').trim() || 'Calme Garden';
    brand.innerHTML = '';
    const link = document.createElement('a');
    link.href = 'index.html';
    link.className = 'flex items-center gap-3';

    const img = document.createElement('img');
    img.src = 'assets/images/logo.webp';
    img.alt = 'Calme Garden';
    img.className = 'h-10 w-auto';
    img.onerror = () => {
      img.remove();
      const txt = document.createElement('span');
      txt.className = 'text-2xl font-semibold tracking-tighter text-[#2D4F1E]';
      txt.textContent = fallbackText;
      link.appendChild(txt);
    };

    const text = document.createElement('span');
    text.className = 'text-2xl font-semibold tracking-tighter text-[#2D4F1E]';
    text.textContent = fallbackText;

    link.append(img, text);
    brand.appendChild(link);
  }

  function setupHeader() {
    const header = document.querySelector('header, body > nav.fixed');
    if (!header) return;

    const row = header.querySelector(':scope > .flex.justify-between.items-center')
      || header.querySelector(':scope > nav.flex.justify-between.items-center')
      || header.querySelector('.flex.justify-between.items-center')
      || header.querySelector('nav.flex.justify-between.items-center');
    if (!row) return;

    const rowChildren = Array.from(row.children);
    const brand = rowChildren[0];
    ensureLogo(brand);

    let desktop = row.querySelector('.cg-desktop-nav') || row.querySelector('nav.hidden.md\\:flex') || row.querySelector('div.hidden.md\\:flex');
    if (!desktop) {
      desktop = document.createElement('nav');
      desktop.className = 'hidden md:flex items-center gap-8';
      row.insertBefore(desktop, rowChildren[1] || null);
    }
    desktop.className = (desktop.className || '').replace(/\bcg-desktop-nav\b/g, '').trim() + ' cg-desktop-nav hidden md:flex items-center gap-8';
    buildDesktopNav(desktop);

    row.querySelectorAll('button, .cg-lang-switcher').forEach((el) => {
      if (el.closest('.cg-header-actions') || el.closest('.cg-mobile-menu')) return;
      if (el.matches('button') && (el.textContent || '').includes('EL | EN')) el.remove();
      if (el.classList.contains('cg-lang-switcher')) el.remove();
    });

    let actionWrap = row.querySelector('.cg-header-actions');
    if (!actionWrap) {
      actionWrap = document.createElement('div');
      actionWrap.className = 'cg-header-actions flex items-center gap-4';
      row.appendChild(actionWrap);
    }

    let langWrap = actionWrap.querySelector('.cg-lang-switcher');
    if (!langWrap) {
      langWrap = document.createElement('div');
      langWrap.className = 'cg-lang-switcher text-sm font-medium px-2 py-1 rounded-full';
      actionWrap.prepend(langWrap);
    }
    buildLangSwitcher(langWrap);

    let menuBtn = actionWrap.querySelector('[data-mobile-menu-toggle]') || row.querySelector('button.md\\:hidden');
    if (!menuBtn) {
      menuBtn = document.createElement('button');
      menuBtn.type = 'button';
      menuBtn.className = 'md:hidden material-symbols-outlined text-[#2D4F1E]';
      menuBtn.textContent = 'menu';
      actionWrap.appendChild(menuBtn);
    } else if (!actionWrap.contains(menuBtn)) {
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
      Home: 'index.html', About: 'about.html', 'About Us': 'about.html', 'Σχετικά': 'about.html',
      Activities: 'activities.html', 'Δραστηριότητες': 'activities.html',
      Events: 'events.html', 'Events & Retreats': 'events.html', 'Εκδηλώσεις & Retreats': 'events.html',
      'Educational Programs': 'programs.html', Educational: 'programs.html', Education: 'programs.html', 'Εκπαιδευτικά Προγράμματα': 'programs.html',
      Products: 'products.html', 'Προϊόντα': 'products.html',
      Contact: 'contact.html', 'Contact Us': 'contact.html', 'Επικοινωνία': 'contact.html', 'Αρχική': 'index.html'
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
