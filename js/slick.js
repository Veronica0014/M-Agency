$(document).ready(function () {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,

		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
		],
		infinite: false,
		autoplay: false,
	})

	$('.prev-btn').click(function () {
		$('.slider').slick('slickPrev')
	})

	$('.next-btn').click(function () {
		$('.slider').slick('slickNext')
	})
	$('.prev-btn').addClass('slick-disabled')
	$('.slider').on('afterChange', function () {
		if ($('.slick-prev').hasClass('slick-disabled')) {
			$('.prev-btn').addClass('slick-disabled')
		} else {
			$('.prev-btn').removeClass('slick-disabled')
		}
		if ($('.slick-next').hasClass('slick-disabled')) {
			$('.next-btn').addClass('slick-disabled')
		} else {
			$('.next-btn').removeClass('slick-disabled')
		}
	})
})
