import { useState, useCallback } from 'react';
import EventPage from "./EventPage.jsx"
import DeliveryPage from './DeliveryPage.jsx';
import PaymentPage from "./PaymentPage.jsx"
import CakePage from './CakePage.jsx'
import PasteryPage from './PasteryPage.jsx';
import TOSPage from './TOSPage.jsx';
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
  MDBPaginationLink,
  MDBValidation,
} from 'mdb-react-ui-kit';


const NewOrder = ({ token }) => {
  const [formValue, setFormValue] = useState({
    name: '',
    pNumber: '',
    contactHow: '',
    eventDetails: '',
    eventType: '',
    eventTypeOther: '',
    eventDate: '',
    cakeSize: '',
    cakeSizeOther: '',
    cakeFlavor: '',
    cakeFlavorOther: '',
    cakeFilling: '',
    cakeFillingOther: '',
    cakeFrosting: '',
    cakeFrostingOther: '',
    cakeDesign: '',
    cakeColor: '',
    cakeMessage: '',
    cakeAdditions: '',
    treatType: '',
    treatDetails: '',
    deliveryPickup: '',
    deliveryAddress: '',
    deliveryTime: '',
    pickupTime: '',
    pickupTimeOther: '',
    paymentMethod: '',
    paymentMethodOther: '',
  });

  const updateForm = useCallback((form) => {
    console.log("updating order form", form);
    setFormValue(form);
  }, []);


  const [currentPage, setCurrentPage] = useState(1); // Initial page is 1

  // Function to handle loading the next page
  const handleNextPage = () => {
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle loading the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <EventPage updateForm={updateForm} form={formValue} />;
      case 2:
        return <PasteryPage updateForm={updateForm} form={formValue} />;
      case 3:
        return <DeliveryPage updateForm={updateForm} form={formValue} />;
      case 4:
        return <PaymentPage updateForm={updateForm} form={formValue} />;
      case 5:
        return <TOSPage updateForm={updateForm} form={formValue} />;
      default:
        return null;
    }
  };

  return (
    <div className='form'>

      <MDBCard alignment='center'>
        <MDBCardHeader>
        <nav aria-label='...'>
            <MDBPagination circle className='mb-0 container'>
              <MDBPaginationItem disabled={currentPage === 1}>
                <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true' onClick={handlePrevPage}>
                  Previous
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 1}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(1)}>
                  1
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 2}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(2)}>
                  2 <span className='visually-hidden'>(current)</span>
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 3}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(3)}>
                  3
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 4}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(4)}>
                  4</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 5}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(5)}>
                  5
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem disabled={currentPage === 5}>
                <MDBPaginationLink href='#' onClick={handleNextPage}>
                  Next
                </MDBPaginationLink>
              </MDBPaginationItem>
            </MDBPagination>
          </nav>
        </MDBCardHeader>
        <MDBCardBody>
          
            {renderPage()}


        </MDBCardBody>

        <MDBCardFooter className="">

          <nav aria-label='...'>
            <MDBPagination circle className='mb-0 container'>
              <MDBPaginationItem disabled={currentPage === 1}>
                <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true' onClick={handlePrevPage}>
                  Previous
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 1}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(1)}>
                  1
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 2}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(2)}>
                  2 <span className='visually-hidden'>(current)</span>
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 3}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(3)}>
                  3
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 4}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(4)}>
                  4</MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem active={currentPage === 5}>
                <MDBPaginationLink href='#' onClick={() => setCurrentPage(5)}>
                  5
                </MDBPaginationLink>
              </MDBPaginationItem>
              <MDBPaginationItem disabled={currentPage === 5}>
                <MDBPaginationLink href='#' onClick={handleNextPage}>
                  Next
                </MDBPaginationLink>
              </MDBPaginationItem>
            </MDBPagination>
          </nav>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default NewOrder;
