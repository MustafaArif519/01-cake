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
  MDBTabsItem,
  MDBTabsLink,
  MDBTabs,
  MDBModalBody,
 } from 'mdb-react-ui-kit';
import moment from 'moment'; // Import Moment.js
import Like from "./Like"
import MegaCake from "./MegaCake";

import CakeImage from './CakeImage';
import "./style.css"

export default function Cake({ cake, likeData, user, token,
   deleteCake, patchCake, postLike, deleteLike}) {


  const [yourLike, setYourLike] = useState(null);
  const [likeCount, setLikeCount] = useState(-3);

  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
toggleText();
    setJustifyActive(value);
  };

// console.log(cake);

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
  
  
    useEffect(() => {
    // This function will run after the component renders
    // You can perform asynchronous operations here
    if(likeData == null || user == null){
      return null;
    }
    let temp = likeData.filter((item) => item.cake === cake.id);
    let foundLike = temp.find((item) => item.author == user.pk);
    // console.log(foundLike == null);
  
    setYourLike(foundLike);
  }, [likeData, cake.id]);



  const like = async () => {
    console.log(cake.id);
    if(token == ""){
      return;
    }
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
      // console.log(token);
      const responseBody = await response.json();

      // console.log(JSON.stringify(responseBody, null, 4));

      if (!response.ok) {
        throw new Error('Request failed');
      }

      // Do something with the response, if needed
      //let temp = console.log(JSON.stringify(responseBody, null, 4));

      setLikeCount(likeCount + 1);
      postLike(responseBody);

    } catch (error) {
      console.log(error);
    }
  };

  const unlike = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/cake-likes/'+yourLike.id+"/", {
        method: 'DELETE',
        headers: {
          'Authorization': "Token " + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'cake': cake.id,
        }), // Replace with your data object
      });
      deleteLike(yourLike);
      setLikeCount(likeCount - 1);
      
    } catch (error) {
      console.error(error);
    }
  };


  const [imageLoaded, setImageLoaded] = useState(false);

  const [optSmModal, setOptSmModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const [showText, setShowText] = useState(true);

  const toggleShow = () => setOptSmModal(!optSmModal);
  const toggleCreate = () => setOptSmModal(!createModal);

  const toggleText = () => setShowText(!showText);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };



  const cardStyles = {
    display: 'flex',
    width: "250px",
    height: "500px",
    minWidth: '200px',
    overflow: 'hidden', // Hide any content that exceeds the fixed height
    margin: '10px', // Add margin to create spacing between cards

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
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              
            <div className="MDBTabsContainer">
 <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Image With Text
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Image Only
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      </div>
             
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MegaCake cake={cake} like = {like} token = {token} user = {user} 
            unlike = {unlike} likeCount = {likeCount}
            setOptSmModal = {setOptSmModal}
            deleteCake = {deleteCake} updateCake = {patchCake}
            yourLike = {yourLike} showText = {showText}/>
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
        {<Like cake={cake} like={like} unlike ={unlike} likeCount = {likeCount} yourLike={yourLike} />}

            </MDBCardTitle>
        </div>
        <MDBCardText>{cake.title}</MDBCardText>
      </MDBCardBody>
      <MDBCardFooter style = {{display: "flex", justifyContent: "space-between"}}>
        <small className='text-muted' >{moment(cake.created_at).fromNow()}</small>
        {/* {user.is_staff && <div >
        <MDBBtn color = "warning" style = {{margin: "2px"}} ><MDBIcon fas icon="edit" /></MDBBtn>
        <MDBBtn color = "danger" style = {{margin: "2px"}}><MDBIcon far icon="trash-alt" /></MDBBtn>
        </div>} */}
      </MDBCardFooter>
    </MDBCard>


    </>
  );
}

Cake.propTypes = {
  cake: PropTypes.object.isRequired,
  likeData: PropTypes.array.isRequired,
};