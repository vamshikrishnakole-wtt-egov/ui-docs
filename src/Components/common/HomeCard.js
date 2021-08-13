import React from "react";
import { Link } from "react-router-dom";
import arrowSign from "../../assets/img/arrow.png";
import Card from "./Card";

const HomeCard = (props) => {
  return (
    <Card>
      <div className="flex items-start px-8 py-8">
        <div>
          <img src={props.brandLogo} alt={props.heading} />
        </div>
        <div className="w-full px-8">
          <h2 className="xl:text-2xl lg:text-xl md:text-sm  sm:text-xs font-bold ">
            {props.heading}
          </h2>
          <p className="2xl:text-lg lg:text-sm sm:text-xs">{props.text}</p>
          <Link
            to="#"
            className="text-border 2xl:text-lg lg:text-sm sm:text-xs flex items-center"
          >
            {props.linkContent}{" "}
            <span>
              <img src={arrowSign} alt="->" className="pl-2" />
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default HomeCard;
