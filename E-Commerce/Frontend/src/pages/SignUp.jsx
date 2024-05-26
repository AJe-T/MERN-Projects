// import React from 'react'
import { useState } from "react";
import icon from "../assets/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { imageToBase64 } from "../helpers/imageToBase64";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
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

  const handelUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageToBase64(file);
    // console.log(imagePic);
    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <section id="SignUp">
      {/* <pre>{JSON.stringify(data)}</pre>  */}
      <div className="mx-auto container p-4">
        <div className="bg-white p-4  w-full max-w-sm mx-auto rounded-md shadow">
          <div className="w-20 h-20 mx-auto overflow-hidden relative rounded-full">
            <div>
              <img src={data.profilePic || icon} alt="SignUp icon" className="h-full object-cover absolute top-0 bottom-0 " />
            </div>
            <form>
              <label>
                <div className="text-sm bg-opacity-70 bg-slate-200 text-center absolute w-full pb-4 bottom-0 cursor-pointer">
                  Upload Pic
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handelUploadPic}
                />
              </label>
            </form>
          </div>
          <form onSubmit={handelSubmit} className="pt-5 p-2">
            <div className="grid mb-1">
              <label className="py-1 font-semibold" htmlFor="email">
                Name :
              </label>
              <div className=" bg-slate-100 p-2  rounded">
                <input
                  type="name"
                  name="name"
                  id="name"
                  onChange={handleOnChange}
                  value={data.name}
                  placeholder="enter your name"
                  required={true}
                  className="h-full outline-none w-full  bg-transparent"
                />
              </div>
            </div>
            <div className="grid mb-1">
              <label className="py-1 font-semibold" htmlFor="email">
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

            <div className="grid mb-1">
              <label className="py-1 font-semibold" htmlFor="password">
                Password :
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
            </div>
            <div className="grid">
              <label className="py-1 font-semibold" htmlFor="password">
                Confirm password :
              </label>
              <div className=" bg-slate-100 p-2 flex items-center  rounded">
                <input
                  type={confirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleOnChange}
                  value={data.confirmPassword}
                  placeholder="enter confirm password"
                  required={true}
                  className="h-full outline-none w-full  bg-transparent"
                />
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setConfirmPassword((prev) => !prev);
                  }}
                >
                  <span>{confirmPassword ? <FaEye /> : <FaEyeSlash />}</span>
                </div>
              </div>

              <button className=" bg-red-500  rounded-full text-white px-6 py-2 w-full max-w-[150px] hover:bg-red-600 hover:scale-110 transition-all block mx-auto mt-6">
                SignUp
              </button>
            </div>
          </form>
          <p className="mt-3 ">
            {`Already Have a account? `}
            <span>
              <Link to={"/login"} className="text-red-500 hover:underline">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
