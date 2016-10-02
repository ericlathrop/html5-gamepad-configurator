import React from "react";

export default function ButtonMapping({ gamepad, name, onMappingComplete }) {
  for (var i = 0; i < gamepad.gamepad.buttons.length; i++) {
    if (gamepad.gamepad.buttons[i].pressed) {
      clearMapping(gamepad, i);
      gamepad.mapping.buttons[name] = { index: i };
      onMappingComplete(name);
    }
  }
  return (
    <div>
      Press the "{name}" button on the controller.
    </div>
  );
}

function clearMapping(gamepad, index) {
  var mappings = gamepad.mapping.buttons;
  var names = Object.keys(mappings);
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (mappings[name].index === index) {
      delete mappings[name];
    }
  }
}
