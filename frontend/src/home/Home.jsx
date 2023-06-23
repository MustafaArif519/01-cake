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
    https://docs.google.com/forms/d/e/1FAIpQLScXUGXztc-mJNSmaPuNWoBMwB8xvuDbnKlYk_wK5jn54Jk7ag/viewform
    </>
  );
}

