import React from "react";
import { SketchPicker } from "react-color";
import { useStateContext } from "@/context/stateContext";

const ColorPicker = () => {
  const { setColor, color } = useStateContext();

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={color}
        disableAlpha
        onChange={(color) => setColor(color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
