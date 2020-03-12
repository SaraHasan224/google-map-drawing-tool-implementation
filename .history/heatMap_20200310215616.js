    function showHeatMap(heatmapData)
    {
        heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
        });
        heatmap.setMap(map);
    }
    

function clearHeatMap(clearMarkerPosition) {
    if (clearMarkerPosition) {
        clearMarkerPosition.setMap(null);
    }
}
function clearAllHeatMap() {
    for (var i = 0; i < oldMarkers.length; i++ ) {
        oldMarkers[i].setMap(null);
    }
    oldMarkers.length = 0;
    oldMarkers = [];
}
