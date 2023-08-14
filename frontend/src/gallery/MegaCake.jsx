import PropTypes from "prop-types";
import { useState } from "react"
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
    MDBCardOverlay
} from 'mdb-react-ui-kit';
import Like from "./Like"
import CakeImage from './CakeImage';
import "./style.css"

export default function MegaCake({ cake, user, likeData, token }) {
    //console.log(description);
    // console.log(likeData);
    // let userId = localStorage.getItem('userId');

    const [imageLoaded, setImageLoaded] = useState(false);

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
                <MDBCardOverlay>
                    <MDBCardTitle>

                    <MDBRow>
                            <MDBCol md='8'>
                                {cake.title}
                            </MDBCol>
                            <MDBCol md='4'>
                            {<Like cake={cake}  token={token} user={user} likeData = {likeData}/>}
                            </MDBCol>
                        </MDBRow>

                        <hr />
                    </MDBCardTitle>
                    <MDBCardText>
                        {cake.description}

                    </MDBCardText>


                </MDBCardOverlay>
            </MDBCard>
        </>
    );
}

