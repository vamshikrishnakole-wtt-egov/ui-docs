import React from "react";
import PatternsSidebar from "../sidebar/PatternsSidebar";

const PatternsPageItem = (props) => {
  return (
    <div className="w-full h-auto flex">
      <div style={{minHeight:"800px"}} className="md:w-60 px-2 md:px-0 h-auto bg-banner_bg">
        <PatternsSidebar />
      </div>
      <div className="components_item">{props.children}</div>
    </div>
  );
};

export default PatternsPageItem;
