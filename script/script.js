// carasouls

 // ---- Product carousel (scroll-snap + arrows + dots) ----
  var root = document.querySelector('[data-carousel]');
  if (root) {
    var track = root.querySelector('.carousel__track');
    var prev = root.querySelector('[data-prev]');
    var next = root.querySelector('[data-next]');
    var controls = root.querySelector('.carousel-controls');
    var dotsWrap = root.querySelector('.carousel__dots');
    var cards = track.children;
    var pages = 1;

    function step() {
      var card = cards[0];
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    }
    function perView() { return Math.max(1, Math.round(track.clientWidth / step())); }

    function build() {
      var overflow = track.scrollWidth - track.clientWidth > 4;
      pages = Math.max(1, Math.ceil(cards.length / perView()));
      if (controls) controls.hidden = !overflow;
      dotsWrap.hidden = !overflow;
      dotsWrap.innerHTML = '';
      if (!overflow) return;
      for (var i = 0; i < pages; i++) {
        (function (i) {
          var b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('aria-label', 'Go to page ' + (i + 1));
          b.addEventListener('click', function () {
            track.scrollTo({ left: Math.min(i * perView() * step(), track.scrollWidth), behavior: 'smooth' });
          });
          dotsWrap.appendChild(b);
        })(i);
      }
      update();
    }

    function update() {
      var max = track.scrollWidth - track.clientWidth;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max - 2;
      var page = Math.round(track.scrollLeft / (perView() * step()));
      if (track.scrollLeft >= max - 2) page = pages - 1;
      Array.prototype.forEach.call(dotsWrap.children, function (d, i) {
        if (i === page) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current');
      });
    }

    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step() * perView(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step() * perView(), behavior: 'smooth' }); });
    track.addEventListener('scroll', function () { window.requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('resize', build);
    build();
  }


  // Number Animations
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const id = entry.target.id;

            if (id === "years") {
                new countUp.CountUp(id, 10).start();
            }

            if (id === "makers") {
                new countUp.CountUp(id, 40).start();
            }

            if (id === "stores") {
                new countUp.CountUp(id, 1).start();
            }

            observer.unobserve(entry.target);
        }

    });

});

counters.forEach(counter => {
    observer.observe(counter);
});

// ---- Newsletter ----
  document.querySelectorAll('.newsletter').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var msg = form.querySelector('.newsletter__msg');
      if (!input.checkValidity() || !input.value.trim()) {
        msg.textContent = 'Please enter a valid email address.';
        input.focus();
        return;
      }
      msg.textContent = 'Thank you — you’re on the list.';
      form.reset();
    });
  });

  /* progressive enhancement + scroll reveals + header state */
(function () {
  document.documentElement.classList.add('js');

  // Fade-up reveals. Anything already in view on load shows immediately.
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Header hairline once the page has scrolled
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();