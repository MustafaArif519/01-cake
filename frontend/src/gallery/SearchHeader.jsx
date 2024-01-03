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

const SearchHeader = ({ setCategory, category, user, searchTerm, setSearchTerm, 
                        showCreate, setShowCreate }) => {
  

  return (
<>
<MDBRow className="mb-3">

<MDBDropdown  style={{
        width: '100%', display: 'flex', justifyContent: 'center',
        alignItems: 'center', }}>
      <MDBDropdownToggle tag='a' className='btn btn-primary rounded'>
        {category}
      </MDBDropdownToggle>
      <MDBDropdownMenu>
      <MDBDropdownItem link onClick={() => setCategory("#all")}>#all</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#wedding")}>#wedding</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#babyShower")}>#babyShower</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#kidsBirthdays")}>#kidsBirthdays</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#adultBirthdays")}>#adultBirthdays</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#anniversary")}>#anniversary</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#babyShower")}>#babyShower</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#sculptedCakes")}>#sculptedCakes</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#cakePops")}>#cakePops</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#cupcakes")}>#cupcakes</MDBDropdownItem>
        <MDBDropdownItem link onClick={() => setCategory("#cakeShooters")}>#cakeShooters</MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>


</MDBRow>
<MDBRow className="mb-3 ">
    <div style={{
        width: '100%', display: 'flex', justifyContent: 'center',
        alignItems: 'center', 

      }}>

        


    <div style={{
        width: '100%', display: 'flex', justifyContent: 'center',
        alignItems: 'center',

      }}>
        <MDBIcon fas icon="search" color = "secondary"/>
        <input
          className="form-control mr-sm-2 border-0"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          style={{ width: '200px' , margin: "20px"}}
        />



      </div>


<div>
        {user.is_staff && <MDBBtn color = "success"  onClick={() => setShowCreate(!showCreate)}>
        <MDBIcon fas icon="plus-circle" />
        </MDBBtn>}
        </div>
        </div>
      </MDBRow>


</>
  );
};

export default SearchHeader;
