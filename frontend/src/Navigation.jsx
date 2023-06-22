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


// eslint-disable-next-line react/prop-types
function Navigation ({token, resetToken, recievedToken})  {

  return (
  <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Navbar.Brand>
      <Link to={`/`}>
            <img
              alt=""
              src="./src/images/icon.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            </Link>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={`/`}>Home</Nav.Link>
            <Nav.Link as={Link} to={`/gallery`}>Gallery</Nav.Link>
            {/* <NavDropdown title="Orders" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#placeOrder">Place Order</NavDropdown.Item>
              <NavDropdown.Item href="#pastOrders">Past Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to={`/orders`}>Orders</Nav.Link>

            <Nav.Link as={Link} to={`/contact`}>Contact</Nav.Link>
            <Nav.Link as={Link} to={`/about`}>About</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

          </Form> */}
          <MDBBtn>
            Orders Recieved
            <MDBBadge className='ms-2' color='danger'>
              8
            </MDBBadge>
          </MDBBtn>
          &emsp;
          {!token &&
            <Button avriant="outline-success"><Modal 
                      token = {token} recievedToken = {recievedToken}/>
            </Button> }
          {token &&
            <Button onClick = {resetToken} variant="outline-success">Logout</Button> }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
</>
  );
}
export default Navigation;