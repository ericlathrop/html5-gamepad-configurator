import pure from "./pure";
import React from "react";

export default pure(function GamepadDiagramAxis({ name, onClick, xValue, yValue }) {
  return (
    <button
      className={"gamepad-diagram-stick"}
      name={name}
      onClick={e => onClick(e.target.name)}
      title={name}>
      <div className="gamepad-diagram-stick-pos" style={{ left: ((1.0 + xValue) / 2.0) * 100.0 + "%", top: ((1.0 + yValue) / 2.0) * 100.0 + "%" }} />
    </button>);
});
