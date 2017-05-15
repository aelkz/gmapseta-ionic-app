// http://stackoverflow.com/questions/32496382/typeerror-window-initmap-is-not-a-function
// http://stackoverflow.com/questions/40448238/initmap-is-not-a-function
// http://stackoverflow.com/questions/41065766/initmap-is-not-a-function-google-maps-javascript
// http://stackoverflow.com/questions/34466718/googlemaps-does-not-load-on-page-load
// https://forum.ionicframework.com/t/error-initmap-is-not-a-function-google-maps/62532

// https://developers.google.com/maps/documentation/javascript/infowindows?hl=pt-br

var googleMapsObject = (function() {
  console.log('googleMapsObject called.');
  return {
    init: function() {
      console.log('init called.');
      loadMap();
    }
  }
})(googleMapsObject||{})

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    // document is ready. Do your stuff here
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}

function initMap() { }

function loadMap() {
  // Enabling new cartography and themes
    google.maps.visualRefresh = true;

    var pos = {lat: -0.0, lng: 0.0};

    var map = new google.maps.Map(document.getElementById('navigation-map'), {
      center: {lat: -0.0, lng: 0.0},
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    //var infoWindow = new google.maps.InfoWindow({map: map});
    var infoWindow = new google.maps.InfoWindow({
      content: 'Your current location'
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log('real position acquired');

        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'You are here'
        });

        console.log(pos.lat);
        console.log(pos.lng);
        infoWindow.setPosition(pos);
        map.setCenter(pos);
        infoWindow.open(map, marker);

      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
}
