import React, { Component } from "react";
import { Button } from "react-materialize";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, logout } from "../actions/user";

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.onLogin = this.onLogin.bind(this);
		this.onLogout = this.onLogout.bind(this);
	}

	onLogin() {
		this.props.onLogin();
	}

	onLogout() {
		this.props.onLogout();
	}

	render() {
		return (
			<div>
				<h1>LoginPage</h1>
				{!this.props.isLoggedIn && (
					<Button onClick={this.onLogin}>login</Button>
				)}
				{this.props.isLoggedIn && (
					<Button onClick={this.onLogout}>logout</Button>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: !!state.users.loggedIn
});

const mapActionsToProps = {
	onLogin: login,
	onLogout: logout
};

LoginPage.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
