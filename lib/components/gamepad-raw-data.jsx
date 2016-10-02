import GamepadAxes from "./gamepad-axes";
import GamepadButtons from "./gamepad-buttons";
import React from "react";

export default function GamepadRawData({ gamepad }) {
  return (
    <div className="gamepad-raw-data">
      <GamepadAxes gamepad={gamepad} />
      <GamepadButtons gamepad={gamepad} />
    </div>
  );
}
