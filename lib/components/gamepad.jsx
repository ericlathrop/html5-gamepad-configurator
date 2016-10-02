import gamepads from "html5-gamepad";
import GamepadMapper from "./gamepad-mapper";
import React from "react";
import requestAnimationFrame from "./request-animation-frame";

function update(props) {
  var gamepad = gamepads[props.number || 0];
  if (!gamepad) {
    return {};
  }
  return { timestamp: gamepad.gamepad.timestamp };
}

export default requestAnimationFrame(update, function Gamepad() {
  var mappers = gamepads.map((gamepad, i) => <GamepadMapper gamepad={gamepad} key={i} />);
  return (
    <div>
      {mappers}
    </div>
  );
});
