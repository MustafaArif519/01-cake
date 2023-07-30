import { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModal,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,

} from 'mdb-react-ui-kit';
import Login from './Login';
import Register from './Register';
import "./style.css"

const LoginModal = ({ showModal, handleSubmit, display, setDisplay }) => {

  // console.log('login Modal reloaded', display);


  //   console.log('login Modal reloaded', display);


  // console.log("current username val: ", username);
  const [justifyActive, setJustifyActive] = useState('tab1');
  //console.log(justifyActive);
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  useEffect(() => {
    if (!display) {
      setJustifyActive("tab1")
    }
  }, [display]);

  return (
    <>
      <MDBModal show={display} setShow={setDisplay} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent >
            <MDBModalHeader >
            <div className="MDBTabsContainer">
              <MDBTabs  justify>
                <MDBTabsItem  >
                  <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                    Sign In
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem  >
                  <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                    Create Account
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
              </div>
            </MDBModalHeader>
            <MDBTabsContent>
              <MDBTabsPane show={justifyActive == 'tab1'}>
                <Login showModal={showModal} handleSubmit={handleSubmit} display={display} />
              </MDBTabsPane>
              <MDBTabsPane show={justifyActive == 'tab2'}>
                <Register showModal={showModal} handleSubmit={handleSubmit} display={display} />
              </MDBTabsPane>
            </MDBTabsContent>

          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

    </>
  );
};

export default LoginModal;
