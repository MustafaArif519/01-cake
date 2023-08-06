import { useEffect, useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import Navigation from './Navigation';
import Gallery from './gallery/Gallery';
import Home from './home/Home';
import Orders from './orders/Orders';
import ErrorPage from './error-page';
import NewOrder from './orders/new-order/NewOrder';
import Profile from './profile/Profile'
import Contact from './Contact.jsx'
import "./background.css"


function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || -1);

  useEffect(() =>{
    localStorage.setItem('token', token);
  }, [token])

  useEffect(() =>{
    localStorage.setItem('userId', userId);
    console.log(userId);
  }, [userId])

  const recievedToken = useCallback((key) => {
    console.log("updating token and user-id", key);
    setToken(key);
    retrieveUserId(key);
  }, []);

  const resetToken = useCallback(() => {
    setToken('');
    setUserId(-1);
  }, []);

  const retrieveUserId = async (key) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/user-id/', {
        method: 'GET',
        headers: {
          'Authorization': "Token " + key,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserId(data);
        // console.log(data);
        // console.log(userId);
        
      } else {
        // Login failed, handle the error
        console.log('User id retrieval failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
        {console.log("App componenet rendered", token)}
        <Router >
          <Navigation token = {token} resetToken = {resetToken} recievedToken={recievedToken}/>
          <Routes>
            <Route path="/" element={<Home token = {token} recievedToken = {recievedToken}/>} />
            <Route path="/gallery" element={<Gallery userId = {userId} token = {token}/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order" element={<NewOrder token = {token} />} />
            <Route path="/profile" element={<Profile token = {token} />} />
            <Route path="/contact" element={<Contact token = {token} />} />
            {/* <Route path="/login" element={<Login token = {token} recievedToken = {recievedToken}/>} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Check us out on our social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href="https://www.instagram.com/faridascakeboutique/" 
          className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>

        </div>
      </section>



      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: <span></span>
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          FaridasCakeBoutique LLC
        </a>
      </div>
    </MDBFooter>
    </>

  );
}

export default App;
