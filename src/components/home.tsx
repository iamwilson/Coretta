// core
import * as React from 'react';
import { connect } from 'react-redux';
import { PublicRoute } from './routing';
import { Switch, withRouter } from 'react-router-dom';

// components
import Dashboard from './dashboard/dashboard';
import DashboardSettings from './dashboard/dashboardSettings';
import Header from './common/header';
import SidePanel from './common/sidePanel';

// misc
import * as routePath from '../constants/routePaths';
import { IAppSharedProps } from '../models/reduxModel';
import Create from './create/create';
import Manage from './manage/manage';
import Simulate from './simulate/simulate';

interface IHomeProps extends IAppSharedProps {}

interface IHomeState {
    openSideBar: boolean;
}

class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
    }

    handleSideBar = () => {
        const isOpen = this.state.openSideBar === false ? true : false;
        this.setState({ openSideBar: isOpen });
    }

    handleCloseSideBar = () => {
        if (this.state.openSideBar === true) {
            this.setState({ openSideBar: false });
        }
    }

    render() {
        return (
            <div className='home-container'>
                <SidePanel />
                {/* <SidePanelComponent
                    openSideBar={this.state.openSideBar}
                    logOutUser={this.handleLogOut}
                    {...this.props}
                /> */}
                <div className='content-container'>
                    <Header />
                    <div className='container-fluid router-container'>
                        <Switch>
                            <PublicRoute
                                exact={true}
                                path={routePath.AppRoutes.Home}
                                component={Dashboard}
                                props={this.props}
                            />
                            <PublicRoute
                                path={routePath.HomeRoutes.Dashboard}
                                component={DashboardSettings}
                                props={this.props}
                            />
                            <PublicRoute
                                path={routePath.HomeRoutes.Create}
                                component={Create}
                                props={this.props}
                            />
                            <PublicRoute
                                path={routePath.HomeRoutes.Manage}
                                component={Manage}
                                props={this.props}
                            />
                            <PublicRoute
                                path={routePath.HomeRoutes.Simulate}
                                component={Simulate}
                                props={this.props}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, null)(Home));
