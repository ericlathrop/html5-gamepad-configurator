import { connect } from "react-redux";
import GamepadList from "../components/gamepad-list";
import React from "react";

function HomePage() {
  return (
    <div>
      <h1>HTML5 Gamepad Configurator</h1>
      <GamepadList />
    </div>
  );
}

function select(state) {
  return state;
}

export default connect(select)(HomePage);
