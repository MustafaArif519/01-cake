import PropTypes from "prop-types";
import './style.css';
import { useState, useEffect } from "react";


export default function Like({ cake, token, like, unlike, likeCount, yourLike }) {
  // const domainName = window.location.hostname;
//   const [yourLike, setYourLike] = useState(null);
//   const [likeCount, setLikeCount] = useState(-3);

// // console.log(user);
// // console.log(likeCount);




// useEffect(() => {
//   // This function will run after the component renders
//   // You can perform asynchronous operations here
//   if(likeData == null){
//     return null;
//   }
//   let count = likeData.filter((item) => item.cake === cake.id);
//   console.log(cake.id + " " + count.length);
//   setLikeCount(count.length);
// }, [likeData, cake.id]);


//   useEffect(() => {
//   // This function will run after the component renders
//   // You can perform asynchronous operations here
//   if(likeData == null || user == null){
//     return null;
//   }
//   let temp = likeData.filter((item) => item.cake === cake.id);
//   let foundLike = temp.find((item) => item.author == user.pk);
//   // console.log(foundLike == null);

//   setYourLike(foundLike);
// }, [likeData, cake.id]);






  

  return (
    <>
    {/* {console.log("like has rendered with yourLike " + yourLike)} */}
      
      {/* { console.log(yourLike)} */}
      {yourLike == null &&<div><img style={{width: "30px", height: "30px"}} onClick={like}
         src='./src/images/ui/like.png'
        /> {likeCount} {likeCount == 1 ? "Like" : "Likes"}
        </div>}
      {yourLike && <div><img style={{width: "30px", height: "30px"}} onClick={unlike}
         src='./src/images/ui/unlike.png'
        /> {likeCount} {likeCount == 1 ? "Like" : "Likes"}</div>}

    </>
  );
}

Like.propTypes = {
  cake: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  likeData: PropTypes.arrayOf(PropTypes.object),
};