import Scroll from './Scroll';
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from 'mdbreact';
import { useState } from "react"


function Gallery({ userId, token }) {

  const [searching, setSearching] = useState('');


  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {console.log('Gallery component rendered')}

      <div style={{
        width: '100%', display: 'flex', justifyContent: 'center',
        alignItems: 'center', paddingBottom: '20px', paddingTop: '40px',
        position: 'sticky', top: '60px', zIndex: 2, 

      }}>
        <input
          className="form-control mr-sm-2 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
          style={{ width: '200px', background: "#f7e4f6" }}
        />

      </div>

      <div >
        <Scroll url="http://127.0.0.1:8000/api/v1/cakes" userId={userId} token={token}
          sesarching={searching} />
      </div>


    </div>
  );
}

export default Gallery;
