import React, { useState, useEffect, useRef } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import CakePage from "./CakePage"
import OtherTreatsPage from './OtherTreatsPage';
import './style.css';

export default function PasteryPage({ updateForm, form }) {
    const [basicActive, setBasicActive] = useState(form.pastery);


    const onChange = (tab) => {
      
      // console.log(form)
      

      setBasicActive(tab);
      form.pastery = tab;
  };
  


    return (
        <>
      <MDBTabs pills className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink

          onClick={() => onChange("cake")} 
          active={basicActive === 'cake'}>
          Cake Order
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink 

          onClick={() => onChange("treats")} 
          active={basicActive === 'treats'}>
            Other Treats Order
          </MDBTabsLink>
        </MDBTabsItem>
        
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'cake'}>
            <CakePage updateForm={updateForm} form={form} />
            </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'treats'}>
            <OtherTreatsPage updateForm={updateForm} form={form}/>
            </MDBTabsPane>
      </MDBTabsContent>
        </>

    );
}