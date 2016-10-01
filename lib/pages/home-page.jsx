import { connect } from "react-redux";
import Gamepad from "../components/gamepad";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1>HTML5 Gamepad Configurator</h1>
      <Gamepad onClick={button => console.log(button)} />
    </div>
  );
}

function select(state) {
  return state;
}

export default connect(select)(HomePage);
