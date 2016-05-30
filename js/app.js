//Victoria Wellington
//App to establish the Pliedes Map using Google Maps API

"use strict";
	
// Victoria Wellington
//app to get pictures of seattle city traffic locations and georeference them with google maps

"use strict";


$(document).ready(function(){
	 var mapOptions = {
	          center: { lat: 47.6, lng: -122.3},
	          zoom: 12
	 };
	var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
	var info = new google.maps.InfoWindow();
	var infoWindow = new google.maps.InfoWindow();
}) ;