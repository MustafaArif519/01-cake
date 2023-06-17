
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

      <MDBCardBody>
        <MDBCardTitle  
        style={{ width: '60%', float:"left", position: "relative"}}>
          {title}
        </MDBCardTitle>
        <img src = './src/images/ui/like.png' style = {{position: "relative", height:'50px', width:'50px',
      float:"right"}} />
        <MDBCardText style={{ float:"down", position: "absolute", bottom: "0"}}>
          {description}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}