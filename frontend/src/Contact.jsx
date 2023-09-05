import React from 'react';
import {
  MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function PersonalProfile() {
  return (
    < >

      <title>Contact | Farida&#39;s Cake Boutique</title>




      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100" style={{ width: "600px" }}>

          <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
            <MDBRow className="g-0">
              <MDBCol md="3" className="gradient-custom text-center text-white"
                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                {/* <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="Avatar" className="my-5" fluid /> */}
                <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                <MDBCardText>Web Designer</MDBCardText>
                <MDBIcon far icon="edit mb-5" />
              </MDBCol>
              <MDBCol md="9">
                <MDBCardBody className="p-4">
                  <MDBTypography tag="h6">Contact Information</MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Email</MDBTypography>
                      <MDBCardText className="text-muted">info@example.com</MDBCardText>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Phone</MDBTypography>
                      <MDBCardText className="text-muted">(248)-525-3097</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <br />

                  <MDBTypography tag="h6">Working Hours</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="7" className="mb-3">
                          <MDBCardText className="text-muted">Weekdays: 9AM - 5PM</MDBCardText>
                          <MDBCardText className="text-muted">Weekends: 10AM - 6PM</MDBCardText>

                        </MDBCol>
                        <MDBCol size="5" className="mb-3">
                          <div className="d-flex flex-column align-items-center">
                            <MDBCardText className="text-muted mb-2">Status:</MDBCardText>
                            <MDBBtn color="success"  rounded>Available!</MDBBtn>
                          </div>
                        </MDBCol>
                      </MDBRow>




                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>

        </MDBRow>
      </MDBContainer>
    </>
  );
}