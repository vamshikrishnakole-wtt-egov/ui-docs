import React from "react";
import TextInput from "../Components/componentspage/TextInput";
import Sidebar from "../Components/sidebar/Sidebar";

const ComponentsTextInput = () => {
  return (
    <div className="components_page_main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="components_item">
        <TextInput />
      </div>
    </div>
  );
};

export default ComponentsTextInput;
