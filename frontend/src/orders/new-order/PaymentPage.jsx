import React, { useState, useEffect } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
  MDBRadio
} from 'mdb-react-ui-kit';
import './style.css';

export default function PaymentPage({ updateForm, form }) {
    const [formValue, setFormValue] = useState({
      fname: 'Mark',
      lname: 'Otto',
      email: '',
      city: '',
      state: '',
      zip: '',
    });
  
    const onChange = (e) => {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };
  
    return (
      <MDBValidation className='row g-3'>
        <MDBValidationItem className='fields'>
          <MDBInput
            value={formValue.fname}
            name='fname'
            onChange={onChange}
            id='validationCustom01'
            required
            label='First name'
          />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-4'>
          <MDBInput
            value={formValue.lname}
            name='lname'
            onChange={onChange}
            id='validationCustom02'
            required
            label='Last name'
          />
        </MDBValidationItem>
        <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
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
        <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
          <MDBInput
            value={formValue.city}
            name='city'
            onChange={onChange}
            id='validationCustom03'
            required
            label='City'
          />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
          <MDBInput
            value={formValue.zip}
            name='zip'
            onChange={onChange}
            id='validationCustom05'
            required
            label='Zip'
          />
        </MDBValidationItem>
        <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
          <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
        </MDBValidationItem>
        <div className=''>
          
          <MDBBtn type=''>Reset form</MDBBtn>
        </div>
      </MDBValidation>
    );
  }