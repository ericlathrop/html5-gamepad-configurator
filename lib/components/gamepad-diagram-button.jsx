import pure from "./pure";
import React from "react";

export default pure(function GamepadDiagramButton({ name, onClick, pressed }) {
  var className = name.replace(/ /g, "-");
  if (pressed) {
    className += " active";
  }
  return (
    <button
      className={className}
      name={name}
      onClick={e => onClick(e.target.name)}
      title={name} />);
});
