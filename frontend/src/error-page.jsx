import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
  MDBCardFooter
} from 'mdb-react-ui-kit';


const ErrorPage = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const domainName = window.location.hostname;

  return (
    <>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
  <MDBCard background='danger' border='danger' className='text-white mb-3' 
    style={{ width: '400px', height:"300px" }}>
    <MDBCardHeader>Error 404: Page Not Found <span></span>
    <MDBIcon far icon="frown" />
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>
        Oh no, looks like &apos;{domainName}{currentUrl}&apos; does <b>not</b> exist!
        </MDBCardTitle>

      
    </MDBCardBody>
    <MDBCardFooter>
  <Link as={Link} to={`/`}  className='text-white'>Take me back to home</Link>
</MDBCardFooter>
  </MDBCard>
  <img 
  style={{width: "400px", height:"200px"}}
  src="https://thumbs.gfycat.com/AnotherAmazingBirdofparadise.webp"/>
</div>
    </>
  );
};

export default ErrorPage;