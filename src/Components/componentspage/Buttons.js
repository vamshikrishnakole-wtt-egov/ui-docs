import { BackButton, ButtonSelector, CustomButton, Header, LinkButton, } from "@egovernments/digit-ui-react-components";
import React from "react";


const Buttons = () => {
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="pb-2">
        <Header>Button</Header>
      </div>
      <div className="pb-4"> 
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs pb-2 lg:text-sm 2xl:text-base">
         {`<ButtonSelector theme="border" label="Button" />`} Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates quaerat officiis architecto nam repudiandae veniam in ipsam, repellendus accusantium cumque nostrum id officia aliquam dolore vitae expedita adipisci animi.
        </p>
      </div>
      <div className="pb-2">
      <Header>Button Selecter</Header>
      <ButtonSelector label="Button Selecter" />
      </div>
      <div className="pb-2">
        <Header>Back Button</Header>
        <BackButton>Back Button</BackButton>
      </div>
      <div className="my-4">
        <Header>Link Button</Header>
        <LinkButton label="This is Link Button" />
      </div>
      <div className="my-4">
        <Header>Custom Button</Header>
        <CustomButton text="Custom Button" ></CustomButton>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Guidelines</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-lg font-bold">When not to Apply</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          adipisicing elit. Quaerat, quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus inventore dolores excepturi fuga nemo nesciunt tempore commodi pariatur eaque tenetur, itaque error odio architecto quae quidem labore nobis, illum alias?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis.
        </p>
      </div>
    </div>
  );
};

export default Buttons;
