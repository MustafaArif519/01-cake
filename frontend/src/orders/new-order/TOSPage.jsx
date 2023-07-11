import React, { useState, useEffect, useRef } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
  MDBRadio
} from 'mdb-react-ui-kit';


export default function TOSPage({ updateForm, form }) {
  //const [formValue, setFormValue] = useState(form);

  const [selectedOption, setSelectedOption] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState('');
  const [showOtherInput2, setShowOtherInput2] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState('');
  const [showOtherInput3, setShowOtherInput3] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState('');
  const [showOtherInput4, setShowOtherInput4] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  // useEffect(() => {
  //   console.log(formValue);
  //   setFormValue(form);
  //   console.log(formValue);
  // }, [form])

  const onChange = (e) => {
    console.log(e.target.value);
    updateForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleOptionChange = (e) => {
    // console.log(e);
    const { value } = e.target;
    setSelectedOption(value);

    // Check if option is selected and update showOtherInput state accordingly
    setShowOtherInput(value === '');
    onChange(e);
  };

  const handleOptionChange2 = (e) => {
    // console.log(e);
    const { value } = e.target;
    setSelectedOption2(value);

    // Check if option is selected and update showOtherInput state accordingly
    setShowOtherInput2(value === '');
    onChange(e);
  };

  const handleOptionChange3 = (e) => {
    // console.log(e);
    const { value } = e.target;
    setSelectedOption3(value);

    // Check if option is selected and update showOtherInput state accordingly
    setShowOtherInput3(value === '');
    onChange(e);
  };

  const handleOptionChange4 = (e) => {
    // console.log(e);
    const { value } = e.target;
    setSelectedOption4(value);

    // Check if option is selected and update showOtherInput state accordingly
    setShowOtherInput4(value === '');
    onChange(e);
  };

  const fileInputRef = useRef(null);

  // Function to handle file selection
  function handleFileSelect() {
    const selectedFiles = Array.from(fileInputRef.current.files); // Get the selected files

    // Do something with the selected files
    console.log(selectedFiles);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if an option is selected
    if (!selectedOption) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    console.log('Form submitted!');

  };
  return (
    <>
      <div className="terms-of-service" style={{marginLeft: '20px' }}>
        <h1 style={{ fontSize: '34px', marginBottom: '20px', textAlign: 'center' }}>Terms of Service</h1>

        <div className="overflow-y-scroll" style={{ textAlign: 'left', height: '400px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>1. Order and Payment</h2>
          <ul>
            <li style={{ marginBottom: '5px' }}>We recommend that you place your orders at least 2 weeks in advance to allow sufficient time for preparation. We may accept rush orders depending upon availability.</li>
            <li style={{ marginBottom: '5px' }}>There is a $50 rush order fee on all orders with 7 days or less time.</li>
            <li style={{ marginBottom: '5px' }}>All orders under $500 require full payment at the time of booking.</li>
            <li style={{ marginBottom: '5px' }}>Orders over $500 require 50% payment at the time of booking and the balance 2 weeks before pick up/delivery.</li>
            <li style={{ marginBottom: '5px' }}>Orders are subject to availability. We reserve the right to decline or modify an order based on our capacity or any other valid reason. In such cases, we will inform you as soon as possible and discuss alternatives if available.</li>
          </ul>

          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>2. Changes and Cancellation</h2>
          <ul>
            <li style={{ marginBottom: '5px' }}>Changes or cancellations can be made up to 14 days in advance for a $50 fee. We cannot guarantee that all changes can be accommodated.</li>
            <li style={{ marginBottom: '5px' }}>Cancellations requested within 14 days of the scheduled pickup or delivery date may not be eligible for a refund, as the cake may have already been prepared or supplies purchased.</li>
            <li style={{ marginBottom: '5px' }}>In the event of unforeseen circumstances or our inability to fulfill an order, we will provide a full refund.</li>
            <li style={{ marginBottom: '5px' }}>We reserve the right to cancel an order at any time due to reasons beyond our control. In such cases, we will offer a full refund or discuss alternative solutions.</li>
          </ul>

          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>3. Pickup and Delivery</h2>
          <ul>
            <li style={{ marginBottom: '5px' }}>Delivery services may be available within a specified area and are subject to additional charges. Please inquire about delivery options during the order placement process.</li>
            <li style={{ marginBottom: '5px' }}>It is your responsibility to provide accurate delivery information, including the recipient's name, address, and contact details. We cannot be held liable for any delays or issues arising from incorrect or incomplete information provided by you.</li>
            <li style={{ marginBottom: '5px' }}>If you choose to pick up the cake, it must be collected at the agreed-upon time. Pick up at a later time may not be possible unless notified in advance.</li>
            <li style={{ marginBottom: '5px' }}>We will not be responsible for any damage or loss that occurs after the cake has been picked up/delivered.</li>
          </ul>

          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>4. Design and Customization</h2>
          <ul>
            <li style={{ marginBottom: '5px' }}>We will make every effort to create a custom cake that matches your requested design and specifications. However, please note that slight variations may occur due to the handmade nature of our products and the availability of certain ingredients or decorations.</li>
            <li style={{ marginBottom: '5px' }}>If specific design elements or decorations are crucial to your order, please provide detailed instructions and images during the order placement process.</li>
            <li style={{ marginBottom: '5px' }}>We reserve the right to exercise artistic license and make necessary adjustments to the design to ensure the structural integrity and overall quality of the cake.</li>
            <li style={{ marginBottom: '5px' }}>We reserve the right to use our creation on social media and for advertising purposes.</li>
          </ul>

          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>5. Allergies and Dietary Restrictions</h2>
          <ul>
            <li style={{ marginBottom: '5px' }}>While we take precautions to prevent cross-contamination, our custom cakes may contain allergens such as nuts, dairy, eggs, gluten, etc. Please inform us of any allergies or dietary restrictions at the time of placing the order.</li>
            <li style={{ marginBottom: '5px' }}>We cannot guarantee that our cakes are free from traces of allergens, as they are prepared in a home kitchen that handles various ingredients.</li>
          </ul>
        </div>
      </div>
      <MDBValidation isValidated>
        <MDBValidationItem className="mb-2 pb-1" invalid feedback="Agree to Terms of Service to Submit Order" style={{ textAlign: 'center', width: '100px', marginTop: '20px', marginLeft: '20px' }}>
          <MDBCheckbox label="I Agree" id="validationFormCheck1" required onClick={(e) => { document.getElementById("submitBtn").disabled = !e.target.checked }} style={{ display: 'inline-block', textAlign: 'left' }} />
        </MDBValidationItem>
        <MDBBtn type="submit" id="submitBtn" disabled>
          Submit form
        </MDBBtn>
      </MDBValidation>
    </>

  );
}