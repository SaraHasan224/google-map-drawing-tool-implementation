var newPolyline;


function PolylineLatLng(array) {
  return array.map(calculateLatLng);
}
var polyLatLng;
function calculateLatLng(source, index, array) {
  polyLatLng = new google.maps.LatLng(source[0], source[1]);
  return polyLatLng;
}

function createPolygon(path) {
  polyOptions = new google.maps.Polygon({
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
  console.log(polyOptions);
  polyOptions.setMap(map);
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