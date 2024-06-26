import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import './style.css';
import Cake from "./Cake"
import CreateCakeModal from "./CreateCakeModal"
import {
  MDBRow,
  MDBCol,
  MDBCardGroup,
  MDBContainer,
  MDBRipple,
  MDBBtn,
  MDBIcon,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBModal,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
} from 'mdb-react-ui-kit';
import SearchHeader from "./SearchHeader";

// The parameter of this function is an object with a string called url inside it.
// url is a prop for the Cake component.
export default function Scroll({ url, user, token, searching, blastModal, backendUrl }) {
  const [results, setResults] = useState([]);
  const [next, setNext] = useState("null");
  const [hasMore, setHasMore] = useState(false);
  const [resultsSize, setResultsSize] = useState(0);
  const [likeData, setLikeData] = useState([]);

  const [showCreate, setShowCreate] = useState(false);
  const toggleCreate = () => setShowCreate(!showCreate);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  

  const [loaded, setLoaded] = useState(false);

  const [category, setCategory] = useState("#all");

  function removeObjectByCondition(list, conditionObject) {
    return list.filter(item => {
      // Assuming conditionObject and item are both JSON objects
      // Compare each key-value pair in the conditionObject
      for (const key in conditionObject) {
        if (Object.hasOwnProperty.call(conditionObject, key)) {
          if (item[key] !== conditionObject[key]) {
            return true; // Keep the item if there's a mismatch
          }
        }
      }
      return false; // Remove the item if all key-value pairs match
    });
  }


  function updateObjectById(list, updatedObject) {
    return list.map(item => (item.id === updatedObject.id ? updatedObject : item));
  }


  function addToFrontOfList(list, newItem) {
    return [newItem, ...list];
  }

  function deleteCake(cake) {
    console.log(cake);
    const itemToRemove = cake;
    const updatedResults = removeObjectByCondition(results, itemToRemove);
    setResults(updatedResults);
    console.log(updatedResults);
  }



  function patchCake(cake) {
    const updatedItem = cake;
    const updatedResults = updateObjectById(results, updatedItem);
    setResults(updatedResults);
    console.log(updatedResults);
  }

  const postCake = (cake) => {
    const newItem = cake;
    const updatedResults = addToFrontOfList(results, newItem);
    setResults(updatedResults);
  };

  const postLike = (like) => {
    const newItem = like;
    const updatedResults = addToFrontOfList(likeData, newItem);
    setLikeData(updatedResults);
  };

  function deleteLike(like) {
    console.log(like);
    const itemToRemove = like;
    const updatedResults = removeObjectByCondition(likeData, itemToRemove);
    setLikeData(updatedResults);
    console.log(updatedResults);
  }

useEffect(() => {
  const search = ( query ) => {
    console.log(query);
    // Normalize the search term to lowercase and split into words
    setSearchTerm(query);
    const searchWords = query.toLowerCase().split(/\s+/);

    // Filter the items only if search term is not empty
    const filteredResults = query.trim() === '' ? results : results.filter(obj =>
        ['description', 'title'].some(field =>
            searchWords.every(word =>
                obj[field].toLowerCase().includes(word)
            )
        )
    );

    // Filter the items only if search term is not empty
    const categoryCakes = filteredResults.filter((cake) => {
      const cakeCategory = cake.category;
      const filterCategory = category === "#all" ? "" : category;
  
      // Check if the cake category contains the filter category
      return cakeCategory.includes(filterCategory);
    });

    // Now you can use the filteredResults as needed
    setFilteredItems(categoryCakes);

    if(categoryCakes.length === 0 && hasMore){
      getcakes();
    }

    console.log(filteredResults);
    console.log(results);
};
search(searchTerm);
}, [results, searchTerm, category]); // Empty dependency array means this effect runs once on moun

  
  useEffect(() => {
    // Declare a boolean flag that we can use to cancel the API request.
    let ignoreStaleRequest = false;

    // Call REST API to get the cake's information
    fetch(url, {
      method: 'GET', // or any other HTTP method
      // headers: {
      //   // 'Authorization': "Token " + token, // Include the token in the Authorization header
      //   'Origin': 'https://www.faridascakeboutique.com', // Set the origin here'
      // },
      // mode: 'cors', // Set the request mode to 'cors'
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
          setFilteredItems([...filteredItems, ...data.results]);
          setLoaded(true);

          setNext(data.next);
          if (data.next === 'null') {
            setHasMore(false);
          }
          else {
            setHasMore(true);
          }
          setResultsSize(data.results.length);
        }
      })
      .catch((error) => {
        // Call blastModal with the error message
        blastModal("error", "Failed to Connect to Backend Server");
      });

    return () => {
      // This is a cleanup function that runs whenever the cake component
      // unmounts or re-renders. If a cake is about to unmount or re-render, we
      // should avoid updating state.
      ignoreStaleRequest = true;
    };
  }, [url]);


  useEffect(() => {
    let ignoreStaleRequest = false;

    fetch(backendUrl + 'api/v1/cake-likes/', {
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
        }
      })
      .catch((error) => {
        // Handle error here
        console.error('Error retrieving like data from server:', error);
      });

    return () => {
      ignoreStaleRequest = true;
    };
  }, [token]);



  const getcakes = () => {
    // console.log("loading more cakes");
    console.log(next);
    fetch(next, {
      method: 'GET', // or any other HTTP method
      // headers: {
      //   // 'Authorization': "Token " + token, // Include the token in the Authorization header
      //   'Origin': 'https://www.faridascakeboutique.com', // Set the origin here'
      // },
      // mode: 'cors', // Set the request mode to 'cos'
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
      .catch((error) => {
        // blastModal("error", "Error retrieving more cakes from server. Make sure internet connection\
        // is stable.")
      });
  };






  return (
    <>

<CreateCakeModal token = {token} user = {user} postCake={postCake} blastModal={blastModal}
toggleCreate={toggleCreate} showCreate={showCreate} setShowCreate ={setShowCreate}
backendUrl={backendUrl} />

<SearchHeader
 setCategory={setCategory} category={category} 
user={user} searchTerm={searchTerm} setSearchTerm={setSearchTerm}
showCreate ={showCreate} setShowCreate={setShowCreate}
 />
<MDBRow className="mb-3">
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
          loader = {
            <div style={{ display: 'flex', flexDirection: "column", gap: '10px', justifyContent: 'center', 
  alignItems: "center", marginBottom: "30px"}}>
    <h4>Scroll down to search more cakes!</h4>
  <MDBIcon  icon='angle-double-down' size='10x' color= "info" style= {{height: "200px"}}/>
  
</div>

          }

        >
          {/* {renderedcakes} */}
          <div style={{
            margin: "20px"
          }}>


<MDBContainer fluid>

  
<div >
 
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', 
  justifyContent: 'center', alignItems: "center"}}>
 { filteredItems.map(item => (
    <Cake key={item.id} cake={item} likeData={likeData} user={user} token={token} 
    deleteCake={deleteCake} patchCake = {patchCake} postCake = {postCake}
    postLike = {postLike} deleteLike = {deleteLike}
    blastModal = {blastModal} backendUrl={backendUrl}
    />
  ))}
  </div>
  
</div>



</MDBContainer>


{!hasMore && filteredItems.length === 0 && loaded &&
  <div  style={{ display: 'flex', flexDirection: "column", gap: '10px', justifyContent: 'center', 
  alignItems: "center", marginBottom: "35px"}}>
    <h4>No Matching Cakes Found</h4>
  <MDBIcon  icon='times-circle' color="danger" size='10x' style= {{height: "200px"}}/>
  
</div>
}

{!loaded&& 
  <div  style={{ display: 'flex', flexDirection: "column", gap: '10px', justifyContent: 'center', 
  alignItems: "center", marginBottom: "35px"}}>
    <h4>Fetching Cake Images!</h4>
  <MDBIcon fas icon="truck" size='10x' style= {{height: "200px", color: "#F06292"}} />
  </div>
  }

            
          </div>

        </InfiniteScroll>
      </div>
      </MDBRow>
    </>
  );
}

Scroll.propTypes = {
  url: PropTypes.string.isRequired,
};