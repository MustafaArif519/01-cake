import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";
import  { useState, useCallback } from 'react';
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
  MDBBtn


} from 'mdb-react-ui-kit';
import LoginModal from './login/LoginModal';


// eslint-disable-next-line react/prop-types
function Navigation({ token, resetToken, recievedToken }) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const [showNavNoToggler, setShowNavNoToggler] = useState(false);




  console.log('navvigation prop loaded');

  const showModal = useCallback(() => {
    console.log("displaying login modal");
    setBasicModal(false);
  }, []);


  const handleSubmit = useCallback((username, password) => {
    const tryLogin = async () => {
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
    tryLogin();
  }, []);

  
  return (
    <>
      <LoginModal showModal ={showModal} handleSubmit={handleSubmit} display={basicModal} 
      setDisplay={setBasicModal}/>


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