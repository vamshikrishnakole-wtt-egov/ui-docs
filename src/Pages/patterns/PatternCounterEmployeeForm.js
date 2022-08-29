import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import CounterEmployeeForm from '../../assets/img/Patterns/CounterEmployeeForm.png'

const PatternCounterEmployeeForm = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Counter Employee Form</Header>
      </div>
          <img src={CounterEmployeeForm} className=" pr-8  pb-8 w-4/5 " alt="ComingSoonImg"></img>
          </div>
  );
  
};

export default PatternCounterEmployeeForm;
