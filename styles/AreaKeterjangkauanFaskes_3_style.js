var size = 0;
var placement = "point";
function categories_AreaKeterjangkauanFaskes_3(
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
  switch (value.toString()) {
    case "sangat terjangkau":
      return [
        new ol.style.Style({
          fill: new ol.style.Fill({ color: "rgba(0,156,37,0.4)" }),
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
      break;
    case "terjangkau":
      return [
        new ol.style.Style({
          fill: new ol.style.Fill({ color: "rgba(111,211,89,0.5)" }),
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
      break;
    case "kurang terjangkau":
      return [
        new ol.style.Style({
          fill: new ol.style.Fill({ color: "rgba(238,237,3,0.6)" }),
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
      break;
    default:
      return [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "rgba(35,35,35,0.7)",
            lineDash: null,
            lineCap: "butt",
            lineJoin: "miter",
            width: 0,
          }),
          fill: new ol.style.Fill({
            color: "rgba(166,166,166,0.11764705882352941)",
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
      break;
  }
}

var style_AreaKeterjangkauanFaskes_3 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };
  var value = feature.get("keterangan");
  var labelText = "";
  size = 0;
  var labelFont = "10px, sans-serif";
  var labelFill = "#000000";
  var bufferColor = "";
  var bufferWidth = 0;
  var textAlign = "left";
  var offsetX = 8;
  var offsetY = 3;
  var placement = "point";
  if ("" !== null) {
    labelText = String("");
  }

  var style = categories_AreaKeterjangkauanFaskes_3(
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
