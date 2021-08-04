import React from "react";
import "../../App.css"

const ComponentsCard = (props) => {
  return (
    <div className="custom-shadow">
          <div className="px-4 py-8">
            <div className="pt-2">
              <img src={props.Image} alt="" className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-lg font-bold mt-2 mb-1">{props.heading}</h2>
              <p className="text-sm">{props.para}</p>
            </div>
          </div>
    </div>
  );
};

export default ComponentsCard;
