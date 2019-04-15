$(document).ready(function(){
  $(function () {
  
    if ($(window).width() > 767) {
      $('#fullpage').fullpage({
        anchors: ['main', 'prices', 'about', 'order', 'services', 'map'],
        loopHorizontal: false,
        controlArrows: false,
  
        afterLoad: function (anchorLink) {
  
        },
  
        onLeave: function (index, nextIndex, direction) {
  
        },
  
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
  
        },
  
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
  
        }
      });
    }
  
  });
  (function () {
  
    var points = [
      [55.516221, 36.968647],
      [55.507643, 37.339613],
      [55.157876, 37.472629],
      [55.539456, 37.154590],
      [55.628720109180186,36.9642569062645],
      [55.407263551440394,37.20381012849938],
      [55.472783095559905,36.92950649776596]
    ];
  
    var loadMap = function () {
  
      var centerCoords = [45.097708, 38.894941];
  
      var map = new ymaps.Map('address', {
        center: centerCoords,
        zoom: 11,
        controls: []
      });
  
      map.controls
        .add('zoomControl')
  
      points.forEach(function (item) {
        var point = new ymaps.Placemark(item, {}, {
          preset: 'islands#circleDotIcon'
        });
  
        map.geoObjects.add(point);
      });
  
      map.setBounds(map.geoObjects.getBounds(), {checkZoomRange:true});
  
      $(document).on('click', '.contacts__item', function (event) {
        var thisCoords = [$(this).data('w'), $(this).data('h')];
  
        map.setZoom(16);
        map.panTo(thisCoords, {flying: 1});
  
  
        $(this).addClass('contacts__item--active').siblings().removeClass('contacts__item--active');
      });
    };
  
    ymaps.ready(function () {
      loadMap();
    })
  })();
});