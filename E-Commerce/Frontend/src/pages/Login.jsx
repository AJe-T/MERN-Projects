// import React from 'react'
import { useState } from "react";
import icon from "../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section id="login">
      {/* <pre>{JSON.stringify(data)}</pre> */}
      <div className="mx-auto container p-4">
        <div className="bg-white p-4 py-5 w-full max-w-sm mx-auto rounded-md shadow">
          <div className="w-20 h-20 mx-auto ">
            <img src={icon} alt="login icon" className="rounded-full" />
          </div>
          <form onSubmit={handelSubmit} className="pt-5 p-2">
            <div className="grid mb-2">
              <label className="py-1" htmlFor="email">
                Email :
              </label>
              <div className=" bg-slate-100 p-2  rounded">
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleOnChange}
                  value={data.email}
                  placeholder="enter email"
                  required={true}
                  className="h-full outline-none w-full  bg-transparent"
                />
              </div>
            </div>

            <div className="grid">
              <label className="py-1" htmlFor="password">
                password :
              </label>
              <div className=" bg-slate-100 p-2 flex items-center  rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  onChange={handleOnChange}
                  value={data.password}
                  placeholder="enter password"
                  required={true}
                  className="h-full outline-none w-full  bg-transparent"
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                >
                  <span>{showPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className=" block ml-auto mt-1 w-fit hover:underline hover:text-red-500"
              >
                Forgot Password
              </Link>
              <button className=" bg-red-500 rounded-full text-white px-6 py-2 w-full max-w-[150px] hover:bg-red-600 hover:scale-110 transition-all block mx-auto mt-6">
                Login
              </button>
            </div>
          </form>
          <p className="mt-3 ">
            {`Don't Have a account? `}
            <span>
              {" "}
              <Link to={"/signup"} className="text-red-500 hover:underline">
                Signup
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
