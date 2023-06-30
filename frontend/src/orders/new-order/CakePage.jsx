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

export default function CakePage({ updateForm, form }) {
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




                <div className="radio">
                    <h3>Cake Flavor</h3>

                    <MDBValidation isValidated>
                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault1'
                            value="Yellow Sponge"
                            defaultChecked={selectedOption2 === 'option1'}
                            onChange={handleOptionChange2}
                            required
                            label="Yellow Sponge"

                        />
                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault1\2'
                            value="Chocolate"
                            defaultChecked={selectedOption2 === 'option2'}
                            onChange={handleOptionChange2}
                            required
                            label="Chocolate"

                        />
                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault3'
                            value="Red Velvet"
                            defaultChecked={selectedOption2 === 'option3'}
                            onChange={handleOptionChange2}
                            required
                            label="Red Velvet"

                        />

                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault4'
                            value=""
                            defaultChecked={selectedOption2 === 'other'}
                            onChange={handleOptionChange2}
                            required
                            label="Other"
                        />
                        {showOtherInput2 && (
                            <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                                <div className="">
                                    <MDBInput
                                        value={form.cakeFlavor}
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



                <div className="radio">
                    <h3>Cake Filling</h3>

                    <MDBValidation isValidated>
                        <MDBRadio
                            name='cakeFilling'
                            id='flexRadioDefault12'
                            value="Basic: ( vanilla, Lemon, Butterscotch)"
                            defaultChecked={selectedOption3 === 'option1'}
                            onChange={handleOptionChange3}
                            required
                            label="Basic: ( vanilla, Lemon, Butterscotch)"

                        />
                        <MDBRadio
                            name='cakeFilling'
                            id='flexRadioDefault22'
                            value="Special: +$1/ serving (strawberry, chocolate, mango, rose, orange)"
                            defaultChecked={selectedOption3 === 'option2'}
                            onChange={handleOptionChange3}
                            required
                            label="Special: +$1/ serving (strawberry, chocolate, mango, rose, orange)"

                        />
                        <MDBRadio
                            name='cakeFilling'
                            id='flexRadioDefault32'
                            value="Premium: +$2/serving ( raspberry, cherry, blueberry, pista, mixed fruit)"
                            defaultChecked={selectedOption3 === 'option3'}
                            onChange={handleOptionChange3}
                            required
                            label="Premium: +$2/serving ( raspberry, cherry, blueberry, pista, mixed fruit)"

                        />

                        <MDBRadio
                            name='cakeFilling'
                            id='flexRadioDefault42'
                            value="Signature: +$3/ serving ( rasmalai, gulab jamun )"
                            defaultChecked={selectedOption3 === 'option4'}
                            onChange={handleOptionChange3}
                            required
                            label="Signature: +$3/ serving ( rasmalai, gulab jamun )"
                        />
                        <MDBRadio
                            name='cakeFilling'
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
                                        value={form.cakeFilling}
                                        name='cakeFilling'
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


                <div className="radio">
                    <h3>Cake Frosting</h3>

                    <MDBValidation isValidated>
                        <MDBRadio
                            name='cakeFrosting'
                            id='flexRadioDefault123'
                            value="Swiss Meringue buttercream"
                            defaultChecked={selectedOption4 === 'option1'}
                            onChange={handleOptionChange4}
                            required
                            label="Swiss Meringue buttercream"

                        />
                        <MDBRadio
                            name='cakeFrosting'
                            id='flexRadioDefault2236'
                            value="American buttercream ( for eggless cakes only)"
                            defaultChecked={selectedOption4 === 'option2'}
                            onChange={handleOptionChange4}
                            required
                            label="American buttercream ( for eggless cakes only)"

                        />
                        <MDBRadio
                            name='cakeFrosting'
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
                                        value={form.cakeFrosting}
                                        name='cakeFrosting'
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
                <MDBValidation isValidated>
                    <MDBValidationItem className='field' invalid feedback='ex: Tom Hollad Spiderman theme' >
                        <div className="textInputWrapper">
                            <MDBInput
                                value={form.cakeDesign}
                                name='cakeDesign'
                                onChange={onChange}
                                id='validationCustom05fsa'
                                required
                                label='Design/Theme'
                            />
                        </div>
                    </MDBValidationItem>
                </MDBValidation>
                <MDBValidation isValidated>
                    <MDBValidationItem className='field' invalid feedback='ex: red and blue' >
                        <div className="textInputWrapper">
                            <MDBInput
                                value={form.cakeColor}
                                name='cakeColor'
                                onChange={onChange}
                                id='validationCustom05asd'
                                required
                                label='Color Scheme'
                            />
                        </div>
                    </MDBValidationItem>
                </MDBValidation>

                <MDBValidation isValidated>
                    <MDBValidationItem
                        invalid
                    >
                        <div className='chooseFile'>
                        <input
        type="file"
        multiple
        className="form-control"
        aria-label="file example"
        required
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
                    </div>
                        </MDBValidationItem>
                </MDBValidation>
                <MDBValidation isValidated>
                    <MDBValidationItem className='field' invalid feedback='ex: Happy Birthday Nikhil!' >
                        <div className="textInputWrapper">
                            <MDBInput
                                value={form.cakeMessage}
                                name='eventDate'
                                onChange={onChange}
                                id='validationCustom05asdfasdf'
                                required
                                label='Cake Mesage'
                            />
                        </div>
                    </MDBValidationItem>
                </MDBValidation>

                <MDBValidation isValidated>
                    <MDBValidationItem className='field' invalid feedback='ex: red and blue pattern like spiderman&quot;s suit' >
                        <div className="textInputWrapper">
                            <MDBTextArea className=''
                                value={form.cakeAdditions}
                                name='cakeAdditions'
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