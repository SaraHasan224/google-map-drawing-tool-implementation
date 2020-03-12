    function showHeatMap(heatmapData)
    {
        newHeatMap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
        });
        newHeatMap.setMap(map);
    }
    

function clearHeatMap(newHeatMap) {
    if (newHeatMap) {
        newHeatMap.setMap(null);
    }
}
function clearAllHeatMap() {
    for (var i = 0; i < oldMarkers.length; i++ ) {
        oldMarkers[i].setMap(null);
    }
    oldMarkers.length = 0;
    oldMarkers = [];
}
