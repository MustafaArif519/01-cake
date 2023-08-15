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

export default function MegaCake({ cake, user, like, unlike, yourLike, likeCount, showText }) {
    //console.log(description);
    // console.log(likeData);
    // let userId = localStorage.getItem('userId');

    const [imageLoaded, setImageLoaded] = useState(false);

    const [visible, setVisible] = useState(showText);

    const [editing, setEditing] = useState(false);
    const [editCake, setEditCake] = useState(cake);

    useEffect(() => {
        setVisible(showText);
      }, [showText]);


      const onChange = (e) => {
        setEditCake(editCake => ({
          ...editCake,
          [e.target.name]: e.target.value
        }));
      };
    
      const discard = () => {
        setEditCake(cake);
        setEditing(!editing);
      }

      const patchCake = async () => {
        const windowName = window.location.hostname;
        console.log('http://localhost:8000/api/v1/dj-rest-auth/cake/'+cake.pk);
        try {
          const response = await fetch('http://localhost:8000/api/v1/dj-rest-auth/cake/'+cake.pk, {
            method: 'PATCH',
            headers: {
              'Authorization': "Token " + token,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(editCake), // Convert editUser object to JSON
          });
          if (response.ok) {
            const data = await response.json();
   
            setEditing(!editing);
    
          } else {
            // Login failed, handle the error
            const data = await response.json();
            console.log('Cake data patching failed', JSON.stringify(data));
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      
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
            <MDBCardTitle>
            <MDBRow>
      <MDBCol md='8'>
      {cake.title} 
      </MDBCol>
      <MDBCol md='4'>
      <Like cake={cake} like={like} unlike ={unlike} likeCount = {likeCount} yourLike={yourLike} />
      </MDBCol>
    </MDBRow>
             
            <hr /></MDBCardTitle>
            <MDBCardText>
              {cake.description}
            </MDBCardText>


          </MDBCardBody>
          <MDBCardFooter style = {{display: "flex", justifyContent: "space-between"}}>
        <small className='text-muted' >{moment(cake.created_at).fromNow()}</small>
        {user.is_staff && !editing && <div>
        <MDBBtn color = "warning" style = {{margin: "10px"}} onClick={() => setEditing(!editing)}><MDBIcon fas icon="edit" /></MDBBtn>
        <MDBBtn color = "danger" style = {{margin: "10px"}}><MDBIcon far icon="trash-alt" /></MDBBtn>
        </div>}

        {user.is_staff && editing && <div>
        <MDBBtn color = "success" style = {{margin: "10px"}} onClick={patchCake}>
          <MDBIcon fas icon="save" />
        </MDBBtn>
        <MDBBtn color = "danger" style = {{margin: "10px"}} onClick={discard}>
          <MDBIcon fas icon="undo-alt" />
          </MDBBtn>
        </div>}
        
      </MDBCardFooter>
          </MDBCard>
        }
        </MDBCardGroup>
      </MDBRow>
      

            
            
        </>
    );
}

