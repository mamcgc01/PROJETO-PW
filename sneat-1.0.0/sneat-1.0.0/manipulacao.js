function iniciarMapa() {
    let azurem = {lat: 41.451799748109416, lng: -8.293639737078523}
    let map = new google.maps.Map(
        document.getElementById('mapa'), {zoom:4, center:azurem}
    );

    let marker = new google.maps.Marker({position: azurem, map: mapa})
}