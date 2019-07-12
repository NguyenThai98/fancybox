$(function() {
	// xu li thay doi mau tt1khoi
	$('._1khoi .ndkhoi').slideUp();
	$('._td1khoi').click(function(event) {
		/* Act on the event */
		$('._td1khoi').removeClass('doimau')
		$(this).toggleClass('doimau');
		$(this).next().slideToggle(900, "easeInOutExpo");
		$('html,body').animate({scrollTop: $(this).offset().top},900, "easeInOutExpo")
	});
	// code cho fancybox
	$("a[rel=mot]").fancybox();
	$("a[rel=hai]").fancybox();
});
