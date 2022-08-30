import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import ApplicationSummary from '../../assets/img/Patterns/ApplicationSummary.png'

const PatternApplicationSummary = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Application Summary</Header>
      </div>
          <img src={ApplicationSummary} className=" pr-8  pb-8 w-4/12" alt="ApplicationSummary"></img>
          </div>
  );
  
};

export default PatternApplicationSummary;
