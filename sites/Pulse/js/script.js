$(document).ready(function(){
    $('.carusel__iner').slick({
        speed: 1000,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    
    
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Модальные окна
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('0.5s');      
    });
    $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn('0.5s');      
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        });
    });

    function valideForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста, введите имя",
                phone: "Пoжалуйста, введите номер телефона",
                email: {
                  required: "Email адрес нужем нам для связи с вами",
                  email: "Неверно введен почтовый адрес"
                }
              }
        });
    }

    valideForm('#consultation-form');
    valideForm('#consultation form');
    valideForm('#order form');

    $("input[name=phone]").mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
          $('form').trigger('reset');
        });
        return false;
      });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.page-up').fadeIn();
        } else {
        $('.page-up').fadeOut();
        }
    });

    $("a[href^='#up']").click( function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
    new WOW().init();
});