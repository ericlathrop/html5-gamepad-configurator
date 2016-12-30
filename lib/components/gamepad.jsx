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
  var buttonStates = gamepad.gamepad.buttons.map(button => button.pressed);
  var updatedButtons = (buttons || List()).merge(buttonStates);

  navigator.getGamepads(); // fix for chrome
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


function exportMapping(gamepad) {
  var mapping = gamepad.mapping;
  mapping.supported.length = 0;
  mapping.supported.push(generateSupported(gamepad, navigator.userAgent));
  mapping.name = generateName(mapping.supported[0]);

  var jsonMapping = JSON.stringify(mapping, null, 2);
  var issue = generateIssue(mapping.name, jsonMapping);

  window.open("https://github.com/ericlathrop/html5-gamepad/issues/new?title=" + encodeURIComponent(issue.title) + "&body=" + encodeURIComponent(issue.body));
}

function generateIssue(name, jsonMapping) {
  return {
    title: "Mapping for " + name,
    body: "Please include this mapping:\n\n```\n" + jsonMapping + "\n```"
  };
}

function generateName(supported) {
  return supported.id + " " + supported.browser + " " + supported.os;
}

function generateSupported(gamepad, ua) {
  return {
    browser: getBrowser(ua),
    id: gamepad.gamepad.id,
    os: getOperatingSystem(ua)
  };
}

function getBrowser(ua) {
  if (ua.indexOf("Chrome")) {
    return "Chrome";
  }
  if (ua.indexOf("Firefox")) {
    return "Firefox";
  }
  return ua;
}

function getOperatingSystem(ua) {
  if (ua.indexOf("Windows NT")) {
    return "Windows NT";
  }
  if (ua.indexOf("Mac OS X")) {
    return "Mac OS X";
  }
  if (ua.indexOf("Linux")) {
    return "Linux";
  }
  return ua;
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
    <div className="gamepad-container">
      <div>{gamepad.gamepad.id}</div>
      <GamepadRawData gamepad={gamepad} />
      <div className="gamepad-panels">
        <GamepadDiagram
          gamepad={gamepad}
          onClickAxis={mapper.beginMappingAxis}
          onClickButton={mapper.beginMappingButton} />
        {mapping}
      </div>
      <button onClick={exportMapping.bind(undefined, gamepad)}>Export to Github (must be logged in)</button>
    </div>
  );
}));
