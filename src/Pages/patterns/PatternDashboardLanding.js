import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import DashboardLanding from '../../assets/img/Patterns/DashboardLanding.png'

const PatternDashboardLanding = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>DashboardLanding</Header>
      </div>
          <img src={DashboardLanding} className=" pr-8  pb-8 w-4/5" alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternDashboardLanding;
