    function showHeatMap(heatmapData)
    {
        newHeatMap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
        });
        newHeatMap.setMap(map);
        oldHeatMaps.push(newHeatMap);
    }
    

function clearHeatMap(newHeatMap) {
    if (newHeatMap) {
        newHeatMap.setMap(null);
    }
}
function clearAllHeatMap() {
    for (var i = 0; i < oldMarkers.length; i++ ) {
        oldHeatMaps[i].setMap(null);
    }
    oldHeatMaps.length = 0;
    oldHeatMaps = [];
}
