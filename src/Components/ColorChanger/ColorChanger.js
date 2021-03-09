import React from "react";
import ColorForm from "../ColorForm/ColorForm";

const ColorChanger = (props) => {
  return (
    <div className="column twelve wide">
      <h2 className="ui teal image header">Welcome to Color Changer</h2>
      <ColorForm />
    </div>
  );
};

export default ColorChanger;
