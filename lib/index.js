import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { browserHistory, IndexRoute, Route, Router } from "react-router";

import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducer";
import App from "./pages/app";
import Contact from "./pages/contact";
import HomePage from "./pages/home-page";

import "../css/index.scss";

const routes = (
	<Route component={App}
		path="/">
		<IndexRoute component={HomePage} />
		<Route component={Contact}
			path="contact-us" />
	</Route>
);

const store = applyMiddleware(thunkMiddleware)(createStore)(reducer);

render(<Provider store={store}>
	<Router history={browserHistory} routes={routes} />
</Provider>, document.getElementById("container"));
