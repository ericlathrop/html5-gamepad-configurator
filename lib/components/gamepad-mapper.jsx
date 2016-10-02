import GamepadDiagram from "./gamepad-diagram";
import GamepadRawData from "./gamepad-raw-data";
import React from "react";

export default class GamepadMapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick(button) {
    console.log(button);

  }

  render() {
    var { gamepad, onClick } = this.props;
    return (
      <div>
        <div>{gamepad.gamepad.id}</div>
        <GamepadRawData gamepad={gamepad} />
        <GamepadDiagram gamepad={gamepad} onClick={this.onClick} />
      </div>
    );
  }
}
