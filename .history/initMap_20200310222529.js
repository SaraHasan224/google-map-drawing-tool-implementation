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
        // google.maps.event.addDomListener(window, 'load', showPolygons);
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