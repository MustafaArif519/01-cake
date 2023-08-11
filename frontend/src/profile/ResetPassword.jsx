import { useNavigate, Navigate, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBInput,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ResetPassword() {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const [showPassword1, setShowPassword1] = useState('password');
    const [showPassword2, setShowPassword2] = useState('password');

    const uId = '';
    const token = '';


    const resetPass = async () => {
        const windowName = window.location.hostname;
        console.log('http://localhost:8000/api/v1/dj-rest-auth/password/reset/confirm/');
        try {
            const response = await fetch('http://localhost:8000/api/v1/dj-rest-auth/password/reset/confirm/', {
                method: 'POST',
                headers: {
                    'Authorization': "Token " + token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    uid: uId,
                    token: token,
                    new_password1: password1,
                    new_password2: password2,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                retrieveUser(token);
                setEditing(!editing);

            } else {
                // Login failed, handle the error
                const data = await response.json();
                console.log('User data patching failed', JSON.stringify(data));
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const discard = () => {
        setPassword1('');
        setPassword2('');
      }

      const makeVisible = (changer) => {
        if(changer === "new_password1"){
            if(showPassword1 === "password"){
                setShowPassword1('text');
            }
            else{
                setShowPassword1('password');
            }
        }
        else{
            if(showPassword2 === "password"){
                setShowPassword2('text');
            }
            else{
                setShowPassword2('password');
            }
        }
      }


    return (
        <section >
            <MDBContainer className="py-5">

                <MDBRow>
                    <MDBCol>

                        <div className="d-flex flex-column align-items-center">

                            <MDBCard className="mb-5" >
                                <MDBCardBody className="text-center">
                                    <MDBRow>
                                        
                                        <MDBCol sm="10">
                                            <MDBCardText className="text-muted">

                                                <MDBInput
                                                    name="new_password1"
                                                    onChange={(e) => setPassword1(e.target.value)}
                                                    id="username"
                                                    required
                                                    label="New Password"
                                                    value={password1}
                                                    type = {showPassword1}
                                                />
                                                
                                            </MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="2">
                                        { (showPassword1 === "text") &&
                                        <MDBIcon fas icon="eye" onClick={() => makeVisible("new_password1")} />
                                        }
                                        { (showPassword1 === "password") &&
                                        <MDBIcon fas icon="eye-slash" onClick={() => makeVisible("new_password1")} />
                                        }
                                        </MDBCol>
                                    </MDBRow>
   
                                    <hr />
                                    <MDBRow>
 
                                        <MDBCol sm="10">
                                            <MDBCardText className="text-muted">

                                            <MDBInput
                                                    name="new_password2"
                                                    onChange={(e) => setPassword2(e.target.value)}
                                                    id="username"
                                                    required
                                                    label="Confirm New Password"
                                                    value={password2}
                                                    type = {showPassword2}
                                                />

                                            </MDBCardText>
                                        </MDBCol>
                                        <MDBCol  sm="2">
                                        { (showPassword2 === "text") &&
                                        <MDBIcon fas icon="eye" onClick={() => makeVisible("new_password2")} />
                                        }
                                        { (showPassword2 === "password") &&
                                        <MDBIcon fas icon="eye-slash" onClick={() => makeVisible("new_password2")} />
                                        }
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />

                                    <div className="d-flex justify-content-end">
                                        <MDBBtn color="danger" className="me-1" onClick={discard}>Discard</MDBBtn>
                                        <MDBBtn color="success" className="me-1"  onClick={resetPass}>
                                            Change Password
                                        </MDBBtn>
                                    </div>



                                </MDBCardBody>
                            </MDBCard>



                        </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}