var map;
var NYUSternLocation = {lat: 40.7290549, lng: -73.99652329999998};

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: NYUSternLocation
    });
    putCollegeMarker(NYUSternLocation);
    loadMarkers();
}

function loadMarkers(){
    loadMuseums();
    loadArtGalleries();
}

function putCollegeMarker(location){
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: "https://github.com/evilcucaracha/Purdue-UNAL-IronHacks-2017/blob/master/Images/college.png?raw=true"
    });
    return;
}

$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return;
});

function putMarkers(map, array){
    for(var i=0; i<array.length;i++){
        array[i].setMap(map);
    }
}




//var museumIcon = 'https://i.imgur.com/RVdSDPo.png';
var museumMarkers = [];
var showMuseums = false;
var museumsButton = document.getElementById("museums-button");

$("#museums-button").click(function(){
    if(!showMuseums){
        putMarkers(map, museumMarkers);
        museumsButton.style.backgroundColor = "#f2b632";
    }else{
        putMarkers(null, museumMarkers);
        museumsButton.style.backgroundColor = "#252839";
    }
    showMuseums = !showMuseums;
});



function loadMuseums(){
    var data = $.get("https://data.cityofnewyork.us/api/views/fn6f-htvy/rows.json")
    .done(function(){
        for (var i = 0; i < (data.responseJSON.data).length; i++) {
            var pos = data.responseJSON.data[i][8].split("(")[1].split(")")[0].split(" ");
            var location = new google.maps.LatLng(pos[1],pos[0]);
            var marker = new google.maps.Marker({
                position: location,
                map: map
                //icon: museumIcon
            });
            museumMarkers.push(marker);
            marker.setMap(null);
        }
    })
}



var artGalleriesMarkers = [];
var showArtGalleries = false;

var artGalleriesButton = document.getElementById("art-galleries-button");
$("#art-galleries-button").click(function(){
    if(!showArtGalleries){
        putMarkers(map, artGalleriesMarkers);
        artGalleriesButton.style.backgroundColor = "#f2b632";
    }else{
        putMarkers(null, artGalleriesMarkers);
        artGalleriesButton.style.backgroundColor = "#252839";
    }
    showArtGalleries = !showArtGalleries;
});

function loadArtGalleries(){
    var data = $.get("https://data.cityofnewyork.us/api/views/43hw-uvdj/rows.json")
    .done(function(){
        for (var i = 0; i < (data.responseJSON.data).length; i++) {
            var pos = data.responseJSON.data[i][9].split("(")[1].split(")")[0].split(" ");
            var location = new google.maps.LatLng(pos[1],pos[0]);
            var marker = new google.maps.Marker({
                position: location,
                map: map
                //icon: museumIcon
            });
            artGalleriesMarkers.push(marker);
            marker.setMap(null);
        }
    })
}
