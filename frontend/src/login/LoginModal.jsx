import  { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBModal,
  MDBValidation,
  MDBValidationItem,
  MDBInput,

} from 'mdb-react-ui-kit';

const LoginModal = ({showModal, handleSubmit, display}) => {

console.log('login Modal reloaded');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    if (!display) {
      // Reset the username and password when the modal is hidden
      setUsername('');
      setPassword('');
    }
  }, [display]);

  // console.log("current username val: ", username);

  return (
    <>
    <MDBModal show={display}  tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent style={{width: "600px", height: "400px"}}>
            <MDBModalHeader>
              <MDBModalTitle>Login</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={showModal}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBValidation isValidated style={{ textAlign: "left", width: '250px'}}>

                <MDBValidationItem className='field' invalid feedback='ex: JohnDoe' >
                  <div className="textInputWrapper">
                    <MDBInput
                      name='username'
                      onChange={(e) => setUsername(e.target.value)}
                      id='validationCustom05'
                      required
                      label='Username'
                      value = {username}
                    />
                  </div>
                </MDBValidationItem>


              </MDBValidation>
              <MDBValidation isValidated style={{ textAlign: "left", width: '250px'}}>

                <MDBValidationItem className='field' invalid feedback='' >
                  <div className="textInputWrapper">
                    <MDBInput
                    type='password' 
                      name='password'
                      onChange={(e) => setPassword(e.target.value)}
                      id='validationCustom35'
                      required
                      label='Password'
                      value = {password}
                    />
                  </div>
                </MDBValidationItem>


              </MDBValidation>
              forgot password?
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="danger" onClick={showModal}>
                Close
              </MDBBtn>
              <MDBBtn color = "success" onClick={() => handleSubmit(username, password)}>Login</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
         
    </>
  );
};

export default LoginModal;
