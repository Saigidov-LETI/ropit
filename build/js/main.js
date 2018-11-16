$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true
		});

		// Модальные окна
		if($('.btn-sign').length){
			modal('#modalSignTemplate', '.btn-sign');	
		}

		// Бургер меню
		burger();

		// Показать или скрыть сайдбар
		if($('.personal-area').length){
			asideShow();
		}

		// Форма регистрации, переходы
		if($('.reg-section').length){
			formBlock();
		}
	});

		// Модальные окна
	function modal(content, btn){
		$(document).on('click', btn, function(e){
				e.preventDefault();
				var template = $(content).html();
				console.log(template);
				$('body').append("<div class='modal__overlay'></div>");
				$('body').css("overflow", "hidden");
				$('.modal__overlay').append(template);

				$(document).on('click', '.modal__close', function(){
						//event.preventDefault();

						$('.modal__overlay').remove();
						$('.modal').remove();
						$('body').css("overflow", "auto");
				});
		});
	}

		// Бургер меню
	function burger(){
		const   hamburgerBtn = document.querySelector('.hamburger'),
						hamburgerItem = document.querySelectorAll('.hamburger-menu__link'),
						hamburgerMenu = document.querySelector('.hamburger-menu');


		hamburgerBtn.addEventListener('click', function(){
			hamburgerBtn.classList.toggle('hamburger--active');
			hamburgerMenu.classList.toggle('hamburger-menu--active');
			if(hamburgerBtn.classList.contains('hamburger--active')){
				document.body.classList.add('body-hidden');
			} else {
				document.body.classList.remove('body-hidden');
			}
		});

		hamburgerMenu.addEventListener('click', function(event){
			var target = event.target;

			for(var i = 0; i < hamburgerItem.length; i++){
				if(target == hamburgerItem[i]){
					hamburgerBtn.classList.remove('hamburger--active');
					hamburgerMenu.classList.remove('hamburger-menu--active');
					document.body.classList.remove('body-hidden');
					scroll(hamburgerItem[i]);
				}
			}
		});
	}
		
		// Показать или скрыть сайдбар
	function asideShow(){
		const asideBurgerBtn 	= document.querySelector('.aside-burger__link'),
					aside			 			= document.querySelector('.aside');

		asideBurgerBtn.addEventListener('click', ()=>{
			
			if(aside.classList.contains('aside--active')){
				aside.classList.remove('aside--active');
			} else {
				aside.classList.add('aside--active');
			}
		});
	}

		// Форма регистрации, переходы
	function formBlock() {
		var 	formBlock = document.querySelectorAll('.form-block'),
					regSection = document.querySelector('.reg-section'),
					btnNext = document.querySelector('.reg-bottom__next'),
					btnBack = document.querySelector('.reg-bottom__back'),
					regItemUser = document.querySelector('.reg-item--user'),
					regItemCompany = document.querySelector('.reg-item--company'),
					formBlockUser  = document.querySelector('.form-block--user'),
					formBlockCompany  = document.querySelector('.form-block--company'),
					maxHeight = 0;
		
		btnNext.addEventListener('click', () => {
			regItemUser.classList.remove('active');
			regItemCompany.classList.add('active');
			formBlockUser.classList.remove('active');
			formBlockCompany.classList.add('active');
		});

		btnBack.addEventListener('click', ()=>{
			regItemCompany.classList.remove('active');
			regItemUser.classList.add('active');
			formBlockUser.classList.add('active');
			formBlockCompany.classList.remove('active');
		});
		
	}


