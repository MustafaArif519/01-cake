import { useState, useCallback } from 'react';
import EventPage from "./EventPage.jsx"
import './style.css';
import {
    MDBInput,
    MDBTextArea
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
<div className='my-div' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <h2>Fill out order details to place order</h2>
            <br/>
            <div style={{ width: '500px' }}>
                <EventPage updateForm={updateForm} form={formValue}/>
            </div>
     </div>       
    );
};

export default NewOrder;
