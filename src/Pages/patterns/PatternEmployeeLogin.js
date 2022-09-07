import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import EmployeeLogin from '../../assets/img/Patterns/EmployeeLogin.png'

const isMobile = window.innerWidth < 768;
const PatternEmployeeLogin = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "300%"} : {}}>
      <div className="mb-8">
        <Header>Employee Login</Header>
      </div>
          <img src={EmployeeLogin} className={" pr-8  pb-8" + isMobile ? "" : "w-4/5"} alt="ComingSoonImg" style={ isMobile ? {maxWidth: "41%"} : {}}></img>
          </div>
  );
  
};

export default PatternEmployeeLogin;