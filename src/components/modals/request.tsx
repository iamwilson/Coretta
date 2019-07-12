// core
import * as React from 'react';

interface IRequestProps {
    payLoad: any;
    toggleRequest: boolean;

    closeModal: () => void;
}

const handleChange = () => {
    //
};

const Request: React.SFC<IRequestProps> = (props: IRequestProps) => {
    return (
        <div className={props.toggleRequest ? 'modal -open' : 'modal'} >
            <div className='modal-content'>
                <div className='md-header'>
                    <h1 className='md-title'>Request</h1>
                    <h1 className='md-close-icon' onClick={() => props.closeModal()}> <i className='fa fa-times-circle' aria-hidden='true' /></h1>
                </div>
                <div className='md-body'>
                    <div className='col-md-12'>
                        <div>
                            <div>
                                <textarea className='context-input' rows={7} value={props.payLoad} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='md-button-row'>
                        <div className='float-right'>
                            <button className='btn btn-sm btn-margin btn-light btn-ghost' onClick={() => props.closeModal()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Request;
