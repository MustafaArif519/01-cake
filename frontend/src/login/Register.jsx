import { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBRadio

} from 'mdb-react-ui-kit';
// Functional Component
const Register = ({ showModal, createAccount, display }) => {
    const [registerForm, setRegisterForm] = useState({
        email: "",
        first_name: "",
        last_name: "",
        username: "",
        pNumber: "",
        password1: "",
        password2: "",
        heard_from: "",
    });

    const initialFormState = {
        email: "",
        first_name: "",
        last_name: "",
        username: "",
        pNumber: "",
        password1: "",
        password2: "",
        heard_from: "",
    };

    // console.log('register content reloaded');
    useEffect(() => {
        if (!display) {
            // console.log('register content resetting');
          setRegisterForm(initialFormState);
        }
      }, [display]);
    // Calculate showOtherInput based on the current value of registerForm.heard_from
    const showOtherInput = registerForm.heard_from === "Other";

    const onChange = (e) => {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    };
// console.log(registerForm);
    return (
        <>
            <MDBModalBody>
                <h2>Please Fill Out the Following</h2>
                <div className='section'>
                    <MDBValidation isValidated>


                        <MDBValidationItem className='field' invalid feedback='ex: Andrew'>
                            <div className="textInputWrapper">
                                <MDBInput
                                    value={registerForm.first_name}
                                    name='first_name'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='First Name'
                                />
                            </div>
                        </MDBValidationItem>
                    </MDBValidation>
                    <MDBValidation isValidated>


                        <MDBValidationItem className='field' invalid feedback='ex: Jiang'>
                            <div className="textInputWrapper">
                                <MDBInput
                                    value={registerForm.last_name}
                                    name='last_name'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='Last Name'
                                />
                            </div>
                        </MDBValidationItem>
                    </MDBValidation>
                    <MDBValidation isValidated>

                        <MDBValidationItem className='field' invalid feedback='ex: 123-456-7890'>
                            <div className="textInputWrapper">
                                <MDBInput
                                    value={registerForm.pNumber}
                                    name='pNumber'
                                    onChange={onChange}
                                    id='validationCustom023'
                                    required
                                    label='Phone Number'
                                />
                            </div>
                        </MDBValidationItem>



                    </MDBValidation>
                    <MDBValidation isValidated>

                        <MDBValidationItem className='field' invalid feedback='ex: jDoe@gmail.com'>
                            <div className="textInputWrapper">
                                <MDBInput
                                    value={registerForm.email}
                                    name='email'
                                    onChange={onChange}
                                    id='validationCustom042'
                                    required
                                    label='Email'
                                />
                            </div>
                        </MDBValidationItem>
                    </MDBValidation>

                    <MDBValidation isValidated>

                        <MDBValidationItem className='field' invalid feedback='ex: james545'>
                            <div className="textInputWrapper">
                                <MDBInput
                                    value={registerForm.username}
                                    name='username'
                                    onChange={onChange}
                                    id='validationCustom02342342'
                                    required
                                    label='Username'
                                />
                            </div>
                        </MDBValidationItem>

                    </MDBValidation>
                    <MDBValidation isValidated>

                        <MDBValidationItem className='field' invalid feedback=''>
                            <div className="textInputWrapper">
                                <MDBInput
                                    value={registerForm.password1}
                                    name='password1'
                                    onChange={onChange}
                                    id='validationCustom022'
                                    required
                                    label='Password'
                                    type="password"
                                />
                            </div>
                        </MDBValidationItem>

                    </MDBValidation>
                    <MDBValidation isValidated>

                        <MDBValidationItem className='field'
                            invalid={registerForm.password != "" &&
                                registerForm.password === registerForm.confrimPassword}
                            feedback='passwords must match'>
                            <div className="textInputWrapper">
                                <MDBInput
                                    value={registerForm.password2}
                                    name='password2'
                                    onChange={onChange}
                                    id='validationCustom0442'
                                    required
                                    label='Confirm Password'
                                    type="password"
                                />
                            </div>
                        </MDBValidationItem>

                    </MDBValidation>
                </div>
                <MDBValidation isValidated>
                    <div className="radio" key = {display}>
                        <h3>How did you hear about us?</h3>
                        <MDBRadio
                            name='heard_from'
                            id='flexRadioDefault1'
                            value="Instagram"
                            onChange={onChange}
                            required
                            label="Instagram"
                        />
                        <MDBRadio
                            name='heard_from'
                            id='flexRadioDefasdfasdfrault2'
                            value="Facebook"
                            onChange={onChange}
                            required
                            label="Facebook"
                        />
                        <MDBRadio
                            name='heard_from'
                            id='flexRadioDeasdffault2'
                            value="Online Search"
                            onChange={onChange}
                            required
                            label="Online Search"
                        />
                        <MDBRadio
                            name='heard_from'
                            id='flexRadioDefault2'
                            value="Friends / Family"
                            onChange={onChange}
                            required
                            label="Friends / Family"
                        />
                        <MDBValidationItem invalid feedback=''>
                            <MDBRadio
                                name='heard_from'
                                id='flexRadioDefaulte5'
                                value="Other"
                                onChange={onChange}
                                required
                                label="Other"
                            />
                        </MDBValidationItem>
                        {showOtherInput && (
                            <div style={{ width: "200px" }}>
                                <MDBValidationItem invalid feedback='ex: YouTube'>
                                    <div>
                                        <MDBInput
                                            value={registerForm.heardFromOther}
                                            name='heardFromOther'
                                            onChange={onChange}
                                            id='validationCustom99'
                                            required
                                            label='Other'
                                        />
                                    </div>
                                </MDBValidationItem>
                            </div>
                        )}
                    </div>
                </MDBValidation>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="danger" onClick={showModal}>
                    Close
                </MDBBtn>
                <MDBBtn color="success" onClick={() => createAccount(registerForm)}>Create Account</MDBBtn>
            </MDBModalFooter>
        </>
    );
};

export default Register;