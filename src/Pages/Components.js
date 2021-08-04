import React from "react";
import ComponentsItem from "../Components/componentspage/ComponentsItem";
import Nabvar from "../Components/navbar/Nabvar";
import Sidebar from "../Components/sidebar/Sidebar";
import "../App.css";

const Components = () => {
  return (
    <>
      <Nabvar />
      <div className="components_page_main">
      <div className="sidebar">
      <Sidebar />
      </div>
      <div className="components_item">
      <ComponentsItem />
      </div>
      </div>
    </>
  );
};

export default Components;
