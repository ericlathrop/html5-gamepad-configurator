import buttonNames from "../button-names";
import GamepadDiagramAxis from "./gamepad-diagram-axis";
import GamepadDiagramButton from "./gamepad-diagram-button";
import GamepadDiagramStick from "./gamepad-diagram-stick";
import React from "react";

export default function GamepadDiagram({ gamepad, onClickAxis, onClickButton }) {
  var buttons = buttonNames.map(name => <GamepadDiagramButton key={name} name={name} onClick={onClickButton} pressed={gamepad.button(name)} />);

  return (
    <div className="gamepad">
      <GamepadDiagramStick name="left stick" onClick={onClickAxis} xValue={gamepad.axis("left stick x")} yValue={gamepad.axis("left stick y")} />
      <GamepadDiagramStick name="right stick" onClick={onClickAxis} xValue={gamepad.axis("right stick x")} yValue={gamepad.axis("right stick y")} />
      <GamepadDiagramStick name="dpad" onClick={onClickAxis} xValue={gamepad.axis("dpad x")} yValue={gamepad.axis("dpad y")} />
      <GamepadDiagramAxis name="left trigger" onClick={onClickAxis} value={gamepad.axis("left trigger")} />
      <GamepadDiagramAxis name="right trigger" onClick={onClickAxis} value={gamepad.axis("right trigger")} />
      {buttons}
    </div>
  );
}

