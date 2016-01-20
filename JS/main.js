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

	$(window).bind('scroll', function () {
		var $menu = $('.menu_sticky');

		if (document.body.scrollTop > menu_sticky_top) {
			$menu.addClass('sticky');
		} else {
			$menu.removeClass('sticky');
		}
	});
});

