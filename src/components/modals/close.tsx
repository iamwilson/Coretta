// core
import * as React from 'react';

interface ICloseProps {
    toggleClose: boolean;

    closeModal: () => void;
    closeTransaction: () => void;
}

const Close: React.SFC<ICloseProps> = (props: ICloseProps) => {
    return (
        <div className={props.toggleClose ? 'modal -open' : 'modal'} >
            <div className='modal-content'>
                <div className='md-header'>
                    <h1 className='md-title'>Confirmation</h1>
                    <h1 className='md-close-icon' onClick={() => props.closeModal()}> <i className='fa fa-times-circle' aria-hidden='true' /></h1>
                </div>
                <div className='md-body'>
                    <div className='col-md-12'>
                        <div>
                            Are you sure you want to close the transaction?
                            </div>
                    </div>
                    <div className='md-button-row'>
                        <div className='float-right'>
                            <button className='btn btn-sm btn-margin btn-light btn-ghost' onClick={() => props.closeModal()}>Cancel</button>
                            <button className='btn btn-sm btn-margin btn-primary' onClick={() => props.closeTransaction()}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Close;
