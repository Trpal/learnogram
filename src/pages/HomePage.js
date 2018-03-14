import React, { Component } from "react";
import PropTypes from "prop-types";

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
			</div>
		);
	}
}

HomePage.propTypes = {
	test: PropTypes.string.isRequired
};

export default HomePage;
