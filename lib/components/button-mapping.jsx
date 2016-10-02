import React from "react";

export default function ButtonMapping({ centeredAxes, gamepad, name, onMappingComplete }) {
  for (var i = 0; i < gamepad.gamepad.buttons.length; i++) {
    if (gamepad.gamepad.buttons[i].pressed) {
      clearMappingButton(gamepad, i);
      gamepad.mapping.buttons[name] = { index: i };
      onMappingComplete(name);
    }
  }
  for (i = 0; i < gamepad.gamepad.axes.length; i++) {
    var val = gamepad.gamepad.axes[i];
    if (val < -0.75 && Math.abs(val - centeredAxes[i]) > 0.5) {
      clearMappingAxis(gamepad, i, -1);
      gamepad.mapping.buttons[name] = { axis: i, direction: -1 };
      onMappingComplete(name);
    } else if (val > 0.75 && Math.abs(val - centeredAxes[i]) > 0.5) {
      clearMappingAxis(gamepad, i, 1);
      gamepad.mapping.buttons[name] = { axis: i, direction: 1 };
      onMappingComplete(name);
    }
  }
  return (
    <div>
      Press the "{name}" button on the controller.
    </div>
  );
}

function clearMappingAxis(gamepad, axis, direction) {
  var mappings = gamepad.mapping.buttons;
  var names = Object.keys(mappings);
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (mappings[name].axis === axis && mappings[name].direction === direction) {
      delete mappings[name];
    }
  }
}

function clearMappingButton(gamepad, index) {
  var mappings = gamepad.mapping.buttons;
  var names = Object.keys(mappings);
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (mappings[name].index === index) {
      delete mappings[name];
    }
  }
}
