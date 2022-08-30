import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import MobileVerification from '../../assets/img/Patterns/MobileVerification.png';

const PatternMobileVerification = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Mobile Verification</Header>
      </div>
          <img src={MobileVerification} className=" pr-8  pb-8 w-4/5" alt="MobileVerification"></img>
          </div>
  );
  
};

export default PatternMobileVerification;
