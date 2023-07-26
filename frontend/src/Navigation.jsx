import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar'
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';

import Modal from "./administration/Modal"
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
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
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBIcon,

} from 'mdb-react-ui-kit';


// eslint-disable-next-line react/prop-types
function Navigation({ token, resetToken, recievedToken }) {
  const [basicModal, setBasicModal] = useState(false);
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, [basicModal])

  console.log('login prop loaded');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Save the token to local storage

        // TODO: Use the token for authenticated requests
        console.log('Login successful. Token:', data.key);
        recievedToken(data.key);
        setBasicModal(false);

      } else {
        // Login failed, handle the error
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent style={{width: "600px", height: "400px"}}>
            <MDBModalHeader>
              <MDBModalTitle>Login</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBValidation isValidated style={{ textAlign: "left", width: '250px'}}>

                <MDBValidationItem className='field' invalid feedback='ex: JohnDoe' >
                  <div className="textInputWrapper">
                    <MDBInput
                      name='Username'
                      onChange={(e) => setUsername(e.target.value)}
                      id='validationCustom05'
                      required
                      label='Username'
                    />
                  </div>
                </MDBValidationItem>


              </MDBValidation>
              <MDBValidation isValidated style={{ textAlign: "left", width: '250px'}}>

                <MDBValidationItem className='field' invalid feedback='' >
                  <div className="textInputWrapper">
                    <MDBInput
                    type='password' 
                      name='Password'
                      onChange={(e) => setPassword(e.target.value)}
                      id='validationCustom35'
                      required
                      label='Password'
                    />
                  </div>
                </MDBValidationItem>


              </MDBValidation>

            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="danger" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleSubmit}>Login</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


      <MDBNavbar sticky expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer fluid>

          <MDBNavbarBrand>

            <img
              alt=""
              src="./src/images/icon.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />

          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <img 
            src = "./src/images/bars.png"
            width = "30px"
            height = "30px"
            />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoToggler}>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>

                <Nav.Link as={Link} to={`/`}>Home</Nav.Link>

              </MDBNavbarItem>
              <MDBNavbarItem>
                <Nav.Link as={Link} to={`/gallery`}>Gallery</Nav.Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                    Orders
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      <Nav.Link as={Link} to={`/order`}>Place Order</Nav.Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Nav.Link as={Link} to={`/orders`}>Current Orders</Nav.Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Nav.Link as={Link} to={`/orders`}>Past Orders</Nav.Link>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Nav.Link as={Link} to={`/contact`}>Contact</Nav.Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Nav.Link as={Link} to={`/about`}>About</Nav.Link>
              </MDBNavbarItem>

            </MDBNavbarNav>


            {token &&
              <div className="text-center">
                <MDBBtn onClick={resetToken} className='mx-2' color='info'>
                  Profile

                </MDBBtn>
              </div>}
            {!token &&
              <div className="text-center">
                <MDBBtn onClick={toggleShow} outline color="success">Login</MDBBtn>
              </div>

            }
            {token &&
              <div className="text-center">
                <MDBBtn onClick={resetToken} className='mx-2' color='danger'>
                  Logout

                </MDBBtn>
              </div>
            }

          </MDBCollapse>
        </MDBContainer>

      </MDBNavbar>
      <Outlet />
    </>
  );
}


export default Navigation;