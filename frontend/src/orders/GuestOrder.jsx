import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';

const GoogleFormCard = () => {
  return (
    <MDBContainer className="py-5">
      <MDBRow md="12" style = {{width: "100%", maxWidth: "800px",}}>
        <MDBCol md="12" style = {{width: "100%"}}>
          <MDBCard style = {{width: "100%"}}>
            <MDBCardBody lg='4' className="p-3" style={{ width: "100%", height: "600px", overflow: "hidden" }}>

              <iframe
                title="Google Form"
                src="https://docs.google.com/forms/d/e/1FAIpQLScXUGXztc-mJNSmaPuNWoBMwB8xvuDbnKlYk_wK5jn54Jk7ag/viewform?embedded=true"
                style={{ width: "100%", height: "100%", overflow: "hidden" }} // Responsive styles for the iframe
                allowFullScreen={true}
              />

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default GoogleFormCard;
