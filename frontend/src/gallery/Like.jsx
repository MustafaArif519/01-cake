import PropTypes from "prop-types";
import './style.css';
import { useState, useEffect } from "react";


export default function Like({ cake, token, like, unlike, likeCount, yourLike }) {

  
  return (
    <>
    {/* {console.log("like has rendered with yourLike " + yourLike)} */}
      
      {/* { console.log(yourLike)} */}
      {yourLike == null &&<div><img style={{width: "30px", height: "30px"}} onClick={like}
         src={import.meta.env.BASE_URL+'images/ui/like.png'}
        /> {likeCount} {likeCount == 1 ? "Like" : "Likes"}
        </div>}
      {yourLike && <div><img style={{width: "30px", height: "30px"}} onClick={unlike}
         src={import.meta.env.BASE_URL+'images/ui/unlike.png'}
        /> {likeCount} {likeCount == 1 ? "Like" : "Likes"}</div>}

    </>
  );
}

Like.propTypes = {
  cake: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  likeData: PropTypes.arrayOf(PropTypes.object),
};