    function showHeatMap(heatmapData)
    {
        heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
        });
        heatmap.setMap(map);
    }