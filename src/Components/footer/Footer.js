import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full sm:h-16 h-auto py-1 bg-banner_bg flex justify-center items-center">
      <ul className="sm:w-1/2 w-full h-auto py-2 flex sm:flex-row justify-between flex-col items-center text-white">
        <li className="py-1 sm:py-0">
          <Link to="#">@Digitdesignsystem</Link>
        </li>
        <li className="py-1 sm:py-0">
          <Link to="#">@Digitdesignsystem</Link>
        </li>
        <li className="py-1 sm:py-0">
          <Link to="#">@Digitdesignsystem</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
