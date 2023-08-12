import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import './style.css';
import Cake from "./Cake"
import {
  MDBRow,
  MDBCol,
  MDBCardGroup,
  MDBContainer,
  MDBRipple,
} from 'mdb-react-ui-kit';

// The parameter of this function is an object with a string called url inside it.
// url is a prop for the Cake component.
export default function Scroll({ url, userId, token }) {
  const [results, setResults] = useState([]);
  const [next, setNext] = useState("null");
  const [hasMore, setHasMore] = useState(false);
  const [resultsSize, setResultsSize] = useState(0);
  const [likeData, setLikeData] = useState([]);


  useEffect(() => {
    // Declare a boolean flag that we can use to cancel the API request.
    let ignoreStaleRequest = false;

    // Call REST API to get the cake's information
    fetch(url, {
      method: 'GET', // or any other HTTP method
      // headers: {
      //   'Authorization': "Token " + token, // Include the token in the Authorization header

      // },
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        // If ignoreStaleRequest was set to true, we want to ignore the results of the
        // the request. Otherwise, update the state to trigger a new render.
        if (!ignoreStaleRequest) {
          setResults([...results, ...data.results]);

          setNext(data.next);
          if (data.next == 'null') {
            setHasMore(false);
          }
          else {
            setHasMore(true);
          }
          setResultsSize(data.results.length);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      // This is a cleanup function that runs whenever the cake component
      // unmounts or re-renders. If a cake is about to unmount or re-render, we
      // should avoid updating state.
      ignoreStaleRequest = true;
    };
  }, [url]);


  // Declare a boolean flag that we can use to cancel the API request.
  useEffect(() => {
    let ignoreStaleRequest = false;

    fetch('http://127.0.0.1:8000/api/v1/cake-likes/', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        if (!ignoreStaleRequest) {
          setLikeData(data);
          console.log(data);
          // Perform any other logic with the data as needed
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    return () => {
      ignoreStaleRequest = true;
    };
  }, [token]);



  const getcakes = () => {
    // console.log("loading more cakes");

    fetch(next, {
      method: 'GET', // or any other HTTP method
      // headers: {
      //   'Authorization': "Token " + token, // Include the token in the Authorization header

      // },
    })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);

        return response.json();
      })
      .then((data) => {
        //console.log(JSON.stringify(data.next) == "null")
        // If ignoreStaleRequest was set to true, we want to ignore the results of the
        // the request. Otherwise, update the state to trigger a new render.
        setResults([...results, ...data.results]);
        if (JSON.stringify(data.next) === "null") {
          setNext(data.next);
          setHasMore(false);
          setResultsSize(data.results.length + resultsSize);
          console.log(`${next} has no more`);
        } else {
          setNext(data.next);
          setHasMore(true);
          // console.log(`${next} has more`);
          setResultsSize(data.results.length + resultsSize);
        }
      })
      .catch((error) => console.log(error));
  };
  // Return HTML for one clue
  //   const renderedcakes = results.map((result) => (
  //     <cake key={result.id} />
  //   ));

  // Render cake image and cake owner
  return (
    <>
      <div className="cakes"
        id="scrollableDiv"
        style={{
          overflow: 'auto',
          display: 'flex',
        }}>
        <InfiniteScroll
          dataLength={resultsSize} // This is important field to render the next data
          next={getcakes}
          hasMore={hasMore}
          loader={<h4>Baking cakes...</h4>}
        >
          {/* {renderedcakes} */}
          <div style={{
            margin: "20px"
          }}>


<MDBContainer>
  <MDBRow>
    {results.map(item => (
      <MDBCol size='12' sm='6' md='4' lg='3' key={item.id} className='d-flex align-items-stretch'>
        <Cake cake={item} likeData={likeData} userId={userId} token={token} />
      </MDBCol>
    ))}
  </MDBRow>
</MDBContainer>


            {!hasMore && <h4 >All cakes baked!</h4>}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

Scroll.propTypes = {
  url: PropTypes.string.isRequired,
};