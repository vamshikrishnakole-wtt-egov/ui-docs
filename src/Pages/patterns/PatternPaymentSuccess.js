import React from 'react';
import rectImg from '../../assets/img/Patterns/rect.png'
import { Header } from "@egovernments/digit-ui-react-components";
import PaymentSuccess from '../../assets/img/Patterns/PaymentSuccess.png'

const PatternPaymentSuccess = () => {
      return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-8">
        <Header>Payment Success</Header>
      </div>
          <img src={PaymentSuccess} className=" pr-8  pb-8 w-4/12" alt="PaymentSuccess"></img>
          </div>
  );
  
};

export default PatternPaymentSuccess;
