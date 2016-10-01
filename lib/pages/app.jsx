import { connect } from "react-redux";
import React from "react";

let HomePage = ({ children }) => (<div>
  {children}
</div>);


function select(state) {
  return state;
}

export default connect(select)(HomePage);
