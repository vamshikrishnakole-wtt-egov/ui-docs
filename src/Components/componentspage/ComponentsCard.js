import React from "react";
import "../../App.css"
import Card from "../common/Card";

const ComponentsCard = (props) => {
  return (
    <Card>
          <div className="px-4 py-8">
            <div className="pt-2">
              <img src={props.Image} alt="" />
            </div>
            <div>
              <h2 className="2xl:text-2xl lg:text-xl sm:text-base font-bold mt-2 mb-1">{props.heading}</h2>
              <p className="md:text-xs lg:text-sm 2xl:text-base">{props.para}</p>
            </div>
          </div>
    </Card>
  );
};

export default ComponentsCard;
