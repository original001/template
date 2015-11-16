window.showMap = function(coords, zoom, elem){
    if (document.getElementById(elem)) {
        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                center: coords,
                zoom: zoom,
                controls: []
            })
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
                preset: 'islands#redDotIcon'
            });
            myMap.behaviors.disable(['drag','scrollZoom']);
            myMap.geoObjects.add(myPlacemark);
        });
    }
}
