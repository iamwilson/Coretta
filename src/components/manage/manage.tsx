// core
import * as React from 'react';
import { TextBox } from '@sebgroup/react-components/dist/TextBox';

interface IManageProps {
 actions: any;
}

interface IManageState {
 data: any;
}

class Manage extends React.Component<IManageProps, IManageState> {
 storedProcList = {
  agreement: [{ field: 'Agreement' }, { field: 'Person' }, { field: 'Group' }],
  person: {
   agreementNumber: '',
   ssn: ''
  },
  group: {
   groupId: ''
  }
 };

 data = [{ name: 'Agreement' }, { name: 'Person' }, { name: 'Group' }];

 listItems1 = this.data.map((a: any) => (
  <option key={a.name} value={a.name}>
   {a.name}
  </option>
 ));

 listItems2 = Object.keys(this.storedProcList).map((key, index) => (
  <option key={key} value={key}>
   {key}
  </option>
 ));

 inputItems1 = this.data.map((a: any) => (
  <TextBox
   className='mr-4'
   key={a.name}
   name={a.name}
   value={null}
   label={a.name}
   type='text'
   placeHolder={a.name}
   error=''
   onChange={this.handleChange}
   // tslint:disable-next-line:jsx-alignment
  />
 ));

 inputItems2 = this.storedProcList.agreement.map((a: any) => (
  <TextBox
   className='mr-4'
   key={a.field}
   name={a.field}
   value={null}
   label={a.field}
   type='text'
   placeHolder={a.field}
   error=''
   onChange={this.handleChange}
   // tslint:disable-next-line:jsx-alignment
  />
 ));

 constructor(props: IManageProps) {
  super(props);

  this.state = {
   data: []
  };
 }

 componentDidMount() {
  //
 }

 handleChange = (e: any) => {
  const key = e.target.name;
  const value = e.target.value;
 };

 render() {
  return (
   <div className='container-fluid manage-container'>
    Manage goes here !
    <div className='col-md-12'>
     <div className='row mt-4 mb-4'>
      {console.log(this.storedProcList)}
      {/* <select name='cars'>{this.listItems1}</select> */}
     </div>

     <div className='row mt-4 mb-4'>{/*this.inputItems1 */}</div>

     <div className='row mt-4 mb-4'>
      <select name='cars'>{this.listItems2}</select>
     </div>

     <div className='row mt-4 mb-4'>{this.inputItems2}</div>

     <div className='row mt-4 mb-4'>execute button</div>
    </div>
   </div>
  );
 }
}

export default Manage;
