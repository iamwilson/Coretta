// core
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// misc
import TextBoxComponent from '../elements/textBox';
import { setToken } from '../../utils/tokenHelper';
import { Credentials } from '../../models/credentials';
import * as validation from '../../utils/validationHelper';
import * as loginActions from '../../actions/loginActions';
import { responseInterceptor } from '../../utils/interceptors';

interface ILoginProps {
  actions: any;
  history: any;
  language: any;
  loginResult: any;
}

interface ILoginState {
  credentials: Credentials;
  errors: Credentials;
}

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      credentials: new Credentials(),
      errors: new Credentials()
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    const key = e.target.name;
    const value = e.target.value;

    this.validateFields(key, value);
    const credentialsObject: Credentials = {...this.state.credentials};
    credentialsObject[key] = value;
    this.setState({ credentials: credentialsObject });

  }

  validateFields(key: any, value: any) {
    const errors = new Credentials();

    switch (key) {
      case 'username':
        if (!validation.IsInputNotNull(value)) { errors.username = this.props.language.loginComponent.errors.username; }
        break;
      case 'password':
        if (!validation.IsInputNotNull(value)) { errors.password = this.props.language.loginComponent.errors.password; }
        break;
      default: break;
    }

    const errorObject = { ...this.state.errors, [key]: errors[key] };
    this.setState({ errors: errorObject });

  }

  handleLogin() {
    this.props.actions.loginUser(this.state.credentials).then(() => {
      responseInterceptor(
        this.props.loginResult,
        (data: any) => {
          setToken(data);
        },
        (error: any) => {
          //
        }
      );
      this.props.history.replace('/home');
    });

  }

  render() {
    const hasError = Object.keys(this.state.errors).some((key) => this.state.errors[key] !== '');
    const areEmpty = Object.keys(this.state.credentials).some((key) => this.state.credentials[key] === '');

    return (
      <div className='login-container'>
        <div className='login-welcome'>Coretta</div>
        <div className='login-wrapper'>
          <TextBoxComponent
            label={this.props.language.loginComponent.labels.username}
            name='username'
            type='text'
            focus={true}
            placeholder={this.props.language.loginComponent.placeholders.username}
            value={this.state.credentials.username}
            error={this.state.errors.username}
            onChange={this.handleChange}
          />
          <TextBoxComponent
            label={this.props.language.loginComponent.labels.password}
            name='password'
            type='password'
            placeholder={this.props.language.loginComponent.placeholders.password}
            value={this.state.credentials.password}
            error={this.state.errors.password}
            onChange={this.handleChange}
          />
          <button className='btn btn-login' disabled={hasError || areEmpty} onClick={this.handleLogin}>{this.props.language.buttons.login}</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loginResult: state.login
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
};

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Login));
