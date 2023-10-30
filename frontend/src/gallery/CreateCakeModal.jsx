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
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBTextArea,

} from 'mdb-react-ui-kit';
import "./style.css"
import CreateCakeWarning from "./CreateCakeWarning";

export default function CreateCakeModal({ token, user, postCake, toggleCreate, showCreate, 
  setShowCreate, blastModal }) {

    const backendUrl = "https://faridascakeboutiquesbackend.net/";

  const standard = {
    title: '',
    description: '',
    image: '',
  }
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showText, setShowText] = useState(true);
  const [visible, setVisible] = useState(showText);

  const [newCake, setNewCake] = useState(standard);


  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);




  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {

        setNewCake((prevEditCake) => ({
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
    setNewCake(newCake => ({
      ...newCake,
      [e.target.name]: e.target.value
    }));
  };

  const discard = () => {
    setNewCake(standard);
  }


  const createCake = async () => {
    const headers = {
      'Authorization': "Token " + token,
      'Content-Type': 'multipart/form-data',
    };
if( newCake.title === '' || newCake.description === '' || newCake.image === ''){
  toggleCentered();
  return;
}
const formData = new FormData();
    formData.append('title', newCake.title);
    formData.append('description', newCake.description);
    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    // console.log(formData);
    axios.post(backendUrl + 'api/v1/cakes/', formData, { headers })
    .then(response => {
      console.log('Data uploaded successfully', response.data);
      
      postCake(response.data);
      toggleCreate();
      discard();
    })
    .catch(error => {
      console.error('Error uploading data', error);
      blastModal("error", "Cake not uploaded, make sure you have admin rights and stable\
      internet connection.")
    });
    
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


  const [centredModal, setCentredModal] = useState(false);

  const toggleCentered = () => setCentredModal(!centredModal);

  return (
    <>

        



      <MDBModal show={showCreate} tabIndex='-1' setShow={setShowCreate}>
        <MDBModalDialog size=''>
          <MDBModalContent>
          <CreateCakeWarning toggleShow={toggleCentered} centredModal={centredModal} setCentredModal={setCentredModal}/>
            <MDBModalHeader>
              <MDBBtn color="secondary" onClick={() => setShowText(!showText)}>
                {showText ? "Show Image Only" : "Show Image With Text"}
              </MDBBtn>
              <MDBModalTitle>

              </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleCreate}></MDBBtn>
            </MDBModalHeader>
            <MDBRow className='g-0'>
              <MDBCardGroup >
                <MDBCard>
                  <MDBCardImage
                    src={newCake.image ? newCake.image : 'images/upload.png'}
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
                          <MDBTextArea
                            label='Cake Title'
                            id='dasdfe'
                            rows={3}
                            name='title'
                            value={newCake.title}
                            onChange={(e) => onChange(e)}
                          />

                        </MDBRow>

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

                      <div>
                        <MDBBtn color="success" style={{ margin: "10px" }} onClick={createCake}>
                          <MDBIcon fas icon="save" />
                        </MDBBtn>
                        <MDBBtn color="danger" style={{ margin: "10px" }} onClick={discard}>
                          <MDBIcon fas icon="undo-alt" />
                        </MDBBtn>
                      </div>

                    </MDBCardFooter>
                  </MDBCard>
                }
              </MDBCardGroup>
            </MDBRow>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>



    </>
  );
}

