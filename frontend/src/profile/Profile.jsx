import { useNavigate , Navigate, Route, Routes } from 'react-router-dom';
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
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function Profile({ token, user, retrieveUser, resetToken }) {
  const [editUser, setEditUser] = useState(user);
  const [editing, setEditing] = useState(false);

  // console.log(token);
// if(token === ""){
//   const navigate = useNavigate();
//   console.log("checking token....");
//   navigate('/gallery');
// }


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







  const patchUser = async () => {
    const windowName = window.location.hostname;
    console.log('http://localhost:8000/api/v1/dj-rest-auth/user/');
    try {
      const response = await fetch('http://localhost:8000/api/v1/dj-rest-auth/user/', {
        method: 'PATCH',
        headers: {
          'Authorization': "Token " + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editUser), // Convert editUser object to JSON
      });
      if (response.ok) {
        const data = await response.json();
        retrieveUser(token);
        setEditing(!editing);

      } else {
        // Login failed, handle the error
        const data = await response.json();
        console.log('User data patching failed', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const resetPassword = async () => {
    const token = "your_token_here"; // Replace with your actual token
    const user = {
      email: "user@example.com", // Replace with the user's email
    };
  
    try {
      const response = await fetch('http://localhost:8000/api/v1/dj-rest-auth/password/reset/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Handle success
        console.log('Password reset success:', data);
      } else {
        // Handle error
        console.log('User password reset failed', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


  return (
    <section >
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">

          <div className="d-flex flex-column align-items-center">

              <MDBCard className="mb-4" >
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />

                  <div className=" justify-content-center">
                    {/* {editing &&
                      <div>
                        <br />
                        <MDBBtn outline className="ms-1" onClick={() => setEditing(!editing)} >
                          Upload Image
                        </MDBBtn>
                      </div>
                    } */}
                    <br />
                    {user.username}
                  </div>
                  <br />



                  <div>
  <MDBBtn color="warning" className="d-flex justify-content-center" onClick={resetPassword}>
    <span style={{ whiteSpace: 'nowrap' }}>Reset Password</span>
  </MDBBtn>
  <div>
    <br />
  </div>
  <MDBBtn color="danger" className="" onClick={resetToken} style={{  height: '50px', padding: '0.375rem 2rem' }}>
    Logout
  </MDBBtn>
</div>




                </MDBCardBody>
              </MDBCard>


              
            </div>


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
                      {user.email}
                      {/* {editing &&  <MDBInput
                          name="email"
                          onChange={(e) => onChange(e)}
                          id="email"
                          required
                          label="Email"
                          value={editUser.email}
                        /> } */}
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

                      {editing && <MDBInput
                        name="phone_number"
                        onChange={(e) => onChange(e)}
                        id="emaasdfasdfil"
                        required
                        label="Phone Number"
                        value={editUser.phone_number}
                      />}
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

                      {editing && <MDBInput
                        name="heard_from"
                        onChange={(e) => onChange(e)}
                        id="asdfasdf"
                        required
                        label="Heard From"
                        value={editUser.heard_from}
                      />}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                {editing &&
                  <div className="d-flex justify-content-end">
                    <MDBBtn color="danger" className="me-1" onClick={discard}>Discard</MDBBtn>
                    <MDBBtn color="success" className="me-1" style={{ width: '100px' }} onClick={patchUser}>
                      Save
                    </MDBBtn>
                  </div>

                }
                {!editing &&
                  <div className="d-flex justify-content-end">
                    <MDBBtn color="info" className="me-1" onClick={discard}>Edit Profile</MDBBtn>

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