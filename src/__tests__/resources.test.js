/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import resources from "../reducers/resources";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

test("should return state +1 ", () => {
	expect(resources(0, { type: "INCREMENT" })).toBe(1);
});

test("Should return -1 ", () => {
	expect(resources(0, { type: "DECREMENT" })).toBe(-1);
});

test("Should be state", () => {
	expect(resources(0, { type: "uknkow" })).toBe(0);
});
