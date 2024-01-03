import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import { useState, useCallback } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBIcon,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBadge,
  MDBRow,


} from 'mdb-react-ui-kit';
import LoginModal from './login/LoginModal';


// eslint-disable-next-line react/prop-types
function Navigation({ token, resetToken, recievedToken, blastModal, backendUrl }) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  const [centredModal, setCentredModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const backendUrl = "https://faridascakeboutiquesbackend.net/";
  const toggleErrorShow = () => {
    setCentredModal(!centredModal);

  }



  console.log('navvigation prop loaded');

  const showModal = useCallback(() => {
    console.log("displaying login modal");
    setBasicModal(false);
  }, []);


  const handleSubmit = useCallback((username, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const login = {};

    if (emailRegex.test(username)) {
      login.email = username;
    } else {
      login.username = username;
    }

    login.password = password;

    console.log(backendUrl+'api/v1/dj-rest-auth/login/');
    console.log(login);

    const tryLogin = async () => {
      try {
        const response = await fetch(backendUrl+'api/v1/dj-rest-auth/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(login), // Convert login object to JSON
        });

        if (response.ok) {
          const data = await response.json();

          // Save the token to local storage

          // TODO: Use the token for authenticated requests
          console.log('Login successful. Token:', data.key);
          recievedToken(data.key);
          setBasicModal(false);
        } else {
          const data = await response.json();
          // Login failed, handle the error
          console.log('Login failed');
          blastModal("error", "Error logging into account:\n" + JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error:', error);
        blastModal("error", "Error logging in:\n" + error);
      }
    };
    tryLogin();
  }, []);



  const createAccount = useCallback((registerForm) => {
    console.log(registerForm);
    const tryCreate = async () => {
      try {
        const response = await fetch(backendUrl+'api/v1/dj-rest-auth/registration/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add an Authorization header if you have an authentication token
            // 'Authorization': `Bearer ${yourAuthToken}`,
          },
          body: JSON.stringify(registerForm),
        });
  
        if (response.ok) {
          // const data = await response.json();
  
          // Save the token to local storage
          // TODO: Use the token for authenticated requests
          console.log('Registration successful. Token:');
          blastModal("success", "Account successfully registered!");
          setBasicModal(false);
        } else {
          // Registration failed, handle the error
          console.log('Registration failed');
          const errorResponse = await response.json();
          console.log(errorResponse);
          blastModal("error", "Error creating account:\n" + JSON.stringify(errorResponse));
        }
      } catch (error) {
        console.error('Error:', error);
        blastModal("error", "Error creating account:\n" + error);
      }
    };
    tryCreate();
  }, []);
  

  const handleRegistrationSubmit = (registerForm) => {
    const register = {
      username: registerForm.username,
      email: registerForm.email,
      password1: registerForm.password1,
      password2: registerForm.password2,
      heard_from: registerForm.heard_from,
      phone_number: registerForm.phone_number, // Corrected: Use pNumber instead of phone_number
      firstname: registerForm.firstname, // Corrected: Use first_name instead of firstname
      lastname: registerForm.lastname, // Corrected: Use last_name instead of lastname
    };
    if (registerForm.heard_from === "Other") {
      register.heard_from = registerForm.heardFromOther;
    }
    createAccount(registerForm);
  };

  return (
    <>
<MDBRow className="mb-3">
      <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Error Prcoessing Request</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleErrorShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>
                {errorMessage}
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='danger' onClick={toggleErrorShow}>
                Okay
              </MDBBtn>

            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <LoginModal showModal={showModal} handleSubmit={handleSubmit} display={basicModal}
        setDisplay={setBasicModal} createAccount={handleRegistrationSubmit} backendUrl={backendUrl} />


      <MDBNavbar sticky expand='lg' light className="navigator">
        <MDBContainer fluid>

        <MDBNavbarBrand>
  <Nav.Link as={Link} to={`/`}  onClick={() => setShowNavNoToggler(false)}>
    <img
      alt=""
      src= {import.meta.env.BASE_URL+"images/icon.jpg"}
      width="30"
      height="30"
      className="d-inline-block align-top"
    />
  </Nav.Link>
</MDBNavbarBrand>
          
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoToggler}>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>

                <Nav.Link as={Link} to={`/`}
                 onClick={() => setShowNavNoToggler(false)}
                 >Home</Nav.Link>

              </MDBNavbarItem>
              <MDBNavbarItem>
                <Nav.Link as={Link} to={`/gallery`}
                 onClick={() => setShowNavNoToggler(false)}
                 >Gallery</Nav.Link>
              </MDBNavbarItem>

              <MDBNavbarItem>
              <Nav.Link as={Link} to={`/order`}
                 onClick={() => setShowNavNoToggler(false)}
                 >Place Order</Nav.Link>
              </MDBNavbarItem>

              {/* <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Orders
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      <Nav.Link as={Link} to={`/new-order`}>Place Order</Nav.Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Nav.Link as={Link} to={`/view-order`}>Current Orders</Nav.Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Nav.Link as={Link} to={`/orders`}>Past Orders</Nav.Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem> */}


              <MDBNavbarItem>
                <Nav.Link as={Link} to={`/contact`}
                 onClick={() => setShowNavNoToggler(false)}
                 >Contact</Nav.Link>
              </MDBNavbarItem>


            </MDBNavbarNav>


            {token &&
              <div className="d-flex justify-content-center">
                                
                <div className='position-relative d-inline-block'>
                <Link to="/profile" className="mx-2" rounded>
                  <MDBBtn color="info"
                   onClick={() => setShowNavNoToggler(false)}
                   >Profile</MDBBtn>
                </Link>
                

      </div>
      <MDBBtn color="danger" className="" onClick={resetToken} >
                      Logout
                    </MDBBtn>


              </div>
            }
            {!token &&
              <div className="text-center">
                <MDBBtn onClick={toggleShow} color='success'>Login</MDBBtn>
              </div>


            }


          </MDBCollapse>
        </MDBContainer>

      </MDBNavbar>
      <Outlet />
      </MDBRow>
    </>
  );
}


export default Navigation;