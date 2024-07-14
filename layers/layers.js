ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([104.639302, 9.093633, 106.538202, 10.103476]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kenh_utf8_2 = new ol.format.GeoJSON();
var features_kenh_utf8_2 = format_kenh_utf8_2.readFeatures(json_kenh_utf8_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_kenh_utf8_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenh_utf8_2.addFeatures(features_kenh_utf8_2);
var lyr_kenh_utf8_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenh_utf8_2, 
                style: style_kenh_utf8_2,
                popuplayertitle: "kenh_utf8",
                interactive: true,
    title: 'kenh_utf8<br />\
    <img src="styles/legend/kenh_utf8_2_0.png" /> Bình thường<br />\
    <img src="styles/legend/kenh_utf8_2_1.png" /> Đặc biệt nguy hiểm<br />\
    <img src="styles/legend/kenh_utf8_2_2.png" /> Nguy hiểm<br />'
        });
var format_rach_utf8_3 = new ol.format.GeoJSON();
var features_rach_utf8_3 = format_rach_utf8_3.readFeatures(json_rach_utf8_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_rach_utf8_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rach_utf8_3.addFeatures(features_rach_utf8_3);
var lyr_rach_utf8_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rach_utf8_3, 
                style: style_rach_utf8_3,
                popuplayertitle: "rach_utf8",
                interactive: true,
    title: 'rach_utf8<br />\
    <img src="styles/legend/rach_utf8_3_0.png" /> Bình Thường<br />\
    <img src="styles/legend/rach_utf8_3_1.png" /> Đặc biệt nghuy hiểm<br />\
    <img src="styles/legend/rach_utf8_3_2.png" /> Nguy hiểm<br />'
        });
var format_song_utf8_4 = new ol.format.GeoJSON();
var features_song_utf8_4 = format_song_utf8_4.readFeatures(json_song_utf8_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_song_utf8_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_song_utf8_4.addFeatures(features_song_utf8_4);
var lyr_song_utf8_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_song_utf8_4, 
                style: style_song_utf8_4,
                popuplayertitle: "song_utf8",
                interactive: true,
    title: 'song_utf8<br />\
    <img src="styles/legend/song_utf8_4_0.png" /> Bình Thường<br />\
    <img src="styles/legend/song_utf8_4_1.png" /> Đặc biệt nguy hiểm<br />\
    <img src="styles/legend/song_utf8_4_2.png" /> Nguy hiểm<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_kenh_utf8_2.setVisible(true);lyr_rach_utf8_3.setVisible(true);lyr_song_utf8_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_kenh_utf8_2,lyr_rach_utf8_3,lyr_song_utf8_4];
lyr_kenh_utf8_2.set('fieldAliases', {'ID': 'ID', 'kenh': 'kenh', 'muc_do': 'muc_do', 'tinh': 'tinh', });
lyr_rach_utf8_3.set('fieldAliases', {'ID': 'ID', 'ranh': 'ranh', 'mucdo': 'mucdo', 'tinh': 'tinh', });
lyr_song_utf8_4.set('fieldAliases', {'ID': 'ID', 'song': 'song', 'mucdo': 'mucdo', 'tinh': 'tinh', });
lyr_kenh_utf8_2.set('fieldImages', {'ID': 'TextEdit', 'kenh': 'TextEdit', 'muc_do': 'TextEdit', 'tinh': 'TextEdit', });
lyr_rach_utf8_3.set('fieldImages', {'ID': 'TextEdit', 'ranh': 'TextEdit', 'mucdo': 'TextEdit', 'tinh': 'TextEdit', });
lyr_song_utf8_4.set('fieldImages', {'ID': 'TextEdit', 'song': 'TextEdit', 'mucdo': 'TextEdit', 'tinh': 'TextEdit', });
lyr_kenh_utf8_2.set('fieldLabels', {'ID': 'no label', 'kenh': 'inline label - always visible', 'muc_do': 'inline label - always visible', 'tinh': 'inline label - always visible', });
lyr_rach_utf8_3.set('fieldLabels', {'ID': 'no label', 'ranh': 'inline label - always visible', 'mucdo': 'inline label - always visible', 'tinh': 'inline label - always visible', });
lyr_song_utf8_4.set('fieldLabels', {'ID': 'no label', 'song': 'inline label - always visible', 'mucdo': 'inline label - always visible', 'tinh': 'inline label - always visible', });
lyr_song_utf8_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});