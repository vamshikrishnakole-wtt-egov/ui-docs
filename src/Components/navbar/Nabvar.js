import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import logo from "../../assets/img/DIGIT.png";
import SearchIcon from "../../assets/img/search.png";
import MenuData from "./MenuItem";
import "../../App.css"

const Nabvar = () => {
  const [active, setActive] = useState(null);
  
  return (
    <Container>
      <header className="w-full sm:flex justify-between items-center bg-white navbar_shadow hidden">
        <div className="nabvar-logo py-4">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* <ul className="w-8/12  flex justify-between"> */}
        {MenuData.map((data) => {
          return (
            <li key={data.id} className="lg:flex justify-between py-4 items-center hidden" onClick={()=>setActive(data.id)}>
              <Link
                to={data.link}
                className={`text-nav py-4 2xl:text-lg md:text-sm sm:text-xs font-normal ${active === data.id && "border-b-2 border-border"}`}
              >
                {data.item}
              </Link>
            </li>
          );
        })}
        {/* </ul> */}
        <div className="flex items-center justify-center">
          <form>
            <div className="relative text-gray-600 focus-within:text-gray-400 border border-border_color">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <img src={SearchIcon} alt="search" />
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="py-2 text-sm text-theme_color rounded-md pl-10 focus:outline-none focus:bg-white placeholder-placeholder_color"
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </header>
    </Container>
  );
};

export default Nabvar;
