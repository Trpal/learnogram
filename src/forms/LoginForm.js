import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			data: {
				email: "",
				password: ""
			}
		};
	}

	onChange = e => {
		this.setState({
			...this.state,
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	onSubmit(e) {
		console.log(e);
		e.preventDefault();
		this.props.submit(this.state.data);
	}

	render() {
		const { data } = this.state;
		return (
			<Form onSubmit={e => this.onSubmit(e)}>
				<FormGroup>
					<Label for="email">Email</Label>
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="email@login.com"
						value={data.email}
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="password">Password</Label>
					<Input
						type="password"
						name="password"
						id="password"
						placeholder="password"
						value={data.password}
						onChange={this.onChange}
					/>
				</FormGroup>
				<Button color="primary">login</Button>
			</Form>
		);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

export default LoginForm;
