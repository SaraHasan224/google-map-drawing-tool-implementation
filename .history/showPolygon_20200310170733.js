var path1 = [
    [41.769007157585534,-88.20167541503906],
    [41.76081263047197,-88.12236785888672],
    [41.717517926019624,-88.19429397583008]];
  
  var path2 = [
    [41.88336502279732,-88.09249877929688],
    [41.88157575821145,-88.12957763671875],
    [41.84271080015277,-88.12408447265625],
    [41.841431946284025,-88.08425903320312]];
  
  var path3 = [
    [41.96051129429776,-88.12957763671875],
    [41.93906275484857, -88.00048828125],
    [41.884387437207835, -88.02314758300781],
    [41.879275201550634, -88.07395935058594],
    [41.948766559468574, -88.11172485351562]];
  
  var path4 = [
    [41.80203073088394, -88.09730529785156],
    [41.801006999656636, -88.07533264160156],
    [41.74313962010849, -88.05301666259766]];
  
  var path5 = [
    [41.901254912872794, -87.94418334960938],
    [41.949277245116555, -87.92015075683594],
    [41.93446570034958, -87.87895202636719],
    [41.96459591213679, -87.82608032226562],
    [41.9753167881278, -87.78968811035156],
    [41.899721690058364, -87.83706665039062],
    [41.937019660425264, -87.72239685058594],
    [41.87569639323101, -87.63175964355469]];
  
  var path6 = [
    [41.780016905285535, -87.95448303222656],
    [41.83171182161546, -87.96066284179688],
    [41.83273506215261, -87.94281005859375],
    [41.81073178596061, -87.88925170898438],
    [41.81226714359981, -87.78282165527344],
    [41.87723019276536, -87.77114868164062],
    [41.782577040867636, -87.74848937988281],
    [41.77182378456081, -87.88581848144531],
    [41.801006999656636, -87.9290771484375]];
  
  var path7 = [
    [41.852173524388824, -87.62489318847656],
    [41.70880422215806, -87.62283325195312],
    [41.70829161455626, -88.0059814453125],
    [41.74416427530836, -87.96821594238281],
    [41.73545418490723, -87.91603088378906],
    [41.735966575868716, -87.68051147460938],
    [41.840920397579936, -87.67707824707031]];
  
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

  