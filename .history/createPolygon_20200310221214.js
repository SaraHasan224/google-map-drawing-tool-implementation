function clearSelection () {
    if (selectedShape) {
        selectedShape.setEditable(false);
        selectedShape = null;
    }
}

function deleteSelectedShape () {
    if (selectedShape) {
        selectedShape.setMap(null);
    }
}
/*    
function selectColor (color) {
    selectedColor = color;
    for (var i = 0; i < colors.length; ++i) {
        var currColor = colors[i];
        colorButtons[currColor].style.border = currColor == color ? '2px solid #789' : '2px solid #fff';
    }

    // Retrieves the current options from the drawing manager and replaces the
    // stroke or fill color as appropriate.
    var polylineOptions = drawingManager.get('polylineOptions');
    polylineOptions.strokeColor = color;
    drawingManager.set('polylineOptions', polylineOptions);
     
    var polygonOptions = drawingManager.get('polygonOptions');
    polygonOptions.fillColor = color;
    drawingManager.set('polygonOptions', polygonOptions);
}

function setSelectedShapeColor (color) {
    console.log('fn setSelectedShapeColor()');
    console.log(selectedShape);
    if (selectedShape) {
        if (selectedShape.type == google.maps.drawing.OverlayType.POLYLINE) {
            selectedShape.set('strokeColor', color);
        } else {
            selectedShape.set('fillColor', color);
        }
    }
}

function makeColorButton (color) {
    var button = document.createElement('span');
    button.className = 'color-button';
    button.style.backgroundColor = color;
    google.maps.event.addDomListener(button, 'click', function () {
        // selectColor(color);
        setSelectedShapeColor(color);
    });

            return button;
}

function buildColorPalette () {
    var colorPalette = document.getElementById('color-palette');
    for (var i = 0; i < colors.length; ++i) {
        var currColor = colors[i];
        var colorButton = makeColorButton(currColor);
        colorPalette.appendChild(colorButton);
        colorButtons[currColor] = colorButton;
    }
    selectColor(colors[0]);
}
*/

function setSelection (shape) {
    clearSelection();
    // console.log(shape)
    // getting shape coordinates
    var v = shape.getPath();
    var coords = [];
    for (var i=0; i < v.getLength(); i++) {
      var xy = v.getAt(i);
      coords = {
          'lat': xy.lat(),
          'lng': xy.lng()
      }
      console.log(coords);
      coordinates.push(coords);
    //   console.log('Cordinate lat: ' + xy.lat() + ' and lng: ' + xy.lng());
      selectedShape = shape;
      shape.setEditable(true);
    //   selectColor(shape.get('fillColor') || shape.get('strokeColor'));
    }
    saveSelectedCoordinates(coordinates);    
}


function saveSelectedCoordinates(coordinates)
{
    console.log("Hi below mentioned are the coordinates");
    console.log(coordinates);
    showHeatMap(heatmapData);
}