import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import ComingSoon from '../../assets/img/Patterns/soon.png'

const isMobile = window.innerWidth < 768;
const ResourcesOne = () => {
  return (
    <div className="md:w-5/6 mb-60" style={isMobile ? {width: "200%"} : {}}>
      <div className="mb-4">
        <Header>Resources</Header>
      </div>
          <img src={ComingSoon} style={ isMobile ? {Width: "100%"} : {maxWidth: "50%"}} className={isMobile ? "pr-8 pt-8 pb-8 w-4/5 ml-16" : " pr-8 pt-8 pb-8 w-4/5 ml-48"} alt="ComingSoonImg"/>
          <h1 style={{textAlign:"center"}} className="sm:text-2xl font-bold">Coming Soon</h1>

      </div>
  );
};

export default ResourcesOne;
