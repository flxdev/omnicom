function initMap() {
    var coordinates = {lat: 56.8370852, lng: 60.5779357},
        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: 15,
            disableDefaultUI: false,
            scrollwheel: false,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#0079ff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "-70"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "saturation": -60
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#375e82"
                        }
                    ]
                }
            ]
        });

    var markerImage = {
        url: 'img/icon-map.png',
        size: new google.maps.Size(80, 80),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(40, 67)
    };

    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
    });
}

initMap();