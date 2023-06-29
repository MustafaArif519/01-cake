import React, { useState, useEffect } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBRadio,
  MDBTextArea
} from 'mdb-react-ui-kit';
import './style.css';

export default function EventPage({ updateForm, form }) {
  //const [formValue, setFormValue] = useState(form);

  const [selectedOption, setSelectedOption] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  // useEffect(() => {
  //   console.log(formValue);
  //   setFormValue(form);
  //   console.log(formValue);
  // }, [form])

  const onChange = (e) => {
    // console.log(formValue);
    updateForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleOptionChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);

    // Check if option is selected and update showOtherInput state accordingly
    setShowOtherInput(value === 'other');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if an option is selected
    if (!selectedOption) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    console.log('Form submitted!');

  };
  return (
    <>
    {/* {console.log(formValue.name)} */}
    <h1>Personal Information</h1>
    <div className='section'>
    <MDBValidationItem className='field' invalid feedback='' >
          <MDBInput
            value={form.name}
            name='name'
            onChange={onChange}
            id='validationCustom01'
            required
            label='Full name'
          />
        </MDBValidationItem>
        <MDBValidationItem className='field' isValidated>
          <MDBInput
            value={form.pNumber}
            name='pNumber'
            onChange={onChange}
            id='validationCustom02'
            required
            label='Phone Number'
          />
        </MDBValidationItem>
    </div>
        
        <h1>Event Information</h1>
        
  <div className='section'>
  <div className = "radio">
  <h3>Event Type</h3>
        <MDBValidationItem  feedback=''>
    <MDBRadio
      name='flexRadioDefault'
      id='flexRadioDefault1'
      value="option1"
      defaultChecked={selectedOption === 'option1'}
      onChange={handleOptionChange}
      label = "Wedding"

    />

    <MDBRadio
      name='flexRadioDefault'
      id='flexRadioDefault2'
      value="option2"
      defaultChecked={selectedOption === 'option2'}
      onChange={handleOptionChange}
      label = "Graduation"
    />

    <MDBRadio
      name='flexRadioDefault'
      id='flexRadioDefault3'
      value="other"
      checked={selectedOption === 'other'}
      onChange={handleOptionChange}
      label = "Birthday"
    />


  {showOtherInput && (
    <div style={{ marginLeft: '20px', marginRight: '0px' }}>
  <MDBInput
    label="Other Option Details"
    onChange={() => {}}
    required
    style={{ width: '200px' }}
    className={isInvalid ? 'is-invalid' : ''}
  />
</div>
  )}

  {isInvalid && <div className="invalid-feedback">Please select an option.</div>}
</MDBValidationItem>
  </div>
        
<MDBValidationItem className='field' invalid feedback='' >
          <MDBInput
            value={form.eventDate}
            name='date'
            onChange={onChange}
            id='validationCustom05'
            required
            label='Event Date'
          />
        </MDBValidationItem>
  <MDBValidationItem className='field' invalid feedback=''>
          <MDBTextArea
            value={form.eventDetails}
            name='eventDetails'
            onChange={onChange}
            id='validationCustom01'
            required
            label='Event Details (Optional)'
            style = {{width: "400px", height: "200px"}}
          />
        </MDBValidationItem>
        </div>
    </>

  );
}