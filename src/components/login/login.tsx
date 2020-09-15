// core
import * as React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@sebgroup/react-components/dist/Button';
import { TextBox } from '@sebgroup/react-components/dist/TextBox';

// misc
import { IAppSharedProps } from '../../models/reduxModel';
import { Credentials } from '../../models/credentials';
import * as loginActions from '../../actions/loginActions';

// refernces
/// <reference path="../../models/petstore" />

interface ILoginProps extends IAppSharedProps {
	actions: any;
	loginResult: any;
}

interface ILoginState {
	credentials: Credentials;
	errors: Credentials;
}

interface user extends Definitions.User {}

const appName = 'Coretta';

class Login extends React.Component<ILoginProps, ILoginState> {
	constructor(props: ILoginProps) {
		super(props);

		this.state = {
			credentials: new Credentials(),
			errors: new Credentials(),
		};
	}

	handleChange = (e: any) => {
		const key = e.target.name;
		const value = e.target.value;

		const credentialsObject: Credentials = { ...this.state.credentials };
		credentialsObject[key] = value;
		this.setState({ credentials: credentialsObject });
	};

	handleLogin = () => {
      this.props.history.replace('/home');
        
      
	};

	render() {
		return (
			<>
				<div className='login-container'>
					<div className='login-masthead'>{appName}</div>
					<div className='login-wrapper'>
						<TextBox
							label='Username'
							name='username'
							type='text'
							placeHolder=''
							value={this.state.credentials.username}
							error={this.state.errors.username}
							onChange={this.handleChange}
						/>
						<TextBox
							label='Password'
							name='password'
							type='password'
							placeHolder=''
							value={this.state.credentials.password}
							error={this.state.errors.password}
							onChange={this.handleChange}
						/>
						<Button label='Login' onClick={this.handleLogin} />
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		loginResult: state.login,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(loginActions, dispatch),
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Login)
);
