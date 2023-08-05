import React, { useState } from "react";
import Modal from "../administration/Modal"
import {
  MDBBtn,
  MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon
} from "mdb-react-ui-kit";

export default function Home(token, recievedToken) {

  return (
    <>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: 
          "url('https://imgs.search.brave.com/tCmQh9W2AtkaMl_JFrEc5_yZFywfYTiEolINB_Wpqjs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91c2Fn/aWYuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyL2hxZ2lm/L2dva3UtbXVpLXVs/dHJhLWluc3RpbmN0/LWFjZWdpZi0xNC1n/b2luZy11bHRyYS1p/bnN0aW5jdC1iZWdp/bm5pbmcuZ2lm.gif')", 
          height: '500px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Each cake made with precision and care</h1>
              {/* <h4 className='mb-3'>Order Yours Now !</h4>
              <MDBBtn tag="a" outline size="lg">
                Order
              </MDBBtn> */}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

