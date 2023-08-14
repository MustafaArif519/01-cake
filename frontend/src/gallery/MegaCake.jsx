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
    MDBSpinner,
    MDBCardOverlay,
    MDBCardHeader,
    MDBBtn,
    MDBCardGroup,
} from 'mdb-react-ui-kit';
import moment from 'moment'; // Import Moment.js
import Like from "./Like"
import CakeImage from './CakeImage';
import "./style.css"

export default function MegaCake({ cake, like, unlike, yourLike, likeCount, showText }) {
    //console.log(description);
    // console.log(likeData);
    // let userId = localStorage.getItem('userId');

    const [imageLoaded, setImageLoaded] = useState(false);

    const [visible, setVisible] = useState(showText);

    useEffect(() => {
        setVisible(showText);
      }, [showText]);



    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const imageStyles = {
        position: '',
        top: 0,
        left: 0,
        width: '100%',
        height: visible ? "600px" : "100%",
        objectFit: 'cover',
        objectPosition: 'center',
      };

    return (
        <>

      <MDBRow className='g-0'>
      <MDBCardGroup >
            <MDBCard>
        <MDBCardImage
          src={imageLoaded ? cake.image : './src/images/loading.gif'}
          alt='...'
          style={imageStyles}
          onLoad={handleImageLoad} // This should be removed
        />

        </MDBCard>
        {visible && 
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>{cake.title} 
            <br />
            <br />
            <Like cake={cake} like={like} unlike ={unlike} likeCount = {likeCount} yourLike={yourLike} />
            <hr /></MDBCardTitle>
            <MDBCardText>
              {cake.description}
            </MDBCardText>


          </MDBCardBody>
          <MDBCardFooter>
        <small className='text-muted'>{moment(cake.created_at).fromNow()}</small>
      </MDBCardFooter>
          </MDBCard>
        }
        </MDBCardGroup>
      </MDBRow>
      

            
            
        </>
    );
}

