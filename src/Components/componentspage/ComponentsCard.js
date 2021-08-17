import React from "react";
import "../../App.css";
import Card from "../common/Card";
import { Link } from "react-router-dom";
import arrowSign from "../../assets/img/arrow.png";

const ComponentsCard = (props) => {
  return (
    <Card>
      <div className="px-4 py-8">
        <div className="pt-2">
          <img src={props.Image} alt="" style={{ width: "88px" }} />
        </div>
        <div>
          <h2 className="2xl:text-2xl lg:text-xl sm:text-base font-bold mt-2 mb-1">
            {props.heading}
          </h2>
          <p
            className="md:text-xs lg:text-sm 2xl:text-base"
            style={{ color: "#505A5F" }}
          >
            {props.para}
          </p>
          <Link
            to={props.linkpath ? props.linkpath : "#"}
            className="text-border xl:text-base md:text-sm sm:text-xs flex items-center"
          >
            {props.linkContent}{" "}
            <span>
              <img src={arrowSign} alt="->" className="w-4 pl-1" />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ComponentsCard;
