var newPolyline;


function PolylineLatLng(array) {
  return array.map(calculateLatLng);
}

function calculateLatLng(source, index, array) {
  return new google.maps.LatLng(source[0], source[1]);
}

function createPolyline(path) {
  polyOptions = new google.maps.Polygon({
    path: path,
    strokeColor: "FF0000",
    strokeOpacity: 0,
    strokeWeight: 3,
    fillColor: "#94C11F",
    fillOpacity: 0.5,
    clickable: false
  });
  var polyLine = new google.maps.Polyline(polyOptions);
  polyLine.setMap(map);
}

function showPolylines() {
  newPolyline = createPolyline(PolylineLatLng(path1));
  // poly2 = createPolyline(path2);
  // poly3 = createPolyline(path3);
  // poly4 = createPolyline(path4);
  // poly5 = createPolyline(path5);
  // poly6 = createPolyline(path6);
  // poly7 = createPolyline(path7);
}


function updatePolyline(polyLine) {
  //Clear CURRENT HEAT MAP
  clearPolyLine(polyLine);
  // UPDATE HEAT MAP
  showPolyLine(polyLine);
}

function clearPolyLine(polyLine) {
  // CLEAR CURRENT HEAT MAP ONLY
  if (polyLine) {
    polyLine.setMap(null);
  }
}

function clearAllPolyLines() {
  // CLEAR ARRAY OF ALL OLD HEAT MAPS
  for (var i = 0; i < oldPolyLine.length; i++) {
    oldPolyLine[i].setMap(null);
  }
  oldPolyLine.length = 0;
  oldPolyLine = [];
}