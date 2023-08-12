import PropTypes from "prop-types";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCardFooter
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


  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '800px', // Make sure the card takes up the full height
    width: "400px",
    overflow: 'hidden', // Hide any content that exceeds the fixed height
    marginBottom: '20px', // Add margin to create spacing between cards
  };

  const titleStyles = {
    height: '60px' // Add a little space between title and description
  };

  const imageContainerStyles = {
    paddingTop: '100%', // 1:1 aspect ratio for the image
    position: 'relative', // Needed for absolute positioning of the image
    height: "300px",
  };

  const imageStyles = {
    position: '',
    top: 0,
    left: 0,
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    objectPosition: 'center',
  };

  return (
    <>
<MDBCard style={cardStyles}>

<MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-zoom'>

      <MDBCardImage
        src={cake.image}
        alt='...'
        style={imageStyles}
      />
      <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <div style={titleStyles}>
          <MDBCardTitle>{cake.title}</MDBCardTitle>
        </div>
        <MDBCardText>{cake.description}</MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <small className='text-muted'>Last updated 3 mins ago</small>
      </MDBCardFooter>
    </MDBCard>


    </>
  );
}

Cake.propTypes = {
  cake: PropTypes.object.isRequired,
  likeData: PropTypes.array.isRequired,
};