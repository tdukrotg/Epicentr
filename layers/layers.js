var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Epicentrarea_0 = new ol.format.GeoJSON();
var features_Epicentrarea_0 = format_Epicentrarea_0.readFeatures(json_Epicentrarea_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Epicentrarea_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Epicentrarea_0.addFeatures(features_Epicentrarea_0);var lyr_Epicentrarea_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Epicentrarea_0, 
                style: style_Epicentrarea_0,
                title: '<img src="styles/legend/Epicentrarea_0.png" /> Epicentr area'
            });var format_Epicentrbuild_1 = new ol.format.GeoJSON();
var features_Epicentrbuild_1 = format_Epicentrbuild_1.readFeatures(json_Epicentrbuild_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Epicentrbuild_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Epicentrbuild_1.addFeatures(features_Epicentrbuild_1);var lyr_Epicentrbuild_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Epicentrbuild_1, 
                style: style_Epicentrbuild_1,
                title: '<img src="styles/legend/Epicentrbuild_1.png" /> Epicentr build'
            });var format_Epicentr_2 = new ol.format.GeoJSON();
var features_Epicentr_2 = format_Epicentr_2.readFeatures(json_Epicentr_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Epicentr_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Epicentr_2.addFeatures(features_Epicentr_2);var lyr_Epicentr_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Epicentr_2, 
                style: style_Epicentr_2,
                title: '<img src="styles/legend/Epicentr_2.png" /> Epicentr'
            });

lyr_Epicentrarea_0.setVisible(true);lyr_Epicentrbuild_1.setVisible(true);lyr_Epicentr_2.setVisible(true);
var layersList = [baseLayer,lyr_Epicentrarea_0,lyr_Epicentrbuild_1,lyr_Epicentr_2];
lyr_Epicentrarea_0.set('fieldAliases', {'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Epicentrbuild_1.set('fieldAliases', {'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Epicentr_2.set('fieldAliases', {'Name': 'Name', });
lyr_Epicentrarea_0.set('fieldImages', {'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Epicentrbuild_1.set('fieldImages', {'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Epicentr_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_Epicentrarea_0.set('fieldLabels', {'Name': 'inline label', 'Shape_Leng': 'header label', 'Shape_Area': 'inline label', });
lyr_Epicentrbuild_1.set('fieldLabels', {'Name': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Epicentr_2.set('fieldLabels', {'Name': 'inline label', });
lyr_Epicentr_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});