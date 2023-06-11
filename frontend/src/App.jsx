// import './index.css'
import Navigation from './Navigation';
import Gallery from './gallery/Gallery';
import Home from "./home/Home";
import Orders from "./orders/Orders";
import Login from "./administration/Login"
import { useState, useCallback, useEffect} from "react";

function App() {
  const [page, setPage] = useState("home");
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const onPage = useCallback((temp) => {
    setPage(temp);
  }, []);

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
    <>
    <Navigation onPage = {onPage} token = {token} resetToken = {resetToken}/>
    {page == "gallery" && <Gallery token = {token}/>}
    {page == "home" && <Home token = {token}/>}
    {page == "orders" && <Orders token = {token}/>}
    {page == "login" && <Login token = {token} recievedToken = {recievedToken}
                                onPage = {onPage}/>}

    </>
  )
}

export default App

    

