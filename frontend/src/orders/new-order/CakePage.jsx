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

export default function CakePage({ updateForm, form }) {
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

            <h1>Cake Specification</h1>
            <div className='section'>
                <div className="radio">
                    <h3>Cake Size</h3>

                    <MDBValidation isValidated>
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault1'
                            value="6 inch"
                            defaultChecked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            required
                            label="6&quot;"

                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault2'
                            value="8 inch"
                            defaultChecked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            required
                            label="8&quot;"

                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault3'
                            value="10 inch"
                            defaultChecked={selectedOption === 'option3'}
                            onChange={handleOptionChange}
                            required
                            label="10&quot;"

                        />

                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault4'
                            value="12 inch"
                            defaultChecked={selectedOption === 'option4'}
                            onChange={handleOptionChange}
                            required
                            label="12&quot;"
                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault5'
                            value="14 inch"
                            defaultChecked={selectedOption === 'option5'}
                            onChange={handleOptionChange}
                            required
                            label="14&quot;"
                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault6'
                            value="Multi tiered"
                            defaultChecked={selectedOption === 'option6'}
                            onChange={handleOptionChange}
                            required
                            label="Multi tiered"
                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault7'
                            value="Sculpted"
                            defaultChecked={selectedOption === 'option7'}
                            onChange={handleOptionChange}
                            required
                            label="Sculpted"
                        />

                    </MDBValidation>
                </div>
                <img
                        src="./src/orders/new-order/cake-size-reference.jpg"
                        alt="cake-size-reference-image"
                        className='field'
                        style={{
                            width: '443px', // Set the width to 200 pixels
                            height: '282px', // Set the height to 100 pixels
                            border: '10px double black'
                        }}
                    />
            </div>

            <div className='section'>
                <div className="radio">
                    <h3>Cake Flavor</h3>

                    <MDBValidation isValidated>
                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault1'
                            value="Yellow Sponge"
                            defaultChecked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            required
                            label="Yellow Sponge"

                        />
                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault1\2'
                            value="Chocolate"
                            defaultChecked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            required
                            label="Chocolate"

                        />
                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault3'
                            value="Red Velvet"
                            defaultChecked={selectedOption === 'option3'}
                            onChange={handleOptionChange}
                            required
                            label="Red Velvet"

                        />

                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault4'
                            value=""
                            defaultChecked={selectedOption === 'other'}
                            onChange={handleOptionChange}
                            required
                            label="Other"
                        />
                        {showOtherInput && (
                <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                  <div className="">
                    <MDBInput
                      value={form.cakeFlavor}
                      name='cakeFlavor'
                      onChange={onChange}
                      id='validationCustom6'
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