import React from "react";
import ColorForm from "../ColorForm/ColorForm";
import ColorizedText from '../ColorizedText/ColorizedText';

const ColorChanger = (props) => {
  return (
    <div className="column twelve wide">
      <h2 className="ui teal image header">Welcome to Color Changer</h2>
      <ColorForm />
      <ColorizedText />
    </div>
  );
};

export default ColorChanger;
