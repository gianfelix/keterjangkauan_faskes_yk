var size = 0;
var placement = "point";

var style_BatasAdministrasiKecamatan_4 = function (feature, resolution) {
  var context = {
    feature: feature,
    variables: {},
  };
  var value = "";
  var labelText = "";
  size = 0;
  var labelFont = "18px \'Open Sans\', sans-serif";
  var labelFill = "rgba(0,0,0,0.8)";
  var bufferColor = "#fafafa";
  var bufferWidth = 1.3;
  var textAlign = "left";
  var offsetX = 8;
  var offsetY = 3;
  var placement = "point";
  if (feature.get("kecamatan") !== null) {
    labelText = String(feature.get("kecamatan"));
  }

  var style = [
    new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "rgba(35,35,35,0.7)",
        lineDash: null,
        lineCap: "round",
        lineJoin: "round",
        width: 1.5,
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

  return style;
};
