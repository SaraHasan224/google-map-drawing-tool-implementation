
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
            new google.maps.LatLng(24.8784389, 67.0640629)
        ];

        map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: new google.maps.LatLng(24.946218, 67.005615),
                    disableDefaultUI: true,
                    zoomControl: true
                });

                var polyOptions = {
                    strokeWeight: 0,
                    fillOpacity: 0.45,
                    // editable: true,
                    // draggable: true
                };
                // Creates a drawing manager attached to the map that allows the user to draw
                // markers, lines, and shapes.
                drawingManager = new google.maps.drawing.DrawingManager({
                    drawingMode: google.maps.drawing.OverlayType.POLYGON,
                    polylineOptions: {
                        editable: false,
                        draggable: false
                    },
                    drawingControlOptions: {
                        position: google.maps.ControlPosition.TOP_CENTER,
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
                            alert('Polygon overlay complete');
                            setSelection(newShape);
                        });
                        alert('Polygon overlay complete');
                        setSelection(newShape);
                    }
                });

                // Clear the current selection when the drawing mode is changed, or when the
                // map is clicked.
                google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
                google.maps.event.addListener(map, 'click', clearSelection);
                google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', deleteSelectedShape);

                // buildColorPalette();

        google.maps.event.addDomListener(window, 'load', initMap);
    }
    