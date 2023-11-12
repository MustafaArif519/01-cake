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
  const backendUrl = "https://faridascakeboutiquesbackend.net/";
  return (
    <>

<title>Page Not Found | Farida&#39;s Cake Boutique</title>


    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <MDBCard border='danger' background='white' shadow='0' style={{ width: '600px', height: '450px' }}>
        <MDBCardHeader background='transparent' border='danger' className='text-danger' style={{ textAlign: 'center' }}>
          Error 404: Page Not Found <span></span>
          <MDBIcon far icon='frown' />
        </MDBCardHeader>
        <MDBCardBody className='text-danger'>
          <MDBCardTitle style={{ textAlign: 'center' }}>
            Oh no, looks like &apos;{domainName}{currentUrl}&apos; does <b>not</b> exist!
          </MDBCardTitle>
          <MDBCardText style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              style={{ width: '200px', height: '200px' }}
              src={import.meta.env.BASE_URL+"images/error.png"}
              alt='Error 404'
            />
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter background='transparent' border='danger' style={{ textAlign: 'center' }}>
          <Link to={`/`} className='text-warning'>
            Take me back to home
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
    </>
  );
};

export default ErrorPage;