$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true
    });

    ymaps.ready(init);
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.977665, 30.422831],
            zoom: 10,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        var placemark = new ymaps.Placemark([59.977665, 30.422831], {});

        myMap.geoObjects.add(placemark);
    }

    function headerAnimate(){
        if($(window).width() > 667) {
            $(window).scroll(function headerFixed(){
                const   header          = $('.header'),
                    headerTop       = $('.header-top'),
                    windowTop       = $(window).scrollTop();

                const   headerBotTop = headerTop.offset().top,
                    wrapper = $('.wrapper').offset().top;

                if(headerBotTop >= wrapper){
                    header.addClass('header-fixed');
                }
                if(headerBotTop <= wrapper){
                    header.removeClass('header-fixed');
                }
            });
        }
    }
    headerAnimate();

    function burger(){
        const   hamburgerBtn = $('.hamburger'),
                hamburgerItem = $('.hamburger-menu__link'),
                hamburgerMenu = $('.hamburger-menu');

        hamburgerBtn.on('click', function(){
            hamburgerBtn.toggleClass('hamburger--active');
            hamburgerMenu.toggleClass('hamburger-menu--active');
            if(hamburgerBtn.hasClass('hamburger--active')){
                $('body').addClass('body-hidden');
            } else {
                $('body').removeClass('body-hidden');
            }
        });

        hamburgerMenu.on('click', function(event){
            var target = event.target;

            for(var i = 0; i < hamburgerItem.length; i++){
                if(target == hamburgerItem[i]){
                    hamburgerBtn.removeClass('hamburger--active');
                    hamburgerMenu.removeClass('hamburger-menu--active');
                    $('body').removeClass('body-hidden');
                }
            }
        });
    }
    burger();

    function acordeonServices(){
        $('.activity-item__title').on('click', function(e){
            const   $this           = $(this),
                item            = $this.closest('.activity-item'),
                list            = $this.closest('.activity-list'),
                items           = list.find('.activity-item'),
                content         = item.find('.activity-item__content'),
                otherContent    = list.find('.activity-item__content');

            if(!item.hasClass('activity-item-active')){
                items.removeClass('activity-item-active');
                item.addClass('activity-item-active');

                otherContent.stop(true,true).slideUp(300);
                content.stop(true,true).slideDown(300);

            } else {
                content.stop(true,true).slideUp(300);
                item.removeClass('activity-item-active');
            }
        });
    }
    acordeonServices();

    function modal(content, btn){
        $(document).on('click', btn, function(){
            event.preventDefault();

        	var template = $(content).html();

        	$('body').append("<div class='modal__overlay'></div>");
            $('body').css("overflow", "hidden");
			$('.modal__overlay').append(template);

			$(document).on('click', '.modal__close', function(){
                event.preventDefault();

				$('.modal__overlay').remove();
				$('.modal').remove();
                $('body').css("overflow", "auto");
			});
        });

        $(document).on('click', '.btn-modal', function(){
            event.preventDefault();

        	$('.modal__form').addClass('modal__access');
            setTimeout(function(){
                $('.modal__overlay').remove();
                $('.modal').remove();
                $('body').css("overflow", "auto");
            }, 1000);
		});
	}

    modal('#modalFormTemplate', '.btn-header');
    modal('#modalAccessTemplate', '.btn__access');


});