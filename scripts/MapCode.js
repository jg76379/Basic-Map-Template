require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Home",
  "esri/widgets/Expand",
  "esri/widgets/Legend",
  "esri/widgets/Search",
  "dojo/domReady!"
], function(
  Map, MapView, Home, Expand, Legend, Search
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
  view.ui.add(homeBtn, {
    position: "top-left",
    index: 0
  });

  const legendExpand = new Expand({
    view: view,
    content: new Legend({
      view: view,
    }),
    expandTooltip: "Expand Legend",
    collapseTooltip: "Hide Legend"
  });
  view.ui.add(legendExpand, "top-left");

  var searchWidget = new Search({
    container: "searchWidgetContainer",
    view: view,
    maxSuggestions: 6,
    locationEnabled: true,
    sources: []  // Add additional search sources here, includes ESRI ArcGIS World Geocoding Service by default
  });

});
