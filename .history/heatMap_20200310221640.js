var newHeatMap;
//INITIALIZE ALL GLOBAL ARRAYS
var oldHeatMaps = [];


function showHeatMap(heatmapData)
{
    newHeatMap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData
    });
    newHeatMap.setMap(map);
    // SAVE OLD HEAT MAPS IN AN ARRAY
    oldHeatMaps.push(newHeatMap);
}

function updateMap(heatMap) {
    //Clear CURRENT HEAT MAP
    clearHeatMap(heatMap);
    // UPDATE HEAT MAP
    showHeatMap(heatMap);
}

function clearHeatMap(newHeatMap) {
    // CLEAR CURRENT HEAT MAP ONLY
    if (newHeatMap) {
        newHeatMap.setMap(null);
    }
}

function clearAllHeatMap() {
    // CLEAR ARRAY OF ALL OLD HEAT MAPS
    for (var i = 0; i < oldHeatMaps.length; i++ ) {
        oldHeatMaps[i].setMap(null);
    }
    oldHeatMaps.length = 0;
    oldHeatMaps = [];
}