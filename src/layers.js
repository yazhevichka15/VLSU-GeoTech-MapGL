export const accidentsLayer = {
  id: "dtp-data-layer",

  filter: ["all", ["match", ["sourceAttr", "visible"], [true], true, false]],

  type: "point",

  style: {
    iconImage: "danger.svg",
    iconWidth: 13,

    textField: ["get", "light"],
    textFont: ["Noto_Sans"],
    textSize: 12,

    textColor: "#000",
    textHaloColor: "#fff",
    textHaloWidth: 2,
    textOffset: [0, -1.5],
    textAllowOverlap: false,

    iconPriority: 100,
    textPriority: 200,
  },
};
