import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router";

let HomePage = ({ children }) => (<div>
  <h1>Header</h1>
  <div>
    <Link to="/">Home</Link>
    <Link to="/contact-us">Contact Us</Link>
  </div>
  {children}
</div>);


function select(state) {
  return state;
}

export default connect(select)(HomePage);
