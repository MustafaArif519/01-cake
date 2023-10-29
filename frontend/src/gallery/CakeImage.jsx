import React, { useState } from 'react';
import { MDBCardImage, MDBSpinner } from 'mdb-react-ui-kit';

function CakeImage({ src, alt, style }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {

    setImageLoaded(true);
  };

  return (
    <div style={{ position: 'relative' }}>
  
        <MDBCardImage
          src={imageLoaded ? src : 'images/loading.gif'}
          alt='...'
          style={style}
          onLoad={handleImageLoad} // This should be removed
        />
      
    </div>
  );
}

export default CakeImage;
