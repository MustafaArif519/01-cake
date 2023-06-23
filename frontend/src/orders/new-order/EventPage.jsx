import React, { useState, useEffect } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem
} from 'mdb-react-ui-kit';

export default function EventPage({updateForm, form}) {
  const [formValue, setFormValue] = useState(form);

  useEffect(() =>{
    setFormValue(form);
  }, [form])

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };


  return (
    <>
    <MDBValidation className='fields' isValidated >
      <MDBValidationItem className='field' invalid feedback='' style={{ width: '200px' }}>
        <MDBInput
          value={formValue.name}
          name='name'
          onChange={onChange}
          id='validationCustom01'
          required
          label='Full name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='field' style={{ width: '200px' }}>
        <MDBInput
          value={formValue.lname}
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' className='field'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Username'
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      <MDBValidationItem className='field' feedback='Please provide a valid city.' >
        <MDBInput
          value={formValue.city}
          name='city'
          onChange={onChange}
          id='validationCustom03'
          required
          label='City'
        />
      </MDBValidationItem>
      <MDBValidationItem className='field' feedback='Please provide a valid zip.' >
        <MDBInput
          value={formValue.zip}
          name='zip'
          onChange={onChange}
          id='validationCustom05'
          required
          label='Zip'
        />
      </MDBValidationItem>
      <MDBValidationItem className='field' invalid feedback='You must agree before submitting.' >
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
      </MDBValidationItem>
      <div className=''>
        <MDBBtn type='submit'>Submit form</MDBBtn>
      </div>
    </MDBValidation>
    </>
    
  );
}