import React from "react";
import { Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = ({ location }) => (
	<Container>
		<Row>
			<Col s={12} l={8} offset="l2" className="grid-example">
				<Route location={location} path="/" exact component={HomePage} />
				<Route location={location} path="/login" exact component={LoginPage} />
			</Col>
		</Row>
	</Container>
);
App.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

export default App;
