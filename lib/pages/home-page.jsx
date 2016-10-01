import { connect } from "react-redux";
import Gamepad from "../components/gamepad";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1>HTML5 Gamepad Configurator</h1>
      <Gamepad />
    </div>
  );
}

function select(state) {
  return state;
}

export default connect(select)(HomePage);
