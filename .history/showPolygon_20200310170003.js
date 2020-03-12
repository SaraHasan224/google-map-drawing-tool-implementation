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
  
  function showPolygons()
  {
      
    poly1 = newPolyLine(newPolyOptions(PolylineLatLng(path1)));
    poly2 = newPolyLine(newPolyOptions(PolylineLatLng(path2)));
    poly3 = newPolyLine(newPolyOptions(PolylineLatLng(path3)));
    poly4 = newPolyLine(newPolyOptions(PolylineLatLng(path4)));
    poly5 = newPolyLine(newPolyOptions(PolylineLatLng(path5)));
    poly6 = newPolyLine(newPolyOptions(PolylineLatLng(path6)));
    poly7 = newPolyLine(newPolyOptions(PolylineLatLng(path7)));
  }