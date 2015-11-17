window.showMap = function(coords, zoom, content){
    if (document.getElementById('map')) {
        ymaps.ready(function() {
            var myMap = new ymaps.Map('map', {
                center: coords,
                zoom: zoom,
                controls: []
            });
			
			BalloonContentLayout = content ? ymaps.templateLayoutFactory.createClass(
				'<div style="margin: 10px">'+ content +'</div>') : null;
			
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				
			}, {
				preset: 'islands#redDotIcon',
				balloonContentLayout: BalloonContentLayout,
				balloonPanelMaxMapArea: 0
			});
			
			if ('ontouchstart' in window) myMap.behaviors.disable('drag');
			myMap.behaviors.disable('scrollZoom');
			myMap.geoObjects.add(myPlacemark);
        });
    }
};
