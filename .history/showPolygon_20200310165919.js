  function PolylineLatLng(array) {
    return array.map(mapToLatLng);
  }
  
  function mapToLatLng(source, index, array) {
      return new google.maps.LatLng(source[0], source[1]);
  }
  
  function newPolyOptions(path) {
    return new google.maps.Polygon({
      path:path,
      strokeColor:"FF0000",
      strokeOpacity:0,
      strokeWeight:3,
      fillColor:"#94C11F",
      fillOpacity:0.5,
      clickable:false
    });
  }
  
  function newPolyLine(polyOptions) {
    var polyLine = new google.maps.Polyline(polyOptions);
    polyLine.setMap(map);
    return polyLine;
  }
  
  