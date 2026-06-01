export const accidentsLayer = {
  id: "dtp-data-layer",

  filter: ["all", ["match", ["sourceAttr", "visible"], [true], true, false]],

  type: "point",

  style: {
    iconImage: "poi_cars_lab",
    iconWidth: 13,

    textField: ["get", "light"],

    textFont: ["Noto_Sans"],
    textSize: 12,

    textColor: "#000",
    textHaloColor: "#fff",
    textHaloWidth: 2,

    iconPriority: 100,
    textPriority: 200,
  },
};

export const heatmapLayer = {
  id: "dtp-heatmap-layer",

  filter: ["match", ["sourceAttr", "visible"], [true], true, false],

  type: "heatmap",

  style: {
    color: [
      "interpolate",
      ["linear"],
      ["heatmap-density"],

      0,
      "rgba(255, 255, 255, 0)",

      0.2,
      "#FCE4EC",

      0.4,
      "#F8BBD0",

      0.6,
      "#EC407A",

      0.8,
      "#D81B60",

      1,
      "#890017",
    ],

    radius: 20,
    intensity: 0.8,
    opacity: 0.8,
    downscale: 1,
  },
};
