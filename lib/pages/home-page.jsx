import { connect } from "react-redux";
import React from "react";

let HomePage = () => <h1>Home Page</h1>;

function select(state) {
  return state;
}

export default connect(select)(HomePage);
