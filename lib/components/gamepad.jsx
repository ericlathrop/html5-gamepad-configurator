import GamepadLib from "html5-gamepad";
import React from "react";
import requestAnimationFrame from "./request-animation-frame";

var buttonNames = [
  "a",
  "b",
  "x",
  "y",
  "left shoulder",
  "right shoulder",
  "back",
  "start",
  "home",
  "left stick",
  "right stick",
  "left stick left",
  "left stick right",
  "left stick up",
  "left stick down",
  "left trigger",
  "right stick left",
  "right stick right",
  "right stick up",
  "right stick down",
  "right trigger",
  "dpad left",
  "dpad right",
  "dpad up",
  "dpad down"
];

var gp = new GamepadLib();

function update() {
  gp.update();
  return { gamepad: gp };
}

export default requestAnimationFrame(update, function Gamepad({ gamepad }) {
  var buttons = buttonNames.map(name => {
    var className = name.replace(/ /g, "-");
    if (gamepad.button(0, name)) {
      className += " active";
    }
    return (<button className={className} key={name} />);
  });

  return (
    <div className="gamepad">
      {buttons}
    </div>
  );
});
