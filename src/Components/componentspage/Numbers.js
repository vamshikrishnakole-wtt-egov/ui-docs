import { Header, Label, MobileNumber, OTPInput } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";

const Numbers = () => {
    // const [number, setNumber] = useState("");
    // const handleMobileNumber =(e)=>{
    //     setNumber(e.target.value)
    // }
    const [otp, setOtp] = useState("");
    const onOtpChange =(e)=>{
      console.log(e.target.value)
    }
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-4">
        <Header>Number</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <MobileNumber name="numebr" value={number} onChange={(e)=>handleMobileNumber(e)} /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      {/* <form>
          <Label>Number</Label>
          <MobileNumber name="numebr" value={number} onChange={handleMobileNumber} />
      </form> */}
      <div className="mb-4">
        <Header>OTP</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <Header>Header</Header> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      <form>
          <Label>Enter otp</Label>
          <OTPInput length={6} onChange={onOtpChange} value={otp} />
      </form>
    </div>
  );
};

export default Numbers;
