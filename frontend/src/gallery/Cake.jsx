import PropTypes from "prop-types";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from 'mdb-react-ui-kit';
//import "./style.css"

export default function Cake({title, description, image}) {
  //console.log(description);
  return (

    <MDBCard style={{ height:"500px"}} >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom'>
        <MDBCardImage overlay position='top' className='embed-responsive-16by9
        img-fluid rounded card-img-top' src={image} fluid alt='...' 
        style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '16/9' }}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>

      <MDBCardBody>
        <MDBCardTitle  
        style={{ height:"50px", width: '90%', float:"left", position: "relative"}}>
          {title}
        </MDBCardTitle>
        
        <img src = './src/images/ui/like.png' 
        style = {{position: "relative", width:'10%',
      float:"right"}} />
        <MDBCardText style={{margin: "35px" }}>
          {description}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

Cake.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};