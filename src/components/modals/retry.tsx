// core
import * as React from 'react';

interface IRetryProps {
    context: any;
    toggleRetry: boolean;

    closeModal: () => void;
    continueTransaction: (data: any) => void;
    restartTransaction: () => void;
}

interface IRetryState {
    data: any;
}

class Retry extends React.PureComponent<IRetryProps, IRetryState> {
    constructor(props: IRetryProps) {
        super(props);

        this.state = {
            data: ''
        };
    }

    componentWillReceiveProps(nextProps: { context: any; }) {
        this.setState({ data: nextProps.context });
    }

    handleChange = (e: any) => {
        const value = e.target.value;
        this.setState({ data: value });
    }

    render() {
        return (
            <div className={this.props.toggleRetry ? 'modal -open' : 'modal'} >
                <div className='modal-content'>
                    <div className='md-header'>
                        <h1 className='md-title'>Transaction</h1>
                        <h1 className='md-close-icon' onClick={() => this.props.closeModal()}> <i className='fa fa-times-circle' aria-hidden='true' /></h1>
                    </div>
                    <div className='md-body'>
                        <div className='col-md-12'>
                            <div>
                                Context
                            <div>
                                    <textarea className='context-input' rows={4} value={this.state.data} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className='md-button-row'>
                            <div className='float-right'>
                                <button className='btn btn-sm btn-margin btn-light btn-ghost' onClick={() => this.props.closeModal()}>Cancel</button>
                                <button className='btn btn-sm btn-margin btn-primary' onClick={() => this.props.continueTransaction(this.state.data)}>Continue</button>
                                <button className='btn btn-sm btn-margin btn-outline-primary' onClick={() => this.props.restartTransaction()}>Restart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Retry;
