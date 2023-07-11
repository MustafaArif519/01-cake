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
    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };

    return (
        <>
      <MDBTabs pills className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
          Cake Order
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Other Treats Order
          </MDBTabsLink>
        </MDBTabsItem>
        
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
            <CakePage updateForm={updateForm} form={form} />
            </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
            <OtherTreatsPage updateForm={updateForm} form={form}/>
            </MDBTabsPane>
      </MDBTabsContent>
        </>

    );
}