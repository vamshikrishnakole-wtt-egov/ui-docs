import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import ComingSoon from '../../assets/img/Patterns/soon.png'

const ResourcesOne = () => {
  return (
      <div>
          <Header className="font-bold">Resources</Header>
          <img src={rectImg} alt="rectangleImg"></img>
          <img src={ComingSoon} alt="ComingSoonImg"></img>

      </div>
  )
};

export default ResourcesOne;
