
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCardOverlay
} from 'mdb-react-ui-kit';
//import "./style.css"

export default function Cake({title, description, image}) {
  //console.log(description);
  return (

    <MDBCard className='h-100' >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage overlay position='top' className='embed-responsive-16by9
        img-fluid rounded card-img-top' src={image} fluid alt='...' 
        style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '16/9' }}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardOverlay>
      <MDBBtn>Like</MDBBtn>
      </MDBCardOverlay>
      <MDBCardBody>
        <MDBCardTitle className='h-50'>{title}</MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}