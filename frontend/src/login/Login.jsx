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
  MDBCheckbox,
  MDBRow,


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

        <div className="text-center mb-3">
          <p>Sign in with:</p>

          {/* <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <MDBValidation isValidated>
            <MDBValidationItem className='' invalid feedback='ex: jDoe@yahoo.com' style={{ marginBottom: '40px', marginTop: '20px' }}>
              <MDBInput
                wrapperClass='mb-4'
                className=''
                name='username'
                onChange={(e) => setUsername(e.target.value)}
                id='username'
                required
                label='Username/Email'
                value={username}
                style={{ maxWidth: "350px" }}
              />
            </MDBValidationItem>

            <MDBValidationItem className='' invalid feedback=''>
              <MDBInput
                wrapperClass='mb-4'
                type='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                required
                label='Password'
                value={password}
              />
            </MDBValidationItem>
          </MDBValidation>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '350px', marginTop: '20px' }}>
          <a 
  onClick={() => setShowRecovery(!showRecovery)}
  style={{ cursor: 'pointer', }}
>
  Forgot password?
</a>

            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          </div>
       







            {showRecovery &&
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '350px', margin: '20px auto' }}>
              <MDBRow style={{ width: '100%' }}>
                <MDBCol size='8' >
                  <MDBValidation isValidated>
                    <MDBValidationItem className='' invalid feedback='ex: jDoe@yahoo.com'>
                      <MDBInput
                        className=''
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        id='email'
                        required
                        label='Email'
                        value={email}
                        
                      />
                    </MDBValidationItem>
                  </MDBValidation>
                </MDBCol>
                <MDBCol size='4'>
                  <MDBBtn disabled={email === ""} onClick={requestRecovery} color='warning' >
                    Recover
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
            }
                

                

</div>



      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="danger" onClick={showModal}>
          Close
        </MDBBtn>
        <MDBBtn color="success" disabled={username == "" || password == ""}
          onClick={() => handleSubmit(username, password)}>
          Sign in</MDBBtn>
      </MDBModalFooter>

    </>
  );
};

export default Login;
