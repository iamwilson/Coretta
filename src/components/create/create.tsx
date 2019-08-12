// core
import * as React from 'react';
import { Button } from '@sebgroup/react-components/dist/Button';
import { TextBox } from '@sebgroup/react-components/dist/TextBox';

interface ICreateProps {
    actions: any;
}

interface ICreateState {
    data: any;
}

class Create extends React.Component<ICreateProps, ICreateState> {
    constructor(props: ICreateProps) {
        super(props);

        this.state = {
            data: []
        };
    }

    handleChange = (e: any) => {
        const key = e.target.name;
        const value = e.target.value;

        // const credentialsObject: Credentials = { ...this.state.credentials };
        // credentialsObject[key] = value;
        // this.setState({ credentials: credentialsObject });

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
                            value=''
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

            </div>
        );
    }
}

export default Create;
