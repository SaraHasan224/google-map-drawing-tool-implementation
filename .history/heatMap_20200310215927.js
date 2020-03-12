    function showHeatMap(heatmapData)
    {
        newHeatMap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
        });
        newHeatMap.setMap(map);
        // SAVE OLD HEAT MAPS IN AN ARRAY
        oldHeatMaps.push(newHeatMap);
    }
    

function clearHeatMap(newHeatMap) {
    // CLEAR CURRENT HEAT MAP ONLY
    if (newHeatMap) {
        newHeatMap.setMap(null);
    }
}
function clearAllHeatMap() {
    // CLEAR ARRAY OF ALL OLD HEAT MAPS
    for (var i = 0; i < oldMarkers.length; i++ ) {
        oldHeatMaps[i].setMap(null);
    }
    oldHeatMaps.length = 0;
    oldHeatMaps = [];
}


function updateMap(heatMap) {
    //Clear CURRENT HEAT MAP
    clearHeatMap(heatMap);
    // UPDATE HEAT MAP
    tripTracking(heatMap);
}