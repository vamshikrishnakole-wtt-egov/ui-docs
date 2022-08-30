import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import CollectFeedback from '../../assets/img/Patterns/CollectFeedback.png'

const PatternCollectFeedback = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Collect Feedback</Header>
      </div>
          <img src={CollectFeedback} className=" pr-8  pb-8 w-1/2" alt="CollectFeedback"></img>
          </div>
  );
  
};

export default PatternCollectFeedback;
