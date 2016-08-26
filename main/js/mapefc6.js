function is_touch_device(){
	try{
		document.createEvent("TouchEvent");
		return true;
	}
	catch(e){
	  return false;
	}
}

var is_touch_now = is_touch_device();
var draggable = true;
if(is_touch_now){
	draggable = false;
	// $('#google_maps_nm').before('<div style="position: absolute; left: 0; height: 380px; z-index: 500; width: 100%">');
}

function initialize() {

	var nm_position = new google.maps.LatLng(51.519495999999996, -0.127004999999997);

    var map2 = new google.maps.Map(document.getElementById("google_maps_nm2"), {
		center: nm_position,
		zoom: 16,
		mapTypeControl: false,
		streetViewControl: false,
		panControl: false,
		scrollwheel: false,
		draggable: draggable,
		zoomControl: false,
		disableDoubleClickZoom: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});


    var marker3 = new google.maps.Marker({
      position: nm_position,
      map: map2,
			icon: '/img/googlemaps/pin_small.png',
			title: '',
			cursor: 'grab',
			zIndex: 200
    });

	var trains = [
		{ origin: [0,0], dimensions: [48, 48], coords: [40.725297,-73.996204], acronym: 'bdfm', point: [190,40] },
		{ origin: [50,0], dimensions: [47, 27], coords: [40.720280,-73.993915], acronym: 'jz', point: [85,45] },
		{ origin: [0,50], dimensions: [47, 27], coords: [40.724329,-73.997702], acronym: 'nr', point: [85,45] },
		{ origin: [99,0], dimensions: [27, 27], coords: [40.722301,-73.997141], acronym: '6', point: [85,45] },
		{ origin: [49,50], dimensions: [27, 27], coords: [40.723402,-73.989938], acronym: 'f', point: [85,45] }
	];

	var marker_stops = [];

	for (var i=0; i < trains.length; i++) {
		var marker_stops_image = new google.maps.MarkerImage('img/googlemaps/stops2.png',
			new google.maps.Size(trains[i].dimensions[0], trains[i].dimensions[1]),
			new google.maps.Point(trains[i].origin[0], trains[i].origin[1]),
			new google.maps.Point(Math.round(trains[i].dimensions[0]/2), Math.round(trains[i].dimensions[1]/2)));

		var marker_stop = new google.maps.Marker({
			position: new google.maps.LatLng(trains[i].coords[0], trains[i].coords[1]),
			map: map2,
			train: trains[i],
			icon: marker_stops_image,
			zIndex: 150
		});

		google.maps.event.addListener(marker_stop, "mouseout", function(e) {
			this.marker.setVisible(false);
		});

		google.maps.event.addListener(marker_stop, "mouseover", function(e) {
			this.marker = new google.maps.Marker({
				position: this.position,
				map: this.map,
				clickable: false,
				icon: new google.maps.MarkerImage('/img/googlemaps/markers/' + this.train.acronym + '.png', null, null, new google.maps.Point(this.train.point[0], this.train.point[1])),
				zIndex: 200
			});
		});

		marker_stops.push(marker_stop);
	};

  }

initialize();
