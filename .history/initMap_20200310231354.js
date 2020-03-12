var polyOptions = {
    strokeWeight: 0,
    fillOpacity: 0.45,
};    
var bounds;
    function initMap() {
        /* Data points defined as an array of LatLng objects */
       
        var MapLatLng = new google.maps.LatLng(24.946218, 67.005615);
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: MapLatLng,
            disableDefaultUI: true,
            zoomControl: true
        });
        bounds = new google.maps.LatLngBounds();
        bounds.extend(MapLatLng);
        map.fitBounds(bounds);

        
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
        var polyPath;
        var path1 = [
            [24.878414, 67.0640559],
            [24.91502506619686, 67.09887350199396],
            [24.86480556197163, 67.01101205331366]
        ];

        var path2 = [
            [24.954686543147627, 67.23799977311062],
            [24.85815483853832, 67.20504078873562],
            [24.886810835811055, 67.35610280045437],
            [24.90549594885951, 67.29979786881374],
            [24.945970654017962, 67.31559071549343]
        ];

        polyPath = PolylineLatLng(path1);
        createPolygon(polyPath);
        polyPath = PolylineLatLng(path2);
        createPolygon(polyPath);
    }