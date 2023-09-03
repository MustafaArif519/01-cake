import  { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import ErrorModal from './ErrorModal';


export default function AdminModal( {showModal, setShowModal, type, message }) {
  const toggleShow = () => setShowModal(!showModal);

  return (
    <>
     <MDBBtn onClick={toggleShow}>Vertically centered modal</MDBBtn>
<ErrorModal toggleShow={toggleShow} centredModal={showModal} setCentredModal={setShowModal} 
message = {message}/>

    </>
  );
}