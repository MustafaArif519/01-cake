import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// The parameter of this function is an object with a string called url inside it.
// url is a prop for the Cake component.
export default function Scroll({ url }) {

  const [results, setResults] = useState([]);
  const [next, setNext] = useState("");
  const [hasMore, setHasMore] = useState("");
  const [resultsSize, setResultsSize] = useState(0);

  useEffect(() => {
    // Declare a boolean flag that we can use to cancel the API request.
    let ignoreStaleRequest = false;

    // Call REST API to get the cake's information
    fetch(url)
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
          setHasMore(true);
          console.log("we are getting started");
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

  const getcakes = () => {
    console.log("loading more cakes");

    fetch(next)
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
          console.log(`${next} has more`);
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
    <div className="cakes" 
    id="scrollableDiv"
    style={{
      height: 400,
      overflow: 'auto',
      display: 'flex',
    }}>
      <InfiniteScroll
        dataLength={resultsSize} // This is important field to render the next data
        next={getcakes}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {/* {renderedcakes} */}
        <div>
            {results.map(item => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {/* <img src = {item.image}></img> */}
                {/* Additional formatting based on your data structure */}
            </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

Scroll.propTypes = {
  url: PropTypes.string.isRequired,
};