import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useSelector} from 'react-redux'

function Header() {
 const [menu, setMenu] = useState(false)
//  const reduxUser = useSelector(store=>{
//   return store.user.value
//  }) 
 
//  console.log(reduxUser)
  return (
    <div className="h-[75px] w-full bg-zinc-950 opacity-90">
        <header>
          <div className="container text-sm md:text-[16px] flex py-1 px-5 md:px-0 w-full justify-between items-center text-white">
            <div className="hidden md:flex w-[30%] justify-between">
             <Link to="/">Home</Link> 
             <a href="">Explore Cafes</a> 
             <a href="">Offers</a> 
              </div>
            <div className="w-[30%]">
              <div className="text-zinc-100 text-center">
                <span className="text-2xl md:text-3xl font-bold">iConnect </span>
                <h2 className="text-[12px] md:text-[14px] text-yellow-500">Your Cafe, Your Connection</h2>
              </div>
            </div>
            <div className="hidden md:flex w-[30%] justify-between">
              <a href="">About us</a>
              <a href="">Contact</a>
              <Link to="/login">Login</Link>
            </div>
            
            <IoMdMenu className="text-4xl ml-40 md:hidden" onClick={()=>{setMenu(!menu)}}/>
            </div>
              {
                menu &&
                <div className="w-1/2 bg-black opacity-90 fixed top-0 right-0 h-full shadow-lg text-white">
                <ul className="py-10 px-5 text-[18px] flex flex-col gap-5">
                  <li className="flex justify-between items-center">Home <IoClose className="text-2xl" onClick={()=>{
                    setMenu(!menu)
                  }}/></li>
                  <hr />
                  <li>Explore Cafes</li>
                  <hr />
                  <li>Offers</li>
                  <hr />
                  <li>About us</li>
                  <hr />
                  <li>Contact</li>
                  <hr />
                  <li>Login</li>
                </ul>
              </div>
              }
        </header>
    </div>
  );
}

export default Header;
