$(function() {

    $('.slider__list').slick({

        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow/arrow-right.png" alt=""></button>',
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        responsive: [{
                breakpoint: 801,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 5000
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    $('.tabs-wrapper').each(function() {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function() {
            ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn(700, "linear")
        }).eq(0).addClass('active');
    });

    $(function() {

        $(".header__burger").click(function() {
            $('.rightside-menu').toggleClass('menu-up');
        });
    });
    $(function() {

        $(".header__burger-menu").click(function() {
            $('.rightside-menu').toggleClass('menu-up');
        });
    });

})