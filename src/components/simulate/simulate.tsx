// core
import * as React from 'react';

interface ISimulateProps {
    actions: any;
}

interface ISimulateState {
    data: any;
}

class Simulate extends React.Component<ISimulateProps, ISimulateState> {
    constructor(props: ISimulateProps) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <div className='container-fluid simulate-container'>
                Simulate goes here  !
            </div>
        );
    }
}

export default Simulate;
