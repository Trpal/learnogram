import React from "react";
import { Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ResourcesPage from "./pages/ResourcesPage";

const App = ({ location }) => (
	<Container>
		<Row>
			<Col s={12} l={8} offset="l2" className="grid-example">
				<Route location={location} path="/" exact component={HomePage} />
				<Route location={location} path="/login" exact component={LoginPage} />
				<Route
					location={location}
					path="/resources"
					exact
					component={ResourcesPage}
				/>
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
