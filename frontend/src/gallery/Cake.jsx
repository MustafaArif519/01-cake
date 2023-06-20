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
//import "./style.css"

export default function Cake({cake, token}) {
  //console.log(description);
  const handleClick = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/cake-likes/', {
        method: 'POST',
        headers: {
          'Authorization': "Token " + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          'cake': cake.id, 
        }), // Replace with your data object
      });
      console.log(token);
      const responseBody = await response.json();

console.log(JSON.stringify(responseBody, null, 4));

      if (!response.ok) {
        throw new Error('Request failed');
      }

      // Do something with the response, if needed
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
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
        <p className = "likesCount">23</p>
        <img onClick = {() => handleClick()} 
        className = "zoom" src = './src/images/ui/like.png' 
        style = {{position: "relative", width:'10%',
      float:"right" }} />
      
        <MDBCardText style={{margin: "35px" }}>
          {cake.description}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

Cake.propTypes = {
  cake: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};