import Scroll from './Scroll';
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from 'mdbreact';
import { useState } from "react"


function Gallery({ userId, token }) {



  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {console.log('Gallery component rendered')}



        <Scroll url="http://127.0.0.1:8000/api/v1/cakes" userId={userId} token={token} />



    </div>
  );
}

export default Gallery;
