import PropTypes from "prop-types";
import { useState, useEffect } from "react"
import axios from 'axios';
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
  MDBInput,
  MDBTextArea,
  MDBModal,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import moment from 'moment'; // Import Moment.js
import Like from "./Like"
import DeleteCakeModal from "./DeleteCakeModal"
import CakeImage from './CakeImage';
import "./style.css"

export default function MegaCake({ cake, token, user, like, unlike, 
  yourLike, likeCount, showText, deleteCake, updateCake, blastModal, backendUrl }) {
  //console.log(description);
  // console.log(likeData);
  // let userId = localStorage.getItem('userId');

  const [imageLoaded, setImageLoaded] = useState(false);

  const [visible, setVisible] = useState(showText);

  const [editing, setEditing] = useState(false);
  const [editCake, setEditCake] = useState(cake);


  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
  
        setEditCake((prevEditCake) => ({
          ...prevEditCake,
          image: e.target.result, // Use e.target.result here
        }));
      };
  
      reader.readAsDataURL(file); // Start reading the file
      setSelectedFile(file);
    }
  };


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


    const formData = new FormData();
    formData.append('title', editCake.title);
    formData.append('description', editCake.description);
    formData.append('category', editCake.category);
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    const headers = {
      'Authorization': "Token " + token,
          'Content-Type': 'multipart/form-data',
    };

    // console.log(formData);
    axios.patch(backendUrl+'api/v1/cakes/' + cake.id + "/", formData, { headers })
    .then(response => {
      console.log('Data uploaded successfully', response.data);
      updateCake(editCake);
      setEditing(!editing);
    })
    .catch(error => {
      console.error('Error uploading data', error);
      blastModal("error", "Cake details not updated, make sure you have admin rights and \
      stable internet connection.")
    });

  };


  const removeCake = async () => {
    const headers = {
      'Authorization': "Token " + token,
    };
  
    try {
      const response = await axios.delete(backendUrl+`api/v1/cakes/${cake.id}/`, { headers });
      console.log('Cake deleted successfully', response.data);
      toggleShow();
      deleteCake(cake);

      // Handle success or navigate to another page
    } catch (error) {
      console.error('Error deleting cake', error);
      blastModal("error", "Cake was not deleted, make sure you have admin status and \
      stable internet connection.")
      // Handle error
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


    const extractHashtags = (categoryString) => {
      console.log(categoryString);
      if(categoryString === undefined){
        return;
      }
      // Split the string into an array of words
      const wordsArray = categoryString.split(',');
  
      // Add a hashtag in front of each word
      const hashtagsArray = wordsArray.map((word) => `${word.trim()}`);
  
      // Join the array back into a string
      const hashtagsString = hashtagsArray.join(' ');
  
      return hashtagsString;
    };
  

  return (
    <>
<MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal} > 
        <DeleteCakeModal toggleShow={toggleShow} deleteFunction={removeCake}/>
      </MDBModal>

      <MDBRow className='g-0'>
        <MDBCardGroup >
          <MDBCard>
            <MDBCardImage
              src={editing ? editCake.image : cake.image}
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
                      {!editing && cake.title}
                      {editing &&
                        <MDBTextArea
                          label='Cake Title'
                          id='textAreaExamplsdfsdfe'
                          rows={3}
                          name='title'
                          value={editCake.title}
                          onChange={(e) => onChange(e)}
                        />
                      }
                    </MDBCol>
                    <MDBCol md='4'>
                      <Like cake={cake} like={like} unlike={unlike} likeCount={likeCount} yourLike={yourLike} />
                    </MDBCol>
                  </MDBRow>

                  <hr /></MDBCardTitle>
                <MDBCardText>
                  {!editing && cake.description}
                  {editing &&
                    <MDBTextArea
                      label='Cake Description'
                      id='textAreaExamplsdfsdfe'
                      rows={8}
                      name='description'
                      value={editCake.description}
                      onChange={(e) => onChange(e)}
                    />
                  }
                  </MDBCardText>
                  <MDBCardText>
                  {editing &&

                    <MDBInput
                      type="file"
                      name='image'

                      onChange={(e) => handleFileChange(e)}
                    >
                    </MDBInput>

                  }
                </MDBCardText>

              </MDBCardBody>

              
              <MDBListGroup flush>
        <MDBListGroupItem>

          {user.is_staff && !editing &&
              extractHashtags(cake.category)
          }
          {user.is_staff && editing &&
            <MDBTextArea
            label='Cake Categories'
            id='textAreaExamplsdfsdfe'
            rows={2}
            name='category'
            value={editCake.category}
            onChange={(e) => onChange(e)}
          />
          }
        </MDBListGroupItem>

      </MDBListGroup>
              <MDBCardFooter style={{ display: "flex", justifyContent: "space-between" }}>
              
                <small className='text-muted' >
                  Created {moment(cake.created_at).fromNow()}
                  </small>
                {user.is_staff && !editing && <div>
                  <MDBBtn color="warning" style={{ margin: "10px" }} onClick={() => setEditing(!editing)}><MDBIcon fas icon="edit" /></MDBBtn>
                  <MDBBtn color="danger" style={{ margin: "10px" }} onClick={toggleShow}>
                    <MDBIcon far icon="trash-alt" /></MDBBtn>
                </div>}

                {user.is_staff && editing && <div>
                  <MDBBtn color="success" style={{ margin: "10px" }} onClick={patchCake}>
                    <MDBIcon fas icon="save" />
                  </MDBBtn>
                  <MDBBtn color="danger" style={{ margin: "10px" }} onClick={discard}>
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

