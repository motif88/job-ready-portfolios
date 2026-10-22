(() => {
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const disabledButton = event.target.closest('.button[aria-disabled="true"], .btn[aria-disabled="true"]');

    if (disabledButton) {
      event.preventDefault();
    }
  });

  const mobileNavigation = document.querySelector('.mobile-nav');

  if (!mobileNavigation) {
    return;
  }

  const navigationToggle = mobileNavigation.querySelector('.mobile-nav__toggle');
  const navigationMenu = mobileNavigation.querySelector('.mobile-nav__menu');

  if (!(navigationToggle instanceof HTMLButtonElement) || !(navigationMenu instanceof HTMLElement)) {
    return;
  }

  const setNavigationOpen = (isOpen, returnFocus = false) => {
    navigationToggle.setAttribute('aria-expanded', String(isOpen));
    navigationToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    navigationMenu.hidden = !isOpen;

    if (!isOpen && returnFocus) {
      navigationToggle.focus();
    }
  };

  navigationToggle.addEventListener('click', () => {
    setNavigationOpen(navigationToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setNavigationOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigationToggle.getAttribute('aria-expanded') === 'true') {
      setNavigationOpen(false, true);
    }
  });

  document.addEventListener('click', (event) => {
    if (
      navigationToggle.getAttribute('aria-expanded') === 'true'
      && event.target instanceof Node
      && !mobileNavigation.contains(event.target)
    ) {
      setNavigationOpen(false);
    }
  });
})();
