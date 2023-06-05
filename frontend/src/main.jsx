import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.freecodecamp.org/news/content/images/2022/06/Screen-Shot-2022-06-02-at-10.39.02-PM.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    {/* <App /> */}
  </React.StrictMode>,
)
