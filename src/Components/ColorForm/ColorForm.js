import React from "react";

const colorOptions = [
    {
        value: "red",
        text: "Red"
    },
    {
        value: "blue",
        text: "Blue"
    },
    {
        value: "yellow",
        text: "Yellow"
    },
    {
        value: "green",
        text: "Green"
    },
    {
        value: "purple",
        text: "Purple"
    },
]

const ColorForm = (props) => {

    const renderedOptions = colorOptions.map(({value, text}) => {
        return <option value={value}>{text}</option>
    })
  return (
    <div className="ui form">
      <div className="field">
        <label>Pick a color!</label>
        <select className="ui search dropdown">
          <option value="">Select Color</option>
          {renderedOptions}
        </select>
      </div>
    </div>
  );
};

export default ColorForm;
