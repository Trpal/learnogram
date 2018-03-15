import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "Joni"
		};
	}
	render() {
		return (
			<div>
				<h1>
					HomePage {this.state.user} - {this.props.test}
				</h1>
				<Button bsStyle="primary" bsSize="large">
					test
				</Button>
			</div>
		);
	}
}

HomePage.propTypes = {
	test: PropTypes.string.isRequired
};

export default HomePage;
