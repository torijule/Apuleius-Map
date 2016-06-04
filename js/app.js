"use strict";

var zoom, coord;
var purpleDot = "http://maps.google.com/mapfiles/ms/icons/purple-dot.png";
var greenDot = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
var redDot = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
var blueDot = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
var lat, lng;

$(document).ready(function(){
	//var rome = new google.maps.LatLng(41.8922,12.4852);
	//coord = rome;
	var options = { 
	  zoom: 6,
	  //center is critical to put map over Rome. Can change, general area, but otherwise Maps defaults to browser
	  //location, for which there are no tiles, and it lags as it tries to find files before loading GMaps. 
	  center: new google.maps.LatLng(37.788,20.8983),
	  disableDefaultUI: true //removes sat/terrain/street view, which is modern and has distracting roads

		/*//disableDefaultUI: true,
		zoomControl: true,
		center: {lat: -33, lng: 151},
		//mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 7,
		//zoomControlOptions: {
		//	style: google.maps.ZoomControlStyle.SMALL
		} */
	}
	/*	
		
	$.getJSON('js/man.json')
		.done(function(data){
			data.forEach(function(data) {
				var placement = new google.maps.LatLng(Number(data.geo_bounds.min_lat), Number(data.geo_bounds.min_lon)); /*{
					lat: Number(data.geobounds.min_lat),
					lng: Number(data.geobounds.min_lon)
				}; */
				/*
				var marker = new google.maps.Marker({
					position: placement,
					map: map,
					animation: google.maps.Animation.DROP,

				});
			});
		

			
			//do stuff with marker
			google.maps.event.addListener(marker, 'click', function() {
				map.panTo(marker.getPosition());
				//var html = '<p>' + camInfo + '</p><img src="' + camPic.url  + '"/>';
				//infoWindow.setContent(html);
				infoWindow.open(map, this);
			

			 });//end of setting up markers
		});*/
			
	//};/*
	
	
	//create a map
	var map = new google.maps.Map(document.getElementById("map"), options);

	//get map tiles
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
	
	var markers = [];
	var infoWindows = [];

	//Lucius as a man wanderings and lit. 
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(41.8922,12.4852),
		map: map,
		title: 'Setting for end of the story.  In 6.8, Rome is used as a literary topography',
		icon: purpleDot
	});
	markers.push(marker);
	
	/*var infoWindow = new google.maps.InfoWindow({
		content: "Rome.  Setting for end of the story.  In 6.8, Rome is used as a literary topography "
	});
	
	infoWindows.push(infoWindow);*/

	//Lucius as man
	var Hypata = new google.maps.Marker({
		position: new google.maps.LatLng(38.8718,22.2406),
		map: map,
		title: 'Hypata.  Beginning of story, where Lucius travels.  Landscapes are altered by magic = magic is malleable and untrustworthy.',
		icon: blueDot
	});
	
	var Corinth = new google.maps.Marker({
		position: new google.maps.LatLng(37.906,22.8787),
		map: map,
		title: 'Corinth. Lucius is from a town near Corinth, and this is an important spot for the Cult of Isis',
		icon: blueDot
	});
	
	
	//Lucius as an ass
	var Cenchreae  = new google.maps.Marker({
		position: new google.maps.LatLng(37.5,22.5),
		map: map,
		title: 'Cenchreae. Temple to Isis. Lucius stops here before heading to Rome.',
		icon: greenDot
	});
	
	//indirectStory
	var Larissa  = new google.maps.Marker({
		position: new google.maps.LatLng(39.6415,22.4147),
		map: map,
		title: 'Larissa. Socrates travels here attracted to gladiator games when he is attacked and where Thelyphron watches corpse.',
		icon: greenDot
	});
	
	var Miletus  = new google.maps.Marker({
		position: new google.maps.LatLng(37.5292,27.2775),
		map: map,
		title: 'Miletus.  Thelyphron is from here.',
		icon: greenDot
	});
	
	var Thebes  = new google.maps.Marker({
		position: new google.maps.LatLng(38.3197,23.3173),
		map: map,
		title: 'Thebes. Met 4.9-21 heroic robbers deaths parodying and gaining literary topography from 7 Against Thebes.',
		icon: greenDot
	});
	
	var Plataea  = new google.maps.Marker({
		position: new google.maps.LatLng(38.221,23.2739),
		map: map,
		title: 'Plataea. Met 4.9-21 heroic robbers deaths.  Thrasyleon dies to a bear, body is left behind possibly becoming part of the landscape.',
		icon: greenDot
	});
	
	var Didyma  = new google.maps.Marker({
		position: new google.maps.LatLng(37.5,23.1542),
		map: map,
		title: 'Didyma.  Location of Psyches oracle',
		icon: greenDot
	});
	
	var Pharis  = new google.maps.Marker({
		position: new google.maps.LatLng(37.0293,22.2806),
		map: map,
		title: 'Pharis. Where golden sheep live.  Literary topography from Cupid and Psyche story. (Harrison, 2009)',
		icon: greenDot
	});
	
	var Zante  = new google.maps.Marker({
		position: new google.maps.LatLng(37.788,20.8983),
		map: map,
		title: 'Zante. Where Plotina is exiled in the robbers story of 7.6-7',
		icon: greenDot
	});
	
	var Actium  = new google.maps.Marker({
		position: new google.maps.LatLng(37.788,20.8983),
		map: map,
		title: 'Actium. Famous military location that is likely place where Plotinas ship washed ashore (Harrison, 2009)',
		icon: greenDot
	});
	
	var Arcadia  = new google.maps.Marker({
		position: new google.maps.LatLng(35.0803,25.2824),
		map: map,
		title: 'Arcadia. Location of the Styx, literary topography from Psyches labors.',
		icon: greenDot
	});
	
	var Epirus  = new google.maps.Marker({
		position: new google.maps.LatLng(20.25,39.75),
		map: map,
		title: 'Epirus. Location of the Styx, literary topography from Psyches labors.',
		icon: greenDot
	});
	
	//markers.push(marker);
	
	/*
	var infowindow = new google.maps.InfoWindow({
		content: "Beginning of story, where Lucius travels.  Landscapes are altered by magic = magic is malleable and untrustworthy."
	});
	infoWindows.push(infoWindow);
	
	array.forEach(function(){
		this.marker.addListener('click', function() {
		this.infowindow.open(map, this.marker);
		});
	});*/
	
	
/*
	//balloon example
	 var infowindow = new google.maps.InfoWindow({
		content: "Testing!!!"
	});*/

	
	//are these doing anything?
	google.maps.event.addListener(map, 'tilesloaded', function(){
   // document.getElementById('maps').style.position = 'static';
   // document.getElementById('maps').style.background = 'none';
});
	
}) ;