import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";
import App from "./pages/app";
import HomePage from "./pages/home-page";

import "../css/index.scss";
import "../public/index.html";

const store = applyMiddleware(thunkMiddleware)(createStore)(reducer);

render(<Provider store={store}>
  <App>
    <HomePage />
  </App>
</Provider>, document.getElementById("container"));
