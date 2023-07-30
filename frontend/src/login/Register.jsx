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
const Register = ({ showModal, handleSubmit, display }) => {
    const [registerForm, setRegisterForm] = useState({
        email: "",
        name: "",
        username: "",
        pNumber: "",
        password: "",
        confirmPassword: "",
        heardFrom: "",
        heardFromOther: "",
    });

    const initialFormState = {
        email: "",
        name: "",
        username: "",
        pNumber: "",
        password: "",
        confirmPassword: "",
        heardFrom: "",
        heardFromOther: "",
    };

    // console.log('register content reloaded');
    useEffect(() => {
        if (!display) {
            // console.log('register content resetting');
          setRegisterForm(initialFormState);
        }
      }, [display]);
    // Calculate showOtherInput based on the current value of registerForm.heardFrom
    const showOtherInput = registerForm.heardFrom === "Other";

    const onChange = (e) => {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    };
console.log(registerForm);
    return (
        <>
            <MDBModalBody>
                <h2>Please Fill Out the Following</h2>
                <div className='section'>
                    <MDBValidation isValidated>


                        <MDBValidationItem className='field' invalid feedback='ex: Mustafa Arif'>
                            <div className="textInputWrapper">
                                <MDBInput
                                    value={registerForm.name}
                                    name='name'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='Full Name'
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
                                    value={registerForm.password}
                                    name='password'
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
                                    value={registerForm.passwordConfirm}
                                    name='passwordConfirm'
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
                            name='heardFrom'
                            id='flexRadioDefault1'
                            value="Instagram"
                            onChange={onChange}
                            required
                            label="Instagram"
                        />
                        <MDBRadio
                            name='heardFrom'
                            id='flexRadioDefasdfasdfrault2'
                            value="Facebook"
                            onChange={onChange}
                            required
                            label="Facebook"
                        />
                        <MDBRadio
                            name='heardFrom'
                            id='flexRadioDeasdffault2'
                            value="Online Search"
                            onChange={onChange}
                            required
                            label="Online Search"
                        />
                        <MDBRadio
                            name='heardFrom'
                            id='flexRadioDefault2'
                            value="Friends / Family"
                            onChange={onChange}
                            required
                            label="Friends / Family"
                        />
                        <MDBValidationItem invalid feedback=''>
                            <MDBRadio
                                name='heardFrom'
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
                <MDBBtn color="success" onClick={() => handleSubmit(registerForm)}>Create Account</MDBBtn>
            </MDBModalFooter>
        </>
    );
};

export default Register;