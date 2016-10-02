import buttonNames from "../button-names";
import GamepadDiagramButton from "./gamepad-diagram-button";
import React from "react";

export default function GamepadDiagram({ gamepad, onClick }) {
  var buttons = buttonNames.map(name => <GamepadDiagramButton key={name} name={name} onClick={onClick} pressed={gamepad.button(name)} />);

  return (
    <div className="gamepad">
      {buttons}
    </div>
  );
}

