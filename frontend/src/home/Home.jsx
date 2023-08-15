import React, { useState } from "react";
import Modal from "../administration/Modal"
import {

  MDBCarousel,
  MDBCarouselItem,
  MDBBtn
} from "mdb-react-ui-kit";


export default function Home(token, recievedToken) {

  return (
    <>
    <title>Home | Farida&#39;s Cake Boutique</title>
<header>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('./src/images/makingCake.gif')", height: '600px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Farida Cake Boutique!</h1>
              <h4 className='mb-3'>Each cake is made with care and precision</h4>
              <MDBBtn tag="a" outline color="info" size="lg">
                Place Order
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
      
    </>
  );
}

