function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
	var menu_sticky_top = $('.menu_sticky').position().top;

	var stickMenuHandler = function() {
		if (document.body.scrollTop > menu_sticky_top) {
			$('.menu_sticky').addClass('sticky');
		} else {
			$('.menu_sticky').removeClass('sticky');
		}
	}

	$(window).bind('scroll', function () {
		stickMenuHandler();
	});

	stickMenuHandler();

	$('.nav li > a').on('click', function(e) {
		e.preventDefault();
		var id = $(this).attr('href');

		$('html, body').animate({
			scrollTop: (id == "#home" ? 0 : $(id).offset().top - menu_sticky_top * 0.8)
		}, 700);
	});
});

