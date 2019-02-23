$(document).ready(function(){
  $(function () {
  
    $('#fullpage').fullpage({
      anchors: ['main', 'map'],
      menu: '#menu',
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
  
  });
  (function () {
  
    var points = [
      [55.516221, 36.968647],
      [55.507643, 37.339613],
      [55.157876, 37.472629],
      [55.539456, 37.154590],
      [55.679463, 37.283803]
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
  
        map.panTo(thisCoords, {flying: 1});
  
        $(this).addClass('contacts__item--active').siblings().removeClass('contacts__item--active');
      });
    };
  
    ymaps.ready(function () {
      loadMap();
    })
  })();
});