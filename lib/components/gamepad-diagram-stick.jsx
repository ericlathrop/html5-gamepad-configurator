import pure from "./pure";
import React from "react";

export default pure(function GamepadDiagramStick({ name, onClick, xValue, yValue }) {
  var className = name.replace(/ /g, "-");
  return (
    <div className={className + " gamepad-diagram-stick"}>
      <div className="gamepad-diagram-stick-pos" style={{ left: ((1.0 + xValue) / 2.0) * 100.0 + "%", top: ((1.0 + yValue) / 2.0) * 100.0 + "%" }} />
      <button
        className="gamepad-diagram-stick-x"
        name={name + " x"}
        onClick={e => onClick(e.target.name)}
        title={name}>X</button>
      <button
        className="gamepad-diagram-stick-y"
        name={name + " y"}
        onClick={e => onClick(e.target.name)}
        title={name}>Y</button>
    </div>
  );
});
