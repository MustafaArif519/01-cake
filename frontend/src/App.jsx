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

  useEffect(() =>{
    localStorage.setItem('token', token);
  }, [token])

  const recievedToken = useCallback((key) => {
    setToken(key);
  }, []);

  const resetToken = useCallback(() => {
    setToken('');
  }, []);

  return (
    <Router>
      <Navigation token = {token} resetToken = {resetToken}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery token = {token}/>} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login token = {token} recievedToken = {recievedToken}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
