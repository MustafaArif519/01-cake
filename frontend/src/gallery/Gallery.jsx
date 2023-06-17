import Scroll from './Scroll'


function Gallery({token}) {
  console.log("Gallery component has loaded!");
  return (
    <>
    <Scroll url = "http://127.0.0.1:8000/api/v1/cakes" token = {token}/>      
    </>
  )
}

export default Gallery