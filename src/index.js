import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/index";

const store = createStore(
	rootReducer,
	{
		login: false,
	},
	composeWithDevTools()
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
