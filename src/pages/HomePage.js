import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "test"
		};
	}
	render() {
		return (
			<div>
				<h1>Learn-o-gram {this.state.user}</h1>
				<Link href="/login" to="/login">
					Login
				</Link>
				<Link href="/resources" to="/resources">
					Resources
				</Link>
			</div>
		);
	}
}

export default HomePage;
