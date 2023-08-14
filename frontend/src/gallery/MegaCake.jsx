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

export default function MegaCake({ cake, likeData, userId, token }) {
    //console.log(description);
    // console.log(likeData);
    // let userId = localStorage.getItem('userId');

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };


    function findLike() {
        // console.log(userId);
        if (likeData == null) {
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
        if (likeData == null) {
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
                                {<Like cake={cake} lcount={foundCount} token={token} foundLike={foundLike} />}
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

