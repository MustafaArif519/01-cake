import PropTypes from "prop-types";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
} from 'mdb-react-ui-kit';
import Like from "./Like"
import "./style.css"

export default function Cake({ cake, likeData, userId, token }) {
  //console.log(description);
  // console.log(likeData);
  // let userId = localStorage.getItem('userId');



  function findLike() {
    // console.log(userId);
    if(likeData == null){
      return null;
    }
    let temp = likeData.filter((item) => item.cake === cake.id);
    let foundLike = temp.find((item) => item.author == userId);
    // console.log(foundLike == null);
    if (foundLike == null) {
      return null;
    }
    return foundLike;
  }

  function findCount() {
    if(likeData == null){
      return null;
    }
    let count = likeData.filter((item) => item.cake === cake.id);
    // console.log(cake.id + " " + count.length);
    return count.length;
  }

  let foundLike = findLike();
  let foundCount = findCount();

  return (
    <>
    {/* {console.log(foundLike)} */}
      <MDBCard style={{ height: "500px" }} >
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-zoom'>
          <MDBCardImage overlay position='top' className='embed-responsive-16by9
        img-fluid rounded card-img-top' src={cake.image} fluid alt='...'
            style={{ objectFit: 'cover', width: '100%', height: '100%', aspectRatio: '16/9' }} />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle
            style={{ height: "50px", width: '75%', float: "left", position: "relative" }}>
            {cake.title}
          </MDBCardTitle>
          <Like cake={cake} lcount={foundCount} foundLike={foundLike} token = {token}/>

          <MDBCardText style={{ margin: "35px" }}>
            {cake.description}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

Cake.propTypes = {
  cake: PropTypes.object.isRequired,
  likeData: PropTypes.array.isRequired,
};