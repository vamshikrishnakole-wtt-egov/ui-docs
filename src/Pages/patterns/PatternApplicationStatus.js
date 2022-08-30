import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import ApplicationStatus from '../../assets/img/Patterns/ApplicationStatus.png'

const PatternApplicationStatus = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Application Status</Header>
      </div>
          <img src={ApplicationStatus} className=" pr-8  pb-8 w-1/2" alt="ApplicationStatus"></img>
          </div>
  );
  
};

export default PatternApplicationStatus;
