/* UBICA – aparición suave al bajar. Sin motor de scroll. */
(function () {
  "use strict";
  var els = document.querySelectorAll("[data-reveal]");
  var i;

  if (!("IntersectionObserver" in window)) {
    for (i = 0; i < els.length; i++) { els[i].classList.add("in"); }
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  for (i = 0; i < els.length; i++) { io.observe(els[i]); }
})();
