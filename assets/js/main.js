particlesJS.load('particles-js', 'assets/js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

smartScroll.init({
    speed: 500, // default 500
    addActive: true, // default true
    activeClass: "active", // default active
    offset: 100 // default 100
}, function () {
    console.log("callback");
});

var strings = ["A <span class='header-name'>full-stack web developer</span>", "A <span class='header-name'>software developer</span>"]
var typed = new Typed('#typed', {
    strings: strings,
    typeSpeed: 50,
    // backSpeed: 50,
    loop: true
});

$('.nav_checkbox').on('change', function () {
    if (!$('.nav_nav').hasClass('nav__active')) {
        $('.nav_nav').addClass('nav__active')
        setTimeout(() => {
            $('.nav_list').css({
                'display': 'flex'
            })
            setTimeout(() => {
                $('.nav_nav').css({
                    'opacity': 1
                })
            }, 1);
        }, 400);
    } else {
        $('.nav_nav').removeClass('nav__active')
        setTimeout(() => {
            $('.nav_list').css({
                'display': 'none'
            })
            setTimeout(() => {
                $('.nav_nav').css({
                    'opacity': 0
                })
            }, 1);
        }, 100);
    }
})

$('#about').waypoint(function (direction) {
    if (direction == "down") {
        $('#scrollUp').addClass('scroll_up animated fadeInRight')

    } else {
        $('#scrollUp').removeClass('scroll_up animated fadeInRight')
    }
}, {
    offset: '10px;'
});

// SMOOTH SCROLLTOP BUTTON
$('#scrollUp').on('click', function () {
    $('html,body').animate({
        scrollTop: 0
    }, 1300);
})