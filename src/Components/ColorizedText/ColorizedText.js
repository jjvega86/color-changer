import React from "react";

const ColorizedText = ({ textColor }) => {
  return (
    <h3 style={{ color: textColor }}>This is the text to be colorized!</h3>
  );
};

export default ColorizedText;
