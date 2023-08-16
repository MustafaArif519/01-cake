import { useEffect, useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import Navigation from './Navigation';
import Gallery from './gallery/Gallery';
import Home from './home/Home';
import Orders from './orders/Orders';
import ErrorPage from './error-page';
import NewOrder from './orders/new-order/NewOrder';
import Profile from './profile/Profile'
import ResetPassword from './profile/ResetPassword';
import Contact from './Contact.jsx'
import "./background.css"


function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [userId, setUserId] = useState(localStorage.getItem('userId') || -1);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || '');

  

  useEffect(() =>{
    localStorage.setItem('token', token);
  }, [token])

  useEffect(() =>{
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  useEffect(() =>{
    localStorage.setItem('userId', userId);
    console.log(userId);
  }, [userId])

  const recievedToken = useCallback((key) => {
    console.log("updating token and user-id", key);
    setToken(key);
    retrieveUser(key);
    retrieveUserId(key);
  }, []);

  const resetToken = useCallback(() => {
    setToken('');
    setUserId(-1);
    setUser('');
    // const navigate = useNavigate();
//   console.log("checking token....");
// navigate('/gallery');
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
        console.log("data for user recieved!");
        // console.log(userId);
        
      } else {
        // Login failed, handle the error
        console.log('User id retrieval failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const retrieveUser = async (key) => {
    const windowName = window.location.hostname;
    console.log('http://localhost:8000/api/v1/dj-rest-auth/user/');
    try {
      const response = await fetch('http://localhost:8000/api/v1/dj-rest-auth/user/', {
        method: 'GET',
        headers: {
          'Authorization': "Token " + key,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log(data);
        // console.log(data);
        // console.log(userId);
        
      } else {
        // Login failed, handle the error
        console.log('User data retrieval failed');
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
            <Route path="/gallery" element={<Gallery user = {user} token = {token}/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order" element={<NewOrder token = {token} />} />
            <Route path="/profile" element={<Profile token = {token} user ={user} 
            retrieveUser = {retrieveUser} resetToken={resetToken}/>} />
            <Route path="/password-reset" element={<ResetPassword />} />
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
          <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
          </a>
          <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
          </a>
          <a href="https://www.instagram.com/faridascakeboutique/" 
          className='me-4 text-reset' target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin fa-lg" style={{ color: '#0077b5' }} />
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
