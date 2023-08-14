import Scroll from './Scroll';
import { 
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody } from 'mdb-react-ui-kit';
import { useState } from "react"


function Gallery({ userId, token }) {

  const [optSmModal, setOptSmModal] = useState(false);

  const toggleShow = () => setOptSmModal(!optSmModal);

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
