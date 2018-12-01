$(document).ready(function () {
//toggle mobile menu links
	$('#mobile-nav').click(function () {
		$(this).toggleClass('open');
		$(".mobile-links").toggleClass('open');
		$(".mobile-links ul").toggleClass('open');
		$(".main").toggleClass('blur');
	});
	$('.mobile-links a').click(function () {
		if ($(this).attr('class') !== "expand_projects") {
			$('#mobile-nav').toggleClass('open');
			$(".mobile-links").toggleClass('open');
			$(".mobile-links ul").toggleClass('open');
			$(".main").toggleClass('blur');
		}
	});
});
