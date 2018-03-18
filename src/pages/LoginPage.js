import React, { Component } from "react";
import { Button, Icon, Row, Col } from "react-materialize";

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
	}
	render() {
		return <h1>LoginPage</h1>;
	}
}

export default LoginPage;
