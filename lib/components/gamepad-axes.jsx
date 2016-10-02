import React from "react";

export default function GamepadAxes({ gamepad }) {
  var items = gamepad.gamepad.axes.map((axis, i) => <li className={Math.abs(axis) > 0.1 ? "active" : ""} key={i}>{i}: {axis.toFixed(4)}</li>);
  return (
    <ol>
      {items}
    </ol>
  );
}
