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
import SuccessModal from './SuccessModal'
import WarningModal from './WarningModal'
import InfoModal from './InfoModal'



export default function AdminModal( {showModal, setShowModal, type, message }) {
  const toggleShow = () => setShowModal(!showModal);

  return (
    <>
{type === "error" && 
<ErrorModal toggleShow={toggleShow} centredModal={showModal} setCentredModal={setShowModal} 
message = {message}/>}

{type === "success" && 
<SuccessModal toggleShow={toggleShow} centredModal={showModal} setCentredModal={setShowModal} 
message = {message}/>}

{type === "warning" && 
<WarningModal toggleShow={toggleShow} centredModal={showModal} setCentredModal={setShowModal} 
message = {message}/>}

{type === "info" && 
<InfoModal toggleShow={toggleShow} centredModal={showModal} setCentredModal={setShowModal} 
message = {message}/>}

    </>
  );
}