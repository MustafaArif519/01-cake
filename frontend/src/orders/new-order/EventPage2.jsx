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


export default function EventPage2({ updateForm, form }) {
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

    const cursiveText = {
        fontFamily: 'Lucida Handwriting, cursive',
    };

    return (
        <>
            <MDBRow className="mb-3" >
                <h1 className="d-flex align-items-center justify-content-center" style={cursiveText}>
                    Event Information
                </h1>
            </MDBRow>

            <MDBRow className="mb-5">
                <MDBCol md="6" className="d-grid gap-3">


                    <div className="">
                        <h3 className="d-flex justify-content-start">Event Type</h3>


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

                        <MDBRadio
                            name='eventType'
                            id='flexRadioDefault5'
                            value="Other"
                            defaultChecked={form.eventType === 'Other'}
                            onChange={onChange}
                            required
                            label="Other"
                        />


                        {showOtherInput && (
                            <div style={{ maxWidth: "200px" }}>

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

                            </div>
                        )}
                    </div>
                </MDBCol>

                <MDBCol md="6" className="d-grid gap-3">

                    <div className='w-75'>
                        <MDBTextArea
                            value={form.eventDetails}
                            name='eventDetails'
                            onChange={onChange}
                            id='validationCustom05asdf'
                            required
                            label='Event Details'
                            rows={4} />
                    </div>

                    <div className='w-50'>
                        <MDBInput
                            value={form.eventDate}
                            name='eventDate'
                            onChange={onChange}
                            id='validationCustom05'
                            required
                            label='Event Date'

                        />

                    </div>
                </MDBCol>
            </MDBRow>

        </>

    );
}