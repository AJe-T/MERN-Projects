// import React from 'react'
import Logo from "./Logo";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="h-18 shadow-md bg-white">
        <div className="container mx-auto h-full flex items-center py-2 px-4 justify-between">
          <div className="">
            <Link to="/">
              <Logo w={180} h={50} />
            </Link>
          </div>
          {/* search */}
          <div className=" hidden lg:max-w-sm  md:flex items-center w-full justify-between max-w-xs border rounded-full focus-within:shadow-md pl-6">
            <input
              type="text"
              placeholder="search product here...."
              className="w-full outline-none "
            />
            <div className="min-w-[50px] hover:bg-red-600 bg-red-500 h-9 text-white flex items-center justify-center rounded-r-full">
              <RiSearch2Line className="text-2xl" />
            </div>
          </div>
          {/* user */}
          <div className="flex gap-4 items-center">
            <div className=" cursor-pointer">
              <HiOutlineUserCircle className="text-3xl" />
            </div>
            <div className=" cursor-pointer relative">
              <span>
                <BsCart2 className="text-3xl" />
              </span>
              <div className="bg-red-600 flex items-center justify-center text-white w-5 h-5 p-1 rounded-full absolute -top-2 -right-2 ">
                <p>0</p>
              </div>
            </div>
            {/* logout */}
            <Link
              to={"/login"}
              className="bg-red-500 px-3 py-2 rounded-md text-white hover:bg-red-600"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
