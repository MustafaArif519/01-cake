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
    MDBRadio,
    MDBCheckbox,
    MDBIcon,

} from 'mdb-react-ui-kit';
// Functional Component
const Register = ({ showModal, createAccount, display }) => {
    const [registerForm, setRegisterForm] = useState({
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        phone_number: "",
        password1: "",
        password2: "",
        heard_from: "",
    });

    const initialFormState = {
        email: "",
        firstname: "",
        lastname: "",
        username: "",
        phone_number: "",
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

            <div className="text-center mb-3">
            <p>Sign up with:</p>
{/* 
            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p> */}
                <div style={{ display: 'flex', justifyContent: 'center'  }}>
                    <MDBValidation isValidated>


                        <MDBValidationItem className='' invalid feedback='ex: Andrew'>
                            <div style = {{paddingBottom: "20px"}}>
                                <MDBInput
                                wrapperClass='mb-4'
                                    value={registerForm.firstname}
                                    name='firstname'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='First Name'
                                    style={{ maxWidth: "350px" }}
                                />
                            </div>
                        </MDBValidationItem>

                        <MDBValidationItem className='' invalid feedback='ex: Jiang'>
                            <div style = {{paddingBottom: "20px"}}>
                                <MDBInput
                                wrapperClass='mb-4'
                                    value={registerForm.lastname}
                                    name='lastname'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='Last Name'
                                />
                            </div>
                        </MDBValidationItem>


                        <MDBValidationItem className='' invalid feedback='ex: 123-456-7890'>
                            <div style = {{paddingBottom: "20px"}}>
                                <MDBInput
                                wrapperClass='mb-4'
                                    value={registerForm.phone_number}
                                    name='phone_number'
                                    onChange={onChange}
                                    id='validationCustom023'
                                    required
                                    label='Phone Number'
                                />
                            </div>
                        </MDBValidationItem>


                        <MDBValidationItem className='' invalid feedback='ex: jDoe@gmail.com'>
                            <div style = {{paddingBottom: "20px"}}>
                                <MDBInput
                                wrapperClass='mb-4'
                                    value={registerForm.email}
                                    name='email'
                                    onChange={onChange}
                                    id='validationCustom042'
                                    required
                                    label='Email'
                                />
                            </div>
                        </MDBValidationItem>


                        <MDBValidationItem className='' invalid feedback='ex: james545'>
                            <div style = {{paddingBottom: "20px"}}>
                                <MDBInput
                                wrapperClass='mb-4'
                                    value={registerForm.username}
                                    name='username'
                                    onChange={onChange}
                                    id='validationCustom02342342'
                                    required
                                    label='Username'
                                />
                            </div>
                        </MDBValidationItem>


                        <MDBValidationItem className='' invalid feedback=''>
                            <div style = {{paddingBottom: "0px"}}>
                                <MDBInput
                                wrapperClass='mb-4'
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


                        <MDBValidationItem className=''
                            invalid={registerForm.password != "" &&
                                registerForm.password === registerForm.confrimPassword}
                            feedback='passwords must match'>
                            <div style = {{paddingBottom: "20px"}}>
                                <MDBInput
                                wrapperClass='mb-4'
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


                        <MDBValidation isValidated>
  <div key={display} style={{ alignItems: "left", textAlign: 'left', marginLeft: '0', paddingBottom: "20px" }}>
    <h3>How did you hear about us?</h3>
    <MDBRadio
      name='heard_from'
      id='flexRadioDefault1'
      value="Instagram"
      onChange={onChange}
      required
      label="Instagram"
      style={{ textAlign: 'left', marginLeft: '0' }} // Align text to the left
    />
    <MDBRadio
      name='heard_from'
      id='flexRadioDefasdfasdfrault2'
      value="Facebook"
      onChange={onChange}
      required
      label="Facebook"
      style={{ textAlign: 'left', marginLeft: '0' }} // Align text to the left
    />
    <MDBRadio
      name='heard_from'
      id='flexRadioDeasdffault2'
      value="Online Search"
      onChange={onChange}
      required
      label="Online Search"
      style={{ textAlign: 'left', marginLeft: '0' }} // Align text to the left
    />
    <MDBRadio
      name='heard_from'
      id='flexRadioDefault2'
      value="Friends / Family"
      onChange={onChange}
      required
      label="Friends / Family"
      style={{ textAlign: 'left', marginLeft: '0' }} // Align text to the left
    />
    <MDBValidationItem invalid feedback='' >
      <MDBRadio
        name='heard_from'
        id='flexRadioDefaulte5'
        value="Other"
        onChange={onChange}
        required
        label="Other"
        style={{ textAlign: 'left', marginLeft: '0' }} // Align text to the left
      />
    </MDBValidationItem>
    {showOtherInput && (
      <div style={{ width: "200px", marginLeft: '20px'  }}>
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


                    </MDBValidation>
                    
                </div>
            <div className='d-flex justify-content-center mb-4'>
            
          </div>

  


          </div>
          
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="danger" onClick={showModal}>
                    Close
                </MDBBtn>
                <MDBBtn color="success" onClick={() => createAccount(registerForm)}>Register</MDBBtn>
            </MDBModalFooter>
        </>
    );
};

export default Register;