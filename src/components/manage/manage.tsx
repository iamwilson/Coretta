// core
import * as React from 'react';

interface IManageProps {
    actions: any;
}

interface IManageState {
    data: any;
}

class Manage extends React.Component<IManageProps, IManageState> {
    constructor(props: IManageProps) {
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
            <div className='container-fluid manage-container'>
                Manage goes here  !
            </div>
        );
    }
}

export default Manage;
