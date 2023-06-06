import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import Navigation from './Navigation'
import Gallery from './gallery/Gallery'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Gallery />
    {/* <App /> */}
  </React.StrictMode>,
)
