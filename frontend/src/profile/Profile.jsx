import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';

export default function Profile({ token, user }) {
  const [editUser, setEditUser] = useState(user);
  const [editing, setEditing] = useState(false);


  const onChange = (e) => {
    setEditUser(editUser => ({
      ...editUser,
      [e.target.name]: e.target.value
    }));
  };

  const discard = () => {
    setEditUser(user);
    setEditing(!editing);
  }

  console.log(user);

  return (
    <section >
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '250px' }}
                  fluid />

                <div className=" justify-content-center">
                  <br />

                  {editing && 
                  <MDBBtn outline className="ms-1" onClick={() => setEditing(!editing)} >
                    Upload Image
                  </MDBBtn>}
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">

            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4"
              style={{ width: '400px' }}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {!editing &&
                        <div>
                          {user.first_name}
                          <span> </span>
                          {user.last_name}
                        </div>
                      }

                      {editing && 
                      <div className="d-flex">
                      <div className="flex-grow-1 me-3">
                        <MDBInput
                          name="first_name"
                          onChange={(e) => onChange(e)}
                          id="username"
                          required
                          label="First Name"
                          value={editUser.first_name}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <MDBInput
                          name="last_name"
                          onChange={(e) => onChange(e)}
                          id="usernadme"
                          required
                          label="Last Name"
                          value={editUser.last_name}
                        />
                      </div>
                    </div>
                    
                      }


                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {!editing && user.email}
                      {editing &&  <MDBInput
                          name="email"
                          onChange={(e) => onChange(e)}
                          id="email"
                          required
                          label="Email"
                          value={editUser.email}
                        /> }
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {!editing && user.phone_number}

                      {editing &&  <MDBInput
                          name="phone_number"
                          onChange={(e) => onChange(e)}
                          id="emaasdfasdfil"
                          required
                          label="Phone Number"
                          value={editUser.phone_number}
                          /> }
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Heard From</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {!editing && user.heard_from}

                      {editing &&  <MDBInput
                          name="heard_from"
                          onChange={(e) => onChange(e)}
                          id="asdfasdf"
                          required
                          label="Heard From"
                          value={editUser.heard_from}
                          /> }
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                {editing &&
                  <div className="d-flex justify-content-end">
                    <MDBBtn color="danger" className="me-1" onClick = {discard}>Discard</MDBBtn>
                    <MDBBtn color="success" className="me-1" style={{ width: '100px' }}>
                      Save
                    </MDBBtn>
                  </div>

                }
                {!editing && 
                <div className="d-flex justify-content-end">
                <MDBBtn color="info" className="me-1" onClick = {discard}>Edit Profile</MDBBtn>

              </div>
                }
              </MDBCardBody>
            </MDBCard>


          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}