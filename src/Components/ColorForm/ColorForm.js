import React, { useState } from "react";

const colorOptions = [
  {
    value: "red",
    text: "Red",
  },
  {
    value: "blue",
    text: "Blue",
  },
  {
    value: "yellow",
    text: "Yellow",
  },
  {
    value: "green",
    text: "Green",
  },
  {
    value: "purple",
    text: "Purple",
  },
];

const ColorForm = ({ onColorSelect }) => {
  const [isOpen, setOpen] = useState(false);
  const renderedOptions = colorOptions.map(({ value, text }) => {
    return (
      <div
        key={value}
        className="item"
        data-value={value}
        onClick={() => onColorSelect(value)}
      >
        {text}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label>Pick a color!</label>
        <div
          onClick={() => setOpen(!isOpen)}
          className={`ui selection dropdown ${isOpen ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className={`menu ${isOpen ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorForm;
