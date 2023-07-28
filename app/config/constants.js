import { fileIcon, ai, logoShirt, stylishShirt, swatch } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch.src,
  },
  {
    name: "filepicker",
    icon: fileIcon.src,
  },
  {
    name: "aipicker",
    icon: ai.src,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt.src,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt.src,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
