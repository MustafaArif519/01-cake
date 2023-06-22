import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Navbar'
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from "./administration/Modal"
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
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

} from 'mdb-react-ui-kit';


// eslint-disable-next-line react/prop-types
function Navigation ({token, resetToken, recievedToken})  {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() =>{
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
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Login</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            {console.log(token)}
      { !token && <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit Login</button>
      </form> }
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    <MDBNavbar sticky  expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
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

          <MDBCollapse navbar>
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
                      <Nav.Link as={Link} to={`/orders`}>Place Order</Nav.Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Nav.Link as={Link} to={`/orders`}>Past Orders</Nav.Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link>
                      <Nav.Link as={Link} to={`/orders`}>Current Orders</Nav.Link>
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
            {/* <MDBBtn>
            Orders Recieved
            <MDBBadge className='ms-2' color='danger'>
              8
            </MDBBadge>
          </MDBBtn> */}
          {!token &&
          
          <Button onClick={toggleShow} variant="outline-success">Login</Button>
             }
          {token &&
            <Button onClick = {resetToken} variant="outline-success">Logout</Button> }
          </MDBCollapse>
        </MDBContainer>

      </MDBNavbar>
    <Outlet />
</>
  );
}


export default Navigation;