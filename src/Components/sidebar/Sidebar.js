import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {

  return (
    <ul className="pt-6">
      {SidebarItem.map((data) => {
        return (
          <li
            key={data.id}
            className="leading-normal py-6 pl-4 text-white"
          >
            <Link
              to={data.link}
              className="text-lg" 
            >
              {data.item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
