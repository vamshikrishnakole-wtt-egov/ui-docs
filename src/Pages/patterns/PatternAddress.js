import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import Address from '../../assets/img/Patterns/Address.png'

const PatternAddress = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Address</Header>
      </div>
          <img src={Address} className=" pr-8  pb-8" alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternAddress;
