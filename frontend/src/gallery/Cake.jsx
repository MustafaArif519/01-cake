import PropTypes from "prop-types";
import { useState, useEffect } from "react"
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
  MDBCardFooter,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody } from 'mdb-react-ui-kit';
import Like from "./Like"
import MegaCake from "./MegaCake";
import CakeImage from './CakeImage';
import "./style.css"

export default function Cake({ cake, likeData, user, token }) {
  //console.log(user);
  // console.log(likeData);
  // let userId = localStorage.getItem('userId');

  const [imageLoaded, setImageLoaded] = useState(false);

  const [optSmModal, setOptSmModal] = useState(false);

  const [yourLike, setYourLike] = useState(null);
  const [likeCount, setLikeCount] = useState(-1);

  useEffect(() => {
    // This function will run after the component renders
    // You can perform asynchronous operations here
    if(likeData == null){
      return null;
    }
    let count = likeData.filter((item) => item.cake === cake.id);
    console.log(cake.id + " " + count.length);
    setLikeCount(count.length);
  }, [likeData, cake.id]);

//   useEffect(() => {
//   // This function will run after the component renders
//   // You can perform asynchronous operations here
//   if(likeData == null){
//     return null;
//   }
//   let temp = likeData.filter((item) => item.cake === cake.id);
//   let foundLike = temp.find((item) => item.author == userId);
//   // console.log(foundLike == null);
//   if (foundLike == null) {
//     return null;
//   }
//   setYourLike(foundLike);
// }, [likeData, cake.id]);

  const toggleShow = () => setOptSmModal(!optSmModal);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };



  const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '800px', // Make sure the card takes up the full height
    width: "400px",
    overflow: 'hidden', // Hide any content that exceeds the fixed height
    marginBottom: '20px', // Add margin to create spacing between cards
  };

  const titleStyles = {
    height: '40px' // Add a little space between title and description
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
    
      <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
        <MDBModalDialog size=''>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                
              </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            {/* <MegaCake cake={cake}  token={token} likeData = {likeData} /> */}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

<MDBCard style={cardStyles}>

<MDBRipple rippleColor='dark' rippleTag='div' 
onDoubleClick={toggleShow}
className='bg-image hover-zoom'>

<CakeImage
        src={cake.image}
        alt='Cake Image'
        style={imageStyles}
      />
      <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <div style={titleStyles}>
          <MDBCardTitle>

{/* {console.log("cake id: ", cake.id, " has this number of like: ", foundCount)} */}
        {<Like cake={cake}  token={token} user={user} likeData = {likeData}/>}

            </MDBCardTitle>
        </div>
        <MDBCardText>{cake.title}</MDBCardText>
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