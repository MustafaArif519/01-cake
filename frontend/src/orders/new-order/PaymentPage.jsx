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


  const [showOtherInput, setShowOtherInput] = useState(form.paymentMethod === "Other");


  const onChange = (e) => {
    console.log(e.target.value);
    updateForm({ ...form, [e.target.name]: e.target.value });
};

  useEffect(() => {
    setShowOtherInput(form.paymentMethod === "Other");
  }, [form.paymentMethod])



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
              defaultChecked={form.paymentMethod === 'Venmo'}
              onChange={onChange}
              required
              label="Venmo"

            />
            <MDBRadio
              name='paymentMethod'
              id='flexRadioDefault22'
              value="Zelle"
              defaultChecked={form.paymentMethod === 'Zelle'}
              onChange={onChange}
              required
              label="Zelle"

            />
            <MDBRadio
              name='paymentMethod'
              id='flexRadioDefault32'
              value="Cash"
              defaultChecked={form.paymentMethod === 'Cash'}
              onChange={onChange}
              required
              label="Cash"

            />
            <MDBRadio
              name='paymentMethod'
              id='flexRadioDefault52'
              value="Other"
              defaultChecked={form.paymentMethod === 'Other'}
              onChange={onChange}
              required
              label="Other"
            />
            {showOtherInput && (
              <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                <div className="">
                  <MDBInput
                    value={form.paymentMethodOther}
                    name='paymentMethodOther'
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