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

interface ILoginProps extends IAppSharedProps {
	actions: any;
	loginResult: any;
}

interface ILoginState {
	credentials: Credentials;
	errors: Credentials;
}

const appName = 'Coretta';

export default function Login() {
	const [count, setCount] = useState(0);
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo03'
					aria-controls='navbarTogglerDemo03'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<a className='navbar-brand' href='#'>
					Navbar
				</a>

				<div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
						<li className='nav-item active'>
							<a className='nav-link' href='#'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Link
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link disabled' href='#'>
								Disabled
							</a>
						</li>
					</ul>
					<form className='form-inline my-2 my-lg-0'>
						<input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' />
						<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
							Search
						</button>
					</form>
				</div>
			</nav>
			<div className='container-fluid jumbotron'>
				<div className='row'>
					<div className='col-md-4'>
						<p>Counter value is {count}</p>
					</div>
					<div className='col-md-4'>
						<button className='btn btn-outline-primary' onClick={() => setCount(count + 1)}>
							Increase
						</button>
					</div>
					<div className='col-md-4'>
						<button className='btn btn-dark' onClick={() => setCount(count - 1)}>
							Decrease
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

// class Login extends React.Component<ILoginProps, ILoginState> {
// 	constructor(props: ILoginProps) {
// 		super(props);

// 		this.state = {
// 			credentials: new Credentials(),
// 			errors: new Credentials()
// 		};
// 	}

// 	handleChange = (e: any) => {
// 		const key = e.target.name;
// 		const value = e.target.value;

// 		const credentialsObject: Credentials = { ...this.state.credentials };
// 		credentialsObject[key] = value;
// 		this.setState({ credentials: credentialsObject });
// 	};

// 	handleLogin = () => {
// 		this.props.history.replace('/home');
//     };

// 	render() {
// 		return (
// 			<div className='login-container'>
// 				<div className='login-masthead'>{appName}</div>
// 				<div className='login-wrapper'>
// 					<TextBox
// 						label='Username'
// 						name='username'
// 						type='text'
// 						placeHolder=''
// 						value={this.state.credentials.username}
// 						error={this.state.errors.username}
// 						onChange={this.handleChange}
// 					/>
// 					<TextBox
// 						label='Password'
// 						name='password'
// 						type='password'
// 						placeHolder=''
// 						value={this.state.credentials.password}
// 						error={this.state.errors.password}
// 						onChange={this.handleChange}
// 					/>
// 					<Button label='Login' onClick={this.handleLogin} />
// 				</div>

// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state: any) => {
// 	return {
// 		loginResult: state.login
// 	};
// };

// const mapDispatchToProps = (dispatch: any) => {
// 	return {
// 		actions: bindActionCreators(loginActions, dispatch)
// 	};
// };

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
