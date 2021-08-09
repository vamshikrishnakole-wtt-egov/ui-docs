import React from "react";
import ComponentsItem from "../Components/componentspage/ComponentsItem";
import Sidebar from "../Components/sidebar/Sidebar";
import "../App.css";


const Components = () => {
  return (
      <div className="components_page_main">
      <div className="sidebar">
      <Sidebar />
      </div>
      <div className="components_item">
      <ComponentsItem />
      </div>
      </div>
  );
};

export default Components;
