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

    const [selectedOption1, setSelectedOption1] = useState('');
    const [showOtherInput1, setShowOtherInput1] = useState(false);
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


    const handleOptionChange1 = (e) => {
        // console.log(e);
        const { value } = e.target;
        setSelectedOption1(value);

        // Check if option is selected and update showOtherInput state accordingly
        setShowOtherInput1(value === '');
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
                            defaultChecked={selectedOption1 === 'option1'}
                            onChange={handleOptionChange1}
                            required
                            label="Cupcakes"

                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault2'
                            value="CakePops"
                            defaultChecked={selectedOption1 === 'option2'}
                            onChange={handleOptionChange1}
                            required
                            label="Cake Pops"

                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault3'
                            value="Cakesicles"
                            defaultChecked={selectedOption1 === 'option3'}
                            onChange={handleOptionChange1}
                            required
                            label="Cakesicles"

                        />

                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault4'
                            value="Chocolate Dipped Strawberries"
                            defaultChecked={selectedOption1 === 'option4'}
                            onChange={handleOptionChange1}
                            required
                            label="Chocolate Dipped Strawberries"
                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault5'
                            value="Paan Bombs"
                            defaultChecked={selectedOption1 === 'option5'}
                            onChange={handleOptionChange1}
                            required
                            label="Paan Bombs"
                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault6'
                            value="Chocolate dipped pretzels"
                            defaultChecked={selectedOption1 === 'option6'}
                            onChange={handleOptionChange1}
                            required
                            label="Chocolate dipped pretzels"
                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault7'
                            value="Rice Krispy Treats"
                            defaultChecked={selectedOption1 === 'option7'}
                            onChange={handleOptionChange1}
                            required
                            label="Rice Krispy Treats"
                        />
                        <MDBRadio
                            name='cakeTreats'
                            id='flexRadioDefault23464'
                            value=""
                            defaultChecked={selectedOption1 === 'other'}
                            onChange={handleOptionChange1}
                            required
                            label="Other"
                        />
                        {showOtherInput1 && (
                            <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                                <div className="">
                                    <MDBInput
                                        value={form.cakeTreats}
                                        name='cakeFlavor'
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
                


                

                <MDBValidation isValidated>
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
                </MDBValidation>

                
            </div>

        </>

    );
}