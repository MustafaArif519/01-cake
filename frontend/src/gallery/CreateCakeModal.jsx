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
  MDBModal
} from 'mdb-react-ui-kit';
import "./style.css"

export default function CreateCakeModal({ token, user, postCake}) {
  //console.log(description);
  // console.log(likeData);
  // let userId = localStorage.getItem('userId');
const standard = {
  text: 'sample text',
  description: 'sample description',
  image: '',
}
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showText, setShowText] = useState(true);
  const [visible, setVisible] = useState(showText);

  const [newCake, setNewCake] = useState(null);
  

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


  const createCake = async () => {
    const headers = {
      'Authorization': "Token " + token,
      'Content-Type': 'application/json',
    };
  
    try {
      const response = await axios.post('http://localhost:8000/api/v1/cakes/', newCake, { headers });
      console.log('Cake created successfully', response.data);
      postCake(newCake);
      // Handle success or navigate to another page
    } catch (error) {
      console.error('Error creating cake', error);
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

  return (
    <>

      <MDBRow className='g-0'>
        <MDBCardGroup >
          <MDBCard>
            <MDBCardImage
              src={newCake.image}
              alt='...'
              style={imageStyles}
              onLoad={handleImageLoad} // This should be removed
            />

          </MDBCard>
          {visible &&
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>


                        <MDBTextArea
                          label='Cake Title'
                          id='textAreaExamplsdfsdfe'
                          rows={3}
                          name='title'
                          value={newCake.title}
                          onChange={(e) => onChange(e)}
                        />


                  <hr /></MDBCardTitle>
                <MDBCardText>

                    <MDBTextArea
                      label='Cake Description'
                      id='textAreaExamplsdfsdfe'
                      rows={8}
                      name='description'
                      value={newCake.description}
                      onChange={(e) => onChange(e)}
                    />
                  </MDBCardText>
                  <MDBCardText>


                    <MDBInput
                      type="file"
                      name='image'

                      onChange={(e) => handleFileChange(e)}
                    >
                    </MDBInput>

                </MDBCardText>


              </MDBCardBody>
              <MDBCardFooter style={{ display: "flex", justifyContent: "space-between" }}>
                <small className='text-muted' ></small>



                  <MDBBtn color="success" style={{ margin: "10px" }} onClick={createCake}>
                    <MDBIcon fas icon="save" />
                  </MDBBtn>
                  <MDBBtn color="danger" style={{ margin: "10px" }} onClick={discard}>
                    <MDBIcon fas icon="undo-alt" />
                  </MDBBtn>


              </MDBCardFooter>
            </MDBCard>
          }
        </MDBCardGroup>
      </MDBRow>




    </>
  );
}

