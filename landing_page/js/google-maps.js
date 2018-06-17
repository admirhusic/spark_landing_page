function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(43.3530832, 17.7935674, 21);
    var mapOptions = { center: myCenter, zoom: 15 };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        icon: 'css/images/icon-map.png'
    });
    marker.setMap(map);
}
myMap();
