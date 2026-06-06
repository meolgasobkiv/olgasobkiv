window.addEventListener("scroll", function () {
    const header = document.querySelector(".sticky-header");
    header.classList.toggle("sticky", window.scrollY > 100);
});

var fixedElements = document.querySelectorAll('.fixed-element');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 0) {
    fixedElements.forEach(function(element) {
      element.classList.add('fixed');
    //   document.body.style.paddingTop = element.offsetHeight + 'px';
    });
  } else {
    fixedElements.forEach(function(element) {
      element.classList.remove('fixed');
    //   document.body.style.paddingTop = 0;
    });
  }
});





