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
    MDBModal,
  } from 'mdb-react-ui-kit';






  export default function CreateCakeWarning({ toggleShow, centredModal, setCentredModal })  {

    return (
<>

<MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal} > 
<MDBModalDialog centered>
          <MDBModalContent >
            <MDBModalHeader>
              <MDBModalTitle >Error Posting Cake</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody color='danger'>
              <p>
                One or more of the fields have not been filled out. Please make sure you have a cake title,
                description, and image before posting!
              </p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Okay
              </MDBBtn>
              
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
        </MDBModal>

</>
    );
  
}
