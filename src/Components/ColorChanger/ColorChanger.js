import React, { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import ColorizedText from "../ColorizedText/ColorizedText";

const ColorChanger = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  return (
    <div className="column twelve wide">
      <h2 className="ui teal image header">Welcome to Color Changer</h2>
      <ColorForm selectedColor={selectedColor} onColorSelect={setSelectedColor}/>
      <ColorizedText textColor={selectedColor} />
    </div>
  );
};

export default ColorChanger;
