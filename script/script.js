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