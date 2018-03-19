/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import resources from "../src/reducers/resources";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
