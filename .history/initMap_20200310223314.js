var polyOptions = {
    strokeWeight: 0,
    fillOpacity: 0.45,
};    
    function initMap() {
        /* Data points defined as an array of LatLng objects */
        heatmapData = [
            new google.maps.LatLng(24.878414, 67.0640559),
            new google.maps.LatLng(24.8784193, 67.0640567),
            new google.maps.LatLng(24.8784105, 67.0640547),
            new google.maps.LatLng(24.878408, 67.0640504),
            new google.maps.LatLng(24.8784175, 67.0640716),
            new google.maps.LatLng(24.8783988, 67.064048),
            new google.maps.LatLng(24.8783978, 67.0640487),
            new google.maps.LatLng(24.8783858, 67.0640434),
            new google.maps.LatLng(24.87838, 67.0640472),
            new google.maps.LatLng(24.87838, 67.0640432),
            new google.maps.LatLng(24.8783828, 67.0640413),
            new google.maps.LatLng(24.8783849, 67.0640415),
            new google.maps.LatLng(24.8784026, 67.064041),
            new google.maps.LatLng(24.8784389, 67.0640629),
            new google.maps.LatLng(24.8784176, 67.0640664),
            new google.maps.LatLng(24.878425, 67.0640581),
            new google.maps.LatLng(24.8784247, 67.0640476),
            new google.maps.LatLng(24.878412, 67.0640594),
            new google.maps.LatLng(24.91502506619686, 67.09887350199396),
            new google.maps.LatLng(24.945694415219425, 67.12309559737974),
            new google.maps.LatLng(24.961259238140656, 67.13538841211094),
            new google.maps.LatLng(24.976546223149594, 67.14746179550016),
            new google.maps.LatLng(24.992132105605624, 67.15977124266983),
            new google.maps.LatLng(24.85933441420593, 67.00543427673531),
            new google.maps.LatLng(24.859896778772637, 67.00600760139095),
            new google.maps.LatLng(24.860553816940843, 67.00667744476982),
            new google.maps.LatLng(24.861778633428838, 67.00792613206764),
            new google.maps.LatLng(24.862343097764086, 67.00850159741482),
            new google.maps.LatLng(24.863004387033264, 67.00917577474563),
            new google.maps.LatLng(24.863667480408544, 67.0098517913433),
            new google.maps.LatLng(24.864236261308417, 67.0104316573819),
            new google.maps.LatLng(24.86480556197163, 67.01101205331366),
            new google.maps.LatLng(24.865375742358513, 67.0115933461143),
            new google.maps.LatLng(24.865945509158696, 67.01217421726771),
            new google.maps.LatLng(24.86708074547479, 67.01333157853924),
            new google.maps.LatLng(24.86773930392389, 67.0140029718282),
            new google.maps.LatLng(24.868308182929518, 67.01458293788457),
            new google.maps.LatLng(24.868875413686343, 67.01516122356894),
            new google.maps.LatLng(24.91502506619686, 67.09887350199396),
            new google.maps.LatLng(24.945694415219425, 67.12309559737974),
            new google.maps.LatLng(24.961259238140656, 67.13538841211094),
            new google.maps.LatLng(24.976546223149594, 67.14746179550016),
            new google.maps.LatLng(24.992132105605624, 67.15977124266983),
            new google.maps.LatLng(24.85933441420593, 67.00543427673531),
            new google.maps.LatLng(24.859896778772637, 67.00600760139095),
            new google.maps.LatLng(24.860553816940843, 67.00667744476982),
            new google.maps.LatLng(24.861778633428838, 67.00792613206764),
            new google.maps.LatLng(24.862343097764086, 67.00850159741482),
            new google.maps.LatLng(24.863004387033264, 67.00917577474563),
            new google.maps.LatLng(24.863667480408544, 67.0098517913433),
            new google.maps.LatLng(24.864236261308417, 67.0104316573819),
            new google.maps.LatLng(24.86480556197163, 67.01101205331366),
            new google.maps.LatLng(24.865375742358513, 67.0115933461143),
            new google.maps.LatLng(24.865945509158696, 67.01217421726771),
            new google.maps.LatLng(24.86708074547479, 67.01333157853924),
            new google.maps.LatLng(24.86773930392389, 67.0140029718282),
            new google.maps.LatLng(24.868308182929518, 67.01458293788457),
            new google.maps.LatLng(24.961259238140656, 67.13538841211094),
            new google.maps.LatLng(24.976546223149594, 67.14746179550016),
            new google.maps.LatLng(24.992132105605624, 67.15977124266983),
            new google.maps.LatLng(24.85933441420593, 67.00543427673531),
            new google.maps.LatLng(24.859896778772637, 67.00600760139095),
            new google.maps.LatLng(24.860553816940843, 67.00667744476982),
            new google.maps.LatLng(24.861778633428838, 67.00792613206764),
            new google.maps.LatLng(24.862343097764086, 67.00850159741482),
            new google.maps.LatLng(24.863004387033264, 67.00917577474563),
            new google.maps.LatLng(24.863667480408544, 67.0098517913433),
            new google.maps.LatLng(24.864236261308417, 67.0104316573819),
            new google.maps.LatLng(24.86480556197163, 67.01101205331366),
            new google.maps.LatLng(24.865375742358513, 67.0115933461143),
            new google.maps.LatLng(24.865945509158696, 67.01217421726771),
            new google.maps.LatLng(24.86708074547479, 67.01333157853924),
            new google.maps.LatLng(24.86773930392389, 67.0140029718282),
            new google.maps.LatLng(24.868308182929518, 67.01458293788457),
            new google.maps.LatLng(24.961259238140656, 67.13538841211094),
            new google.maps.LatLng(24.976546223149594, 67.14746179550016),
            new google.maps.LatLng(24.992132105605624, 67.15977124266983),
            new google.maps.LatLng(24.85933441420593, 67.00543427673531),
            new google.maps.LatLng(24.859896778772637, 67.00600760139095),
            new google.maps.LatLng(24.860553816940843, 67.00667744476982),
            new google.maps.LatLng(24.861778633428838, 67.00792613206764),
            new google.maps.LatLng(24.862343097764086, 67.00850159741482),
            new google.maps.LatLng(24.863004387033264, 67.00917577474563),
            new google.maps.LatLng(24.863667480408544, 67.0098517913433),
            new google.maps.LatLng(24.864236261308417, 67.0104316573819),
            new google.maps.LatLng(24.86480556197163, 67.01101205331366),
            new google.maps.LatLng(24.865375742358513, 67.0115933461143),
            new google.maps.LatLng(24.865945509158696, 67.01217421726771),
            new google.maps.LatLng(24.86708074547479, 67.01333157853924),
            new google.maps.LatLng(24.86773930392389, 67.0140029718282),
            new google.maps.LatLng(24.868308182929518, 67.01458293788457),
            new google.maps.LatLng(24.961259238140656, 67.13538841211094),
            new google.maps.LatLng(24.976546223149594, 67.14746179550016),
            new google.maps.LatLng(24.992132105605624, 67.15977124266983),
            new google.maps.LatLng(24.85933441420593, 67.00543427673531),
            new google.maps.LatLng(24.859896778772637, 67.00600760139095),
            new google.maps.LatLng(24.860553816940843, 67.00667744476982),
            new google.maps.LatLng(24.861778633428838, 67.00792613206764),
            new google.maps.LatLng(24.862343097764086, 67.00850159741482),
            new google.maps.LatLng(24.863004387033264, 67.00917577474563),
            new google.maps.LatLng(24.863667480408544, 67.0098517913433),
            new google.maps.LatLng(24.864236261308417, 67.0104316573819),
            new google.maps.LatLng(24.86480556197163, 67.01101205331366),
            new google.maps.LatLng(24.865375742358513, 67.0115933461143),
            new google.maps.LatLng(24.865945509158696, 67.01217421726771),
            new google.maps.LatLng(24.86708074547479, 67.01333157853924),
            new google.maps.LatLng(24.86773930392389, 67.0140029718282),
            new google.maps.LatLng(24.868308182929518, 67.01458293788457),
            new google.maps.LatLng(24.961259238140656, 67.13538841211094),
            new google.maps.LatLng(24.976546223149594, 67.14746179550016),
            new google.maps.LatLng(24.992132105605624, 67.15977124266983),
            new google.maps.LatLng(24.85933441420593, 67.00543427673531),
            new google.maps.LatLng(24.859896778772637, 67.00600760139095),
            new google.maps.LatLng(24.860553816940843, 67.00667744476982),
            new google.maps.LatLng(24.861778633428838, 67.00792613206764),
            new google.maps.LatLng(24.862343097764086, 67.00850159741482),
            new google.maps.LatLng(24.863004387033264, 67.00917577474563),
            new google.maps.LatLng(24.863667480408544, 67.0098517913433),
            new google.maps.LatLng(24.864236261308417, 67.0104316573819),
            new google.maps.LatLng(24.86480556197163, 67.01101205331366),
            new google.maps.LatLng(24.865375742358513, 67.0115933461143),
            new google.maps.LatLng(24.865945509158696, 67.01217421726771),
            new google.maps.LatLng(24.86708074547479, 67.01333157853924),
            new google.maps.LatLng(24.86773930392389, 67.0140029718282),
            new google.maps.LatLng(24.868308182929518, 67.01458293788457),
            new google.maps.LatLng(24.961259238140656, 67.13538841211094),
            new google.maps.LatLng(24.976546223149594, 67.14746179550016),
            new google.maps.LatLng(24.992132105605624, 67.15977124266983),
            new google.maps.LatLng(24.85933441420593, 67.00543427673531),
            new google.maps.LatLng(24.859896778772637, 67.00600760139095),
            new google.maps.LatLng(24.860553816940843, 67.00667744476982),
            new google.maps.LatLng(24.861778633428838, 67.00792613206764),
            new google.maps.LatLng(24.862343097764086, 67.00850159741482),
            new google.maps.LatLng(24.863004387033264, 67.00917577474563),
            new google.maps.LatLng(24.863667480408544, 67.0098517913433),
            new google.maps.LatLng(24.864236261308417, 67.0104316573819),
            new google.maps.LatLng(24.86480556197163, 67.01101205331366),
            new google.maps.LatLng(24.865375742358513, 67.0115933461143),
            new google.maps.LatLng(24.865945509158696, 67.01217421726771),
            new google.maps.LatLng(24.86708074547479, 67.01333157853924),
            new google.maps.LatLng(24.86773930392389, 67.0140029718282),
            new google.maps.LatLng(24.868308182929518, 67.01458293788457),
            new google.maps.LatLng(24.868875413686343, 67.01516122356894)
        ];

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: new google.maps.LatLng(24.946218, 67.005615),
            disableDefaultUI: true,
            zoomControl: true
        });

        // buildColorPalette();

        google.maps.event.addDomListener(window, 'load', initMap);
        google.maps.event.addDomListener(window, 'load', initDrawingManager);
        google.maps.event.addDomListener(window, 'load', initHeatMap);
        google.maps.event.addDomListener(window, 'load', initPolygons);
    }

    function initDrawingManager()
    {
        // Creates a drawing manager attached to the map that allows the user to draw lines, and polygons.
        drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            polylineOptions: {
                editable: false,
                draggable: false
            },
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
                drawingModes: ['polyline', 'polygon']
            },
            polygonOptions: polyOptions,
            map: map
        });

        google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
            if (e.type !== google.maps.drawing.OverlayType.MARKER) {
                // Switch back to non-drawing mode after drawing a shape.
                drawingManager.setDrawingMode(null);

                // Add an event listener that selects the newly-drawn shape when the user
                // mouses down on it.
                var newShape = e.overlay;
                newShape.type = e.type;
                google.maps.event.addListener(newShape, 'click', function (e) {
                    if (e.vertex !== undefined) {
                        if (newShape.type === google.maps.drawing.OverlayType.POLYGON) {
                            var path = newShape.getPaths().getAt(e.path);
                            path.removeAt(e.vertex);
                            if (path.length < 3) {
                                newShape.setMap(null);
                            }
                        }
                        if (newShape.type === google.maps.drawing.OverlayType.POLYLINE) {
                            var path = newShape.getPath();
                            path.removeAt(e.vertex);
                            if (path.length < 2) {
                                newShape.setMap(null);
                            }
                        }
                    }
                    alert('Polygon overlay complete click listener');
                    setSelection(newShape);
                });
                alert('Polygon overlay complete');
                setSelection(newShape);
            }
        });

        // Clear the current selection when the drawing mode is changed, or when the
        // map is clicked.
        google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearDrawingManager);
        google.maps.event.addListener(map, 'click', clearDrawingManager);
        google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', deleteSelectedShape);
    }

    function initHeatMap()
    {
        showHeatMap(heatmapData);
    }

    function initPolygons()
    {
        
        var path1 = [
            [41.769007157585534, -88.20167541503906],
            [41.76081263047197, -88.12236785888672],
            [41.717517926019624, -88.19429397583008]
        ];
        
        var path2 = [
            [41.88336502279732, -88.09249877929688],
            [41.88157575821145, -88.12957763671875],
            [41.84271080015277, -88.12408447265625],
            [41.841431946284025, -88.08425903320312]
        ];
        
        var path3 = [
            [41.96051129429776, -88.12957763671875],
            [41.93906275484857, -88.00048828125],
            [41.884387437207835, -88.02314758300781],
            [41.879275201550634, -88.07395935058594],
            [41.948766559468574, -88.11172485351562]
        ];
        
        var path4 = [
            [41.80203073088394, -88.09730529785156],
            [41.801006999656636, -88.07533264160156],
            [41.74313962010849, -88.05301666259766]
        ];
        
        var path5 = [
            [41.901254912872794, -87.94418334960938],
            [41.949277245116555, -87.92015075683594],
            [41.93446570034958, -87.87895202636719],
            [41.96459591213679, -87.82608032226562],
            [41.9753167881278, -87.78968811035156],
            [41.899721690058364, -87.83706665039062],
            [41.937019660425264, -87.72239685058594],
            [41.87569639323101, -87.63175964355469]
        ];
        
        var path6 = [
            [41.780016905285535, -87.95448303222656],
            [41.83171182161546, -87.96066284179688],
            [41.83273506215261, -87.94281005859375],
            [41.81073178596061, -87.88925170898438],
            [41.81226714359981, -87.78282165527344],
            [41.87723019276536, -87.77114868164062],
            [41.782577040867636, -87.74848937988281],
            [41.77182378456081, -87.88581848144531],
            [41.801006999656636, -87.9290771484375]
        ];
        
        var path7 = [
            [41.852173524388824, -87.62489318847656],
            [41.70880422215806, -87.62283325195312],
            [41.70829161455626, -88.0059814453125],
            [41.74416427530836, -87.96821594238281],
            [41.73545418490723, -87.91603088378906],
            [41.735966575868716, -87.68051147460938],
            [41.840920397579936, -87.67707824707031]
        ];

        var polyPath = PolylineLatLng(path1);
        console.log(polyPath);
        alert('Polyline path recieved');
        createPolygon(path);
    }