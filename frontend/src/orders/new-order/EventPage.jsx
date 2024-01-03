import React, { useState, useEffect } from 'react';
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
  MDBRadio,
  MDBTextArea,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import './style.css';

export default function EventPage({ updateForm, form }) {
  //const [formValue, setFormValue] = useState(form);

  const [showOtherInput, setShowOtherInput] = useState(form.eventType === "Other");

  useEffect(() => {
    setShowOtherInput(form.eventType === "Other");
  }, [form.eventType])

  const onChange = (e) => {
    console.log(e.target.value);
    updateForm({ ...form, [e.target.name]: e.target.value });

    // setShowOtherInput(e.target.value === "Other")
  };



  return (
    <>
      <MDBRow className='mb-3'>
        <h1>Event Information</h1>
      </MDBRow>

      <MDBRow className='mb-3'>
        <MDBCol md="6">
          <MDBValidation isValidated>


            <div className="radio">
              <h3>Event Type</h3>


              <MDBRadio
                name='eventType'
                id='flexRadioDefault1'
                value="Wedding"
                defaultChecked={form.eventType === 'Wedding'}
                onChange={onChange}
                required
                label="Wedding"

              />
              <MDBRadio
                name='eventType'
                id='flexRadioDefault2'
                value="Aniversary"
                defaultChecked={form.eventType === 'Aniversary'}
                onChange={onChange}
                required
                label="Anniversary"

              />
              <MDBRadio
                name='eventType'
                id='flexRadioDefault3'
                value="Graduation"
                defaultChecked={form.eventType === 'Graduation'}
                onChange={onChange}
                required
                label="Graduation"

              />

              <MDBRadio
                name='eventType'
                id='flexRadioDefault4'
                value="Birthday"
                defaultChecked={form.eventType === 'Birthday'}
                onChange={onChange}
                required
                label="Birthday"
              />

              <MDBValidationItem invalid feedback='' >
                <MDBRadio
                  name='eventType'
                  id='flexRadioDefault5'
                  value="Other"
                  defaultChecked={form.eventType === 'Other'}
                  onChange={onChange}
                  required
                  label="Other"
                />
              </MDBValidationItem>

              {showOtherInput && (
                <div style={{ width: "200px" }}>
                  <MDBValidationItem invalid feedback='ex: Career Promotion' >
                    <div >
                      <MDBInput
                        value={form.eventTypeOther}
                        name='eventTypeOther'
                        onChange={onChange}
                        id='validationCustom99'
                        required
                        label='Other'
                      />
                    </div>
                  </MDBValidationItem>
                </div>
              )}
            </div>
          </MDBValidation>

        </MDBCol>
        <MDBCol md="6">
          <MDBValidationItem className='field' invalid feedback='ex: A graduation party celebrating 
                                                                my daughters highschool graduation.' >
            <div className="textInputWrapper">
            <MDBTextArea label='Message' id='textAreaExample' rows={4} />
              <MDBTextArea className=''
                value={form.eventDetails}
                name='eventDetails'
                onChange={onChange}
                id='validationCustom06'
                required
                label='Event Details (Optional)'
                // style={{ width: "300px", height: "200px", textAlign: "left" }}
              />
            </div>
          </MDBValidationItem>
        </MDBCol>
        

      </MDBRow>

      <MDBRow classname="mb-3">

      <MDBCol md="4">
      
          <MDBValidation isValidated >

            <MDBValidationItem className='field' invalid feedback='ex: 01/04/2020' >
              <div className="textInputWrapper">
                <MDBInput
                  value={form.eventDate}
                  name='eventDate'
                  onChange={onChange}
                  id='validationCustom05'
                  required
                  label='Event Date'
                  
                />
              </div>
            </MDBValidationItem>


          </MDBValidation>
        </MDBCol>
      </MDBRow>




    </>

  );
}