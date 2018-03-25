import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchResources } from "../actions/resource";

class ResourcesPage extends Component {
	constructor(props) {
		super(props);
		this.getResource = this.getResource.bind(this);
	}

	getResource() {
		console.log("asd");
		console.log(this.props);
		this.props.fetchResources();
	}

	render() {
		return (
			<div>
				<Jumbotron>
					<h1>ResourcesPage</h1>
					<Button color="danger" onClick={this.getResource}>
						getResource
					</Button>
				</Jumbotron>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	items: state.items
});

const mapActionsToProps = {
	fetchResources
};

ResourcesPage.propTypes = {
	fetchResources: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(ResourcesPage);
