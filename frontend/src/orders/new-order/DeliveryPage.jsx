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

  const [selectedOption, setSelectedOption] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [basicActive, setBasicActive] = useState('tab1');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [showOtherInput4, setShowOtherInput4] = useState(false);

  useEffect(() => {
    setFormValue(form);
  }, [form])

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleOptionChange4 = (e) => {
    // console.log(e);
    const { value } = e.target;
    setSelectedOption4(value);

    // Check if option is selected and update showOtherInput state accordingly
    setShowOtherInput4(value === '');
    onChange(e);
};

const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
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
      <MDBTabs pills className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            I want to pick up my order
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            I want my order to be delivered
          </MDBTabsLink>
        </MDBTabsItem>

      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
          <div className='section'>
            <MDBValidation isValidated>
              <MDBValidationItem className='field' invalid feedback='ex: 3/15 3:15 PM' >
                <div className="textInputWrapper">
                  <MDBInput
                    value={form.deliveryTime}
                    name='eventDate'
                    onChange={onChange}
                    id='validationCustom05asdfasdf'
                    required
                    label='Delivery Time'
                  />
                </div>
              </MDBValidationItem>
            </MDBValidation>
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
          <div className='section'>
          <div className="radio">
                    <h3>Pickup Times</h3>

                    <MDBValidation isValidated>
                        <MDBRadio
                            name='pickupTime'
                            id='flexRadioDefault123'
                            value="10 AM"
                            defaultChecked={selectedOption4 === 'option1'}
                            onChange={handleOptionChange4}
                            required
                            label="10 AM"

                        />
                        <MDBRadio
                            name='pickupTime'
                            id='flexRadioDefault2236'
                            value="5 PM"
                            defaultChecked={selectedOption4 === 'option2'}
                            onChange={handleOptionChange4}
                            required
                            label="5 PM"

                        />
                        <MDBRadio
                            name='pickupTime'
                            id='flexRadioDefault326'
                            value=""
                            defaultChecked={selectedOption4 === 'other'}
                            onChange={handleOptionChange4}
                            required
                            label="Other"

                        />

                        {showOtherInput4 && (
                            <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                                <div className="">
                                    <MDBInput
                                        value={form.pickupTime}
                                        name='PickupTime'
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