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
  MDBIcon,
  MDBCol,
  MDBModal,
  MDBModalDialog,

} from 'mdb-react-ui-kit';
// Functional Component
const Login = ({ showModal, showCenteredModal, handleSubmit, display }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRecovery, setShowRecovery] = useState(false);
  const [email, setEmail] = useState('');

  const [errorMessage, setErrorMessage] = useState('');


  // console.log('login content reloaded');
  useEffect(() => {
    if (!display) {
      // Reset the username and password when the modal is hidden
      setUsername('');
      setPassword('');
      setShowRecovery(false);
      setEmail('');
      setErrorMessage('');
    }
  }, [display]);


  const requestRecovery = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/dj-rest-auth/password/reset/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email, // Assuming 'email' is a variable containing the email address
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        showModal();

      } else {
        // Login failed, handle the error
        console.log('Password reset endpoint fail');
        const error = await response.json()

        setErrorMessage(error['email']); // Get the error message from the response body
        console.error('Error:', error['email']);
        showCenteredModal(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error['email']);
    }
  };

  return (
    <>


      <MDBModalBody>
        <div style={{ display: "flex", flexDirection: "row" }}>

          <div style={{ width: "225px", marginLeft: "30px" }}>
            <MDBValidation isValidated style={{ marginBottom: "40px", marginTop: "20px" }}>
              <MDBValidationItem className='' invalid feedback='ex: JohnDoe/jDoes@yahoo.com'>

                <MDBInput
                  className=""
                  name='username'
                  onChange={(e) => setUsername(e.target.value)}
                  id='username'
                  required
                  label='Username/Email'
                  value={username}
                />
              </MDBValidationItem>
            </MDBValidation>

            <MDBValidation isValidated style={{ marginBottom: "10px" }}>
              <MDBValidationItem className='' invalid feedback=" ">
                <MDBInput
                  type='password'
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  required
                  label='Password'
                  value={password}
                />
                <MDBCol size="auto">
                  <span id='textExample2' className='form-text' style={{ cursor: 'pointer' }} onClick={() => setShowRecovery(!showRecovery)} >
                    Forgot Password?
                  </span>
                </MDBCol>
              </MDBValidationItem>
            </MDBValidation>

            {showRecovery &&
              <div>
                <MDBValidation isValidated style={{ marginBottom: "40px", marginTop: "20px" }}>
                  <MDBValidationItem className='' invalid feedback='ex: jDoe@yahoo.com'>

                    <MDBInput
                      className=""
                      name='email'
                      onChange={(e) => setEmail(e.target.value)}
                      id='email'
                      required
                      label='Account Email'
                      value={email}
                    />
                  </MDBValidationItem>
                </MDBValidation>

                <MDBBtn disabled={email == ""} onClick={requestRecovery} color="warning">Recover Password</MDBBtn> </div>}
          </div>

          {/* <div style={{ marginLeft: "50px", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p style={{}}>Or Sign in Using:</p>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <MDBBtn style={{ marginRight: "20px" }} color="info" outline onClick={showModal}> 
            <img style={{width: "30px", height: "30px"}} src ="./src/images/googleIcon.png" />
         </MDBBtn>
        
        <MDBBtn onClick={showModal} color="info" outline>
          <img style={{width: "30px", height: "30px"}} src ="./src/images/facebookIcon.png" />
          </MDBBtn>
      </div>
    </div> */}

        </div>



      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="danger" onClick={showModal}>
          Close
        </MDBBtn>
        <MDBBtn color="success" disabled={username == "" || password == ""} onClick={() => handleSubmit(username, password)}>Login</MDBBtn>
      </MDBModalFooter>

    </>
  );
};

export default Login;
