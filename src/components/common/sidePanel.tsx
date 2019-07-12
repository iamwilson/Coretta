// core
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// misc
import * as routePath from '../../constants/routePaths';

const CorettaLogo: string = require('../../assets/images/coretta_mast.png');

const SidePanel = () => {
    return (
        <div className='side-bar-container'>
            <div className='app-name-container'>
                <a className='app-name' href='#/home'>
                    <img className='app-logo' src={'../../assets/images/coretta_mast.png'} />
                    Coretta
                </a>
            </div>
            <div className='app-menu'>
                <NavLink className='menu-item' activeClassName='active' to={routePath.HomeRoutes.Create} replace={true}><i className='menu-icon fa fa-folder-open' />Create</NavLink>
                <NavLink className='menu-item' activeClassName='active' to={routePath.HomeRoutes.Manage} replace={true}><i className='menu-icon fa fa-file-text' />Manage</NavLink>
                <NavLink className='menu-item' activeClassName='active' to={routePath.HomeRoutes.Simulate} replace={true}><i className='menu-icon fa fa-tachometer' />Simulate</NavLink>
            </div>
            <div className='app-version'>Version 1.0.0</div>
        </div>
    );
};

export default SidePanel;
