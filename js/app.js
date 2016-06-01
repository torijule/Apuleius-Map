//Victoria Wellington
//App to establish the Pliedes Map using Google Maps API

"use strict";

var zoom, coord;
var purpleDot = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png";
var greenDot = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
var redDot = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
var blueDot = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

$(document).ready(function(){
	//var rome = new google.maps.LatLng(41.8922,12.4852);
	//coord = rome;
	var options = { 
	  zoom: 7,
	  //center is critical to put map over Rome. Can change, general area, but otherwise Maps defaults to browser
	  //location, for which there are no tiles, and it lags as it tries to find files before loading GMaps. 
	  center: new google.maps.LatLng(41.8922,12.4852)  
		/*//disableDefaultUI: true,
		zoomControl: true,
		center: {lat: -33, lng: 151},
		//mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 7,
		//zoomControlOptions: 
		//	style: google.maps.ZoomControlStyle.SMALL
		//} */
	}
	
	
	var map = new google.maps.Map(document.getElementById("map"), options);

	
	var ancientMap = new google.maps.ImageMapType({
		getTileUrl: function(coord, zoom){
			//return 'http://pelagios.dme.ait.ac.at/tilesets/imperium/{z}/{x}/{y}.png';
			//return 'http://pelagios.dme.ait.ac.at/tilesets/imperium/7/66/45.png';
			return "http://pelagios.dme.ait.ac.at/tilesets/imperium/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
		},
		tileSize: new google.maps.Size(256, 256),
		isPng:true,
		minZoom: 3,
		maxZoom: 11,
		name: "Imperium"
		
		
	});
	
	map.mapTypes.set('imperium', ancientMap);
	map.setMapTypeId('imperium');

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(41.8922,12.4852),
		map: map,
		title: 'Hello World!',
		icon: purpleDot
	});


	var info = new google.maps.InfoWindow();
	var infoWindow = new google.maps.InfoWindow();
	
}) ;