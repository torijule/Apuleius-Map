//Victoria Wellington
//App to establish the Pliedes Map using Google Maps API

"use strict";

var zoom, coord;

$(document).ready(function(){
	//var rome = new google.maps.LatLng(41.8922,12.4852);
	//coord = rome;
	var options = { 
	  zoom: 7,
	  center: new google.maps.LatLng(41.8922,12.4852)
		/*//disableDefaultUI: true,
		zoomControl: true,
		center: {lat: -33, lng: 151},
		//mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 7,
		//zoomControlOptions: {
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
	
	
	//setCenter(167717);
	map.mapTypes.set('imperium', ancientMap);
	map.setMapTypeId('imperium');
	//new google.maps.LatLng(41.923, 12.513)
	//map.setCenter(new google.maps.LatLng(42,12));
	//map.overlayMapTypes.push(imageMapType);
	map.panTo(new google.maps.LatLng(41.8922,12.4852))



	var info = new google.maps.InfoWindow();
	var infoWindow = new google.maps.InfoWindow();
	
}) ;