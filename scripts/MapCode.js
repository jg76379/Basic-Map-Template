require([
  "esri/Map",
  "esri/views/MapView",
  "dojo/domReady!"
], function(Map, MapView) {

  var map = new Map({
    basemap: "topo",
    layers: []
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 10.00,
    center: [-75.3, 38.7]
  });

});
