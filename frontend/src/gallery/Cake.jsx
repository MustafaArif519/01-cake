import PropTypes from "prop-types";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBCardHeader,
} from 'mdb-react-ui-kit';
import Like from "./Like"
import "./style.css"

export default function Cake({cake, token, likeData}) {
  //console.log(description);
  let likesCount = 0;

  likesCount = likeData.filter((item) => item.cake === cake.id);
  console.log(likesCount);
  likesCount = likesCount.length;



  return (

    <MDBCard style={{ height:"500px"}} >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom'>
        <MDBCardImage overlay position='top' className='embed-responsive-16by9
        img-fluid rounded card-img-top' src={cake.image} fluid alt='...' 
        style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '16/9' }}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle  
        style={{ height:"50px", width: '75%', float:"left", position: "relative"}}>
          {cake.title}
        </MDBCardTitle>
        <Like token = {token} cake = {cake} lcount = {likesCount} lstatus={"like"}/>
      
        <MDBCardText style={{margin: "35px" }}>
          {cake.description}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

Cake.propTypes = {
  
  token: PropTypes.string.isRequired,
  
};