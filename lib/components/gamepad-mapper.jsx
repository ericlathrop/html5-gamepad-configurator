import ButtonMapping from "./button-mapping";
import GamepadDiagram from "./gamepad-diagram";
import GamepadRawData from "./gamepad-raw-data";
import React from "react";

export default class GamepadMapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centeredAxes: this.props.gamepad.gamepad.axes.slice(0)
    };
    this.onClick = this.onClick.bind(this);
    this.onMappingComplete = this.onMappingComplete.bind(this);
  }

  onClick(button) {
    console.log(button);

    if (this.state.buttonMapping === button) {
      this.setState({ buttonMapping: undefined }); // eslint-disable-line react/no-set-state
    } else {
      this.setState({ buttonMapping: button }); // eslint-disable-line react/no-set-state
    }
  }

  onMappingComplete() {
    this.setState({ buttonMapping: undefined }); // eslint-disable-line react/no-set-state
  }

  render() {
    var { gamepad } = this.props;
    var mapping;
    if (this.state.buttonMapping) {
      mapping = <ButtonMapping centeredAxes={this.state.centeredAxes} gamepad={gamepad} name={this.state.buttonMapping} onMappingComplete={this.onMappingComplete} />;
    }
    return (
      <div>
        <div>{gamepad.gamepad.id}</div>
        <GamepadRawData gamepad={gamepad} />
        <GamepadDiagram gamepad={gamepad} onClick={this.onClick} />
        {mapping}
      </div>
    );
  }
}

