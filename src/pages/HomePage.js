import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Icon, Row, Col } from "react-materialize";

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
	}
	render() {
		return (
			<div>
				<h1>Learn-o-gram</h1>
				<Button baves="light">Login</Button>
			</div>
		);
	}
}

HomePage.propTypes = {
	test: PropTypes.string.isRequired
};

export default HomePage;
