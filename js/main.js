$(function() {

    $('.slider__list').slick({
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 1449,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 795,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
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