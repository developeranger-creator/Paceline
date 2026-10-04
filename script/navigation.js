/* PACELINE — navigation.js: mobile drawer */
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.getElementById('mobile-nav');
  if (!toggle || !drawer) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    drawer.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    // Keep closed-drawer links out of the tab order
    if (open) { drawer.removeAttribute('inert'); } else { drawer.setAttribute('inert', ''); }
  }

  setOpen(false);

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
    if (open) {
      var first = drawer.querySelector('a');
      if (first) first.focus({ preventScroll: true });
    }
  });

  drawer.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  // If the viewport grows past the mobile breakpoint, reset
  window.matchMedia('(min-width: 961px)').addEventListener('change', function (mq) {
    if (mq.matches) setOpen(false);
  });
})();
