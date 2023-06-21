import PropTypes from "prop-types";
import './style.css';
import { useState, useEffect } from "react";


export default function Like({cake, token, lcount, lstatus}) {
    const domainName = window.location.hostname;
    // const [likeStatus, setLikeStatus] = useState(lstatus);
    // const [likeCount, setLikeCount] = useState(lcount);

    console.log(lcount);
    // setLikeCount(likeData.length);

    const like = async () => {
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
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      const unlike = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/v1/cake-likes/', {
            method: 'DELETE',
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
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
  
    return (
    <>
            <p className = "likesCount">{lcount}</p>
          <img onClick={like}
          className = "zoom" src = './src/images/ui/like.png' 
          style = {{position: "relative", width:'10%',
        float:"right" }} />
    </>
    );
  }
  
  Like.propTypes = {

    token: PropTypes.string.isRequired,
    
  };