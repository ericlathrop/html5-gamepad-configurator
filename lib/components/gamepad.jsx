import AxisMapping from "./axis-mapping";
import ButtonMapping from "./button-mapping";
import GamepadDiagram from "./gamepad-diagram";
import GamepadMapper from "../gamepad-mapper";
import GamepadRawData from "./gamepad-raw-data";
import { List } from "immutable";
import pure from "./pure";
import React from "react";
import requestAnimationFrame from "./request-animation-frame";

function update({ gamepad }, { axes, buttons, mapper }) {
  if (!gamepad) {
    return {};
  }
  var updatedAxes = (axes || List()).merge(gamepad.gamepad.axes);
  var updatedButtons = (buttons || List()).merge(gamepad.gamepad.buttons);
  if (!mapper) {
    mapper = new GamepadMapper(gamepad);
  } else {
    mapper.update();
  }
  return {
    axes: updatedAxes,
    buttons: updatedButtons,
    mapper,
    mappingTarget: mapper.mappingTarget,
    mappingType: mapper.mappingType
  };
}

export default requestAnimationFrame(update, pure(function Gamepad({ gamepad, mapper, mappingTarget, mappingType }) {
  if (!gamepad) {
    return null;
  }
  var mapping;
  if (mappingType === "axis" && mappingTarget) {
    mapping = <AxisMapping name={mappingTarget} />;
  } else if (mappingType === "button" && mappingTarget) {
    mapping = <ButtonMapping name={mappingTarget} />;
  }
  return (
    <div>
      <div>{gamepad.gamepad.id}</div>
      <GamepadRawData gamepad={gamepad} />
      <GamepadDiagram
        gamepad={gamepad}
        onClickAxis={mapper.beginMappingAxis}
        onClickButton={mapper.beginMappingButton} />
      {mapping}
    </div>
  );
}));
