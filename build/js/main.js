$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true
		});
		
		// Модальные окна

		function modal(content, btn){
			$(document).on('click', btn, function(){
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

		modal('#modalSignTemplate', '.btn-sign');	

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

		burger();
		
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

		asideShow();


		// Рассчет высоты формы регистрации и переходы
		function formBlockHeight() {
			var 	formBlock = document.querySelectorAll('.form-block'),
						regSection = document.querySelector('.reg-section'),
						btnNext = document.querySelector('.reg-bottom__next'),
						btnBack = document.querySelector('.reg-bottom__back'),
						regItemUser = document.querySelector('.reg-item--user'),
						regItemCompany = document.querySelector('.reg-item--company'),
						maxHeight = 0;
		
			for(var i = 0; i < formBlock.length; i++){
				
				var elemHeight = formBlock[i].offsetHeight;
				if(elemHeight > maxHeight){
					maxHeight = elemHeight + 200;
				}
			}

			regSection.style.height = maxHeight + 'px';
			
			btnNext.addEventListener('click', () => {
				regItemUser.classList.remove('active');
				regItemCompany.classList.add('active');
			});

			btnBack.addEventListener('click', ()=>{
				regItemCompany.classList.remove('active');
				regItemUser.classList.add('active');
			});
			
		}

		formBlockHeight();


});