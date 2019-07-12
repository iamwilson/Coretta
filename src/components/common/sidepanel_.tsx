// core
import * as React from 'react';
import { Link } from 'react-router-dom';

interface ISidePanelProps {
    language: any;
    openSideBar: boolean;
    logOutUser: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SidePanel: React.SFC<ISidePanelProps> = (props: ISidePanelProps) => {
    return (
        (
            <div id='sidebar' className={props.openSideBar ? 'open' : 'close'}>
                <Link className='sidebar-item' to='/home/department' replace={true}>{props.language.sidebarComponent.department}</Link>
                <Link className='sidebar-item' to='/home/about' replace={true}>{props.language.sidebarComponent.about}</Link>
                <Link className='sidebar-item' to='/home/offer' replace={true}>{props.language.offerComponent.title}</Link>
                <button className='sidebar-item-button' onClick={props.logOutUser} >{props.language.sidebarComponent.logout}</button>
            </div>
        )
    );
};

export default SidePanel;
