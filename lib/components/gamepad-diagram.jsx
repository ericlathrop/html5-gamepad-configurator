import axisNames from "../axis-names";
import buttonNames from "../button-names";
import GamepadDiagramButton from "./gamepad-diagram-button";
import React from "react";

export default function GamepadDiagram({ gamepad, onClickAxis, onClickButton }) {
  var axes = axisNames.map(name => <GamepadDiagramButton key={name} name={name} onClick={onClickAxis} pressed={gamepad.axis(name) !== 0} />);
  var buttons = buttonNames.map(name => <GamepadDiagramButton key={name} name={name} onClick={onClickButton} pressed={gamepad.button(name)} />);

  return (
    <div className="gamepad">
      {axes}
      {buttons}
    </div>
  );
}

