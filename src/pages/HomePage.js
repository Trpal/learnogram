import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

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
				<h1>
					Learn-o-gram
				</h1>
				<Button bsStyle="primary" bsSize="large">
					Login
				</Button>
			</div>
		);
	}
}

HomePage.propTypes = {
	test: PropTypes.string.isRequired
};

export default HomePage;
