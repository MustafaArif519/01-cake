import React, { useState, useEffect, useRef } from 'react';
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
  //const [formValue, setFormValue] = useState(form);

  const [selectedOption, setSelectedOption] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('');
  const [showOtherInput2, setShowOtherInput2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState('');
  const [showOtherInput3, setShowOtherInput3] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState('');
  const [showOtherInput4, setShowOtherInput4] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  // useEffect(() => {
  //   console.log(formValue);
  //   setFormValue(form);
  //   console.log(formValue);
  // }, [form])

  const onChange = (e) => {
      console.log(e.target.value);
      updateForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleOptionChange = (e) => {
      // console.log(e);
      const { value } = e.target;
      setSelectedOption(value);

      // Check if option is selected and update showOtherInput state accordingly
      setShowOtherInput(value === '');
      onChange(e);
  };

  const handleOptionChange2 = (e) => {
      // console.log(e);
      const { value } = e.target;
      setSelectedOption2(value);

      // Check if option is selected and update showOtherInput state accordingly
      setShowOtherInput2(value === '');
      onChange(e);
  };

  const handleOptionChange3 = (e) => {
      // console.log(e);
      const { value } = e.target;
      setSelectedOption3(value);

      // Check if option is selected and update showOtherInput state accordingly
      setShowOtherInput3(value === '');
      onChange(e);
  };

  const handleOptionChange4 = (e) => {
      // console.log(e);
      const { value } = e.target;
      setSelectedOption4(value);

      // Check if option is selected and update showOtherInput state accordingly
      setShowOtherInput4(value === '');
      onChange(e);
  };

  const fileInputRef = useRef(null);

// Function to handle file selection
function handleFileSelect() {
  const selectedFiles = Array.from(fileInputRef.current.files); // Get the selected files

  // Do something with the selected files
  console.log(selectedFiles);
}

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
      <div className='section'>
        <div className="radio">
          <h3>Payment Method</h3>

          <MDBValidation isValidated>
            <MDBRadio
              name='paymentMethod'
              id='flexRadioDefault12'
              value="Venmo"
              defaultChecked={selectedOption3 === 'option1'}
              onChange={handleOptionChange3}
              required
              label="Venmo"

            />
            <MDBRadio
              name='paymentMethod'
              id='flexRadioDefault22'
              value="Zelle"
              defaultChecked={selectedOption3 === 'option2'}
              onChange={handleOptionChange3}
              required
              label="Zelle"

            />
            <MDBRadio
              name='paymentMethod'
              id='flexRadioDefault32'
              value="Cash"
              defaultChecked={selectedOption3 === 'option3'}
              onChange={handleOptionChange3}
              required
              label="Cash"

            />
            <MDBRadio
              name='paymentMethod'
              id='flexRadioDefault52'
              value=""
              defaultChecked={selectedOption3 === 'other'}
              onChange={handleOptionChange3}
              required
              label="Other"
            />
            {showOtherInput3 && (
              <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                <div className="">
                  <MDBInput
                    value={form.paymentMethod}
                    name='paymentMethod'
                    onChange={onChange}
                    id='validationCustom666'
                    required
                    label='Other'
                  />
                </div>
              </MDBValidationItem>
            )}

          </MDBValidation>
        </div>
      </div>

    </>
  );
}