import {
  ButtonSelector,
  Header,
  HeaderBar,
  PopUp,
  SectionalDropdown,
  Toast,
} from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";

const ToastMessage = () => {
  const [click, setClick] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="pb-2">
        <Header>Toast Message</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`<Toast label="success" /> `} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium voluptates quaerat officiis architecto
          nam repudiandae veniam in ipsam, repellendus accusantium cumque
          nostrum id officia aliquam dolore vitae expedita adipisci animi.
        </p>
      </div>
      <ButtonSelector label="success" onSubmit={() => setClick(true)} />
      <br />
      <br />
      <ButtonSelector label="Error" onSubmit={() => setClick(false)} />
      <div>
        <Toast label="Error" error={click ? false : true} />
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Guidelines</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Repudiandae delectus pariatur doloremque
          a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When not to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus inventore dolores excepturi fuga nemo
          nesciunt tempore commodi pariatur eaque tenetur, itaque error odio
          architecto quae quidem labore nobis, illum alias?. Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur
          doloremque a accusamus debitis.
        </p>
      </div>
      <div className="pb-2">
        <Header>Pop Up</Header>
      </div>
      <div className="pb-2">
      <ButtonSelector label="show PopUp" onSubmit={()=>setShowPopUp(!showPopUp)} />
      {
        showPopUp && <PopUp>
          <div className="popup-module">
            <HeaderBar
              main="This is Pop Up"
              end={<button onClick={()=>setShowPopUp(false)}>X</button>}
            />
            <div className="popup-module-main">
              <img src="https://via.placeholder.com/912x568" />
            </div>
          </div>
        </PopUp>
      }
      </div>
    </div>
  );
};

export default ToastMessage;
