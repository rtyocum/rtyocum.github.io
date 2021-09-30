topButton = document.querySelector('.top-button');
let scrolled = false;
window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        if (!scrolled) {
          topButton.classList.add('show');
          scrolled = true
        }
      }
      else {
        topButton.classList.remove('show');
        scrolled = false;
      }
    });
topButton.addEventListener('click', (e) => {
    $('html, body').animate(
          {
            scrollTop: 0
          },
          800
        );
});

$('.logo, .nav li a, .button a').on('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 80,
          },
          600
        );
      }
    });