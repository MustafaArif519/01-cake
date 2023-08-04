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

} from 'mdb-react-ui-kit';
// Functional Component
const Login = ({showModal, handleSubmit, display }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // console.log('login content reloaded');
  useEffect(() => {
    if (!display) {
      // Reset the username and password when the modal is hidden
      setUsername('');
      setPassword('');
    }
  }, [display]);


  return (
    <>

        <MDBModalBody>
          <MDBValidation isValidated style={{ textAlign: "left", width: '250px' }}>

            <MDBValidationItem className='field' invalid feedback='ex: JohnDoe' >
              <div className="textInputWrapper">
                <MDBInput
                  name='username'
                  onChange={(e) => setUsername(e.target.value)}
                  id='validationCustom05'
                  required
                  label='Username'
                  value={username}
                />
              </div>
            </MDBValidationItem>


          </MDBValidation>
          <MDBValidation isValidated style={{ textAlign: "left", width: '250px' }}>

            <MDBValidationItem className='field' invalid feedback='' >
              <div className="textInputWrapper">
                <MDBInput
                  type='password'
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  id='validationCustom35'
                  required
                  label='Password'
                  value={password}
                />
              </div>
            </MDBValidationItem>


          </MDBValidation>
          <p>forgot password?</p>
        </MDBModalBody>

        <MDBModalFooter>
          <MDBBtn color="danger" onClick={showModal}>
            Close
          </MDBBtn>
          <MDBBtn color="success" onClick={() => handleSubmit(username, password)}>Login</MDBBtn>
        </MDBModalFooter>
    </>
  );
};

export default Login;
