import React, { useState, useEffect } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
  MDBRadio,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import './style.css';

export default function DeliveryPage({ updateForm, form }) {
  const [formValue, setFormValue] = useState(form);


  const [showOtherInput, setShowOtherInput] = useState(form.pickupTime === "Other");

  const [basicActive, setBasicActive] = useState(form.transport);


  useEffect(() => {
    setFormValue(form);
  }, [form])

  const onChange = (e) => {
    console.log(e.target.value);
    updateForm({ ...form, [e.target.name]: e.target.value });
};

  useEffect(() => {
    setShowOtherInput(form.pickupTime === "Other");
  }, [form.pickupTime])

const handleBasicClick = (value) => {

      form.transport = value;
      setBasicActive(value);
    };

 
  return (
    <>
      <MDBTabs pills className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink 
          onClick={() => handleBasicClick('delivery')} 
          active={basicActive === 'delivery'}>
          I want my order to be delivered
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink 
          onClick={() => handleBasicClick('pickup')} 
          active={basicActive === 'pickup'}>
          I want to pick up my order
          </MDBTabsLink>
        </MDBTabsItem>

      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'delivery'}>
          <div className='section'>
            <MDBValidation isValidated>
              <MDBValidationItem className='field' invalid feedback='ex: 3/15 3:15 PM' >
                <div className="textInputWrapper">
                  <MDBInput
                    value={form.deliveryTime}
                    name='deliveryTime'
                    onChange={onChange}
                    id='validationCustom05asdfasdf'
                    required
                    label='Delivery Time'
                  />
                </div>
              </MDBValidationItem>
            </MDBValidation>
            <MDBValidation isValidated>
              <MDBValidationItem className='field' invalid feedback='ex: 123 Flamingo Avenue, Novi Michigan' >
                <div className="textInputWrapper">
                  <MDBInput
                    value={form.deliveryAddress}
                    name='deliveryAddress'
                    onChange={onChange}
                    id='validationCustom05asdfasdf'
                    required
                    label='Delivery Address'
                  />
                </div>
              </MDBValidationItem>
            </MDBValidation>
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'pickup'}>
          <div className='section'>
          <div className="radio">
                    <h3>Pickup Times</h3>

                    <MDBValidation isValidated>
                        <MDBRadio
                            name='pickupTime'
                            id='flexRadioDefault123'
                            value="10 AM"
                            defaultChecked={form.pickupTime === "10 AM"}
                            onChange={onChange}
                            required
                            label="10 AM"

                        />
                        <MDBRadio
                            name='pickupTime'
                            id='flexRadioDefault2236'
                            value="5 PM"
                            defaultChecked={form.pickupTime === "5 PM"}
                            onChange={onChange}
                            required
                            label="5 PM"

                        />
                        <MDBRadio
                            name='pickupTime'
                            id='flexRadioDefault326'
                            value="Other"
                            defaultChecked={form.pickupTime === "Other"}
                            onChange={onChange}
                            required
                            label="Other"

                        />

                        {showOtherInput && (
                            <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                                <div className="">
                                    <MDBInput
                                        value={form.pickupTimeOther}
                                        name='pickupTimeOther'
                                        onChange={onChange}
                                        id='validationCustom6666'
                                        required
                                        label='Other'
                                    />
                                </div>
                            </MDBValidationItem>
                        )}

                    </MDBValidation>
                </div>
          </div>
        </MDBTabsPane>
      </MDBTabsContent>


    </>

  );
}