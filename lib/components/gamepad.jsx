import React from "react";

var buttonNames = [
  "a",
  "b",
  "x",
  "y",
  "leftShoulder",
  "rightShoulder",
  "back",
  "start",
  "home",
  "leftStick",
  "rightStick",
  "leftStickLeft",
  "leftStickRight active",
  "leftStickUp",
  "leftStickDown",
  "leftTrigger",
  "rightStickLeft",
  "rightStickRight",
  "rightStickUp",
  "rightStickDown",
  "rightTrigger",
  "dpadLeft",
  "dpadRight",
  "dpadUp",
  "dpadDown"
];

export default function Gamepad() {
  var buttons = buttonNames.map(name => <button className={name} key={name} />);
  return (
    <div className="controllerDiagram">
      {buttons}
    </div>
  );
}
