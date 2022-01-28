$('ul.benefits__list').on('click', 'li:not(.benefits__list-item_active)', function () {
    $(this)
        .addClass('benefits__list-item_active').siblings().removeClass('benefits__list-item_active')
        .closest('div.benefits__tabs').find('div.benefits__content').removeClass('benefits__content_active').eq($(this).index()).addClass('benefits__content_active');
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".meet__arrow_next",
        prevEl: ".meet__arrow_prev",
    },
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    center:true,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    dotsContainer: '.owl-dots'
});

    $('.students__arrow_next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.students__arrow_prev').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});

