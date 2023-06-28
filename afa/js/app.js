"use strict"

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


// Animated counters
window.addEventListener("load", windowLoad);

function windowLoad() {
  // init
  function digitsCounterInit(digitsCounterItems) {
    let digitsCounters = digitsCounterItems ? digitsCounterItems : document.querySelectorAll("[data-digits-counter]");
    if (digitsCounters) {
      digitsCounters.forEach(digitsCounter => {
        digitsCountersAmimate(digitsCounter);
      });
    }
  }

  function digitsCountersAmimate(digitsCounter) {
    let startTimestamp = null;
    const duration = parseFloat(digitsCounter.dataset.digitsCounter) ? parseFloat(digitsCounter.dataset.digitsCounter) : 2000;
    const startValue = parseFloat(digitsCounter.innerHTML);
    const startPosition = 0;
    const step = (timeStamp) => {
      if (!startTimestamp) startTimestamp = timeStamp;
      const progress = Math.min((timeStamp - startTimestamp) / duration, 1);
      digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  // Start on page update
  // digitsCounterInit();

  let options = {
    threshold: 0.3
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCounterItems = targetElement.querySelectorAll("[data-digits-counter]");
        if (digitsCounterItems.length) {
          digitsCounterInit(digitsCounterItems);
        }
        // Stop observe after one run
        observer.unobserve(targetElement);
      }
    });
  }, options);

  let sections = document.querySelectorAll('section');
  if (sections.length) {
    sections.forEach(section => {
      observer.observe(section);
    });
  }
}

// Circle progress animation
const circleSection = document.querySelector('.progress-round-anim');
const circles = document.querySelectorAll('.circle');
const progressCircles = document.querySelectorAll('.progress');
const progressText = document.querySelectorAll('.progress-round-anim h2');

let bol = false;

window.addEventListener("scroll", function () {
  if (pageYOffset > circleSection.offsetTop - 600 && bol === false) {
    for (let i = 0; i < circles.length; i++) {
      let radius = progressCircles[i].r.baseVal.value;
      let circumference = radius * 2 * Math.PI;
      progressCircles[i].style.strokeDasharray = circumference;

      function setProgress(percent) {
        progressCircles[i].style.strokeDashoffset =
          circumference - (percent / 100) * circumference;
      }

      const progress = circles[i].dataset.progress;
      setProgress(progress);

      bol = true;
    }
  }
});

