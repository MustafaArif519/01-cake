import React, { useState, useEffect } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBRadio
} from 'mdb-react-ui-kit';

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
      <MDBValidation className='fields' isValidated >
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
        <MDBValidationItem className='field' invalid feedback=''>
          <MDBInput
            value={form.eventDetails}
            name='eventDetails'
            onChange={onChange}
            id='validationCustom01'
            required
            label='Event Details (Optional)'
          />
        </MDBValidationItem>
        <MDBValidationItem className="field" invalid feedback=''>
          <MDBRadio name='flexRadioDefault'
            id='flexRadioDefault2'
            label="Option 1"
            value="option1"
            defaultChecked={selectedOption === 'option1'}
            onChange={handleOptionChange} />

          <MDBRadio name='flexRadioDefault'
            id='flexRadioDefault2'
            label="Option 2"
            value="option2"
            defaultChecked={selectedOption === 'option2'}
            onChange={handleOptionChange} />
          <MDBRadio name='flexRadioDefault'
            id='flexRadioDefault2'
            label="Other"
            value="other"
            defaultChecked={selectedOption === 'other'}
            onChange={handleOptionChange} />
          {showOtherInput && (
            <MDBInput
              label="Other Option Details"
              onChange={() => { }}
              required
              className={isInvalid ? 'is-invalid' : ''}
            />
          )}
          {isInvalid && <div className="invalid-feedback">Please select an option.</div>}
        </MDBValidationItem>




      </MDBValidation>
    </>

  );
}