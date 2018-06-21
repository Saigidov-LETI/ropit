$(document).ready(function(){

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });

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
});