import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import Report from '../../assets/img/Patterns/Report.png'

const isMobile = window.innerWidth < 768;
const PatternReport = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "125%"} : {}}>
      <div className="mb-8">
        <Header>Report</Header>
      </div>
          <img src={Report} className={" pr-8  pb-8" + isMobile ? "w-4/3" : "w-4/5"} alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternReport;
