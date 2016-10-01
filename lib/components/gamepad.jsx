import GamepadLib from "html5-gamepad";
import pure from "./pure";
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

function update(props) {
  gp.update();
  return buttonNames.reduce((newState, name) => {
    newState[name] = gp.button(props.number || 0, name);
    return newState;
  }, {});
}

export default requestAnimationFrame(update, pure(function Gamepad(props) {
  var buttons = buttonNames.map(name => {
    var className = name.replace(/ /g, "-");
    if (props[name]) {
      className += " active";
    }
    return (<button className={className} key={name} />);
  });

  return (
    <div className="gamepad">
      {buttons}
    </div>
  );
}));
