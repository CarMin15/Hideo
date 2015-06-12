


$(document).ready(function() {
	var menu_sticky_top = $('.menu_sticky').position().top;

	$(window).bind('scroll', function () {
		var $menu = $('.menu_sticky');

		if (document.body.scrollTop > menu_sticky_top) {
			$menu.addClass('sticky');
			$menu.next().css('margin-top', $('.menu_sticky').height());
		} else {
			$menu.removeClass('sticky');
			$menu.next().css('margin-top', 0);
		}
	});
});

