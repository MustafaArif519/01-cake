import React, { useState, useEffect, useRef } from 'react';
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

export default function OtherTreatsPage({ updateForm, form }) {
    //const [formValue, setFormValue] = useState(form);


    const [showOtherInput1, setShowOtherInput1] = useState(false);

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

    useEffect(() => {
        setShowOtherInput1(form.cakeTreats === "Other");
      }, [form.cakeTreats])

 
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
            {/* {console.log(formValue.name)} */}

            <h1>Treat Specification</h1>
            <div className='section'>
                <div className="radio">
                    <h3>Select Treat Type</h3>

                    <MDBValidation isValidated>
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault1'
                            value="Cupcakes"
                            defaultChecked={form.cakeTreats === "Cupcakes"}
                            onChange={onChange}
                            required
                            label="Cupcakes"

                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault2'
                            value="CakePops"
                            defaultChecked={form.cakeTreats === "CakePops"}
                            onChange={onChange}
                            required
                            label="Cake Pops"

                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault3'
                            value="Cakesicles"
                            defaultChecked={form.cakeTreats === "Cakesicles"}
                            onChange={onChange}
                            required
                            label="Cakesicles"

                        />

                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault4'
                            value="Chocolate Dipped Strawberries"
                            defaultChecked={form.cakeTreats === "Chocolate Dipped Strawberries"}
                            onChange={onChange}
                            required
                            label="Chocolate Dipped Strawberries"
                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault5'
                            value="Paan Bombs"
                            defaultChecked={form.cakeTreats === "Paan Bombs"}
                            onChange={onChange}
                            required
                            label="Paan Bombs"
                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault6'
                            value="Chocolate dipped pretzels"
                            defaultChecked={form.cakeTreats === "Chocolate dipped pretzels"}
                            onChange={onChange}
                            required
                            label="Chocolate dipped pretzels"
                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault7'
                            value="Rice Krispy Treats"
                            defaultChecked={form.cakeTreats === "Rice Krispy Treats"}
                            onChange={onChange}
                            required
                            label="Rice Krispy Treats"
                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault23464'
                            value="Other"
                            defaultChecked={form.cakeTreats === "Other"}
                            onChange={onChange}
                            required
                            label="Other"
                        />
                        {showOtherInput1 && (
                            <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                                <div className="">
                                    <MDBInput
                                        value={form.cakeTreatsOther}
                                        name='cakeTreatsOther'
                                        onChange={onChange}
                                        id='validationCustom63432'
                                        required
                                        label='Other'
                                    />
                                </div>
                            </MDBValidationItem>
                        )}
                    </MDBValidation>

                </div>
                

                    <MDBValidationItem className='field' invalid feedback='ex: red and blue pattern like spiderman&quot;s suit' >
                        <div className="textInputWrapper">
                            <MDBTextArea className=''
                                value={form.cakeTreatDetails}
                                name='cakeTreatDetails'
                                onChange={onChange}
                                id='validationCustom06asdfasdfe'
                                required
                                label='Additional Requests/Details'
                                style={{ width: "300px", height: "150px" }}
                            />
                        </div>
                    </MDBValidationItem>

                
            </div>

        </>

    );
}