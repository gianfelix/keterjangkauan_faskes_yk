var wms_layers = [];

var lyr_GoogleRoad_0 = new ol.layer.Tile({
  title: "Google Road",
  type: "base",
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions:
      ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  }),
});

var lyr_GoogleSatellite_1 = new ol.layer.Tile({
  title: "Google Satellite",
  type: "base",
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions:
      ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  }),
});

var lyr_OSMStandard_2 = new ol.layer.Tile({
  title: "OSM Standard",
  type: "base",
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions:
      ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
    url: "http://tile.openstreetmap.org/{z}/{x}/{y}.png",
  }),
});
var format_AreaKeterjangkauanFaskes_3 = new ol.format.GeoJSON();
var features_AreaKeterjangkauanFaskes_3 =
  format_AreaKeterjangkauanFaskes_3.readFeatures(
    json_AreaKeterjangkauanFaskes_3,
    { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
  );
var jsonSource_AreaKeterjangkauanFaskes_3 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_AreaKeterjangkauanFaskes_3.addFeatures(
  features_AreaKeterjangkauanFaskes_3
);
var lyr_AreaKeterjangkauanFaskes_3 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_AreaKeterjangkauanFaskes_3,
  style: style_AreaKeterjangkauanFaskes_3,
  interactive: true,
  title:
    'Area Keterjangkauan Faskes<br />\
    <img src="styles/legend/AreaKeterjangkauanFaskes_3_0.png" /> Very Affordable<br />\
    <img src="styles/legend/AreaKeterjangkauanFaskes_3_1.png" /> Quite Affordable<br />\
    <img src="styles/legend/AreaKeterjangkauanFaskes_3_2.png" /> Less Affordable<br />\
    <img src="styles/legend/AreaKeterjangkauanFaskes_3_3.png" /> Not Affordable<br />',
});
var format_BatasAdministrasiKecamatan_4 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_4 =
  format_BatasAdministrasiKecamatan_4.readFeatures(
    json_BatasAdministrasiKecamatan_4,
    { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
  );
var jsonSource_BatasAdministrasiKecamatan_4 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_BatasAdministrasiKecamatan_4.addFeatures(
  features_BatasAdministrasiKecamatan_4
);
var lyr_BatasAdministrasiKecamatan_4 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_BatasAdministrasiKecamatan_4,
  style: style_BatasAdministrasiKecamatan_4,
  interactive: true,
  title:
    '<img src="styles/legend/batas_admin_kec.png" /> Batas Administrasi Kecamatan',
});
var format_Jalan_5 = new ol.format.GeoJSON();
var features_Jalan_5 = format_Jalan_5.readFeatures(json_Jalan_5, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:3857",
});
var jsonSource_Jalan_5 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_Jalan_5.addFeatures(features_Jalan_5);
var lyr_Jalan_5 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_Jalan_5,
  style: style_Jalan_5,
  interactive: true,
  title: `
    
    
    <img src="styles/legend/Jalan_5_3.png" /> Jalan <br />`,
});
var format_FasilitasKesehatan_6 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_6 = format_FasilitasKesehatan_6.readFeatures(
  json_FasilitasKesehatan_6,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:3857" }
);
var jsonSource_FasilitasKesehatan_6 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_FasilitasKesehatan_6.addFeatures(features_FasilitasKesehatan_6);
var lyr_FasilitasKesehatan_6 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_FasilitasKesehatan_6,
  style: style_FasilitasKesehatan_6,
  interactive: true,
  title:
    '<img src="styles/legend/FasilitasKesehatan_6.png" /> Fasilitas Kesehatan',
});

lyr_GoogleRoad_0.setVisible(true);
lyr_GoogleSatellite_1.setVisible(true);
lyr_OSMStandard_2.setVisible(true);
lyr_AreaKeterjangkauanFaskes_3.setVisible(true);
lyr_BatasAdministrasiKecamatan_4.setVisible(true);
lyr_Jalan_5.setVisible(true);
lyr_FasilitasKesehatan_6.setVisible(true);
var layersList = [
  lyr_GoogleRoad_0,
  lyr_GoogleSatellite_1,
  lyr_OSMStandard_2,
  lyr_AreaKeterjangkauanFaskes_3,
  lyr_BatasAdministrasiKecamatan_4,
  lyr_Jalan_5,
  lyr_FasilitasKesehatan_6,
];
lyr_AreaKeterjangkauanFaskes_3.set("fieldAliases", {
  FID_SA_tim: "FID_SA_tim",
  keterangan: "keterangan",
});
lyr_BatasAdministrasiKecamatan_4.set("fieldAliases", {
  kecamatan: "kecamatan",
});
lyr_Jalan_5.set("fieldAliases", {
  name: "name",
  Kls_jalan: "Kls_jalan",
  Panjang_JL: "Panjang_JL",
});
lyr_FasilitasKesehatan_6.set("fieldAliases", {
  Nama_RS: "Nama_RS",
  Kategori: "Kategori",
  Kecamatan: "Kecamatan",
  Easting: "Easting",
  Northing: "Northing",
  Field6: "Field6",
});
lyr_AreaKeterjangkauanFaskes_3.set("fieldImages", {
  FID_SA_tim: "TextEdit",
  keterangan: "TextEdit",
});
lyr_BatasAdministrasiKecamatan_4.set("fieldImages", { kecamatan: "TextEdit" });
lyr_Jalan_5.set("fieldImages", {
  name: "TextEdit",
  Kls_jalan: "TextEdit",
  Panjang_JL: "TextEdit",
});
lyr_FasilitasKesehatan_6.set("fieldImages", {
  Nama_RS: "TextEdit",
  Kategori: "TextEdit",
  Kecamatan: "TextEdit",
  Easting: "TextEdit",
  Northing: "TextEdit",
  Field6: "TextEdit",
});
lyr_AreaKeterjangkauanFaskes_3.set("fieldLabels", {
  FID_SA_tim: "no label",
  keterangan: "no label",
});
lyr_BatasAdministrasiKecamatan_4.set("fieldLabels", { kecamatan: "no label" });
lyr_Jalan_5.set("fieldLabels", {
  name: "no label",
  Kls_jalan: "no label",
  Panjang_JL: "no label",
});
lyr_FasilitasKesehatan_6.set("fieldLabels", {
  Nama_RS: "no label",
  Kategori: "no label",
  Kecamatan: "no label",
  Easting: "no label",
  Northing: "no label",
  Field6: "no label",
});
lyr_FasilitasKesehatan_6.on("precompose", function (evt) {
  evt.context.globalCompositeOperation = "normal";
});
