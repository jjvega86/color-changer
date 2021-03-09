import React from "react";

const ColorForm = (props) => {
  return (
    <div className="ui form">
      <div className="field">
        <label>Pick a color!</label>
        <select className="ui search dropdown">
          <option value="">Select Color</option>
        </select>
      </div>
    </div>
  );
};

export default ColorForm;
