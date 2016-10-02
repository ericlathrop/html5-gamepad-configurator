import React from "react";

export default function GamepadButtons({ gamepad }) {
  var items = gamepad.gamepad.buttons.map((button, i) => <li className={button.pressed ? "active" : ""} key={i}>{i}: {button.pressed ? "true" : "false"}</li>);
  return (
    <ol>
      {items}
    </ol>
  );
}
