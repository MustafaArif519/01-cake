import { useState, useCallback } from 'react';
import EventPage from "./EventPage.jsx"
import './style.css';
import {
    MDBInput,
    MDBTextArea,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBBtn,
    MDBPagination, 
    MDBPaginationItem, 
    MDBPaginationLink
} from 'mdb-react-ui-kit';


const NewOrder = ({ token }) => {
    const [formValue, setFormValue] = useState({
        name: '',
        pNumber: '',
        eventDetails: 'Mark',
        eventType: 'Otto',
        eventDate: '',
        cakeSize: 0,
        cakeSpecs: '',
        cakeFlavor: '',
        cakeFilling: '',
        cakeFrosting: '',
        cakeDesign: '',
        cakeColor: '',
        cakeMessage: '',
        cakeAdditions: '',
        cakeTreats: '',
        cakeTreatDetails: '',
        deliveryPickup: '',
        deliveryAddress: '',
        deliveryTime: '',
        pickupTime: '',
        paymentMethod: '',
    });

    const updateForm = useCallback((form) => {
        console.log("updating order form", form);
        setFormValue(form);
    }, []);

    return (
        <div className='my-div' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '800px' }}>

            <MDBCard alignment='center'>
                <MDBCardHeader>Fill out order details to place order</MDBCardHeader>
                <MDBCardBody>
                <EventPage updateForm={updateForm} form={formValue} />
                </MDBCardBody>
                <MDBCardFooter className="">
                <nav aria-label='...'>
      <MDBPagination circle className='container'>
        <MDBPaginationItem>
          <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
            Previous
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem active>
          <MDBPaginationLink href='#'>
            2 <span className='visually-hidden'>(current)</span>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>4</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>5</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href='#'>Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
                </MDBCardFooter>
            </MDBCard>
        </div>
    );
};

export default NewOrder;
