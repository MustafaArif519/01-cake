import React, { useState } from "react";
import Modal from "../administration/Modal"
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

export default function Home(token, recievedToken) {
  const [basicModal, setBasicModal] = useState(false);

  return (
    <>
    <h1>Home page</h1>
    <Modal token = {token} recievedToken={recievedToken}/>
    </>
  );
}

