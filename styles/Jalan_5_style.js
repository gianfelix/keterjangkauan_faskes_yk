var size = 0;
var placement = "point";
function categories_Jalan_5(
  feature,
  value,
  size,
  resolution,
  labelText,
  labelFont,
  labelFill,
  bufferColor,
  bufferWidth,
  placement
) {
  //                 switch(value.toString()) {case 'arteri':
  //                     return [ new ol.style.Style({
  //         stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 5}),
  //         text: createTextStyle(feature, resolution, labelText, labelFont,
  //                               labelFill, placement, bufferColor,
  //                               bufferWidth)
  //     }),new ol.style.Style({
  //         stroke: new ol.style.Stroke({color: 'rgba(219,30,42,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
  //         text: createTextStyle(feature, resolution, labelText, labelFont,
  //                               labelFill, placement, bufferColor,
  //                               bufferWidth)
  //     })];
  //                     break;
  // case 'kolektor':
  //                     return [ new ol.style.Style({
  //         stroke: new ol.style.Stroke({color: 'rgba(219,30,42,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
  //         text: createTextStyle(feature, resolution, labelText, labelFont,
  //                               labelFill, placement, bufferColor,
  //                               bufferWidth)
  //     })];
  //                     break;
  // case 'lokal':
  //                     return [ new ol.style.Style({
  //         stroke: new ol.style.Stroke({color: 'rgba(219,30,42,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
  //         text: createTextStyle(feature, resolution, labelText, labelFont,
  //                               labelFill, placement, bufferColor,
  //                               bufferWidth)
  //     })];
  //                     break;
  // default:
  return [
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(211,12,16,0.7)",
        lineDash: null,
        lineCap: "square",
        lineJoin: "bevel",
        width: 1.3,
      }),
      text: createTextStyle(
        feature,
        resolution,
        labelText,
        labelFont,
        labelFill,
        placement,
        bufferColor,
        bufferWidth
      ),
    }),
  ];
}

var style_Jalan_5 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };
  var value = feature.get("Kls_jalan");
  var labelText = "";
  size = 0;
  var labelFont = "13.0px 'Open Sans', sans-serif";
  var labelFill = "#323232";
  var bufferColor = "";
  var bufferWidth = 0;
  var textAlign = "left";
  var offsetX = 8;
  var offsetY = 3;
  var placement = "line";
  if ("" !== null) {
    labelText = String("");
  }

  var style = categories_Jalan_5(
    feature,
    value,
    size,
    resolution,
    labelText,
    labelFont,
    labelFill,
    bufferColor,
    bufferWidth,
    placement
  );

  return style;
};
