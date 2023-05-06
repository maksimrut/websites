
// Sliders
new Swiper('.press__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 
        
    autoHeight: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    freeMode: true,

    breakpoints: {
        990: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        
        1400: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
});


// Smooth scroll
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      console.log(gotoBlock);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });

      e.preventDefault();
    }
  }
}


// Burger menu
const menuIcon = document.querySelector('.menu__icon');

const menuBody = document.querySelector('.menu__body');

menuIcon.addEventListener("click", function(e) {
  document.body.classList.toggle('lock');
  menuIcon.classList.toggle('active');
  menuBody.classList.toggle('active');
});




