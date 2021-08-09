import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [active, setActive] = useState(null);
  const handleClick =(id)=>{
    setActive(id);
  }
  return (
    <ul className="pt-4">
      {SidebarItem.map((data) => {
        return (
          <li
            key={data.id}
            onClick={()=>handleClick(data.id)}
            className={`leading-normal py-4 pl-4 text-white ${active === data.id && "border-l-2 border-border"}`}
          >
            <Link
              to={data.linkpath}
              className={`text-lg ${active === data.id && "text-xl"}`}
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
