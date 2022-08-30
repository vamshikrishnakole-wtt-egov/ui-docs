import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import LanguageSelection from '../../assets/img/Patterns/LanguageSelection.png'

const PatternLanguageSelection = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Language Selection</Header>
      </div>
          <img src={LanguageSelection} className=" pr-8  pb-8 w-4/12" alt="LanguageSelection"></img>
          </div>
  );
  
};

export default PatternLanguageSelection;
