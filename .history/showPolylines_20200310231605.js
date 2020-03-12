var newPolygon;
var oldPolygon = [];
var polyLatLng;

function PolygonLatLng(array) {
  return array.map(calculateLatLng);
}

function calculateLatLng(source, index, array) {
  polyLatLng = new google.maps.LatLng(source[0], source[1]);
  bounds.extend(polyLatLng);
  map.fitBounds(bounds);
  return polyLatLng;
}

function createPolygon(path) {
  newPolygon = new google.maps.Polygon({
    path: path,
    strokeColor: "#FF0000",  
    strokeOpacity: 0.9,
    strokeWeight: 3,
    fillColor: "#94C11F",
    fillOpacity: 0.5,
    clickable: false
  });
  // var polyLine = new google.maps.Polyline(polyOptions);
  console.log("polyOptions");
  console.log(newPolygon);
  newPolygon.setMap(map);

  oldPolygon.push(newPolygon);
}



function updatePolygon(polyLine) {
  //Clear CURRENT HEAT MAP
  clearPolygon(polyLine);
  // UPDATE HEAT MAP
  showPolygon(polyLine);
}

function clearPolygon(polyLine) {
  // CLEAR CURRENT HEAT MAP ONLY
  if (polyLine) {
    polyLine.setMap(null);
  }
}

function clearAllPolygons() {
  // CLEAR ARRAY OF ALL OLD HEAT MAPS
  for (var i = 0; i < oldPolygon.length; i++) {
    oldPolygon[i].setMap(null);
  }
  oldPolygon.length = 0;
  oldPolygon = [];
}