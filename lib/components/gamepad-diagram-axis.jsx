import pure from "./pure";
import React from "react";

export default pure(function GamepadDiagramAxis({ name, onClick, value }) {
  // var className = name.replace(/ /g, "-");
  return (
    <button
      className={"gamepad-diagram-axis"}
      name={name}
      onClick={e => onClick(e.target.name)}
      title={name}>
      <div className="gamepad-diagram-axis-value" style={{ width: ((1.0 + value) / 2.0) * 100.0 + "%" }} />
    </button>);
});
