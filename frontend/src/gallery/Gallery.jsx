import Scroll from './Scroll'
import PropTypes from "prop-types";

function Gallery({token}) {
  console.log("Gallery component has loaded!");
  return (
    <>
    <Scroll url = "http://127.0.0.1:8000/api/v1/cakes" token = {token}/>      
    </>
  )
}
Gallery.propTypes = {
  token: PropTypes.string.isRequired,
};
export default Gallery