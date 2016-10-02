import gamepads from "html5-gamepad";
import GamepadDiagram from "./gamepad-diagram";
import GamepadRawData from "./gamepad-raw-data";
import React from "react";
import requestAnimationFrame from "./request-animation-frame";

function update(props) {
  var gamepad = gamepads[props.number || 0];
  if (!gamepad) {
    return {};
  }
  return { timestamp: gamepad.gamepad.timestamp };
}

export default requestAnimationFrame(update, function Gamepad(props) {
  var { number } = props;
  var gp = gamepads[number];
  if (!gp) {
    return null;
  }

  return (
    <div>
      <div>{gp.gamepad.id}</div>
      <GamepadRawData gamepad={gp} />
      <GamepadDiagram gamepad={gp} onClick={props.onClick} />
    </div>
  );
});
