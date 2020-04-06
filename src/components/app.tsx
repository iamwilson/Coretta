// core
import * as React from 'react';
import { connect } from 'react-redux';
import { PublicRoute } from './routing';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { Notification } from '@sebgroup/react-components/dist/Notification';

// components
import Loader from './common/loader';
const Home = React.lazy(() => import('./home'));
// const Login = React.lazy(() => import('./login/login'));
import Login from './login/login';
const NotFound = React.lazy(() => import('./common/notFound'));

// misc
import * as routePath from '../constants/routePaths';
import { AlertType } from '../models/alertTypes';
import { IAppSharedProps } from '../models/reduxModel';

interface IAppProps extends IAppSharedProps {
    isLoading: any;

    triggerAlert: (msg: string, type?: any) => void;
}

interface IAppState {
    language: any;
    alertToggle: boolean;
    alertType: AlertType;
    alertMessage: string;
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            alertMessage: '',
            alertToggle: false,
            alertType: AlertType.Success,
            language: ''
        };
        this.triggerAlert = this.triggerAlert.bind(this);
    }

    triggerAlert(message: string, type: AlertType) {
        this.setState({
            alertMessage: message,
            alertToggle: true,
            alertType: type
        });
    }

    render() {
        const sharedProps = {
            language: this.state.language,
            triggerAlert: this.triggerAlert
        };

        return (
            <div className='app-container'>
                <Loader showLoader={this.props.isLoading > 0} />
                <Notification
                    dismissable={true}
                    message={this.state.alertMessage}
                    theme={this.state.alertType}
                    title='Notification'
                    toggle={this.state.alertToggle}
                    onDismiss={() => { this.setState({ alertToggle: false }); }}
                />
                <React.Suspense fallback={<Loader showLoader={true} />}>
                    <Switch>
                        <Route exact={true} path={routePath.AppRoutes.Root} render={() => <Redirect to={routePath.AppRoutes.Login} />} />
                        <PublicRoute path={routePath.AppRoutes.Login} component={Login} props={sharedProps} />
                        <PublicRoute path={routePath.AppRoutes.Home} component={Home} props={sharedProps} />
                        <PublicRoute path={routePath.AppRoutes.NotFound} component={NotFound} props={sharedProps} />
                    </Switch>
                </React.Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.loadingResponse
    };
};

export default withRouter(connect(mapStateToProps)(App));
