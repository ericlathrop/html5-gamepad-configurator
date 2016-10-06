import gamepads from "html5-gamepad";
import Gamepad from "./gamepad";
import React from "react";

export default class GamepadList extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    window.addEventListener("gamepadconnected", this.update);
    window.addEventListener("gamepaddisconnected", this.update);
  }

  componentWillUnmount() {
    window.removeEventListener("gamepadconnected", this.update);
    window.removeEventListener("gamepaddisconnected", this.update);
  }

  update() {
    this.setState({ time: window.performance.now() }); // eslint-disable-line react/no-set-state
  }

  render() {
    if (gamepads.length === 0) {
      return (
        <div>Connect and press a button on a gamepad to begin.</div>
      );
    }
    var mappers = gamepads.map((gamepad, i) => <Gamepad gamepad={gamepad} key={i} />);
    return (
      <div>
        {mappers}
      </div>
    );
  }
}
