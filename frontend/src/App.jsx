// import './index.css'
import Navigation from './Navigation'
import Gallery from './gallery/Gallery'
import Home from "./home/Home"
import Orders from "./orders/Orders"
import { useState, useCallback } from "react";

function App() {
  const [page, setPage] = useState("home");


  const onPage = useCallback((temp) => {
    setPage(temp);
  }, [page]);

  return (
    <>
    <Navigation onPage = {onPage}/>
    {page == "gallery" && <Gallery />}
    {page == "home" && <Home />}
    {page == "orders" && <Orders />}

    </>
  )
}

export default App

    

