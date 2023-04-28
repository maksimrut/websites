
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("header");
var menuButton = document.getElementById("menu__button");
var accordionItems = document.getElementsByClassName('devices__info-item');

// Fixed Header
window.addEventListener('scroll', function(event) {
    last_scroll_position = this.window.scrollY;
    
    if (new_scroll_position < last_scroll_position
        && last_scroll_position > 80) {
        header.classList.add('header--scrolled')
        header.classList.remove('header--slideDown');
        header.classList.add('header--slideUp');
    }

    if (new_scroll_position > last_scroll_position) {
        header.classList.remove('header--slideUp');
        header.classList.add('header--slideDown');
    }

    if (last_scroll_position == 0) {
        header.classList.remove('header--scrolled');
    }

    new_scroll_position = last_scroll_position;
});


// Menu nav toggle
menuButton.addEventListener("click", (event) => {
    event.preventDefault();

    document.getElementById("menu-toggle").classList.toggle("active");
    menuButton.classList.toggle("active");
});


// Collapse (Accordion)
for (i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}


// Star rating
const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }
}

function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();
}

function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
}

function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width =`${ratingActiveWidth}%`;
}


// Swipers
new Swiper('.statistics__citation', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        
    spaceBetween:20,
});

new Swiper('.devices__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween: 20,
        
    thumbs: {
        swiper: {
            el: '.devices__slider-small',
            slidesPerView: 6,
            spaceBetween: 10,

        }
    }
});

new Swiper('.reviews__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
        
    spaceBetween:20,
});
    
