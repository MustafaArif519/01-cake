import { useEffect, useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Navigation from './Navigation';
import Gallery from './gallery/Gallery';
import Home from './home/Home';
import Orders from './orders/Orders';
import Login from './administration/Login';
import ErrorPage from './error-page';

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
    <Router>
      <Navigation token = {token} resetToken = {resetToken}/>
      <Routes>
        <Route path="/" element={<Home token = {token} recievedToken = {recievedToken}/>} />
        <Route path="/gallery" element={<Gallery token = {token}/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login token = {token} recievedToken = {recievedToken}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
