import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import EmployeeCollectPayment from '../../assets/img/Patterns/EmployeeCollectPayment.png'

const isMobile = window.innerWidth < 768;
const PatternEmployeeCollectPayment = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "300%"} : {}}>
      <div className="mb-8">
        <Header>Employee Collect Payment</Header>
      </div>
          <img src={EmployeeCollectPayment} className={" pr-8  pb-8" + isMobile ? "" : "w-4/5"} alt="ComingSoonImg" style={ isMobile ? {maxWidth: "40%"} : {maxWidth: "60%"}}></img>
          </div>
  );
  
};

export default PatternEmployeeCollectPayment;
