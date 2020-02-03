// core
import * as React from 'react';
import { Button } from '@sebgroup/react-components/dist/Button';
import { TextBox } from '@sebgroup/react-components/dist/TextBox';

interface ICreateProps {
    actions: any;
}

interface ICreateState {
    data: any;
    orgNumber: number;
    total: number;
}

class Create extends React.Component<ICreateProps, ICreateState> {
    constructor(props: ICreateProps) {
        super(props);

        this.state = {
            data: [],
            orgNumber: 0,
            total: 0
        };
    }

    handleChange = (e: any) => {
        const key = e.target.name;
        const value = e.target.value;

        this.setState({orgNumber : value}, () => { this.computeTotal()});

        // this.computeTotal();

    }

    computeTotal =() => {
        const total = this.state.orgNumber * 100;
        this.setState({ total });
    }

    getOrganization = () => {
        // this.props.history.replace('/home');
    }

    componentDidMount() {
        //
    }

    render() {
        return (
            <div className='container-fluid create-container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='header-wrapper'>
                            <b>Create Offering</b>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <TextBox
                            label='Organization Number'
                            name='orgNumber'
                            type='text'
                            placeHolder=''
                            value={this.state.orgNumber}
                            error=''
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='col-md-6'>
                        <div className='btn-org'>
                            <Button
                                label='Get Organization Number'
                                onClick={this.getOrganization}
                            />
                        </div>

                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <TextBox
                            label='Company Name'
                            name='companyName'
                            type='text'
                            placeHolder=''
                            value=''
                            error=''
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='col-md-6'>
                        <TextBox
                            label='Contact Person'
                            name='contactPerson'
                            type='text'
                            placeHolder=''
                            value=''
                            error=''
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                
                <div className='row'>
                    <div className='col-md-12'>
                        <label>{this.state.total}</label>
                    </div>
                </div>

            </div>
        );
    }
}

export default Create;
