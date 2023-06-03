$(function () {
	
	$('#menuli li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		// $('.navbar-header').addClass("collapsed").aria-expanded("false");
	})

	
})