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
} from 'mdb-react-ui-kit';
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


    return (
        <>
            <MDBCard background='dark' className='text-black'>
                <MDBCardImage
                    src={imageLoaded ? cake.image : './src/images/loading.gif'}
                    alt='...'
                    onLoad={handleImageLoad} // This should be removed
                />
                {visible && <MDBCardOverlay>
                    <MDBCardHeader>
                    <MDBRow>
                            <MDBCol md='8'>
                                {cake.title}
                            </MDBCol>
                            <MDBCol md='4'>
                            {<Like cake={cake} like={like} unlike ={unlike} 
                            likeCount = {likeCount} yourLike={yourLike} />}
                            </MDBCol>
                        </MDBRow>
                    </MDBCardHeader>
                    <MDBCardTitle>

                    </MDBCardTitle>
                    <MDBCardText>
                        {cake.description}

                    </MDBCardText>


                </MDBCardOverlay>}
            </MDBCard>
            
        </>
    );
}

