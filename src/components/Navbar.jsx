/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

import bookKoe from "../assets/bookoe-logo.png";
import { Link } from "react-router-dom";

import { Icon } from "@chakra-ui/icons";
import { Search2Icon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center w-full h-20 max-w-[1240px] mx-auto mb-8">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <img src={bookKoe} alt="" />
          </div>
          <div>
            <p className=" text-4xl ml-1">BooKoe</p>
            <p className=" ml-1">Rekomendasi Bukumu</p>
          </div>
        </div>
        <div className=" w-40">
          <ul className="flex w-full justify-between items-center">
            <li>
              <Link to="/"> All</Link>
            </li>
            <li>
              <Link to="latest">Latest</Link>
            </li>
            <li>
              <Link to="popular">Top Picks</Link>
            </li>
          </ul>
        </div>
        <div className="flex w-[450px] h-[50px] relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon as={Search2Icon} className="w-[20px] h-[20px]" />
          </span>
          <input
            type="text"
            placeholder="Search by title or author"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <button className="h-[50px] w-[135px] text-[#8170F2] font-medium text-center border-[#8170F2] border-2 rounded-[8px] ml-[16px]">
            Edit List
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
