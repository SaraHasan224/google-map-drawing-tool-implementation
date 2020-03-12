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
  // console.log("polyOptions");
  // console.log(newPolygon);
  newPolygon.setMap(map);

  oldPolygon.push(newPolygon);
}



function updatePolygon(polygon) {
  //Clear CURRENT HEAT MAP
  clearPolygon(polygon);
  // UPDATE HEAT MAP
  showPolygon(polygon);
}

function clearPolygon(polygon) {
  // CLEAR CURRENT HEAT MAP ONLY
  if (polygon) {
    polygon.setMap(null);
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