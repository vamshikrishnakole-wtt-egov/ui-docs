import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import Dashboard from '../../assets/img/Patterns/Dashboard.png'

const PatternDashboard = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Dashboard</Header>
      </div>
          <img src={Dashboard} className=" pr-8  pb-8 w-4/5" alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternDashboard;
