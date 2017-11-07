var map;
var NYUSternLocation = {lat: 40.7290549, lng: -73.99652329999998};

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: NYUSternLocation
    });
    putMarker(NYUSternLocation);
    console.log(getDataFromURL("https://data.cityofnewyork.us/api/views/fn6f-htvy/rows.json"));
}

function putMarker(location){
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    return;
}

function getDataFromURL(URL){
    var data = $.get(URL, function(){
        console.log(URL);
    })
    return data;
}

$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);

    return false;
});
