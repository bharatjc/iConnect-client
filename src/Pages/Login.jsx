import React, { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import {userInfo} from '../redux/Slices/userSlice' 

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`https://iconnect-server.onrender.com/api/login`, user)
    .then((res)=>{
      toast("Logged in successfully!");
      dispatch(userInfo(res.data))
    navigate("/");
    }).catch(err=>{
      console.log(err?.response?.data?.errors)
    })
  }

  return (
    <div className="flex items-center bg-[url('/assets/iconnectlogin.jpeg')] h-[100vh] w-full bg-cover">
      <div className="container flex flex-col justify-center items-center w-[85%] md:w-1/3 px-5 py-8 bg-transparent text-[14px] text-white">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full"
        >
          <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
          <p className="text-center mb-3">
            Please enter your login and password
          </p>
          <input
            type="text"
            className="w-full h-10 my-5 bg-transparent border-white border-2 rounded-md px-5 text-lg"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="w-full h-10 mb-1 bg-transparent border-white border-2 rounded-md px-5 text-lg"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <div className="w-full flex justify-end">
            <p className="italic mb-8">Forget password ?</p>
          </div>

          <button className="bg-transparent w-full h-10 border-green-500 border-2 rounded-md mb-3">
            Login
          </button>
          <button className="flex items-center justify-center bg-transparent w-full h-10 bg-black rounded-md mb-3">
            {" "}
            <FaGoogle className="text-red-500 mr-3 text-xl" /> Sign with google
          </button>
          <h2 className="italic">
            Not a member yet?{" "}
            <span className="text-blue-500">
              <Link to="/signup">Register!</Link>
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
}

export default Login;
