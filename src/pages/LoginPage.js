import React, { Component } from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, logout } from "../actions/user";
import LoginForm from "../forms/LoginForm";

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.onLogin = this.onLogin.bind(this);
		this.onLogout = this.onLogout.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onLogin(e) {
		console.log("asd");
		e.preventDefault();
		this.props.onLogin("teppo");
	}

	onLogout() {
		this.props.onLogout();
	}

	onSubmit = e => {
		e.preventDefault();
		console.log("submit");
	};

	render() {
		return (
			<div>
				<Jumbotron>
					<h1>Loginpage</h1>
					{!this.props.isLoggedIn && <LoginForm submit={this.onSubmit} />}
					{this.props.isLoggedIn && (
						<Button color="danger" onClick={this.onLogout}>
							logout
						</Button>
					)}
				</Jumbotron>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isLoggedIn: !!state.users.loggedIn,
	user: state.users.user
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
