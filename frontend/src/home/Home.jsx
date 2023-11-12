import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import {

  MDBCarousel,
  MDBCarouselItem,
  MDBBtn
} from "mdb-react-ui-kit";
import { Outlet, Link } from "react-router-dom";

export default function Home(token, recievedToken) {
  console.log(import.meta.env.BASE_URL);
  return (
    <>
    <title>Home | Farida&#39;s Cake Boutique</title>
<header>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('images/makingCake.gif')", height: '600px'}}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'  style = {{textAlign: "center", fontFamily: 'Lucida Handwriting, cursive'}}>
                Welcome to Farida&apos;s Cake Boutique!</h1>
              <br />
              <br />
              <h4 className='mb-3'>Where each cake is made with care and precision</h4>
              <Link to={`/order`} >
              <MDBBtn tag="a" outline color="info" size="lg"
              target="_blank"
              
              >

                Place Order

              </MDBBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
      
    </>
  );
}

