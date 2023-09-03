import Scroll from './Scroll';
import PropTypes from "prop-types";
import { 
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody } from 'mdb-react-ui-kit';
import { useState } from "react"


function Gallery({ user, token, blastModal}) {
  // console.log(user);
  const [optSmModal, setOptSmModal] = useState(false);
//console.log(blastModal);
  const toggleShow = () => setOptSmModal(!optSmModal);

  return (
    <>
    <title>Gallery | Farida&#39;s Cake Boutique</title>
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {console.log('Gallery component rendered')}


        <Scroll url="http://127.0.0.1:8000/api/v1/cakes" user={user} token={token} 
        blastModal={blastModal} />



    </div>
    </>
    
  );
}

export default Gallery;

