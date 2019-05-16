require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Home",
  "esri/widgets/Expand",
  "esri/widgets/Legend",
  "dojo/domReady!"
], function(
  Map, MapView, Home, Expand, Legend
) {

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

  var homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, "top-left");

  const legendExpand = new Expand({
    view: view,
    content: new Legend({
      view: view,
    }),
    expandTooltip: "Expand Legend",
    collapseTooltip: "Hide Legend"
  });
  view.ui.add(legendExpand, "top-left");
});
