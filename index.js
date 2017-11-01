var map;

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.6860516, lng: -74.0000333},
    zoom: 10
  });
}
