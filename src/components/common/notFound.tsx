// core
import * as React from 'react';

const NotFound = () => {
    return (
        <div className='notfound-container container-fluid'>
            <div id='clouds'>
                <div className='cloud c1'/>
                <div className='cloud c2'/>
                <div className='cloud c3'/>
                <div className='cloud c4'/>
                <div className='cloud c5'/>
                <div className='cloud c6'/>
                <div className='not-found'/>
                <span className='pull-left'><b>404</b>. <span className='not-found-caption'>The page was not found</span></span>
            </div>
        </div>
    );
};

export default NotFound;
