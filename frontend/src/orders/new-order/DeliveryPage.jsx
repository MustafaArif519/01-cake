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

export default function DeliveryPage({ updateForm, form }) {
  const [formValue, setFormValue] = useState(form);

  const [selectedOption, setSelectedOption] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    setFormValue(form);
  }, [form])

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
      <MDBValidationItem className='mb-3 pb-1' feedback='Please enter a message in the textarea.' invalid>
        <MDBTextArea
          label='Textarea'
          id='validationTextarea'
          placeholder='Required example textarea'
          required
        />
      </MDBValidationItem>
      <MDBValidationItem className='mb-2 pb-1' invalid feedback='Example invalid feedback text.'>
        <MDBCheckbox label='Check this checkbox' id='validationFormCheck1' required />
      </MDBValidationItem>
      <MDBRadio label='Toggle this radio' required id='validationFormCheck2' name='radio-stacked' />
      <MDBValidationItem invalid feedback='More example invalid feedback text.'>
        <MDBRadio
          className = "radio"
          label='Or toggle this other radio'
          required
          id='validationFormCheck3'
          name='radio-stacked'
        />
      </MDBValidationItem>

      <MDBValidationItem
        className='mt-3 mb-5'
        feedback='Example invalid form file feedback'
        invalid
      >
        <input type='file' multiple className='form-control' aria-label='file example' required />
      </MDBValidationItem>
      <div>
        <MDBBtn type='submit' disabled>
          Submit form
        </MDBBtn>
      </div>

    </>

  );
}