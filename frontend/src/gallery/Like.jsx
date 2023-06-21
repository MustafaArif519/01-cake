import PropTypes from "prop-types";
import './style.css';
import { useState, useEffect } from "react";


export default function Like({ cake, lcount, foundLike }) {
  const domainName = window.location.hostname;
  let token = localStorage.getItem('token');
  const [yourLike, setYourLike] = useState(foundLike);
  const [likeCount, setLikeCount] = useState(lcount);

  // setLikeCount(likeData.length);

  const like = async () => {
    // console.log(token);
    if(token == ""){
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/cake-likes/', {
        method: 'POST',
        headers: {
          'Authorization': "Token " + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'cake': cake.id,
        }), // Replace with your data object
      });
      console.log(token);
      const responseBody = await response.json();

      console.log(JSON.stringify(responseBody, null, 4));

      if (!response.ok) {
        throw new Error('Request failed');
      }

      // Do something with the response, if needed
      //let temp = console.log(JSON.stringify(responseBody, null, 4));
      setYourLike(responseBody);
      setLikeCount(likeCount + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const unlike = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/cake-likes/'+yourLike.id+"/", {
        method: 'DELETE',
        headers: {
          'Authorization': "Token " + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'cake': cake.id,
        }), // Replace with your data object
      });
      setYourLike(null);
      setLikeCount(likeCount - 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <p className="likesCount">{likeCount}</p>
      {console.log(yourLike)}
      {yourLike == null &&<div><img onClick={like}
        className="zoom" src='./src/images/ui/like.png'
        style={{
          position: "relative", width: '10%',
          float: "right"
        }} /></div>}
      {yourLike && <div><img onClick={unlike}
        className="zoom" src='./src/images/ui/unlike.png'
        style={{
          position: "relative", width: '10%',
          float: "right"
        }} /></div>}

    </>
  );
}

Like.propTypes = {


};