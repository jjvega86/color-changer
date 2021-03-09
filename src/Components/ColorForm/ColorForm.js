import React from "react";

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
  const renderedOptions = colorOptions.map(({ value, text }) => {
    return (
        <div key={value} className="item" data-value={value}>{text}</div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label>Pick a color!</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="menu visible transition">
            <div className="item" data-value="0">Choose Color</div>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorForm;
