

$(window).on('load', function () {
	var $preloader = $('#cube-loader');
	$preloader.delay(1800).fadeOut('slow');
});

var isMobile = window.innerWidth <= 768;



$(document).ready(function() {
	if (!isMobile) {
		$('#fullpage').fullpage({
			//Навигация
			menu: '.navigation',
			lockAnchors: false,
			anchors: ['home', 'concept', 'service_telegram', 'service_asia', 'service_complex', 'portfolio_everitoken', 'portfolio_thejoy', 'portfolio_risex', 'contacts'],
			navigation: false,
			navigationPosition: '',
			navigationTooltips: [],
			showActiveTooltip: false,
			slidesNavigation: false,
			slidesNavPosition: '',

			//Скроллинг
			css3: true,
			scrollingSpeed: 1000,
			autoScrolling: true,
			fitToSection: true,
			fitToSectionDelay: 1000,
			scrollBar: false,
			easing: 'easeInOutCubic',
			easingcss3: 'ease',
			loopBottom: false,
			loopTop: false,
			loopHorizontal: true,
			continuousVertical: false,
			continuousHorizontal: false,
			scrollHorizontally: false,
			interlockedSlides: false,
			dragAndMove: false,
			offsetSections: false,
			resetSliders: false,
			fadingEffect: false,
			normalScrollElements: '#element1, .element2',
			scrollOverflow: false,
			scrollOverflowReset: false,
			scrollOverflowOptions: null,
			touchSensitivity: 15,
			normalScrollElementTouchThreshold: 5,
			bigSectionsDestination: null,

			//Доступ
			keyboardScrolling: true,
			animateAnchor: true,
			recordHistory: true,

			//Дизайн
			controlArrows: false,
			verticalCentered: false,
			sectionsColor : false,
			paddingTop: false,
			paddingBottom: false,
			fixedElements: '',
			responsiveWidth: 0,
			responsiveHeight: 0,
			responsiveSlides: false,
			parallax: false,
			parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

			//Настроить селекторы
			sectionSelector: '.section',
			slideSelector: '.slide',

			lazyLoading: true,
			onLeave: function (index, nextIndex, direction) {
				if (nextIndex !== 3 && nextIndex !== 4 && nextIndex !== 5) {
					$('.menu_services').removeClass('menu_services_active');
					$('.menu .menu__item[data-menuanchor="service_telegram"]').removeClass('active');
				}
				if (nextIndex !== 6 && nextIndex !== 7 && nextIndex !== 8) {
					var activeIndex = index - 6;
					$('.menu_portfolio .menu_services__item:eq(' + activeIndex + ')').removeClass('active');
					$('.menu_portfolio').removeClass('menu_portfolio_active');
					$('.menu .menu__item[data-menuanchor="portfolio_everitoken"]').removeClass('active');
				}
			},
			afterRender: function (index) {
			},
			afterLoad: function (anchorLink, index) {
				if (index === 3 || index === 4 || index === 5) {
					$('.menu_services').addClass('menu_services_active');
					$('.menu .menu__item[data-menuanchor="service_telegram"]').addClass('active');
				}

				if (index === 6 || index === 7 || index === 8) {
					var activeIndex = index - 6;
					$('.menu_portfolio .menu_services__item:eq(' + activeIndex + ')').addClass('active');
					$('.menu_portfolio').addClass('menu_portfolio_active');
					$('.menu .menu__item[data-menuanchor="portfolio_everitoken"]').addClass('active');
				}
			}
		});
		$("form").submit(function () {
			$('form input[type=submit]').attr('disabled', 'disabled');
			// $('#form-loader').show();
			$.ajax({
				type: "POST",
				url: "feedback.php",
				data: $(this).serialize()
			}).done(function (data) {
				console.log(data);
				$('#form-loader').hide();
				$('form').trigger('reset');
				$('form input[type=submit]').removeAttr('disabled');
				// alert("Thank you! Your message has been successfully sent, our managers will contact you as soon as possible");
			});
			return false;
		});
	}
});


$(function() {
	$('#menuToggle').on('click', function() {
		$('.mobile_menu').toggleClass('active');
	});
});

$(function() {
	$('.mob_go').on('click', function() {
		$("input:checkbox").trigger('click');
	});
});

$("body").on('click', '[href*="#"]', function(e){
	var fixed_offset = 0;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1300);
	e.preventDefault();
});



// $(document).ready(function(){

// 	$(window).scroll(function(){
// 			if ($(this).scrollTop() > 100) {
// 					$('.mob_scrollup').fadeIn();
// 			} else {
// 					$('.mob_scrollup').fadeOut();
// 			}
// 	});

// 	$('.mob_scrollup').click(function(){
// 			$("html, body").animate({ scrollTop: 0 }, 600);
// 			return false;
// 	});

// });