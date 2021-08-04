import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-banner_bg flex justify-center items-center">
      <ul className="w-1/2 h-auto flex justify-between items-center text-white">
        <li>
          <Link to="#">@Digitdesignsystem</Link>
        </li>
        <li>
          <Link to="#">@Digitdesignsystem</Link>
        </li>
        <li>
          <Link to="#">@Digitdesignsystem</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
