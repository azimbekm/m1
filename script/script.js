$(document).ready(function(){
    $('.carousel_inner').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToScroll: 1,
            speed: 1500,
            prevArrow: '<button type="button" class="slick-prev"> < </button>',
            nextArrow: '<button type="button" class="slick-next"> > </button>'
})
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function(){
                $(this)
                    .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                    .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
                    .eq($(this).index()).addClass('catalog__content_active')
        })
)





