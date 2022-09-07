$(function() {
	const themeColors = ['#ffffff', '#333333', '#222222', '#aaaaaa', '#666666', '#f5f5f5', '#d5d5d5', '#e5e5e5',
	 		'#353535', '#bbbbbb', '#dddddd', '#282828', '#444444', '#454545', '#252525', '#007ced', '#eeeeee', '#bfbfbf']
	let isDarkMode = JSON.parse(sessionStorage.getItem('darkmode')) !== null ? JSON.parse(sessionStorage.getItem('darkmode')) : true
	let isNavBarActive = false
	let isFormValid = false

	console.log('website theme -> ', isDarkMode ? 'dark' : 'light')

	if($(window).width() < $(window).height()) $('body').css('background-color', 'none')

	toggleDarkMode(isDarkMode ? 'dark' : 'light')
	multiStepFadeInEffect()

	function multiStepFadeInEffect() {
		$('.title1').delay(2000).animate({ display: 'block', opacity: 1 }, 2000, function() {
			$(this).css('display', 'none')
			$('.title2').animate({ display: 'block', opacity: 1 }, 2000, function() {
				$(this).css('display', 'none')
				$('.title3').animate({ display: 'block', opacity: 1 }, 2000, function() {
					$(this).css('display', 'none')
					$(this).siblings('.title1').fadeIn(1000).css('display', 'block')
					$('.title1, .title2, .title3').css('opacity', 0.1)
					multiStepFadeInEffect()
				})
			})
		})
	}

	$(document.body).mousemove(function() {
		// console.log('x-position: ', e.pageX, 'y-position: ', e.pageY)
	})

	$('.nav-items li a').click(function(e) {
		$('.nav-items li:is(.active) a').removeClass('active')
		$(this).closest('li').addClass('active')
	})

	$('#intro').animate({ marginTop: $(window).width() < $(window).height() ? '80px' : '60px', opacity: 1 }, 200)

	$('.hamburger-menu').click(function() {
		if(!isNavBarActive) {
			$('.hamburger-menu span').html('<i class="fa-solid fa-xmark"></i>')
			$('.hamburger-menu span i').css({ color: isDarkMode ? themeColors[0] : themeColors[4] })
			$(this).addClass('rotate')
			$('.navbar').show().animate({ left: 0 }, 500)
			isNavBarActive = true
		} else {
			$('.hamburger-menu span').html('<i class="fa-solid fa-bars"></i>')
			$('.hamburger-menu span i').css({ color: isDarkMode ? themeColors[0] : themeColors[4] })
			$(this).removeClass('rotate').hide().fadeIn(500)
			$('.navbar').animate({ left: '100%' }, 500)
			isNavBarActive = false
		}
	})

	$('.overlay').hover(function() {
		$(this).css('opacity', 0)
		$(this).parent().siblings('.project-image').find('img').css('transform', 'scale(1.1)')
	},
	function() {
		$(this).css('opacity', 0.5)
		$(this).parent().siblings('.project-image').find('img').css('transform', 'scale(1.0)')
	})

	$('#fullname, #email, #subject, #message').on({
		focus: function() {
			$(this).prev().fadeIn(50).animate({ minWidth: '100%' }, 200)
		},
		blur: function() {
			if(!$(this).val() || ($(this).attr('id') === 'email' && !isEmailValid($(this).val()))) {
				$(this).siblings('.form-input-animate').css('borderColor', '#ff2c2c')
			}
			$(this).prev().animate({ minWidth: '20%' }, 200).fadeOut(50)
		},
		input: function() {
			if(!$(this).val() || ($(this).attr('id') === 'email' && !isEmailValid($(this).val()))) {
				$(this).siblings('.form-input-animate').css('borderColor', '#ff2c2c')
			} else {
				$(this).siblings('.form-input-animate').css('borderColor', '#007ced')
			}
		}
	})

	function isEmailValid(email) {
		let count = 0
		if((email.match(/[a-z0-9]/gi) || []).length > 0) count++ 
		if((email.match(/\./g) || []).length === 1) count++
		if((email.match(/@/g) || []).length === 1) count++
		return count === 3
	}

	$('.toggle-dark-mode').click(function() {
		isDarkMode = !isDarkMode
		toggleDarkMode(isDarkMode ? 'dark' : 'light')
	})

	function toggleDarkMode(mode) {
		if(mode === 'light') {
			$('body').css('background-color', themeColors[0])
			$('.toggle-dark-mode').css({ backgroundColor: themeColors[7], border: 'none', border: '1px solid ' + themeColors[0] })
			$('.toggle-dark-mode').find('img').attr('src', './assets/img/brightness.png').css('display', 'block')
			$('.container, .info .action div button, .info .action div a').css('background-color', themeColors[0])
			$('.info .action div button, .info .action div a').css({ boxShadow: '0 2px 4px 4px rgba(0, 0, 0, 0.08)' })
			$('.navbar .nav-items li a, .copyright span').css('color', themeColors[3])
			$('.navbar .nav-items li.active a').css('color', themeColors[1])
			$('h1, h2, .testimonial .client-info .info .name span, .service .info .title h4, .social-media i')
			.css('color', themeColors[1])
			$('.author .name, #download-cv').css('color', themeColors[2])
			$('.profile-image-bg').css({ backgroundColor: themeColors[0], boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.02),' + 
				'-5px -5px 5px 5px rgba(0, 0, 0, 0.02), -5px 5px 5px 5px rgba(0, 0, 0, 0.02), 5px -5px 5px 5px rgba(0, 0, 0, 0.02)' })
			$('.info .description .introduction, #contact-me, .service .info .description span, .testimonial .details .details-info .message')
			.css('color', themeColors[4])
			$('.hamburger-menu span i').css('color', themeColors[4])
			$('#contact-me').css({ border: '2px solid ' + themeColors[6] })
			$('.line-style').css('background-color', themeColors[5])
			$('.testimonial .details').css({ backgroundColor: themeColors[0], borderColor: themeColors[7] })
			$('.testimonial .icon span i').css('color', themeColors[7])
			$('.quote-big').css('opacity', 0.48)
			$('.slick-dots li button:before').css('color', themeColors[7])
			$('.stack i').css('color', themeColors[6])
			$('.stack img').css('opacity', 0.5)
			$('footer').css({ backgroundColor: themeColors[0], borderTop: '2px solid ' + themeColors[16] })
			$('.navbar').css({ backgroundColor: $(window).width() < $(window).height() ? themeColors[0] : 'none' })
			$('#header').css({ boxShadow: $(window).width() < $(window).height() ?
			 '0 1px 5px 1px rgba(0, 0, 0, 0.05)' : 'none', backgroundColor: $(window).width() < $(window).height() ? themeColors[0] : 'none' })
			$('input, textarea').css('border-color', themeColors[17])
			$('.page-title').css({ borderTop: '2px solid ' + themeColors[16], borderBottom: '2px solid ' + themeColors[16] })
			$('.contact-information .info .details h4').css('color', themeColors[1])
			$('#send-message').css({ backgroundColor: themeColors[0], color: themeColors[2], boxShadow: '0 2px 2px 2px rgba(0, 0, 0, 0.1)' })
			$('.project .name, .project .action a').css({ backgroundColor: themeColors[0], color: themeColors[1] })
			$('.overlay').css('background-color', themeColors[0])

			$('.navbar .nav-items li a').hover(function() {
				$(this).css({ color: themeColors[1], transition: '0.5s' })
			},
			function() {
				$(this).css({ color: themeColors[3], transition: '0.5s'})
				$('.navbar .nav-items li.active a').css('color', themeColors[1])
			})

			$('#download-cv').hover(function() {
				$(this).css({ backgroundColor: themeColors[15], transition: '0.5s', color: themeColors[0] })
			},
			function() {
				$(this).css({ backgroundColor: themeColors[0], transition: '0.5s', color: themeColors[2]})
			})

			$('#contact-me').hover(function() {
				$(this).css({ backgroundColor: themeColors[6], transition: '0.5s', color: themeColors[2] })
			},
			function() {
				$(this).css({ backgroundColor: themeColors[0], transition: '0.5s', color: themeColors[4] })
			})
			$('#send-message').hover(function() {
				$(this).css({ color: themeColors[0] })
			})

			sessionStorage.setItem('darkmode', false)
		} else {
			$('body').css('background-color', themeColors[2])
			$('.toggle-dark-mode').css({ backgroundColor: themeColors[1], border: '1px solid ' + themeColors[2] })
			$('.toggle-dark-mode').find('img').attr('src', './assets/img/moon-fill.png').css('display', 'block')
			$('.container, .info .action div button, .info .action div a').css('background-color', themeColors[2])
			$('.info .action div button, .info .action div a').css({ boxShadow: '0 2px 2px 2px rgba(0, 0, 0, 0.25)' })
			$('.navbar .nav-items li a').css('color', themeColors[6])
			$('.copyright span').css('color', themeColors[10])
			$('h1, h2, .navbar .nav-items li.active a, .testimonial .client-info .info .name span, .service .info .title h4, .social-media i')
			.css('color', themeColors[5])
			$('.author .name, #download-cv').css('color', themeColors[0])
			$('.profile-image-bg').css({ backgroundColor: themeColors[8], boxShadow: '5px 5px 5px 10px rgba(0, 0, 0, 0.05),' + 
				' -5px -5px 5px 10px rgba(0, 0, 0, 0.05), -5px 5px 5px 10px rgba(0, 0, 0, 0.05), 5px -5px 5px 10px rgba(0, 0, 0, 0.05)' })
			$('.info .description .introduction, #contact-me, .service .info .description span, .testimonial .details .details-info .message')
			.css('color', themeColors[0])
			$('.hamburger-menu span i').css('color', themeColors[0])
			$('#contact-me').css({ border: '2px solid ' + themeColors[5] })
			$('.line-style').css('background-color', themeColors[8])
			$('.testimonial .details').css({ backgroundColor: themeColors[11], border: '2px solid ' + themeColors[12] })
			$('.testimonial .icon span i').css('color', themeColors[12])
			$('.quote-big').css('opacity', 1)
			$('.slick-dots li button:before').css('color', themeColors[13])
			$('.stack i').css('color', themeColors[12])
			$('.stack img').css('opacity', 1)
			$('footer').css({ backgroundColor: themeColors[14], borderTop: '2px solid ' + themeColors[12] })
			$('.navbar').css({ backgroundColor: $(window).width() < $(window).height() ? themeColors[2] : 'none' })
			$('.page-title').css({ borderTop:'2px solid ' + themeColors[12], borderBottom: '2px solid ' + themeColors[12] })
			$('#header').css({ boxShadow: $(window).width() < $(window).height() ?
			 '0 1px 5px 1px rgba(0, 0, 0, 0.1)' : 'none', backgroundColor: $(window).width() < $(window).height() ? themeColors[2] : 'none' })
			$('.contact-information .info .details h4').css('color', themeColors[5])
			$('#send-message').css({ backgroundColor: themeColors[2], color: themeColors[0], boxShadow: '0 2px 2px 2px rgba(0, 0, 0, 0.25)' })
			$('.project .name, .project .action a').css({ backgroundColor: themeColors[2], color: themeColors[5] })
			$('.overlay').css('background-color', themeColors[2])

			$('.navbar .nav-items li a').hover(function() {
				$(this).css({ color: themeColors[5], transition: '0.5s' })
			},
			function() {
				$(this).css({ color: themeColors[6], transition: '0.5s'})
				$('.navbar .nav-items li.active a').css('color', themeColors[5])
			})

			$('#download-cv').hover(function() {
				$(this).css({ backgroundColor: themeColors[15], transition: '0.5s', color: themeColors[0] })
			},
			function() {
				$(this).css({ backgroundColor: themeColors[1], transition: '0.5s', color: themeColors[0]})
			})

			$('#contact-me').hover(function() {
				$(this).css({ backgroundColor: themeColors[5], transition: '0.5s', color: themeColors[2] })
			},
			function() {
				$(this).css({ backgroundColor: themeColors[1], color: themeColors[0], transition: '0.5s'})
			})
			$('#send-message').hover(function() {
				$(this).css({ color: themeColors[0] })
			})

			sessionStorage.setItem('darkmode', true)
		}
	}

	$('#testimonials .slick').slick({
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})

	$('#tech-stack .slick').slick({
		dots: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	})
})