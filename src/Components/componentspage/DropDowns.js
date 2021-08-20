import {
  Dropdown,
  Header,
  SectionalDropdown,
} from "@egovernments/digit-ui-react-components";
import React from "react";

const DropDowns = () => {
  // const cityData = [
  //   {
  //     city: "Lucknow",
  //   },
  //   {
  //     city: "Lucknow",
  //   },
  //   {
  //     city: "Lucknow",
  //   },
  // ];

 const cityData = [{heading:"head 1",options:[{city:"a"}]},{heading:"head 2",options:[{city:"b"}]}]
 
  const onSelectEmployee = () => {
    console.log("Hello");
  };
  return (
    <div className="md:w-5/6 w-full mb-60">
      <div className="mb-4">
        <Header>Drop Down</Header>
      </div>
      <div className="pb-4">
        <h2 className="sm:text-xl font-bold">Overview</h2>
        <p className="md:text-xs lg:text-sm 2xl:text-base">
          {`Lorem ipsum <DropDown /> dolor sit, amet consectetur adipisicing elit. Repudiandae delectus pariatur doloremque a accusamus debitis deleniti facilis ex non nobis neque quis sunt quam molestiae iusto molestias dignissimos, dolorem fugit.`}
        </p>
      </div>
      {/* <Dropdown option={cityData.map(data=>data.city)} optionKey="name" /> */}
      <div className="mb-4">
        <Header>Sectional DropDown</Header>
      </div>
      <div className="pb-4">
        <SectionalDropdown
          selected="selectedEmployee"
          menuData={cityData}
          displayKey="city"
          select={onSelectEmployee} 
        />
      </div>
    </div>
  );
};

export default DropDowns;
