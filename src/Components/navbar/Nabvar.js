import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import logo from "../../assets/img/DIGIT.png";
import SearchIcon from "../../assets/img/search.png";
import MenuData from "./MenuItem";

const Nabvar = () => {
  return (
    <Container>
      <div className="w-full h-16 flex justify-between items-center">
        <div className="nabvar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {/* <ul className="w-8/12  flex justify-between"> */}
        {MenuData.map((data) => {
          return (
            <li key={data.id} className="flex justify-between items-center ">
              <Link
                to={data.link}
                className="text-nav text-lg font-normal"
              >
                {data.item}
              </Link>
            </li>
          );
        })}
        {/* </ul> */}
        <div className="flex items-center justify-center bg-gray-800">
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
                className="py-2 text-sm text-theme_color bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 placeholder-placeholder_color"
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Nabvar;
