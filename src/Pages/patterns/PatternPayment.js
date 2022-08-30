import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import Payment from '../../assets/img/Patterns/Payment.png'

const PatternPayment = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Payment</Header>
      </div>
          <img src={Payment} className=" pr-8  pb-8 w-4/12" alt="Payment"></img>
          </div>
  );
  
};

export default PatternPayment;
