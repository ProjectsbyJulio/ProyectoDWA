function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 13.922166, lng: -89.846180};

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ahuachapán, El Salvador' // Title Location
    });
}