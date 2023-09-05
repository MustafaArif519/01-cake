import React, { useState } from "react";
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
        style={{ backgroundImage: "url('./src/images/makingCake.gif')", height: '600px'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'  style = {{textAlign: "center"}}>
                Welcome to Farida&apos;s Cake Boutique!</h1>
              <br />
              <br />
              <h4 className='mb-3'>Each cake is made with care and precision</h4>
              <MDBBtn tag="a" outline color="info" size="lg"
              target="_blank"
              href = "https://docs.google.com/forms/d/e/1FAIpQLScXUGXztc-mJNSmaPuNWoBMwB8xvuDbnKlYk_wK5jn54Jk7ag/viewform?usp=sf_link"
              >
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

