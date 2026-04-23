/**
* Madhan Kumar R — Portfolio JS
*/
(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) selectEl.forEach(e => e.addEventListener(type, listener));
      else selectEl.addEventListener(type, listener);
    }
  };

  const scrollto = (el) => {
    let element = select(el);
    if (element) {
      let header = select('#header');
      let headerOffset = header ? header.offsetHeight : 0;
      window.scrollTo({ top: element.offsetTop - headerOffset, behavior: 'smooth' });
    }
  };

  /**
   * Mobile nav — drawer open/close
   */
  const navbar   = select('#navbar');
  const backdrop = select('#nav-backdrop');
  const toggle   = select('.mobile-nav-toggle');

  function openDrawer() {
    navbar.classList.add('navbar-mobile');
    backdrop.classList.add('show');
    document.body.style.overflow = 'hidden';
    if (toggle) { toggle.classList.remove('bi-list'); toggle.classList.add('bi-x'); }
  }

  function closeDrawer() {
    navbar.classList.remove('navbar-mobile');
    backdrop.classList.remove('show');
    document.body.style.overflow = '';
    if (toggle) { toggle.classList.remove('bi-x'); toggle.classList.add('bi-list'); }
  }

  if (toggle) toggle.addEventListener('click', () => {
    navbar.classList.contains('navbar-mobile') ? closeDrawer() : openDrawer();
  });

  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  const closeBtn = select('.drawer-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  /**
   * Nav link clicks — show sections
   */
  on('click', '.nav-link', function (e) {
    let section = select(this.hash);
    if (section) {
      e.preventDefault();

      let header   = select('#header');
      let sections = select('section', true);
      let navlinks = select('.nav-link', true);

      navlinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');

      if (navbar.classList.contains('navbar-mobile')) {
        closeDrawer();
      }

      if (this.hash === '#header') {
        header.classList.remove('header-top');
        sections.forEach(item => item.classList.remove('section-show'));
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top');
        setTimeout(() => {
          sections.forEach(item => item.classList.remove('section-show'));
          section.classList.add('section-show');
        }, 350);
      } else {
        sections.forEach(item => item.classList.remove('section-show'));
        section.classList.add('section-show');
      }

      scrollto(this.hash);
    }
  }, true);

  /**
   * Scroll progress bar
   */
  const progressBar = select('#scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  /**
   * Copy email to clipboard
   */
  const emailCard = select('#email-card');
  if (emailCard) {
    const hint = emailCard.querySelector('.cc-copy-hint');

    const doCopy = () => {
      navigator.clipboard.writeText('madhan4r@gmail.com').then(() => {
        if (hint) {
          hint.textContent = 'Copied ✓';
          hint.classList.add('copied');
          setTimeout(() => {
            hint.textContent = 'Click to copy';
            hint.classList.remove('copied');
          }, 2200);
        }
      }).catch(() => {
        window.location.href = 'mailto:madhan4r@gmail.com';
      });
    };

    emailCard.addEventListener('click', doCopy);
    emailCard.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); doCopy(); }
    });
  }

  /**
   * Activate section on page load if hash is present
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash);
      if (initial_nav) {
        let header   = select('#header');
        let navlinks = select('.nav-link', true);

        header.classList.add('header-top');
        navlinks.forEach(item => {
          if (item.getAttribute('href') === window.location.hash) item.classList.add('active');
          else item.classList.remove('active');
        });

        setTimeout(() => initial_nav.classList.add('section-show'), 350);
        scrollto(window.location.hash);
      }
    }
  });

})();
