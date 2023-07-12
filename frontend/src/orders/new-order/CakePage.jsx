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
    const [showOtherInput, setShowOtherInput] = useState(form.cakeSize === "Other");

    const [showOtherInput2, setShowOtherInput2] = useState(form.cakeFlavor === "Other");

    const [showOtherInput3, setShowOtherInput3] = useState(form.cakeFilling === "Other");

    const [showOtherInput4, setShowOtherInput4] = useState(form.cakeFrosting === "Other");


  
    useEffect(() => {
      setShowOtherInput(form.cakeSize === "Other");
    }, [form.cakeSize])

    useEffect(() => {
        setShowOtherInput2(form.cakeFlavor === "Other");
      }, [form.cakeFlavor])

      useEffect(() => {
        setShowOtherInput3(form.cakeFilling === "Other");
      }, [form.cakeFilling])

      useEffect(() => {
        setShowOtherInput4(form.cakeFrosting === "Other");
      }, [form.cakeFrosting])


    const onChange = (e) => {
        console.log(e.target.value);
        updateForm({ ...form, [e.target.name]: e.target.value });
    };


   

    

    const fileInputRef = useRef(null);

  // Function to handle file selection
  function handleFileSelect() {
    const selectedFiles = Array.from(fileInputRef.current.files); // Get the selected files

    // Do something with the selected files
    console.log(selectedFiles);
  }


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
                            defaultChecked={form.cakeSize === "6 inch"}
                            onChange={onChange}
                            required
                            label="6&quot;"

                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault2'
                            value="8 inch"
                            defaultChecked={form.cakeSize === "8 inch"}
                            onChange={onChange}
                            required
                            label="8&quot;"

                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault3'
                            value="10 inch"
                            defaultChecked={form.cakeSize === "10 inch"}
                            onChange={onChange}
                            required
                            label="10&quot;"

                        />

                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault4'
                            value="12 inch"
                            defaultChecked={form.cakeSize === "12 inch"}
                            onChange={onChange}
                            required
                            label="12&quot;"
                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault5'
                            value="14 inch"
                            defaultChecked={form.cakeSize === "14 inch"}
                            onChange={onChange}
                            required
                            label="14&quot;"
                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault6'
                            value="Multi tiered"
                            defaultChecked={form.cakeSize === "Multi tiered"}
                            onChange={onChange}
                            required
                            label="Multi tiered"
                        />
                        <MDBRadio
                            name='cakeSize'
                            id='flexRadioDefault7'
                            value="Sculpted"
                            defaultChecked={form.cakeSize === "Sculpted"}
                            onChange={onChange}
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
                            defaultChecked={form.cakeFlavor === "Yellow Sponge"}
                            onChange={onChange}
                            required
                            label="Yellow Sponge"

                        />
                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault1\2'
                            value="Chocolate"
                            defaultChecked={form.cakeFlavor === "Chocolate"}
                            onChange={onChange}
                            required
                            label="Chocolate"

                        />
                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault3'
                            value="Red Velvet"
                            defaultChecked={form.cakeFlavor === "Red Velvet"}
                            onChange={onChange}
                            required
                            label="Red Velvet"

                        />

                        <MDBRadio
                            name='cakeFlavor'
                            id='flexRadioDefault4'
                            value="Other"
                            defaultChecked={form.cakeFlavor === "Other"}
                            onChange={onChange}
                            required
                            label="Other"
                        />
                        {showOtherInput2 && (
                            <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                                <div className="">
                                    <MDBInput
                                        value={form.cakeFlavorOther}
                                        name='cakeFlavorOther'
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
                            defaultChecked={form.cakeFilling === "Basic: ( vanilla, Lemon, Butterscotch)"}
                            onChange={onChange}
                            required
                            label="Basic: ( vanilla, Lemon, Butterscotch)"

                        />
                        <MDBRadio
                            name='cakeFilling'
                            id='flexRadioDefault22'
                            value="Special: +$1/ serving (strawberry, chocolate, mango, rose, orange)"
                            defaultChecked={form.cakeFilling === "Special: +$1/ serving (strawberry, chocolate, mango, rose, orange)"}
                            onChange={onChange}
                            required
                            label="Special: +$1/ serving (strawberry, chocolate, mango, rose, orange)"

                        />
                        <MDBRadio
                            name='cakeFilling'
                            id='flexRadioDefault32'
                            value="Premium: +$2/serving ( raspberry, cherry, blueberry, pista, mixed fruit)"
                            defaultChecked={form.cakeFilling === "Premium: +$2/serving ( raspberry, cherry, blueberry, pista, mixed fruit)"}
                            onChange={onChange}
                            required
                            label="Premium: +$2/serving ( raspberry, cherry, blueberry, pista, mixed fruit)"

                        />

                        <MDBRadio
                            name='cakeFilling'
                            id='flexRadioDefault42'
                            value="Signature: +$3/ serving ( rasmalai, gulab jamun )"
                            defaultChecked={form.cakeFilling === "Signature: +$3/ serving ( rasmalai, gulab jamun )"}
                            onChange={onChange}
                            required
                            label="Signature: +$3/ serving ( rasmalai, gulab jamun )"
                        />
                        <MDBRadio
                            name='cakeFilling'
                            id='flexRadioDefault52'
                            value="Other"
                            defaultChecked={form.cakeFilling === "Other"}
                            onChange={onChange}
                            required
                            label="Other"
                        />
                        {showOtherInput3 && (
                            <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                                <div className="">
                                    <MDBInput
                                        value={form.cakeFillingOther}
                                        name='cakeFillingOther'
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
                            defaultChecked={form.cakeFrosting === "Swiss Meringue buttercream"}
                            onChange={onChange}
                            required
                            label="Swiss Meringue buttercream"

                        />
                        <MDBRadio
                            name='cakeFrosting'
                            id='flexRadioDefault2236'
                            value="American buttercream ( for eggless cakes only)"
                            defaultChecked={form.cakeFrosting === "American buttercream ( for eggless cakes only)"}
                            onChange={onChange}
                            required
                            label="American buttercream ( for eggless cakes only)"

                        />
                        <MDBRadio
                            name='cakeFrosting'
                            id='flexRadioDefault326'
                            value="Other"
                            defaultChecked={form.cakeFrosting === "Other"}
                            onChange={onChange}
                            required
                            label="Other"

                        />

                        {showOtherInput4 && (
                            <MDBValidationItem className='' invalid feedback='ex: Vanilla' >
                                <div className="">
                                    <MDBInput
                                        value={form.cakeFrostingOther}
                                        name='cakeFrostingOther'
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


                    <MDBValidationItem
                        invalid
                    >
                        <div className='chooseFile'>
                        <input
        type="file"
        className="form-control"
        aria-label="file example"
        required
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
                    </div>
                        </MDBValidationItem>

                <MDBValidation isValidated>
                    <MDBValidationItem className='field' invalid feedback='ex: Happy Birthday Nikhil!' >
                        <div className="textInputWrapper">
                            <MDBInput
                                value={form.cakeMessage}
                                name='cakeMessage'
                                onChange={onChange}
                                id='validationCustom05asdfasdf'
                                required
                                label='Cake Mesage'
                            />
                        </div>
                    </MDBValidationItem>
                </MDBValidation>


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

            </div>

        </>

    );
}