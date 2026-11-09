var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PetaTKTanggulangin_Utm_1 = new ol.format.GeoJSON();
var features_PetaTKTanggulangin_Utm_1 = format_PetaTKTanggulangin_Utm_1.readFeatures(json_PetaTKTanggulangin_Utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaTKTanggulangin_Utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaTKTanggulangin_Utm_1.addFeatures(features_PetaTKTanggulangin_Utm_1);
var lyr_PetaTKTanggulangin_Utm_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaTKTanggulangin_Utm_1, 
                style: style_PetaTKTanggulangin_Utm_1,
                popuplayertitle: 'Peta TK Tanggulangin_Utm',
                interactive: true,
                title: '<img src="styles/legend/PetaTKTanggulangin_Utm_1.png" /> Peta TK Tanggulangin_Utm'
            });
var format_JALURMASUK_2 = new ol.format.GeoJSON();
var features_JALURMASUK_2 = format_JALURMASUK_2.readFeatures(json_JALURMASUK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALURMASUK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALURMASUK_2.addFeatures(features_JALURMASUK_2);
var lyr_JALURMASUK_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALURMASUK_2, 
                style: style_JALURMASUK_2,
                popuplayertitle: 'JALUR MASUK',
                interactive: true,
                title: '<img src="styles/legend/JALURMASUK_2.png" /> JALUR MASUK'
            });
var format_JALANSETAPAKKEHATI_3 = new ol.format.GeoJSON();
var features_JALANSETAPAKKEHATI_3 = format_JALANSETAPAKKEHATI_3.readFeatures(json_JALANSETAPAKKEHATI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANSETAPAKKEHATI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANSETAPAKKEHATI_3.addFeatures(features_JALANSETAPAKKEHATI_3);
var lyr_JALANSETAPAKKEHATI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANSETAPAKKEHATI_3, 
                style: style_JALANSETAPAKKEHATI_3,
                popuplayertitle: 'JALAN SETAPAK KEHATI',
                interactive: true,
                title: '<img src="styles/legend/JALANSETAPAKKEHATI_3.png" /> JALAN SETAPAK KEHATI'
            });
var format_INFRASTRUKTUR_4 = new ol.format.GeoJSON();
var features_INFRASTRUKTUR_4 = format_INFRASTRUKTUR_4.readFeatures(json_INFRASTRUKTUR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INFRASTRUKTUR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFRASTRUKTUR_4.addFeatures(features_INFRASTRUKTUR_4);
var lyr_INFRASTRUKTUR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFRASTRUKTUR_4, 
                style: style_INFRASTRUKTUR_4,
                popuplayertitle: 'INFRASTRUKTUR',
                interactive: true,
                title: '<img src="styles/legend/INFRASTRUKTUR_4.png" /> INFRASTRUKTUR'
            });
var format_RUMAHWARGA_5 = new ol.format.GeoJSON();
var features_RUMAHWARGA_5 = format_RUMAHWARGA_5.readFeatures(json_RUMAHWARGA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHWARGA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHWARGA_5.addFeatures(features_RUMAHWARGA_5);
var lyr_RUMAHWARGA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHWARGA_5, 
                style: style_RUMAHWARGA_5,
                popuplayertitle: 'RUMAH WARGA',
                interactive: true,
                title: '<img src="styles/legend/RUMAHWARGA_5.png" /> RUMAH WARGA'
            });
var format_JALURKELUAR_6 = new ol.format.GeoJSON();
var features_JALURKELUAR_6 = format_JALURKELUAR_6.readFeatures(json_JALURKELUAR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALURKELUAR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALURKELUAR_6.addFeatures(features_JALURKELUAR_6);
var lyr_JALURKELUAR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALURKELUAR_6, 
                style: style_JALURKELUAR_6,
                popuplayertitle: 'JALUR KELUAR',
                interactive: true,
                title: '<img src="styles/legend/JALURKELUAR_6.png" /> JALUR KELUAR'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PetaTKTanggulangin_Utm_1.setVisible(true);lyr_JALURMASUK_2.setVisible(true);lyr_JALANSETAPAKKEHATI_3.setVisible(true);lyr_INFRASTRUKTUR_4.setVisible(true);lyr_RUMAHWARGA_5.setVisible(true);lyr_JALURKELUAR_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PetaTKTanggulangin_Utm_1,lyr_JALURMASUK_2,lyr_JALANSETAPAKKEHATI_3,lyr_INFRASTRUKTUR_4,lyr_RUMAHWARGA_5,lyr_JALURKELUAR_6];
lyr_PetaTKTanggulangin_Utm_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Keterangan': 'Keterangan', });
lyr_JALURMASUK_2.set('fieldAliases', {'id': 'id', });
lyr_JALANSETAPAKKEHATI_3.set('fieldAliases', {'Id': 'Id', });
lyr_INFRASTRUKTUR_4.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', 'FOTO': 'FOTO', });
lyr_RUMAHWARGA_5.set('fieldAliases', {'id': 'id', });
lyr_JALURKELUAR_6.set('fieldAliases', {'id': 'id', });
lyr_PetaTKTanggulangin_Utm_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_JALURMASUK_2.set('fieldImages', {'id': 'TextEdit', });
lyr_JALANSETAPAKKEHATI_3.set('fieldImages', {'Id': 'Range', });
lyr_INFRASTRUKTUR_4.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_RUMAHWARGA_5.set('fieldImages', {'id': '', });
lyr_JALURKELUAR_6.set('fieldImages', {'id': 'TextEdit', });
lyr_PetaTKTanggulangin_Utm_1.set('fieldLabels', {'Name': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Keterangan': 'hidden field', });
lyr_JALURMASUK_2.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_JALANSETAPAKKEHATI_3.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_INFRASTRUKTUR_4.set('fieldLabels', {'Id': 'no label', 'KETERANGAN': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr_RUMAHWARGA_5.set('fieldLabels', {'id': 'no label', });
lyr_JALURKELUAR_6.set('fieldLabels', {'id': 'no label', });
lyr_JALURKELUAR_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});