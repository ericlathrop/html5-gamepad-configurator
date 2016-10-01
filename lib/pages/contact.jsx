import { connect } from "react-redux";
import React from "react";

let Contact = () => <h1>Contact Us</h1>;

function select(state) {
  return state;
}

export default connect(select)(Contact);
