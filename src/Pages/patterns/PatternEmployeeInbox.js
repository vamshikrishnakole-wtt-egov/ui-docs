import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import EmployeeInbox from '../../assets/img/Patterns/EmployeeInbox.png'

const isMobile = window.innerWidth < 768;
const PatternEmployeeInbox = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "300%"} : {}}>
      <div className="mb-8">
        <Header>Employee Inbox</Header>
      </div>
          <img src={EmployeeInbox} className={" pr-8  pb-8" + isMobile ? "w-58%" : "w-4/5"} alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternEmployeeInbox;
