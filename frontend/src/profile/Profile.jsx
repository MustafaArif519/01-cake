import { useNavigate, Navigate, Route, Routes } from 'react-router-dom';
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

export default function Profile({ token, user, retrieveUser, resetToken, blastModal }) {
  const [editUser, setEditUser] = useState(user);
  const [editing, setEditing] = useState(false);

  const [editPass, setEditPass] = useState(false);
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

  const [showPassword1, setShowPassword1] = useState('password');
  const [showPassword2, setShowPassword2] = useState('password');

  const backendUrl = "https://faridascakeboutiquesbackend.net/";

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

  const discardPass = () => {
    setNewPassword1('');
    setNewPassword2('');
    setShowPassword1('password');
    setShowPassword2('password');
    setEditPass(!editPass);
  }



  const makeVisible = (changer) => {
    if (changer === "new_password1") {
      if (showPassword1 === "password") {
        setShowPassword1('text');
      }
      else {
        setShowPassword1('password');
      }
    }
    else {
      if (showPassword2 === "password") {
        setShowPassword2('text');
      }
      else {
        setShowPassword2('password');
      }
    }
  }


  const patchUser = async () => {
    console.log(backendUrl+'api/v1/dj-rest-auth/user/');
    try {
      const response = await fetch(backendUrl+'api/v1/dj-rest-auth/user/', {
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
      blastModal("error", "User data not updated succesfully.")
    }
  };

  const changePassword = async () => {
    console.log(backendUrl+'api/v1/dj-rest-auth/password/change/');
    try {
      const response = await fetch(backendUrl+'api/v1/dj-rest-auth/password/change/', {
        method: 'POST',
        headers: {
          'Authorization': "Token " + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          new_password1: newPassword1,
          new_password2: newPassword2,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setEditPass(!editPass);
        setNewPassword1('');
        setNewPassword2('');
        setShowPassword1('password');
        setShowPassword2('password');
        blastModal("info", "Password updated succesfully.")

      } else {
        // Login failed, handle the error
        const data = await response.json();
        console.log('User data password change failed', JSON.stringify(data));
        blastModal("error", "Password not updated scucessfully:\n" + JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error:', error);
      blastModal("error", "Password not updated scucessfully. Please try again.");
    }
  };





  return (
    < >

<title>Profile | Farida&#39;s Cake Boutique</title>

      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">

            <div className="d-flex flex-column align-items-center">

              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={import.meta.env.BASE_URL+"images/profile.png"}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ maxWidth: '150px', height: '150px' }}
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
                  {editPass &&
                    <div>
                      <MDBRow>

                        <MDBCol sm="10">
                          <MDBCardText className="text-muted">

                            <MDBInput
                              name="new_password1"
                              onChange={(e) => setNewPassword1(e.target.value)}
                              id="username"
                              required
                              label="New Password"
                              value={newPassword1}
                              type={showPassword1}
                            />

                          </MDBCardText>
                        </MDBCol>
                        <MDBCol sm="2">
                          {(showPassword1 === "text") &&
                            <MDBIcon fas icon="eye" onClick={() => makeVisible("new_password1")} />
                          }
                          {(showPassword1 === "password") &&
                            <MDBIcon fas icon="eye-slash" onClick={() => makeVisible("new_password1")} />
                          }
                        </MDBCol>
                      </MDBRow>

                      <hr />
                      <MDBRow>

                        <MDBCol sm="10">
                          <MDBCardText className="text-muted">

                            <MDBInput
                              name="new_password2"
                              onChange={(e) => setNewPassword2(e.target.value)}
                              id="username"
                              required
                              label="Confirm New Password"
                              value={newPassword2}
                              type={showPassword2}
                            />

                          </MDBCardText>
                        </MDBCol>
                        <MDBCol sm="2">
                          {(showPassword2 === "text") &&
                            <MDBIcon fas icon="eye" onClick={() => makeVisible("new_password2")} />
                          }
                          {(showPassword2 === "password") &&
                            <MDBIcon fas icon="eye-slash" onClick={() => makeVisible("new_password2")} />
                          }
                        </MDBCol>
                      </MDBRow>
                      <hr />
                    </div>
                  }


                  <div>


                    {!editPass &&
                      <MDBBtn color="warning" className="d-flex justify-content-center"
                        onClick={() => setEditPass(!editPass)}>
                        <span style={{ whiteSpace: 'nowrap' }}
                        >Reset Password</span>
                      </MDBBtn>
                    }
                    {editPass &&

                      <div className="d-flex justify-content-end">
                        <MDBBtn color="danger" className="me-1" onClick={() => discardPass()}>Discard</MDBBtn>
                        <MDBBtn color="success" className="me-1" style={{ maxWidth: '100px' }} onClick={changePassword}>
                          Save
                        </MDBBtn>
                      </div>

                    }

                    <div>
                      <br />
                    </div>
                    <MDBBtn color="danger" className="" onClick={resetToken} style={{ height: '50px', padding: '0.375rem 2rem' }}>
                      Logout
                    </MDBBtn>
                  </div>




                </MDBCardBody>
              </MDBCard>



            </div>


          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-3 w-100 p-3"
              style = {{maxWidth: "520px" }}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted" >
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
                    <MDBBtn color="success" className="me-1" style={{ maxmaxWidth: '100px' }} onClick={patchUser}>
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
    </>
  );
}