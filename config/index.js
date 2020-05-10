import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "panelled-skirt",
  version,
  design: "Roopin619",
  code: "Roopin619",
  department: "womenswear",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {},
  measurements: ["naturalWaist","hipsCircumference"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["waistband", "panel"],
  options: {
    panelLength: { mm: 533.4, min: 406.4, max: 660.4 },
    waistBandWidth: { mm: 76.2, min: 25.4, max: 127 },
    numOfPanels: { count: 8, min: 4, max: 14 },
    naturalWaistToHip: { mm: 203.2, min: 127, max: 279.4 },
    hemExcess: { mm: 0, min: -76.2, max: 203.2 }
  }
};
