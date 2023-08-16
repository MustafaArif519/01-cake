import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCardFooter,
    MDBSpinner,
    MDBCardOverlay,
    MDBCardHeader,
    MDBBtn,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';






  export default function DeleteCakeModal({ toggleShow, deleteFunction })  {

    return (
<>


<MDBModalDialog centered>
          <MDBModalContent >
            <MDBModalHeader>
              <MDBModalTitle >WARNING</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody color='danger'>
              <p>
                You are about to delete this cake image, once you press DELETE, this cake image along with
                it&apos;s number of likes, user view history, and order links, will be PERMANENTLY deleted!
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Undo
              </MDBBtn>
              <MDBBtn color='danger' onClick={deleteFunction}>DELETE</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>


</>
    );
  
}
