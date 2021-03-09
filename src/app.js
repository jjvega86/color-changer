import React from "react";
import ColorChanger from "./Components/ColorChanger/ColorChanger";

const App = () => {
  return (
    <div className="ui one column stackable center aligned page grid">
      <div className="four wide column"></div>
      <div className="four wide column"></div>
      <div className="four wide column"></div>
      <ColorChanger />
    </div>
  );
};

export default App;
