import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import CitySelection from '../../assets/img/Patterns/CitySelection.png'

const isMobile = window.innerWidth < 768;
const PatternCitySelection = () => {
      return (
    <div className="md:w-5/6 w-full mb-60" style={isMobile ? {width: "300%"} : {}}>
      <div className="mb-8">
        <Header>City Selection</Header>
      </div>
          <img src={CitySelection} className={" pr-8  pb-8" + isMobile ? "" : "w-4/12"} alt="CitySelection" style={ isMobile ? {maxWidth: "40%"} : {}}></img>
          </div>
  );
  
};

export default PatternCitySelection;
