import { fileIcon, logoShirt, stylishShirt, swatch, download } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch.src,
  },
  {
    name: "filepicker",
    icon: fileIcon.src,
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
  {
    name: "downloadImage",
    icon: download.src,
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
