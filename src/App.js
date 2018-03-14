import React from "react";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
	<Provider store={store}>
		<div>
			<HomePage test="123" />
		</div>
	</Provider>
);

export default App;
