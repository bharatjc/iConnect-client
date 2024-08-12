import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {

  const navigate = useNavigate()
  const [role, setRole] = useState("");

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    bAddress: "",
    bPhone: "",
    city: "",
    postalCode: "",
    cAddress: ""
  })

  function handleRoleChange(newRole){
    if(newRole=="customer"){
      const { businessName, bAddress, bPhone, ...customerDetails } = details;
    setDetails({
      ...customerDetails,
      role: "customer",
    });
    }
    else if(newRole == "business"){
      const { city, postalCode, cAddress, ...businessDetails } = details;
      setDetails({
        ...businessDetails,
        role: "business",
      });
    }
  }

function handleDetails(e){
  const {name, value} = e.target
    setDetails({...details,[name] : value})
}

  function handleSubmit(e){
    e.preventDefault()
    console.log({details})
    axios.post(`https://iconnect-server.onrender.com/api/signup`, details)
    .then((res)=>{
      toast("Signup successfully!")
      // console.log(res.data)
      navigate('/login')
    }).catch(err=>{
      console.log(err?.response?.data?.errors)
    })
    navigate('/login')
  }

  return (
    <div className="bg-stone-700">
      <div className="container h-full text-gray-100 py-20 flex justify-center">
        <div className="p-10 w-full rounded-lg flex justify-center bg-stone-500">
          <form onSubmit={handleSubmit} className="w-[95%] text-sm">
            <label htmlFor="firstName" className="font-bold text-lg">
              Name*
            </label>
            <div className="mb-4 flex flex-col md:flex-row justify-between items-center w-full">
              <div className="mb-2 md:mb-0 w-full md:w-[48%]">
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-200 mt-1 h-10 rounded-md w-full px-5 text-black"
                  name="firstName"
                  onChange={handleDetails}
                />
                <h2>first name</h2>
              </div>
              <div className="w-full md:w-[48%]">
                <input
                  type="text"
                  className="bg-gray-200 mt-1 h-10 rounded-md w-full px-5 text-black"
                  name="lastName"
                  onChange={handleDetails}
                />
                <h2>last name</h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full mb-4 md:w-[48%]">
                <label htmlFor="email" className="font-bold text-lg">
                  Email*
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-200 mt-1 w-full h-10 rounded-md px-5 text-black"
                  name="email"
                  onChange={handleDetails}
                />
              </div>

              <div className="w-full mb-4 md:w-[48%]">
                <label htmlFor="password" className="font-bold text-lg">
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-200 text-black mt-1 w-full h-10 rounded-md px-5"
                  name="password"
                  onChange={handleDetails}
                />
              </div>
            </div>

            <label htmlFor="role" className="font-bold text-lg">
              Role*
            </label>
            <div className="mt-1 mb-4 text-black">
              <select
                name="role"
                id="role"
                className="w-[70%] md:w-[48%] h-10 rounded-md px-3 text-[16px]"
                onChange={(e) => {
                  const newRole = e.target.value
                  setRole(newRole);
                  handleRoleChange(newRole)
                }
              }
              >
                <option value="">Select a role</option>
                <option value="customer">Customer</option>
                <option value="business">Business</option>
              </select>
            </div>

            {role == "business" && (
              <>
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-1 w-full md:w-[48%]">
                    <label htmlFor="businessName" className="font-bold text-lg">
                      Business Name*
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      className="bg-gray-200 mt-1 w-full h-10 rounded-md px-5 text-black"
                      name="businessName"
                      onChange={handleDetails}
                    />
                  </div>
                  <div className="mb-1 w-full md:w-[48%]">
                    <label
                      htmlFor="businessAddress"
                      className="font-bold text-lg"
                    >
                      Business address*
                    </label>
                    <input
                      type="text"
                      id="businessAddress"
                      className="bg-gray-200 mt-1 w-full h-10 rounded-md px-5 text-black"
                      name="bAddress"
                      onChange={handleDetails}
                    />
                  </div>
                </div>

                <div className="mb-1 w-full md:w-[48%]">
                  <label htmlFor="businessPhone" className="font-bold text-lg">
                    Business phone*
                  </label>
                  <input
                    type="text"
                    id="businessPhone"
                    className="bg-gray-200 mt-1 w-full h-10 rounded-md px-5 text-black"
                    name="bPhone"
                    onChange={handleDetails}
                  />
                </div>
              </>
            )}

            {role == "customer" && (
              <>
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-1 w-full md:w-[48%]">
                    <label htmlFor="cPhone" className="font-bold text-lg">
                      Customer's city*
                    </label>
                    <input
                      type="text"
                      id="cPhone"
                      className="bg-gray-200 mt-1 w-full h-10 rounded-md px-5 text-black"
                      name="city"
                      onChange={handleDetails}
                    />
                  </div>
                  <div className="mb-1 w-full md:w-[48%]">
                    <label htmlFor="postalCode" className="font-bold text-lg">
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      className="bg-gray-200 text-black mt-1 w-full h-10 rounded-md px-5"
                      name="postalCode"
                      onChange={handleDetails}
                    />
                  </div>
                </div>

                <div className="mb-1 w-full md:w-[48%]">
                  <label htmlFor="cAddress" className="font-bold text-lg">
                    Customer's address*
                  </label>
                  <input
                    type="text"
                    id="cAddress"
                    className="bg-gray-200 mt-1 w-full h-10 rounded-md px-5 text-black"
                    name="cAddress"
                    onChange={handleDetails}
                  />
                </div>
              </>
            )}

            <div className="mt-10 text-center">
              <h2 className="text-lg">
                Already a user ? <span className="text-green-500">
                  <Link to="/login">Login</Link></span>
              </h2>
              <button className="bg-green-500 px-8 py-3 rounded-md font-bold text-[16px] mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
